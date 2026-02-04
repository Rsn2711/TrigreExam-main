const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(__dirname, 'src');
const ENTRY_POINTS = ['src/main.tsx', 'src/App.tsx', 'src/index.css']; // Add other global CSS or entry points if needed

// Extensions to scan for imports and existence
const EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx', '.css', '.scss', '.svg', '.png', '.jpg', '.jpeg', '.json'];

// Helper to get all files recursively
function getAllFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            getAllFiles(filePath, fileList);
        } else {
            if (EXTENSIONS.includes(path.extname(file))) {
                fileList.push(filePath);
            }
        }
    });
    return fileList;
}

// Helper to extract imports from content
function getImports(content, filePath) {
    const imports = [];
    // Regex for import from ...
    const importRegex = /import\s+(?:[\w\s{},*]*\s+from\s+)?['"](.*?)['"]/g;
    // Regex for require(...)
    const requireRegex = /require\(['"](.*?)['"]\)/g;
    // Regex for dynamic import(...)
    const dynamicImportRegex = /import\(['"](.*?)['"]\)/g;
    // Regex for CSS imports @import ...
    const cssImportRegex = /@import\s+['"](.*?)['"]/g;
    // Regex for url(...) in CSS
    const urlRegex = /url\(['"]?(.*?)['"]?\)/g;

    let match;
    while ((match = importRegex.exec(content)) !== null) imports.push(match[1]);
    while ((match = requireRegex.exec(content)) !== null) imports.push(match[1]);
    while ((match = dynamicImportRegex.exec(content)) !== null) imports.push(match[1]);
    while ((match = cssImportRegex.exec(content)) !== null) imports.push(match[1]);
    while ((match = urlRegex.exec(content)) !== null) imports.push(match[1]);

    return imports;
}

// Resolve import path to absolute path
function resolvePath(importPath, currentFile) {
    const dir = path.dirname(currentFile);

    // Handle absolute imports (if any, though usually configured with @/)
    // Assuming no aliases for now based on exploration, but adding basic check
    if (importPath.startsWith('@/')) {
        // Warning: This implies alias config, assuming @ maps to src
        return path.join(__dirname, 'src', importPath.slice(2));
    }

    if (importPath.startsWith('.')) {
        let resolved = path.resolve(dir, importPath);

        // Try exact match
        if (fs.existsSync(resolved) && fs.statSync(resolved).isFile()) return resolved;

        // Try extensions
        for (const ext of EXTENSIONS) {
            if (fs.existsSync(resolved + ext)) return resolved + ext;
        }

        // Try directory index
        if (fs.existsSync(resolved) && fs.statSync(resolved).isDirectory()) {
            for (const ext of EXTENSIONS) {
                const indexFile = path.join(resolved, 'index' + ext);
                if (fs.existsSync(indexFile)) return indexFile;
            }
        }
    } else {
        // Node_modules or other non-relative imports - ignore for file usage check
        return null;
    }
    return null;
}

function main() {
    const allFiles = getAllFiles(SRC_DIR);
    const reachable = new Set();
    const queue = [];

    // Initialize queue with entry points
    ENTRY_POINTS.forEach(entry => {
        const absEntry = path.join(__dirname, entry);
        if (fs.existsSync(absEntry)) {
            reachable.add(absEntry.toLowerCase()); // Normalize to lowercase for windows case-insensitivity
            queue.push(absEntry);
        }
    });

    while (queue.length > 0) {
        const currentFile = queue.shift();

        // Skip binary files for reading text content (simple check by extension)
        const ext = path.extname(currentFile);
        if (['.png', '.jpg', '.jpeg', '.svg'].includes(ext)) continue;

        try {
            const content = fs.readFileSync(currentFile, 'utf-8');
            const imports = getImports(content, currentFile);

            imports.forEach(imp => {
                const resolved = resolvePath(imp, currentFile);
                if (resolved && !reachable.has(resolved.toLowerCase())) {
                    reachable.add(resolved.toLowerCase());
                    queue.push(resolved);
                }
            });
        } catch (e) {
            console.error(`Error reading ${currentFile}:`, e.message);
        }
    }

    // Determine unused files
    const unused = allFiles.filter(file => !reachable.has(file.toLowerCase()));

    console.log(JSON.stringify({
        totalFiles: allFiles.length,
        reachableFiles: reachable.size,
        unusedFiles: unused
    }, null, 2));
}

main();
