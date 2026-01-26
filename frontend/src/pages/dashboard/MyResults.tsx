
import React from "react";
import ApexCharts from "react-apexcharts";
import { type ApexOptions } from "apexcharts";

const MyResults: React.FC = () => {
    // Chart Series and Options
    const series = [
        {
            name: "Score",
            data: [120, 132, 101, 134, 140, 150],
        },
    ];

    const options: ApexOptions = {
        chart: {
            type: "area",
            height: 350,
            toolbar: {
                show: false,
            },
        },
        colors: ["#605DFF"],
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 90, 100],
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
            width: 2,
        },
        xaxis: {
            categories: ["Test 1", "Test 2", "Test 3", "Test 4", "Test 5", "Test 6"],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            labels: {
                style: {
                    colors: "#64748B",
                    fontSize: "12px",
                },
            },
        },
        yaxis: {
            labels: {
                style: {
                    colors: "#64748B",
                    fontSize: "12px",
                },
            },
        },
        grid: {
            borderColor: "#F1F5F9",
            strokeDashArray: 4,
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + " points";
                },
            },
        },
    };

    return (
        <>
            <div className="mb-[25px]">
                <h2 className="text-xl font-bold text-black dark:text-white mb-2">
                    Performance Analytics
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                    Analyze your test scores and track your improvement.
                </p>
            </div>

            {/* AI Insight */}
            <div className="trezo-card bg-[#F5F7FF] dark:bg-[#15203c] border border-primary-200 dark:border-primary-800 p-[20px] md:p-[25px] rounded-md mb-[25px]">
                <div className="flex items-start">
                    <div className="bg-white dark:bg-[#0c1427] text-primary-500 w-[50px] h-[50px] rounded-lg flex items-center justify-center shadow-sm shrink-0 ltr:mr-[20px] rtl:ml-[20px]">
                        <i className="material-symbols-outlined text-[24px]">auto_awesome</i>
                    </div>
                    <div>
                        <h5 className="font-bold text-black dark:text-white mb-[8px]">
                            AI Performance Insight
                        </h5>
                        <p className="text-gray-600 dark:text-gray-400 mb-[15px]">
                            You're demonstrating strong consistency in <strong>Quantitative Aptitude</strong> but spending 15% more time than average on <strong>Reasoning</strong>. Consider taking standard time-bound drills to improve speed.
                        </p>
                        <div className="flex items-center gap-4 text-sm font-medium">
                            <span className="text-success-600 flex items-center">
                                <i className="material-symbols-outlined text-[18px] ltr:mr-1 rtl:ml-1">trending_up</i>
                                +12% Efficiency
                            </span>
                            <a href="#" className="text-primary-600 hover:underline">
                                View Detailed Report →
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[25px] mb-[25px]">
                {/* Card 1 */}
                <div className="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md flex items-center">
                    <div className="w-[60px] h-[60px] rounded-full bg-success-50 text-success-500 flex items-center justify-center text-3xl ltr:mr-[20px] rtl:ml-[20px]">
                        <i className="material-symbols-outlined">target</i>
                    </div>
                    <div>
                        <span className="block text-gray-500 dark:text-gray-400 mb-1">Overall Accuracy</span>
                        <h4 className="text-2xl font-bold text-black dark:text-white mb-0">78.5%</h4>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md flex items-center">
                    <div className="w-[60px] h-[60px] rounded-full bg-danger-50 text-danger-500 flex items-center justify-center text-3xl ltr:mr-[20px] rtl:ml-[20px]">
                        <i className="material-symbols-outlined">award_star</i>
                    </div>
                    <div>
                        <span className="block text-gray-500 dark:text-gray-400 mb-1">Tests Completed</span>
                        <h4 className="text-2xl font-bold text-black dark:text-white mb-0">142</h4>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md flex items-center">
                    <div className="w-[60px] h-[60px] rounded-full bg-warning-50 text-warning-500 flex items-center justify-center text-3xl ltr:mr-[20px] rtl:ml-[20px]">
                        <i className="material-symbols-outlined">bolt</i>
                    </div>
                    <div>
                        <span className="block text-gray-500 dark:text-gray-400 mb-1">Avg. Percentile</span>
                        <h4 className="text-2xl font-bold text-black dark:text-white mb-0">89.2</h4>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[25px]">
                {/* Score Performance Chart */}
                <div className="lg:col-span-2 trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
                    <div className="flex items-center justify-between mb-[20px]">
                        <h5 className="mb-0 font-bold text-black dark:text-white">Score Performance</h5>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <span className="w-2 h-2 rounded-full bg-primary-500 block"></span> Score
                        </div>
                    </div>
                    <div className="min-h-[300px]">
                        <ApexCharts
                            options={options}
                            series={series}
                            type="area"
                            height={350}
                        />
                    </div>
                </div>

                {/* Recent Test History */}
                <div className="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md">
                    <div className="flex items-center justify-between mb-[20px]">
                        <h5 className="mb-0 font-bold text-black dark:text-white">Recent Test History</h5>
                        <button className="text-xs px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 transition-colors">Download Report</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-gray-500 dark:text-gray-400 uppercase bg-gray-50 dark:bg-[#15203c]">
                                <tr>
                                    <th className="px-3 py-2">Test Name</th>
                                    <th className="px-3 py-2">Date</th>
                                    <th className="px-3 py-2">Score</th>
                                    <th className="px-3 py-2">Rank</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 dark:divide-[#172036]">
                                <tr className="text-gray-700 dark:text-gray-300">
                                    <td className="px-3 py-3 font-medium">SSC CGL Tier I Mock 3</td>
                                    <td className="px-3 py-3 text-xs text-gray-500">10 Oct 2024</td>
                                    <td className="px-3 py-3 font-bold">145/200</td>
                                    <td className="px-3 py-3 text-gray-500">#1042</td>
                                </tr>
                                <tr className="text-gray-700 dark:text-gray-300">
                                    <td className="px-3 py-3 font-medium">English Sectional Test 5</td>
                                    <td className="px-3 py-3 text-xs text-gray-500">08 Oct 2024</td>
                                    <td className="px-3 py-3 font-bold">42/50</td>
                                    <td className="px-3 py-3 text-gray-500">#121</td>
                                </tr>
                                <tr className="text-gray-700 dark:text-gray-300">
                                    <td className="px-3 py-3 font-medium">Maths Speed Test 12</td>
                                    <td className="px-3 py-3 text-xs text-gray-500">05 Oct 2024</td>
                                    <td className="px-3 py-3 font-bold">25/50</td>
                                    <td className="px-3 py-3 text-gray-500">#5200</td>
                                </tr>
                                <tr className="text-gray-700 dark:text-gray-300">
                                    <td className="px-3 py-3 font-medium">SSC CGL Tier I Mock 2</td>
                                    <td className="px-3 py-3 text-xs text-gray-500">01 Oct 2024</td>
                                    <td className="px-3 py-3 font-bold">130/200</td>
                                    <td className="px-3 py-3 text-gray-500">#2100</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyResults;
