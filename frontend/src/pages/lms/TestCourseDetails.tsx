import React, { useState } from "react";


const TestCourseDetails: React.FC = () => {
    // navigate hook removed
    const [activeTab, setActiveTab] = useState("all-tests");


    return (
        <div className="bg-white dark:bg-[#0c1427] font-sans flex flex-col h-full"> {/* Added simple white background */}
            {/* Navbar / Header Removed */}

            {/* Main Content */}
            <main className="flex-1 w-full px-6 py-8">
                {/* Title Section */}
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-900 mt-1">
                        NEET Minor/Major Test Package – Biweekly Every Sunday
                    </h1>
                    <div className="h-px w-full bg-gray-200"></div>
                </div>

                {/* Tabs */}
                <div className="flex w-full gap-4 mb-8">


                    <button
                        onClick={() => setActiveTab("all-tests")}
                        className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === "all-tests"
                            ? "bg-blue-600 text-white shadow-sm"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                            }`}
                    >
                        All Tests
                    </button>
                    <button
                        onClick={() => setActiveTab("live-tests")}
                        className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === "live-tests"
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
                            <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-4 flex items-center gap-4">
                                <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-md">
                                    <i className="material-symbols-outlined text-gray-500 text-3xl">description</i>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-800">NEET Test Series</h3>
                                    <span className="text-xs bg-white border border-gray-200 px-2 py-0.5 rounded text-gray-600 mt-1 inline-block">Total Tests 2</span>
                                </div>
                            </div>

                            {/* Test Lists */}
                            <div className="flex flex-col gap-4">
                                {[
                                    {
                                        id: 1,
                                        title: "Minor Test-03 ( NEET Acheiver Online 1.0)",
                                        questions: 180,
                                        marks: 720,
                                        minutes: 180,
                                        type: "Multiple Attempted Test",
                                        date: "07-09-2025 (11:00 AM)"
                                    },
                                    {
                                        id: 2,
                                        title: "Minor Test-01 ( NEET Acheiver Online 2.0)",
                                        questions: 180,
                                        marks: 720,
                                        minutes: 180,
                                        type: "Multiple Attempted Test",
                                        date: "07-09-2025 (11:00 AM)"
                                    }
                                ].map((test) => (
                                    <div key={test.id} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-10 border border-gray-300 rounded flex items-center justify-center shrink-0">
                                                <i className="material-symbols-outlined text-gray-700">movie</i>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-gray-800 mb-1">{test.title}</h4>
                                                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mb-2">
                                                    <span>{test.questions} Questions</span>
                                                    <span className="text-gray-300">|</span>
                                                    <span>{test.marks} Marks</span>
                                                    <span className="text-gray-300">|</span>
                                                    <span>{test.minutes} Mins</span>
                                                    <span className="text-gray-300">|</span>
                                                    <span>{test.type}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                                    <i className="material-symbols-outlined text-[18px]">calendar_month</i>
                                                    <span>{test.date}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded font-medium text-sm transition-colors uppercase tracking-wide">
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
                        <div className="p-12 text-center text-gray-500 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                            <div className="flex flex-col items-center gap-2">
                                <i className="material-symbols-outlined text-4xl opacity-20">sensors</i>
                                <p>No live tests scheduled at the moment.</p>
                            </div>
                        </div>
                    )
                }

            </main >

            {/* Footer Removed - using Global Footer */}
        </div >
    );
};

export default TestCourseDetails;
