import React from "react";
import { Link } from "react-router-dom";

const CARD_THEME = {
  title:
    "text-sm md:text-base font-semibold leading-tight line-clamp-2 hover:text-primary-500 transition-colors cursor-pointer",
  instructor: "text-xs text-gray-500 dark:text-gray-400",
  categoryBadge: "text-xs font-semibold px-2.5 py-0.5 rounded",
  button:
    "mt-[20px] block w-full text-center py-[10px] rounded-md border font-medium transition-all",
};


const CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
  Foundation: { bg: "bg-indigo-100 dark:bg-[#2a2a58]", text: "text-indigo-600" },
  "Quantitative Aptitude": {
    bg: "bg-blue-100 dark:bg-[#1e3a5f]",
    text: "text-blue-600",
  },
  Reasoning: { bg: "bg-purple-100 dark:bg-[#3d2a58]", text: "text-purple-600" },
  English: { bg: "bg-pink-100 dark:bg-[#5f1e3a]", text: "text-pink-600" },
  "General Awareness": {
    bg: "bg-orange-100 dark:bg-[#5f3a1e]",
    text: "text-orange-600",
  },
  Mathematics: {
    bg: "bg-cyan-100 dark:bg-[#1e4b5f]",
    text: "text-cyan-600",
  },
  "Crash Course": {
    bg: "bg-yellow-100 dark:bg-[#5f4b1e]",
    text: "text-yellow-600",
  },
  PYQs: { bg: "bg-gray-100 dark:bg-[#333333]", text: "text-gray-600" },
};


const courses = [
  {
    id: 1,
    title:
      "Foundation Program for Competitive Exams (Comprehensive Preparation Course)",
    instructor: "Trigre Exam Team",
    progress: 10,
    totalLessons: 200,
    completedLessons: 20,
    category: "Foundation",
  },
  {
    id: 2,
    title: "Quantitative Aptitude – Advanced Mastery Program",
    instructor: "Math Wizard",
    progress: 0,
    totalLessons: 120,
    completedLessons: 0,
    category: "Quantitative Aptitude",
  },
  {
    id: 3,
    title: "Reasoning & General Intelligence – Complete Course",
    instructor: "Reasoning Expert",
    progress: 0,
    totalLessons: 100,
    completedLessons: 0,
    category: "Reasoning",
  },
  {
    id: 4,
    title: "English Language – Professional Skills Program",
    instructor: "English Faculty",
    progress: 0,
    totalLessons: 150,
    completedLessons: 0,
    category: "English",
  },
  {
    id: 5,
    title: "General Awareness (GA) – Complete Coverage Course",
    instructor: "Clara GK",
    progress: 5,
    totalLessons: 180,
    completedLessons: 9,
    category: "General Awareness",
  },
  {
    id: 6,
    title: "Mathematics – Booster & Speed Enhancement Course",
    instructor: "Speed Math Guru",
    progress: 0,
    totalLessons: 50,
    completedLessons: 0,
    category: "Mathematics",
  },
  {
    id: 7,
    title: "Reasoning – Fast-Track Intensive Program",
    instructor: "Logic Master",
    progress: 0,
    totalLessons: 60,
    completedLessons: 0,
    category: "Reasoning",
  },
  {
    id: 8,
    title: "English Grammar & Vocabulary – Comprehensive Course",
    instructor: "Vocab Pro",
    progress: 0,
    totalLessons: 90,
    completedLessons: 0,
    category: "English",
  },
  {
    id: 9,
    title: "Tier-I & Tier-II – Intensive Crash Course",
    instructor: "Exam Strategist",
    progress: 0,
    totalLessons: 250,
    completedLessons: 0,
    category: "Crash Course",
  },
  {
    id: 10,
    title:
      "Previous Year Questions (PYQs) – Practice & Analysis Course",
    instructor: "Trigre Exam Team",
    progress: 0,
    totalLessons: 50,
    completedLessons: 0,
    category: "PYQs",
  },
];

/* ================================
   🧩 COMPONENT
================================ */
const MyCourses: React.FC = () => {
  return (
    <>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-[25px] gap-[15px]">
        <div>
          <h2 className="text-xl font-bold text-black dark:text-white mb-1">
            My Courses
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Pick up where you left off.
          </p>
        </div>

        <div className="relative">
          <i className="material-symbols-outlined absolute left-[15px] top-1/2 -translate-y-1/2 text-gray-400">
            search
          </i>
          <input
            type="text"
            placeholder="Search your courses..."
            className="bg-white dark:bg-[#0c1427] h-[45px] rounded-md outline-none pl-[45px] pr-[20px] w-full md:w-[300px] border border-gray-100 dark:border-[#172036] focus:border-primary-500 transition-all text-black dark:text-white"
          />
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[25px]">
        {courses.map((course) => {
          const theme =
            CATEGORY_COLORS[course.category] ??
            CATEGORY_COLORS.Foundation;

          return (
            <div
              key={course.id}
              className="bg-white dark:bg-[#0c1427] rounded-md border border-gray-100 dark:border-[#172036] overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full"
            >
              {/* Image / Banner */}
              <div
                className={`h-[180px] w-full ${theme.bg} flex items-center justify-center relative group`}
              >
                <span
                  className={`text-4xl font-bold opacity-30 ${theme.text}`}
                >
                  {course.category.charAt(0)}
                </span>

                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link
                    to="#"
                    className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center text-primary-500 hover:bg-primary-500 hover:text-white transition-all"
                  >
                    <i className="material-symbols-outlined">
                      play_arrow
                    </i>
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="p-[20px] flex flex-col flex-grow">
                <span
                  className={`${CARD_THEME.categoryBadge} ${theme.bg} ${theme.text} mb-[15px] inline-block`}
                >
                  {course.category}
                </span>

                <h3
                  className={`${CARD_THEME.title} text-black dark:text-white mb-[10px]`}
                >
                  {course.title}
                </h3>

                <p className={`${CARD_THEME.instructor} mb-[20px]`}>
                  By {course.instructor}
                </p>

                <div className="mt-auto">
                  <div className="flex items-center justify-between text-xs font-semibold text-gray-500 dark:text-gray-400 mb-[8px]">
                    <span>{course.progress}% Completed</span>
                    <span>
                      {course.completedLessons}/{course.totalLessons} Lessons
                    </span>
                  </div>

                  <div className="w-full bg-gray-100 dark:bg-[#172036] rounded-full h-[6px] overflow-hidden">
                    <div
                      className="bg-primary-500 h-full rounded-full transition-all duration-500"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>

                  <Link
                    to="#"
                    className={`${CARD_THEME.button} border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white`}
                  >
                    {course.progress === 0
                      ? "Start Course"
                      : "Continue Learning"}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MyCourses;
