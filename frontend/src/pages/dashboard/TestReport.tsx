import React, { useState } from "react";
import { useLocation } from "react-router-dom";

interface SectionData {
    name: string;
    score: number;
    attempted: number;
    correct: number;
    incorrect: number;
    time: string;
}

interface TopperComparisonData {
    score: string;
    scoreRatio: number; // 0 to 1 for progress bar
    accuracy: string;
    accuracyRatio: number;
    correct: string;
    correctRatio: number;
    wrong: string;
    wrongRatio: number;
    time: string;
    timeRatio: number;
}

const CircularProgress: React.FC<{
    value: number;
    max: number;
    label: string;
    subLabel: string;
    color: string;
    size?: number;
}> = ({ value, max, label, subLabel, color, size = 120 }) => {
    const [progress, setProgress] = useState(value / max);
    const [isAnimating, setIsAnimating] = useState(true);
    const radius = (size - 20) / 2;
    const circumference = 2 * Math.PI * radius;

    const handleMouseEnter = () => {
        setIsAnimating(false);
        setProgress(0);
        setTimeout(() => {
            setIsAnimating(true);
            setProgress(value / max);
        }, 50);
    };

    const offset = circumference - progress * circumference;

    return (
        <div
            className="flex flex-col items-center cursor-help group"
            onMouseEnter={handleMouseEnter}
        >
            <div className="relative group-hover:scale-105 transition-transform duration-300" style={{ width: size, height: size }}>
                {/* Background Circle */}
                <svg className="w-full h-full transform -rotate-90">
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        stroke="#e5e7eb"
                        strokeWidth="10"
                        fill="transparent"
                    />
                    {/* Progress Circle */}
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        stroke={color}
                        strokeWidth="10"
                        fill="transparent"
                        strokeDasharray={circumference}
                        style={{
                            strokeDashoffset: isNaN(offset) ? circumference : offset,
                            transition: isAnimating ? "stroke-dashoffset 0.8s cubic-bezier(0.4, 0, 0.2, 1)" : "none",
                            strokeLinecap: "round"
                        }}
                    />
                </svg>
                {/* Center Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-[14px] md:text-[16px] font-bold text-gray-800 leading-tight group-hover:text-primary-600 transition-colors uppercase">{label}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color }}>{subLabel}</span>
                </div>
            </div>
            {/* Tooltip hint */}
            <span className="mt-2 text-[10px] text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">Hover to replay</span>
        </div>
    );
};

const TestReport: React.FC = () => {
    const location = useLocation();
    const testData = location.state?.testData || {
        name: "Class 11th JEE Advanced (Paper 01) - 07-09-25",
        yourScore: 6,
        maxScore: 180,
        rank: 373,
        totalRank: 780,
        percentage: "3.33%",
        attempted: 1,
        totalQuestions: 54,
        accuracy: "100.00%",
        percentile: "25.15%"
    };

    const [activeTab, setActiveTab] = useState("Score Overview");

    const tabs = ["Score Overview", "Question Wise", "Compare with Topper", "Solution"];

    const sections: SectionData[] = [
        { name: "Phy Sec A", score: 0, attempted: 0, correct: 0, incorrect: 0, time: "0.00 Mins." },
        { name: "Phy Sec B", score: 0, attempted: 0, correct: 0, incorrect: 0, time: "0.00 Mins." },
        { name: "Phy Sec C", score: 0, attempted: 0, correct: 0, incorrect: 0, time: "0.00 Mins." },
    ];

    return (
        <div className="bg-[#f8fafc] min-h-screen font-sans">
            {/* The Margin Wrapper:
                max-w-[1600px] centers content on ultra-wide screens.
                px-6 (mobile), px-16 (tablet), px-32 (desktop) adds the side margins.
            */}
            <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-32 py-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                    <h2 className="text-xl md:text-2xl font-medium text-gray-800">
                        Test Report of {testData.name}
                    </h2>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-2.5 rounded text-[13px] font-bold transition-all duration-200 shadow-sm ${activeTab === tab
                                ? "bg-blue-600 text-white"
                                : "bg-[#eee] text-[#444] hover:bg-[#e4e4e4]"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Score Overview Panel */}
                {activeTab === "Score Overview" && (
                    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-2 duration-500">

                        {/* Overall Performance Summary */}
                        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                            <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-8 border-l-4 border-blue-500 pl-4">
                                Overall Performance Summary
                            </h4>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
                                <CircularProgress
                                    value={testData.rank}
                                    max={testData.totalRank || 1000}
                                    label={`${testData.rank} / ${testData.totalRank || 780}`}
                                    subLabel="Rank"
                                    color="#f87171"
                                />
                                <CircularProgress
                                    value={testData.yourScore}
                                    max={testData.maxScore}
                                    label={`${testData.yourScore} / ${testData.maxScore}`}
                                    subLabel="Score"
                                    color="#2dd4bf"
                                />
                                <CircularProgress
                                    value={testData.attempted}
                                    max={testData.totalQuestions || 54}
                                    label={`${testData.attempted} / ${testData.totalQuestions || 54}`}
                                    subLabel="Attempted"
                                    color="#60a5fa"
                                />
                                <CircularProgress
                                    value={parseFloat(testData.accuracy)}
                                    max={100}
                                    label={testData.accuracy}
                                    subLabel="Accuracy"
                                    color="#f472b6"
                                />
                                <CircularProgress
                                    value={parseFloat(testData.percentile)}
                                    max={100}
                                    label={testData.percentile}
                                    subLabel="Percentile"
                                    color="#fbbf24"
                                />
                            </div>
                        </div>

                        {/* Section-wise Performance */}
                        <div>
                            <h4 className="text-lg font-bold text-gray-800 mb-6 border-l-4 border-blue-500 pl-4">
                                Section-wise Performance
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {sections.map((section) => (
                                    <div key={section.name} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                        <div className="bg-gray-50/50 px-4 py-3 border-b border-gray-100 flex justify-between items-center">
                                            <span className="font-bold text-gray-700 text-sm">{section.name}</span>
                                            <div className="flex items-center gap-1.5 text-[11px] text-gray-500">
                                                <span className="font-mono">{section.time}</span>
                                            </div>
                                        </div>
                                        <div className="p-5 space-y-4">
                                            {[
                                                { label: "Score :", value: section.score, color: "text-gray-900" },
                                                { label: "Attempted :", value: section.attempted, color: "text-gray-900" },
                                                { label: "Correct :", value: section.correct, color: "text-green-600" },
                                                { label: "Incorrect :", value: section.incorrect, color: "text-red-500" },
                                            ].map((item) => (
                                                <div key={item.label} className="flex justify-between items-center text-sm">
                                                    <span className="text-gray-500 font-medium">{item.label}</span>
                                                    <span className={`font-bold ${item.color}`}>{item.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Compare with Topper */}
                        <CompareWithTopper />

                        {/* Our Toppers */}
                        <OurToppers />
                    </div>
                )}

                {/* Question Wise Tab */}
                {activeTab === "Question Wise" && (
                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <QuestionWise totalQuestions={testData.totalQuestions || 54} />
                    </div>
                )}

                {/* Compare with Topper Tab */}
                {activeTab === "Compare with Topper" && (
                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <Leaderboard />
                    </div>
                )}

                {/* Solution Tab */}
                {activeTab === "Solution" && (
                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <Solutions totalQuestions={testData.totalQuestions || 54} />
                    </div>
                )}
            </div>
        </div>
    );
};

const CompareWithTopper: React.FC = () => {
    const [activeSection, setActiveSection] = useState("Overall");
    const sections = ["Overall", "Numerical Ability", "Verbal Ability", "Reasoning Ability"];

    const comparisonData: Record<string, { you: TopperComparisonData, topper: TopperComparisonData, avg: TopperComparisonData }> = {
        "Overall": {
            you: { score: "44 / 80", scoreRatio: 0.55, accuracy: "59.46%", accuracyRatio: 0.59, correct: "44 / 80", correctRatio: 0.55, wrong: "30 / 80", wrongRatio: 0.37, time: "114:20 / 120mins", timeRatio: 0.95 },
            topper: { score: "78 / 80", scoreRatio: 0.97, accuracy: "97.5%", accuracyRatio: 0.97, correct: "78 / 80", correctRatio: 0.97, wrong: "2 / 80", wrongRatio: 0.02, time: "77:16 / 120mins", timeRatio: 0.64 },
            avg: { score: "32.07 / 80", scoreRatio: 0.40, accuracy: "61.12%", accuracyRatio: 0.61, correct: "32 / 80", correctRatio: 0.40, wrong: "19 / 80", wrongRatio: 0.23, time: "63:35 / 120mins", timeRatio: 0.53 },
        }
    };

    const currentData = comparisonData[activeSection] || comparisonData["Overall"];

    return (
        <div className="mt-12">
            <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-display">Compare with topper</h4>

            {/* Internal Tabs */}
            <div className="flex flex-wrap gap-8 mb-4 border-b border-gray-100 pb-4">
                {sections.map(section => (
                    <button
                        key={section}
                        onClick={() => setActiveSection(section)}
                        className={`text-[15px] font-medium transition-all relative pb-4 ${activeSection === section
                            ? "text-blue-500"
                            : "text-gray-500 hover:text-gray-700"
                            }`}
                    >
                        {section}
                        {activeSection === section && (
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-full" />
                        )}
                    </button>
                ))}
            </div>

            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm overflow-x-auto">
                <table className="w-full min-w-[800px] border-collapse">
                    <thead>
                        <tr className="border-b border-gray-100">
                            <th className="py-6 px-6 bg-gray-50/30 w-[140px]"></th>
                            {["Score", "Accuracy", "Correct", "Wrong", "Time"].map(header => (
                                <th key={header} className="py-6 px-4 text-left text-gray-400 font-medium text-[13px] tracking-wide">{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {/* You Row */}
                        <tr className="border-b border-gray-100 group transition-colors hover:bg-gray-50/20">
                            <td className="py-8 px-6 font-bold text-gray-800 text-[16px] bg-gray-50/10">You</td>
                            <ComparisonCell data={currentData.you.score} ratio={currentData.you.scoreRatio} color="purple" />
                            <ComparisonCell data={currentData.you.accuracy} ratio={currentData.you.accuracyRatio} color="green" />
                            <ComparisonCell data={currentData.you.correct} ratio={currentData.you.correctRatio} color="green" />
                            <ComparisonCell data={currentData.you.wrong} ratio={currentData.you.wrongRatio} color="red" />
                            <ComparisonCell data={currentData.you.time} ratio={currentData.you.timeRatio} color="yellow" />
                        </tr>
                        {/* Topper Row */}
                        <tr className="border-b border-gray-100 group transition-colors hover:bg-gray-50/20">
                            <td className="py-8 px-6 font-bold text-gray-800 text-[16px] bg-gray-50/10">Topper</td>
                            <ComparisonCell data={currentData.topper.score} ratio={currentData.topper.scoreRatio} color="purple" isTopper />
                            <ComparisonCell data={currentData.topper.accuracy} ratio={currentData.topper.accuracyRatio} color="green" isTopper />
                            <ComparisonCell data={currentData.topper.correct} ratio={currentData.topper.correctRatio} color="green" isTopper />
                            <ComparisonCell data={currentData.topper.wrong} ratio={currentData.topper.wrongRatio} color="red" isTopper />
                            <ComparisonCell data={currentData.topper.time} ratio={currentData.topper.timeRatio} color="yellow" isTopper />
                        </tr>
                        {/* Avg Row */}
                        <tr className="group transition-colors hover:bg-gray-50/20">
                            <td className="py-8 px-6 font-bold text-gray-800 text-[16px] bg-gray-50/10">Avg</td>
                            <ComparisonCell data={currentData.avg.score} ratio={currentData.avg.scoreRatio} color="purple" />
                            <ComparisonCell data={currentData.avg.accuracy} ratio={currentData.avg.accuracyRatio} color="green" />
                            <ComparisonCell data={currentData.avg.correct} ratio={currentData.avg.correctRatio} color="green" />
                            <ComparisonCell data={currentData.avg.wrong} ratio={currentData.avg.wrongRatio} color="red" />
                            <ComparisonCell data={currentData.avg.time} ratio={currentData.avg.timeRatio} color="yellow" />
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const OurToppers: React.FC = () => {
    // ... (keep existing toppers data)
    const toppers = [
        { name: "Samridhi Talwar", rank: "AIR 1", exam: "Delhi Judicial 2024" },
        { name: "Ashish Tiwari", rank: "AIR 2", exam: "SSC CGL 2024" },
        { name: "Debesh Bairagi", rank: "AIR 4", exam: "SSC CGL 2024" },
        { name: "Ishant Shukla", rank: "AIR 8", exam: "SSC CGL 2024" },
        { name: "Rohit Chadhar", rank: "AIR 1", exam: "SSC CHSL 2024" },
        { name: "Sagardip Ghosh", rank: "AIR 3", exam: "SSC CHSL 2024" },
        { name: "Mohan Kumar", rank: "AIR 1", exam: "SSC JE (ME) 2023" },
        { name: "Sanket Paul", rank: "AIR 1", exam: "SSC JE (CE) 2023" },
    ];

    return (
        <div className="mt-20 mb-12">
            <div className="text-center mb-12">
                <h4 className="text-2xl md:text-3xl font-extrabold text-gray-900 flex items-center justify-center gap-3">
                    <span className="text-blue-500">Our</span> Toppers
                </h4>
                <div className="h-1 w-16 bg-blue-500 mx-auto mt-2 rounded-full opacity-30" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {toppers.map((topper, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-3xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-50 flex flex-col items-center group hover:shadow-[0_15px_50px_rgba(0,0,0,0.08)] transition-all duration-300 transform hover:-translate-y-1"
                    >
                        {/* ... (keep existing card content) ... */}
                        <div className="relative mb-6">
                            <div className="absolute -inset-4 pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity">
                                <div className="absolute top-2 -left-2 w-2 h-2 rounded-full bg-blue-300" />
                                <div className="absolute bottom-4 -right-1 w-1.5 h-1.5 rounded-full bg-yellow-400" />
                                <div className="absolute top-8 -right-3 w-3 h-1 bg-yellow-400 rounded-full rotate-45" />
                                <div className="absolute -bottom-1 left-4 w-3 h-1 bg-purple-400 rounded-full -rotate-12" />
                            </div>

                            <div className="w-24 h-24 rounded-full border-4 border-yellow-400/80 p-1 bg-white relative z-10">
                                <div className="w-full h-full rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-300 overflow-hidden">
                                    <i className="material-symbols-outlined !text-[70px]">account_circle</i>
                                </div>
                                <div className="absolute -top-1 -right-1 w-7 h-7 bg-yellow-400 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                                    <i className="material-symbols-outlined !text-[16px] text-white">grade</i>
                                </div>
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <div className="flex gap-0.5 items-end h-3">
                                        <div className="w-1 bg-yellow-400 h-1.5 rounded-t-sm" />
                                        <div className="w-1 bg-yellow-400 h-3 rounded-t-sm" />
                                        <div className="w-1 bg-yellow-400 h-2 rounded-t-sm" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h5 className="text-[17px] font-bold text-gray-800 mb-1.5 text-center group-hover:text-blue-600 transition-colors">{topper.name}</h5>
                        <div className="flex flex-col items-center gap-0.5">
                            <span className="text-[13px] font-extrabold text-green-600 uppercase tracking-wide">{topper.rank}</span>
                            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-tighter">| {topper.exam}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const QuestionWise: React.FC<{ totalQuestions: number }> = ({ totalQuestions }) => {
    // Generate demo data for 54 questions
    const questionData = Array.from({ length: totalQuestions }, (_, i) => ({
        id: i + 1,
        correctAns: ["a", "b", "c", "d"][Math.floor(Math.random() * 4)],
        yourAns: i === 18 || i === 25 ? ["a", "b", "c", "d"][Math.floor(Math.random() * 4)] : "",
        timeTaken: i === 25 ? 21 : (i === 18 ? 1 : 0),
        status: i === 25 ? "Correct" : (i === 18 ? "Unattempted" : "Unseen")
    }));

    return (
        <div className="space-y-8">
            {/* Time Analytics Chart */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm overflow-x-auto">
                <h5 className="text-[13px] font-bold text-[#333] mb-8 bg-gray-50/50 -m-6 p-4 border-b border-gray-100">Time Taken Per Question</h5>
                <div className="min-w-[800px] h-[300px] relative mt-10">
                    <div className="absolute left-0 inset-y-0 w-10 flex flex-col justify-between text-[11px] text-gray-400 pb-6 border-r border-gray-100">
                        {[22, 20, 18, 16, 14, 12, 10, 8, 6, 4, 2, 0].map(val => (
                            <span key={val}>{val}</span>
                        ))}
                    </div>
                    <div className="ml-12 h-full flex items-end gap-[2px] border-b border-gray-100">
                        {questionData.map(q => (
                            <div key={q.id} className="flex-1 group relative flex flex-col items-center">
                                <div
                                    className="w-full bg-blue-600 rounded-t-[1px] transition-all duration-500 hover:bg-blue-400"
                                    style={{ height: `${(q.timeTaken / 22) * 100}%` }}
                                >
                                    {q.timeTaken > 0 && (
                                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap z-20">
                                            {q.timeTaken}s
                                        </div>
                                    )}
                                </div>
                                <span className="absolute -bottom-6 text-[9px] text-gray-400">{q.id}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Question Details Table */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50/50 text-[#333] text-[13px] border-b border-gray-100">
                                <th className="px-4 py-3 font-bold border-r border-gray-100">Q. No.</th>
                                <th className="px-4 py-3 font-bold border-r border-gray-100">Correct Ans</th>
                                <th className="px-4 py-3 font-bold border-r border-gray-100">Your Ans</th>
                                <th className="px-4 py-3 font-bold border-r border-gray-100">Time Takes(Sec.)</th>
                                <th className="px-4 py-3 font-bold">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {questionData.map(q => (
                                <tr key={q.id} className="text-[13px] text-gray-600 hover:bg-gray-50/30 transition-colors">
                                    <td className="px-4 py-3 font-medium border-r border-gray-50">{q.id}</td>
                                    <td className="px-4 py-3 border-r border-gray-50">{q.correctAns}</td>
                                    <td className="px-4 py-3 border-r border-gray-50">{q.yourAns || "-"}</td>
                                    <td className="px-4 py-3 border-r border-gray-50">{q.timeTaken}</td>
                                    <td className={`px-4 py-3 font-medium ${q.status === 'Correct' ? 'text-green-600' :
                                        q.status === 'Incorrect' ? 'text-red-500' : 'text-gray-400'
                                        }`}>{q.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

const Leaderboard: React.FC = () => {
    const leaderboardData = [
        { name: "NAVEEN BHAKAR", correct: 54, incorrect: 0, score: 180, per: "100.00%", rank: 1 },
        { name: "Shivani", correct: 53, incorrect: 1, score: 177, per: "98.33%", rank: 2 },
        { name: "Rishabh singh Baghel", correct: 52, incorrect: 2, score: 175, per: "97.22%", rank: 3 },
        { name: "SUM17", correct: 49, incorrect: 2, score: 164, per: "91.11%", rank: 4 },
        { name: "Prashant deo", correct: 48, incorrect: 5, score: 160, per: "88.89%", rank: 5 },
        { name: "Viren", correct: 48, incorrect: 6, score: 149, per: "82.78%", rank: 6 },
        { name: "Anil Garg", correct: 43, incorrect: 4, score: 141, per: "78.33%", rank: 7 },
        { name: "Shaurya Patel", correct: 44, incorrect: 9, score: 138, per: "76.67%", rank: 8 },
        { name: "Himanshu", correct: 43, incorrect: 6, score: 131, per: "72.78%", rank: 9 },
        { name: "Ayush", correct: 38, incorrect: 1, score: 128, per: "71.11%", rank: 10 },
        { name: "Vishal Saxena", correct: 42, incorrect: 12, score: 127, per: "70.56%", rank: 11 },
        { name: "AVIRAL JAIN", correct: 43, incorrect: 4, score: 125, per: "69.44%", rank: 12 },
        { name: "Dhruv gupta", correct: 39, incorrect: 7, score: 122, per: "67.78%", rank: 13 },
    ];

    return (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50/50 text-[#333] text-[13px] border-b border-gray-100">
                            <th className="px-6 py-4 font-bold">Student Name</th>
                            <th className="px-4 py-4 font-bold text-center">Correct</th>
                            <th className="px-4 py-4 font-bold text-center">InCorrect</th>
                            <th className="px-4 py-4 font-bold text-center">Score</th>
                            <th className="px-4 py-4 font-bold text-center">Per%</th>
                            <th className="px-4 py-4 font-bold text-center">Rank</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {leaderboardData.map((student, idx) => (
                            <tr key={idx} className="text-[13px] text-gray-700 hover:bg-gray-50/30 transition-colors">
                                <td className="px-6 py-3.5 font-medium uppercase">{student.name}</td>
                                <td className="px-4 py-3.5 text-center">{student.correct}</td>
                                <td className="px-4 py-3.5 text-center">{student.incorrect}</td>
                                <td className="px-4 py-3.5 text-center font-bold">{student.score}</td>
                                <td className="px-4 py-3.5 text-center">{student.per}</td>
                                <td className="px-4 py-3.5 text-center font-bold text-blue-600">{student.rank}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};


const Solutions: React.FC<{ totalQuestions: number }> = ({ totalQuestions }) => {
    // Generate demo solution data for 54 questions
    const solutionData = Array.from({ length: totalQuestions }, (_, i) => ({
        id: i + 1,
        question: `What is the expected product when ${i % 2 === 0 ? 'an aldehyde' : 'a ketone'} reacts with ${i % 3 === 0 ? 'Grignard reagent' : 'an alcohol'} followed by acid hydrolysis in the organic synthesis process?`,
        correctOption: ["a", "b", "c", "d"][Math.floor(Math.random() * 4)],
        explanation: `The reaction involves a nucleophilic attack on the carbonyl carbon by the R- group of the Grignard reagent, forming an alkoxide intermediate. Upon acid hydrolysis, this intermediate picks up a proton to yield a ${i % 2 === 0 ? 'secondary' : 'tertiary'} alcohol. This is a fundamental C-C bond-forming reaction in organic chemistry.`
    }));

    return (
        <div className="space-y-6 max-w-5xl mx-auto">
            {solutionData.map((sol) => (
                <div key={sol.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group hover:border-blue-200 transition-all duration-300">
                    <div className="bg-gray-50/50 px-6 py-4 border-b border-gray-100 flex justify-between items-center group-hover:bg-blue-50/30 transition-colors">
                        <h5 className="font-bold text-gray-800 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center text-sm shadow-sm">Q{sol.id}</span>
                            Question Detail
                        </h5>
                        <div className="flex items-center gap-2">
                            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Correct Answer:</span>
                            <span className="w-7 h-7 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-sm border border-green-200 uppercase">{sol.correctOption}</span>
                        </div>
                    </div>
                    <div className="p-6 md:p-8 space-y-6">
                        <div className="space-y-3">
                            <p className="text-gray-700 text-[15px] leading-relaxed font-medium">
                                {sol.question}
                            </p>
                        </div>

                        <div className="bg-blue-50/50 rounded-xl p-5 border border-blue-100/50">
                            <h6 className="text-[12px] font-extrabold text-blue-600 uppercase tracking-wider mb-3 flex items-center gap-2">
                                <i className="material-symbols-outlined !text-[16px]">info</i>
                                Detailed Explanation
                            </h6>
                            <p className="text-gray-600 text-[14px] leading-loose">
                                {sol.explanation}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const ComparisonCell: React.FC<{ data: string, ratio: number, color: string, isTopper?: boolean }> = ({ data, ratio, color, isTopper }) => {
    const colorMap: Record<string, string> = {
        purple: isTopper ? "bg-purple-100/60 border-purple-500" : "bg-purple-100/40 border-purple-400",
        green: isTopper ? "bg-green-50/70 border-green-500" : "bg-green-50/40 border-green-400",
        red: isTopper ? "bg-red-50/70 border-red-500" : "bg-red-50/40 border-red-400",
        yellow: isTopper ? "bg-yellow-50/70 border-yellow-500" : "bg-yellow-50/40 border-yellow-400"
    };

    const [val, max] = data.includes("/") ? data.split("/").map(s => s.trim()) : [data, ""];

    return (
        <td className="py-4 px-4 border-r border-gray-50 last:border-r-0 relative min-w-[160px]">
            {/* Background progress */}
            <div
                className={`absolute inset-y-2 left-0 pointer-events-none transition-all duration-1000 ease-out border-r-[3px] ${colorMap[color]}`}
                style={{ width: `${ratio * 100}%` }}
            />
            {/* Text content */}
            <div className="relative z-10 font-bold text-[15px] text-gray-900">
                {val}
                {max && <span className="text-gray-300 font-normal ml-1">/ {max}</span>}
            </div>
        </td>
    );
};

export default TestReport;