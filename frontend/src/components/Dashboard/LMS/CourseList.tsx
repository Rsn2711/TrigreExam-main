import React from "react";
import { Link } from "react-router-dom";

/* ================================
   🎨 DESIGN TOKENS
================================ */
const CARD_THEME = {
    vertical: {
        wrapper:
            "trezo-card bg-white dark:bg-[#0c1427] rounded-2xl overflow-hidden w-[260px] h-[260px] min-w-[260px] shadow-sm flex-shrink-0 border border-gray-100 dark:border-[#172036] hover:-translate-y-1 hover:shadow-lg hover:bg-blue-50 dark:hover:bg-[#15203c] transition-all duration-300 cursor-pointer flex flex-col",
        imageWrapper: "h-[110px] w-full overflow-hidden flex-shrink-0",
        content: "p-[10px] flex flex-col flex-grow justify-between",
    },
    horizontal: {
        wrapper:
            "trezo-card bg-white dark:bg-[#0c1427] rounded-2xl overflow-hidden w-full h-[105px] shadow-sm flex-shrink-0 border border-gray-100 dark:border-[#172036] hover:-translate-y-1 hover:shadow-lg hover:bg-blue-50 dark:hover:bg-[#15203c] transition-all duration-300 cursor-pointer flex",
        imageWrapper: "w-[105px] h-full overflow-hidden flex-shrink-0 relative", // Left side image/thumbnail
        content: "p-[8px] flex flex-col flex-grow justify-between", // Right side content
    },
    title:
        "!text-[17px] md:!text-[17px] font-medium text-black dark:text-white leading-snug truncate",
    subtitle: "text-gray-500 text-[10px] truncate",
    statText: "text-gray-500 text-[10px] font-medium flex items-center gap-1",
    expiryBox:
        "flex items-center gap-1 bg-blue-50 dark:bg-blue-900/20 px-1.5 py-1 rounded-md",
    button:
        "block w-full text-center bg-white border border-primary-500 text-primary-500 font-medium py-1 rounded-md transition-all duration-300 hover:bg-primary-500 hover:text-white flex items-center justify-center gap-1 text-[10px]",
};

export type Course = {
    id: number;
    title: string;
    subtitle: string;
    image: string;
    progress: number;
    totalTests: number;
    completedTests: number;
    expiryDate: string;
    viewLink: string;
    totalVideos: number;
};

interface CourseListProps {
    title: string;
    courses: Course[];
    variant?: "vertical" | "horizontal";
}

const CourseList: React.FC<CourseListProps> = ({
    title,
    courses,
    variant = "vertical",
}) => {
    return (
        <div className="mb-[25px]">
            <div className="mb-[15px]">
                <h5 className="font-bold text-[18px] dark:text-white">{title}</h5>
            </div>

            <div
                className={
                    variant === "horizontal"
                        ? "grid grid-cols-1 md:grid-cols-2 gap-[25px]" // Grid layout for horizontal variant (Enrolled Courses)
                        : "flex gap-[25px] overflow-x-auto pb-4 scrollbar-hide" // Horizontal scroll for others
                }
            >
                {courses.map((course) => (
                    <div key={course.id} className={CARD_THEME[variant].wrapper}>
                        {/* Image Section */}
                        <div className={CARD_THEME[variant].imageWrapper}>
                            <img
                                src={course.image}
                                alt={course.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Content Section */}
                        <div className={CARD_THEME[variant].content}>
                            {variant === "vertical" ? (
                                // VERTICAL LAYOUT (Original)
                                <>
                                    <div>
                                        <h3 className={CARD_THEME.title} title={course.title}>
                                            {course.title}
                                        </h3>

                                        <p
                                            className={`${CARD_THEME.subtitle} mb-1.5`}
                                            title={course.subtitle}
                                        >
                                            {course.subtitle}
                                        </p>
                                    </div>

                                    <div className="flex justify-between items-center mb-1.5">
                                        <div className={CARD_THEME.statText}>
                                            <i className="material-symbols-outlined text-[14px]">
                                                play_lesson
                                            </i>
                                            <span>{course.totalVideos} Videos</span>
                                        </div>

                                        <div className={CARD_THEME.expiryBox}>
                                            <i className="material-symbols-outlined text-blue-500 text-[14px]">
                                                schedule
                                            </i>
                                            <span className="text-[9px] font-semibold text-gray-700 dark:text-gray-300">
                                                {course.expiryDate}
                                            </span>
                                        </div>
                                    </div>

                                    <Link
                                        to={course.viewLink}
                                        className={`${CARD_THEME.button} mt-auto`}
                                    >
                                        <i className="material-symbols-outlined text-[14px]">
                                            menu_book
                                        </i>
                                        Continue Learning
                                    </Link>
                                </>
                            ) : (
                                // HORIZONTAL LAYOUT (New Design)
                                <>
                                    {/* Top: Title */}
                                    <div className="mb-1 border-b border-dashed border-gray-200 pb-1">
                                        <h3 className="!text-[14px] font-medium text-black dark:text-white leading-snug truncate" title={course.title}>
                                            {course.title}
                                        </h3>
                                    </div>

                                    {/* Middle: Stats Grid - Compact */}
                                    <div className="flex items-center gap-1 mb-1">
                                        {/* Video Pill */}
                                        <div className="bg-gray-50 dark:bg-gray-800 rounded px-1.5 py-0.5 text-center flex-1">
                                            <span className="block text-[8px] text-gray-400 font-medium uppercase tracking-wider leading-none mb-0.5">Vid</span>
                                            <span className="text-[10px] font-bold text-gray-700 dark:text-gray-200 leading-none block">{course.totalVideos}</span>
                                        </div>
                                        {/* Test Pill */}
                                        <div className="bg-gray-50 dark:bg-gray-800 rounded px-1.5 py-0.5 text-center flex-1">
                                            <span className="block text-[8px] text-gray-400 font-medium uppercase tracking-wider leading-none mb-0.5">Test</span>
                                            <span className="text-[10px] font-bold text-gray-700 dark:text-gray-200 leading-none block">{course.totalTests}</span>
                                        </div>
                                        {/* Expiry Pill */}
                                        <div className="bg-blue-50 dark:bg-blue-900/10 rounded px-1.5 py-0.5 text-center flex-[1.5]">
                                            <span className="block text-[8px] text-blue-400 font-medium uppercase tracking-wider leading-none mb-0.5">Exp</span>
                                            <span className="text-[10px] font-bold text-blue-700 dark:text-blue-300 leading-none block">{course.expiryDate}</span>
                                        </div>
                                    </div>

                                    {/* Bottom: Action Button */}
                                    <Link
                                        to={course.viewLink}
                                        className={`${CARD_THEME.button} py-0.5 text-[10px] h-[24px]`}
                                    >
                                        Continue
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseList;
