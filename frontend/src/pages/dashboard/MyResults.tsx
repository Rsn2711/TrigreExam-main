import React from "react";
import { useNavigate } from "react-router-dom";

const MyResults: React.FC = () => {
    const navigate = useNavigate();
    // Mock data matching your screenshot
    const testResults = [
        {
            id: 1,
            name: "Organic Reactions - 07-09-25",
            correct: 1,
            incorrect: 0,
            maxScore: 180,
            yourScore: 6,
            bonusMarks: "",
            percentage: "3.33%",
            rank: 373,
            totalRank: 780,
            accuracy: "100.00%",
            percentile: "25.15%",
            attempted: 1,
            totalQuestions: 54
        },
    ];

    return (
        <div className="bg-[#f4f7f6] min-h-screen p-4 md:p-6 font-sans antialiased">
            {/* Breadcrumb Header */}
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl md:text-2xl font-light text-[#444]">Overall Performance Report</h3>
            </div>

            {/* Performance Summary Section */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm mb-6 overflow-hidden">
                <div className="bg-[#fafafa] border-b border-gray-200 px-4 py-2">
                    <h5 className="font-bold text-[#333] text-[13px]">Performance Summary</h5>
                </div>
                <div className="p-4 flex justify-between items-center bg-white">
                    <span className="text-[#333] font-bold text-sm">Total Tests Attempted:</span>
                    <span className="text-[#333] text-sm mr-12">1</span>
                </div>
            </div>

            {/* Test wise Performance Summary Table Section */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                <div className="bg-[#fafafa] border-b border-gray-200 px-4 py-2">
                    <h5 className="font-bold text-[#333] text-[13px]">Test wise Performance Summary</h5>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-[#333] text-[13px] border-b border-gray-200">
                                <th className="px-4 py-3 font-bold w-10">#</th>
                                <th className="px-4 py-3 font-bold">Test</th>
                                <th className="px-4 py-3 font-bold">Correct</th>
                                <th className="px-4 py-3 font-bold">Incorrect</th>
                                <th className="px-4 py-3 font-bold">Max Score</th>
                                <th className="px-4 py-3 font-bold">Your Score</th>
                                <th className="px-4 py-3 font-bold">Bonus Marks</th>
                                <th className="px-4 py-3 font-bold">Per %</th>
                                <th className="px-4 py-3 font-bold">Rank</th>
                                <th className="px-4 py-3 font-bold">More</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {testResults.map((test, index) => (
                                <tr
                                    key={test.id}
                                    className="hover:bg-[#f9f9f9] transition-all duration-200 text-[13px] text-[#555] group cursor-pointer"
                                >
                                    <td className="px-4 py-3">{index + 1}</td>
                                    <td className="px-4 py-3 text-[#333]">{test.name}</td>
                                    <td className="px-4 py-3">{test.correct}</td>
                                    <td className="px-4 py-3">{test.incorrect}</td>
                                    <td className="px-4 py-3">{test.maxScore}</td>
                                    <td className="px-4 py-3">{test.yourScore}</td>
                                    <td className="px-4 py-3">{test.bonusMarks || ""}</td>
                                    <td className="px-4 py-3">{test.percentage}</td>
                                    <td className="px-4 py-3">{test.rank}</td>
                                    <td className="px-4 py-3">
                                        <button
                                            onClick={() => navigate("/dashboard/test-report", { state: { testData: test } })}
                                            className="bg-[#00a65a] hover:bg-[#008d4c] active:scale-95 text-white px-3 py-1.5 rounded-md text-[12px] font-medium transition-all shadow-sm"
                                        >
                                            Report
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyResults;