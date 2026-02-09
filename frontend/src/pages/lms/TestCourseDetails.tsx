import React, { useState, useEffect } from "react";


import { useLocation, useNavigate } from "react-router-dom";
import { getTestState, deleteTestState, isTestCompleted } from "../../utils/testStateManager";

const TestCourseDetails: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { title, courseData } = location.state || {
        title: "Test Course",
        courseData: null
    };
    const [activeTab, setActiveTab] = useState(location.state?.activeTab || "all-tests");
    const [testStates, setTestStates] = useState<Record<string, boolean>>({});

    // Load test states on mount and when tab changes
    useEffect(() => {
        if (activeTab === "live-tests") {
            // Load completion status for all tests
            const states: Record<string, boolean> = {};
            const testCount = Math.min(courseData?.totalTests || 3, 5);
            for (let i = 0; i < testCount; i++) {
                const testId = `${title}-test-${i + 1}`;
                states[testId] = isTestCompleted(testId);
            }
            setTestStates(states);
        }
    }, [activeTab, title, courseData]);

    // Sync activeTab from location state when it changes
    useEffect(() => {
        if (location.state?.activeTab) {
            setActiveTab(location.state.activeTab);
        }
    }, [location.state]);

    // Handler to start a test
    const handleStartTest = (testId: string, testTitle: string, questions: number, marks: number, minutes: number) => {
        navigate('/lms/test-instructions', {
            state: { testId, testTitle, questions, marks, minutes }
        });
    };

    // Handler to view test report
    const handleViewReport = (testId: string, testTitle: string) => {
        const state = getTestState(testId);
        navigate('/lms/test-result', {
            state: {
                testId,
                testTitle,
                score: state.score,
                total: state.total
            }
        });
    };

    // Handler to delete test report
    const handleDeleteReport = (testId: string) => {
        if (window.confirm('Are you sure you want to delete this test report? This action cannot be undone.')) {
            deleteTestState(testId);
            // Update local state
            setTestStates(prev => ({
                ...prev,
                [testId]: false
            }));
        }
    };


    return (
        <div className="bg-white dark:bg-[#0c1427] font-body flex flex-col h-full"> {/* Added simple white background */}
            {/* Navbar / Header Removed */}

            {/* Main Content */}
            <main className="flex-1 w-full px-6 py-8">
                {/* Title Section */}
                <div className="mb-6">
                    <h1 className="!text-[20px] font-bold text-gray-900 leading-tight">
                        {title}
                    </h1>
                    <div className="h-px w-full bg-gray-200"></div>
                </div>

                {/* Tabs */}
                <div className="flex w-full mb-8">
                    <div className="inline-flex bg-gray-100/80 p-1 rounded-xl border border-gray-200/50">
                        <button
                            onClick={() => setActiveTab("all-tests")}
                            className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${activeTab === "all-tests"
                                ? "bg-white text-blue-600 shadow-sm ring-1 ring-black/5"
                                : "text-gray-500 hover:text-gray-700 hover:bg-gray-200/50"
                                }`}
                        >
                            All Tests
                        </button>
                        <button
                            onClick={() => setActiveTab("live-tests")}
                            className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${activeTab === "live-tests"
                                ? "bg-white text-blue-600 shadow-sm ring-1 ring-black/5"
                                : "text-gray-500 hover:text-gray-700 hover:bg-gray-200/50"
                                }`}
                        >
                            Live Tests
                        </button>
                    </div>
                </div>

                {/* Content Area */}
                {/* Description content removed */}

                {/* All Tests Tab Content */}
                {
                    activeTab === "all-tests" && (
                        <div className="flex flex-col gap-6">
                            <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-1.5 flex items-center justify-between gap-3">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-md">
                                        <i className="material-symbols-outlined text-gray-500 text-lg">description</i>
                                    </div>
                                    <h3 className="text-sm font-bold text-gray-800">{title.split('–')[0].trim()} Test Series</h3>
                                </div>
                                <span className="text-sm font-extrabold text-blue-600 bg-white border border-blue-100 px-3 py-1 rounded shadow-sm">Total Tests: {courseData?.totalTests || 2}</span>
                            </div>

                            {/* Test Lists */}
                            <div className="flex flex-col gap-4">
                                {(() => {
                                    // Generate dynamic tests based on courseData
                                    if (!courseData) {
                                        return [
                                            {
                                                id: 1,
                                                title: "Test 1 - Sample Assessment",
                                                questions: 180,
                                                marks: 720,
                                                minutes: 180,
                                                type: "Multiple Attempted Test",
                                                date: "07-09-2025 (11:00 AM)"
                                            },
                                            {
                                                id: 2,
                                                title: "Test 2 - Sample Assessment",
                                                questions: 180,
                                                marks: 720,
                                                minutes: 180,
                                                type: "Multiple Attempted Test",
                                                date: "07-09-2025 (11:00 AM)"
                                            }
                                        ];
                                    }

                                    const tests = [];
                                    const totalTests = courseData.totalTests || 2;

                                    for (let i = 0; i < totalTests; i++) {
                                        const testNumber = i + 1;
                                        const randomQuestions = [50, 100, 150, 180, 200][Math.floor(Math.random() * 5)];
                                        const randomMinutes = [30, 60, 90, 120, 180][Math.floor(Math.random() * 5)];
                                        const marks = randomQuestions * 4; // 4 marks per question

                                        tests.push({
                                            id: testNumber,
                                            title: `${title.split(' ')[0]} Test-${String(testNumber).padStart(2, '0')}`,
                                            questions: randomQuestions,
                                            marks: marks,
                                            minutes: randomMinutes,
                                            type: testNumber % 3 === 0 ? "Full Length Test" : "Multiple Attempted Test",
                                            date: `${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-2026 (${Math.floor(Math.random() * 12) + 1}:00 ${Math.random() > 0.5 ? 'AM' : 'PM'})`
                                        });
                                    }

                                    return tests;
                                })().map((test) => (
                                    <div key={test.id} className="group bg-white rounded-2xl p-4 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-transparent hover:border-blue-100 transition-all duration-300 transform hover:-translate-y-1 w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 relative overflow-hidden">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-2xl"></div>

                                        <div className="flex items-center gap-4 w-full md:w-auto">
                                            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                                                <i className="material-symbols-outlined text-[26px]">description</i>
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="!text-[20px] font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-1">{test.title}</h4>

                                                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 font-medium">
                                                    <span className="group/item hover:text-blue-600 transition-colors">
                                                        {test.questions} Questions
                                                    </span>
                                                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                                    <span className="group/item hover:text-amber-600 transition-colors">
                                                        {test.marks} Marks
                                                    </span>
                                                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                                    <span className="group/item hover:text-purple-600 transition-colors">
                                                        {test.minutes} Mins
                                                    </span>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end pl-[4rem] md:pl-0">
                                            <div className="flex items-center gap-1.5 text-xs font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded-md border border-gray-100">
                                                <i className="material-symbols-outlined text-[14px]">calendar_today</i>
                                                <span>{test.date.split('(')[0]}</span>
                                            </div>

                                            <button className="bg-white border border-blue-200 text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:border-transparent px-5 py-2 rounded-lg text-xs font-bold transition-all duration-300 shadow-sm group-hover:shadow-blue-200 hover:scale-105 active:scale-95 uppercase tracking-wider">
                                                Start
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                }

                {
                    activeTab === "live-tests" && (
                        <div className="flex flex-col gap-4">
                            {(() => {
                                // Generate dynamic live tests
                                const liveTests = [];
                                const testCount = Math.min(courseData?.totalTests || 3, 5); // Max 5 live tests

                                for (let i = 0; i < testCount; i++) {
                                    const testNumber = i + 1;
                                    const isLive = Math.random() > 0.5; // 50% are live, 50% are upcoming
                                    const questions = [20, 50, 100, 150][Math.floor(Math.random() * 4)];
                                    const marks = questions * [2, 4, 5][Math.floor(Math.random() * 3)];
                                    const minutes = [12, 30, 60, 90, 120, 180][Math.floor(Math.random() * 6)];

                                    // Random date range in Feb 2026
                                    const startDay = Math.floor(Math.random() * 20) + 1;
                                    const startHour = Math.floor(Math.random() * 12) + 9;

                                    liveTests.push({
                                        id: testNumber,
                                        title: `${title.split(' ')[0]} - Live Test ${String(testNumber).padStart(2, '0')}`,
                                        questions,
                                        marks,
                                        minutes,
                                        isLive,
                                        type: testNumber % 3 === 0 ? "Full Length Test" : "Live Test",
                                        date: `${String(startDay).padStart(2, '0')}-02-2026 (${startHour}:00 ${Math.random() > 0.5 ? 'AM' : 'PM'})`
                                    });
                                }

                                return liveTests;
                            })().map((test) => (
                                <div key={test.id} className="group bg-white rounded-2xl p-4 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-transparent hover:border-blue-100 transition-all duration-300 transform hover:-translate-y-1 w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 relative overflow-hidden">
                                    <div className={`absolute top-0 left-0 w-1 h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-2xl ${test.isLive ? 'bg-red-500' : 'bg-green-500'}`}></div>

                                    <div className="flex items-center gap-4 w-full md:w-auto">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 ${test.isLive ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                                            <i className="material-symbols-outlined text-[26px]">sensors</i>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <h4 className="!text-[20px] font-bold text-gray-900 group-hover:text-blue-700 transition-colors">{test.title}</h4>
                                                {test.isLive ? (
                                                    <span className="bg-red-100 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded-full border border-red-200 flex items-center gap-1">
                                                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
                                                        LIVE
                                                    </span>
                                                ) : (
                                                    <span className="bg-green-100 text-green-600 text-[10px] font-bold px-2 py-0.5 rounded-full border border-green-200">
                                                        UPCOMING
                                                    </span>
                                                )}
                                            </div>

                                            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 font-medium">
                                                <span className="group/item hover:text-blue-600 transition-colors">
                                                    {test.questions} Questions
                                                </span>
                                                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                                <span className="group/item hover:text-amber-600 transition-colors">
                                                    {test.marks} Marks
                                                </span>
                                                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                                <span className="group/item hover:text-purple-600 transition-colors">
                                                    {test.minutes} Mins
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end pl-[4rem] md:pl-0">
                                        <div className="flex items-center gap-1.5 text-xs font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded-md border border-gray-100">
                                            <i className="material-symbols-outlined text-[14px]">calendar_today</i>
                                            <span>{test.date.split('(')[0]}</span>
                                        </div>
                                        <div>
                                            {(() => {
                                                const testId = `${title}-test-${test.id}`;
                                                // Assuming isCompleted logic is handled correctly in the original code, 
                                                // just wrapping buttons with new styles
                                                const isCompleted = testStates[testId] || false;

                                                if (isCompleted) {
                                                    return (
                                                        <div className="flex gap-2">
                                                            <button
                                                                onClick={() => handleViewReport(testId, test.title)}
                                                                className="bg-green-50 text-green-600 border border-green-200 hover:bg-green-600 hover:text-white px-4 py-2 rounded-lg text-xs font-bold transition-all duration-300 uppercase tracking-wide"
                                                            >
                                                                Result
                                                            </button>
                                                            <button
                                                                onClick={() => handleDeleteReport(testId)}
                                                                className="bg-red-50 text-red-600 border border-red-200 hover:bg-red-600 hover:text-white px-3 py-2 rounded-lg transition-all duration-300"
                                                                title="Delete Result"
                                                            >
                                                                <i className="material-symbols-outlined text-[18px]">delete</i>
                                                            </button>
                                                        </div>
                                                    );
                                                } else {
                                                    return (
                                                        <button
                                                            onClick={() => handleStartTest(testId, test.title, test.questions, test.marks, test.minutes)}
                                                            className="bg-white border border-blue-200 text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:border-transparent px-5 py-2 rounded-lg text-xs font-bold transition-all duration-300 shadow-sm group-hover:shadow-blue-200 hover:scale-105 active:scale-95 uppercase tracking-wider"
                                                        >
                                                            Start
                                                        </button>
                                                    );
                                                }
                                            })()}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )
                }

            </main >

            {/* Footer Removed - using Global Footer */}
        </div >
    );
};

export default TestCourseDetails;