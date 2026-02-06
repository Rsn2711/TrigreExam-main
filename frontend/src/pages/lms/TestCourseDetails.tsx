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
        <div className="bg-white dark:bg-[#0c1427] font-sans flex flex-col h-full"> {/* Added simple white background */}
            {/* Navbar / Header Removed */}

            {/* Main Content */}
            <main className="flex-1 w-full px-6 py-8">
                {/* Title Section */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-900 mt-1">
                        {title}
                    </h1>
                    <div className="h-px w-full bg-gray-200"></div>
                </div>

                {/* Tabs */}
                <div className="flex w-full gap-4 mb-8">


                    <button
                        onClick={() => setActiveTab("all-tests")}
                        className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-colors ${activeTab === "all-tests"
                            ? "bg-blue-600 text-white shadow-sm"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                            }`}
                    >
                        All Tests
                    </button>
                    <button
                        onClick={() => setActiveTab("live-tests")}
                        className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-colors ${activeTab === "live-tests"
                            ? "bg-blue-600 text-white shadow-sm"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                            }`}
                    >
                        Live Tests
                    </button>
                </div>

                {/* Content Area */}
                {/* Description content removed */}

                {/* All Tests Tab Content */}
                {
                    activeTab === "all-tests" && (
                        <div className="flex flex-col gap-6">
                            {/* Series Header Card */}
                            <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-3 flex items-center gap-3">
                                <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-md">
                                    <i className="material-symbols-outlined text-gray-500 text-2xl">description</i>
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-gray-800">{title} - Test Series</h3>
                                    <span className="text-[10px] bg-white border border-gray-200 px-2 py-0.5 rounded text-gray-600 mt-1 inline-block">Total Tests {courseData?.totalTests || 2}</span>
                                </div>
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
                                    <div key={test.id} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-4 w-full max-w-6xl mx-auto">
                                        <div className="flex items-start gap-3">
                                            <div className="w-10 h-8 border border-gray-300 rounded flex items-center justify-center shrink-0">
                                                <i className="material-symbols-outlined text-gray-700 text-xl">movie</i>
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-bold text-gray-800 mb-1">{test.title}</h4>
                                                <div className="flex flex-wrap items-center gap-2 text-xs text-gray-600 mb-1.5">
                                                    <span>{test.questions} Questions</span>
                                                    <span className="text-gray-300">|</span>
                                                    <span>{test.marks} Marks</span>
                                                    <span className="text-gray-300">|</span>
                                                    <span>{test.minutes} Mins</span>
                                                    <span className="text-gray-300">|</span>
                                                    <span>{test.type}</span>
                                                </div>
                                                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                                    <i className="material-symbols-outlined text-[16px]">calendar_month</i>
                                                    <span>{test.date}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-1.5 rounded font-medium text-xs transition-colors uppercase tracking-wide">
                                                Start Test
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
                                <div key={test.id} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-4 w-full max-w-6xl mx-auto">
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-8 border border-gray-300 rounded flex items-center justify-center shrink-0">
                                            <i className="material-symbols-outlined text-gray-700 text-xl">sensors</i>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <h4 className="text-sm font-bold text-gray-800">{test.title}</h4>
                                                {test.isLive ? (
                                                    <span className="bg-red-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1">
                                                        <span className="w-1 h-1 bg-white rounded-full animate-pulse"></span>
                                                        LIVE
                                                    </span>
                                                ) : (
                                                    <span className="bg-green-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1">
                                                        <span className="w-1 h-1 bg-white rounded-full"></span>
                                                        UPCOMING
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex flex-wrap items-center gap-2 text-xs text-gray-600 mb-1.5">
                                                <span>{test.questions} Questions</span>
                                                <span className="text-gray-300">|</span>
                                                <span>{test.marks} Marks</span>
                                                <span className="text-gray-300">|</span>
                                                <span>{test.minutes} Mins</span>
                                                <span className="text-gray-300">|</span>
                                                <span>{test.type}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                                <i className="material-symbols-outlined text-[16px]">calendar_month</i>
                                                <span>{test.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        {(() => {
                                            const testId = `${title}-test-${test.id}`;
                                            const isCompleted = testStates[testId] || false;

                                            if (isCompleted) {
                                                return (
                                                    <div className="flex gap-2">
                                                        <button
                                                            onClick={() => handleViewReport(testId, test.title)}
                                                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 rounded font-medium text-xs transition-colors uppercase tracking-wide"
                                                        >
                                                            VIEW REPORT
                                                        </button>
                                                        <button
                                                            onClick={() => handleDeleteReport(testId)}
                                                            className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded font-medium text-xs transition-colors uppercase tracking-wide"
                                                        >
                                                            DELETE REPORT
                                                        </button>
                                                    </div>
                                                );
                                            } else {
                                                return (
                                                    <button
                                                        onClick={() => handleStartTest(testId, test.title, test.questions, test.marks, test.minutes)}
                                                        className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-1.5 rounded font-medium text-xs transition-colors uppercase tracking-wide"
                                                    >
                                                        START TEST
                                                    </button>
                                                );
                                            }
                                        })()}
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
