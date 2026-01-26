import React from "react";
import { Link } from "react-router-dom";

type Course = {
    id: number;
    title: string;
    subtitle: string;
    image: string; // Header background image
    color: string; // Header background color/gradient class
    progress: number;
    totalTests: number;
    completedTests: number;
    expiryDate: string;
    viewLink: string;
};

const coursesData: Course[] = [
    {
        id: 1,
        title: "JEE Advanced Physics",
        subtitle: "Complete Test Series 2025",
        image: "/images/courses/course1.jpg", // Placeholder, will use CSS background or similar
        color: "bg-gradient-to-r from-blue-600 to-blue-500",
        progress: 65,
        completedTests: 13,
        totalTests: 20,
        expiryDate: "Dec 31, 2025",
        viewLink: "/lms/course-details",
    },
    {
        id: 2,
        title: "JEE Advanced Chemistry",
        subtitle: "Complete Test Series 2025",
        image: "/images/courses/course2.jpg",
        color: "bg-gradient-to-r from-teal-500 to-teal-400",
        progress: 45,
        completedTests: 9,
        totalTests: 20,
        expiryDate: "Dec 31, 2025",
        viewLink: "/lms/course-details",
    },
    {
        id: 3,
        title: "JEE Advanced Mathematics",
        subtitle: "Complete Test Series 2025",
        image: "/images/courses/course3.jpg",
        color: "bg-gradient-to-r from-purple-500 to-pink-500",
        progress: 30,
        completedTests: 6,
        totalTests: 20,
        expiryDate: "Dec 31, 2025",
        viewLink: "/lms/course-details",
    },
    {
        id: 4,
        title: "NEET Physics",
        subtitle: "Complete Test Series 2025",
        image: "/images/courses/course4.jpg",
        color: "bg-gradient-to-r from-orange-500 to-red-500",
        progress: 80,
        completedTests: 16,
        totalTests: 20,
        expiryDate: "Dec 31, 2025",
        viewLink: "/lms/course-details",
    },
    {
        id: 5,
        title: "NEET Biology",
        subtitle: "Complete Test Series 2025",
        image: "/images/courses/course5.jpg",
        color: "bg-gradient-to-r from-green-500 to-emerald-500",
        progress: 20,
        completedTests: 4,
        totalTests: 20,
        expiryDate: "Dec 31, 2025",
        viewLink: "/lms/course-details",
    },
];

const ExploreCourses: React.FC = () => {
    return (
        <>
            <div className="mb-[25px]">
                {/* Header */}
                <div className="mb-[15px]">
                    <h5 className="font-bold text-[18px] dark:text-white">Explore Courses</h5>
                </div>

                {/* Horizontal Scroll Container */}
                <div className="flex gap-[25px] overflow-x-auto pb-4 scrollbar-hide">
                    {coursesData.map((course) => (
                        <div
                            key={course.id}
                            className="trezo-card bg-white dark:bg-[#0c1427] rounded-xl overflow-hidden min-w-[350px] md:min-w-[380px] shadow-sm flex-shrink-0 border border-gray-100 dark:border-[#172036]"
                        >
                            {/* Header */}
                            <div className={`relative h-[160px] flex flex-col justify-center items-center text-center p-6 ${course.color}`}>
                                {/* Overlay pattern or image could go here */}
                                <div className="absolute inset-0 opacity-20 bg-[url('/images/pattern.png')] bg-cover mix-blend-overlay"></div>

                                <div className="relative z-10">
                                    <h3 className="!text-white text-xl md:text-2xl font-bold mb-2">{course.title}</h3>
                                    <p className="text-white/90 text-sm font-medium">{course.subtitle}</p>
                                </div>
                            </div>

                            {/* Body */}
                            <div className="p-[20px] md:p-[25px]">

                                {/* Progress */}
                                <div className="mb-6">
                                    <div className="flex justify-between items-center mb-2 text-sm font-medium">
                                        <span className="text-gray-600 dark:text-gray-400">Progress</span>
                                        <span className="text-gray-800 dark:text-gray-200">{course.progress}%</span>
                                    </div>
                                    <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2.5">
                                        <div
                                            className="h-2.5 rounded-full"
                                            style={{
                                                width: `${course.progress}%`,
                                                backgroundColor: course.color.includes("blue") ? "#3584fc" :
                                                    course.color.includes("teal") ? "#14b8a6" :
                                                        course.color.includes("purple") ? "#a855f7" :
                                                            course.color.includes("orange") ? "#f97316" : "#22c55e"
                                            }}
                                        ></div>
                                    </div>
                                </div>

                                {/* Stats Row */}
                                <div className="flex justify-between items-center mb-6">
                                    <div className="flex items-center gap-2 bg-green-50 dark:bg-green-900/20 px-3 py-2 rounded-lg">
                                        <i className="material-symbols-outlined text-green-500 text-[18px]">check_circle</i>
                                        <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                                            {course.completedTests}/{course.totalTests} Tests
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2 bg-orange-50 dark:bg-orange-900/20 px-3 py-2 rounded-lg">
                                        <i className="material-symbols-outlined text-orange-500 text-[18px]">schedule</i>
                                        <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                                            {course.expiryDate}
                                        </span>
                                    </div>
                                </div>

                                {/* Action Button */}
                                <Link
                                    to={course.viewLink}
                                    className="block w-full text-center bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                                >
                                    <i className="material-symbols-outlined text-[20px]">menu_book</i>
                                    Continue Learning
                                </Link>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ExploreCourses;
