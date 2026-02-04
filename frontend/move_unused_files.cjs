const fs = require('fs');
const path = require('path');

const REPORT_FILE = 'unused_report.json';
const BACKUP_DIR = '__unused_backup__';
const EXCLUDE_FILES = ['vite-env.d.ts', 'react-app-env.d.ts'];

function moveFiles() {
    if (!fs.existsSync(REPORT_FILE)) {
        console.error(`Report file ${REPORT_FILE} not found.`);
        return;
    }

    // Read report - handle encoding if needed, but JSON.parse handles standard UTF8
    let report;
    try {
        let content = fs.readFileSync(REPORT_FILE, 'utf-8');
        // Strip BOM if present
        if (content.charCodeAt(0) === 0xFEFF) {
            content = content.slice(1);
        }
        report = JSON.parse(content);
    } catch (e) {
        console.error('Error reading report:', e);
        return;
    }

    const { unusedFiles } = report;
    if (!unusedFiles || unusedFiles.length === 0) {
        console.log('No unused files to move.');
        return;
    }

    // Create backup root
    if (!fs.existsSync(BACKUP_DIR)) {
        fs.mkdirSync(BACKUP_DIR);
    }

    let movedCount = 0;

    // Determine project root (assuming script runs in frontend/)
    const projectRoot = __dirname;

    unusedFiles.forEach(absPath => {
        const fileName = path.basename(absPath);

        // Safety check
        if (EXCLUDE_FILES.includes(fileName)) {
            console.log(`Skipping excluded file: ${fileName}`);
            return;
        }

        // Calculate relative path to preserve structure
        // absPath: D:\TrigreExam-main\frontend\src\components\Foo.tsx
        // projectRoot: D:\TrigreExam-main\frontend
        // relPath: src\components\Foo.tsx
        let relPath = path.relative(projectRoot, absPath);

        // If file is outside root, skip or handle (shouldn't happen with src scan)
        if (relPath.startsWith('..')) {
            console.warn(`Skipping file outside project root: ${absPath}`);
            return;
        }

        const destPath = path.join(BACKUP_DIR, relPath);
        const destDir = path.dirname(destPath);

        try {
            // Ensure destination dir exists
            if (!fs.existsSync(destDir)) {
                fs.mkdirSync(destDir, { recursive: true });
            }

            // Move file
            fs.renameSync(absPath, destPath);
            movedCount++;
        } catch (err) {
            console.error(`Failed to move ${absPath}:`, err.message);
        }
    });

    console.log(`Successfully moved ${movedCount} files to ${BACKUP_DIR}`);

    // Start removing empty directories
    cleanEmptyFolders(path.join(projectRoot, 'src'));
}

function cleanEmptyFolders(folder) {
    if (!fs.existsSync(folder)) return;

    let isDir = fs.statSync(folder).isDirectory();
    if (!isDir) return;

    let files = fs.readdirSync(folder);
    if (files.length > 0) {
        files.forEach(function (file) {
            let fullPath = path.join(folder, file);
            cleanEmptyFolders(fullPath);
        });

        // Re-read files after cleaning children
        files = fs.readdirSync(folder);
    }

    if (files.length === 0) {
        // Do not delete 'src' itself
        if (!folder.endsWith('src')) {
            console.log(`Removing empty folder: ${folder}`);
            fs.rmdirSync(folder);
        }
    }
}

moveFiles();
