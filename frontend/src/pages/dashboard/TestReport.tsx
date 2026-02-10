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
                    <span className="text-[16px] font-bold text-gray-800 leading-tight group-hover:text-primary-600 transition-colors uppercase">{label}</span>
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
        <div className="bg-[#f8fafc] min-h-screen p-4 md:p-6 font-sans">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <h2 className="text-xl md:text-2xl font-medium text-gray-800">
                    Test Report of {testData.name}
                </h2>
            </div>

            {/* Tabs - Refined Professional Look */}
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
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                        <h4 className="text-xl font-bold text-gray-800 mb-8 border-l-4 border-primary-500 pl-4">Overall Performance Summary</h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
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
                        <h4 className="text-lg font-bold text-gray-800 mb-6 border-l-4 border-primary-500 pl-4">Section-wise Performance</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {sections.map((section) => (
                                <div key={section.name} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <div className="bg-gray-50/50 px-4 py-3 border-b border-gray-100 flex justify-between items-center">
                                        <span className="font-bold text-gray-700 text-sm">{section.name}</span>
                                        <div className="flex items-center gap-1.5 text-[11px] text-gray-500">
                                            <i className="material-symbols-outlined text-[14px]">schedule</i>
                                            <span>{section.time}</span>
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
                </div>
            )}
        </div>
    );
};

export default TestReport;
