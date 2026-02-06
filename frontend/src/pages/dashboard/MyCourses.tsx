import React from "react";
import { Link } from "react-router-dom";

const CARD_THEME = {
  title:
    "text-[15px] font-semibold leading-tight line-clamp-2 hover:text-primary-500 transition-colors cursor-pointer",
  button:
    "mt-[10px] block w-full text-center py-[6px] rounded-md border font-medium transition-all text-sm",
};


const courses = [
  {
    id: 1,
    title:
      "Foundation Program for Competitive Exams (Comprehensive Preparation Course)",
    type: "Video Course",
    progress: 10,
    totalLessons: 200,
    completedLessons: 20,
    totalVideos: 150,
    totalTests: 15,
    expiryDate: "1 Year",
  },
  {
    id: 2,
    title: "Quantitative Aptitude – Advanced Mastery Program",
    type: "Video Course",
    progress: 0,
    totalLessons: 120,
    completedLessons: 0,
    totalVideos: 100,
    totalTests: 10,
    expiryDate: "1 Year",
  },
  {
    id: 3,
    title: "Reasoning & General Intelligence – Complete Course",
    type: "Video Course",
    progress: 0,
    totalLessons: 100,
    completedLessons: 0,
    totalVideos: 80,
    totalTests: 8,
    expiryDate: "1 Year",
  },
  {
    id: 4,
    title: "English Language – Professional Skills Program",
    type: "Video Course",
    progress: 0,
    totalLessons: 150,
    completedLessons: 0,
    totalVideos: 120,
    totalTests: 12,
    expiryDate: "1 Year",
  },
  {
    id: 5,
    title: "General Awareness (GA) – Complete Coverage Course",
    type: "Test Course",
    progress: 5,
    totalLessons: 180,
    completedLessons: 9,
    totalVideos: 140,
    totalTests: 14,
    expiryDate: "1 Year",
  },
  {
    id: 6,
    title: "Mathematics – Booster & Speed Enhancement Course",
    type: "Test Course",
    progress: 0,
    totalLessons: 50,
    completedLessons: 0,
    totalVideos: 40,
    totalTests: 4,
    expiryDate: "1 Year",
  },
  {
    id: 7,
    title: "Reasoning – Fast-Track Intensive Program",
    type: "Video Course",
    progress: 0,
    totalLessons: 60,
    completedLessons: 0,
    totalVideos: 45,
    totalTests: 5,
    expiryDate: "1 Year",
  },
  {
    id: 8,
    title: "English Grammar & Vocabulary – Comprehensive Course",
    type: "Video Course",
    progress: 0,
    totalLessons: 90,
    completedLessons: 0,
    totalVideos: 70,
    totalTests: 7,
    expiryDate: "1 Year",
  },
  {
    id: 9,
    title: "Tier-I & Tier-II – Intensive Crash Course",
    type: "Test Course",
    progress: 0,
    totalLessons: 250,
    completedLessons: 0,
    totalVideos: 200,
    totalTests: 20,
    expiryDate: "1 Year",
  },
  {
    id: 10,
    title:
      "Previous Year Questions (PYQs) – Practice & Analysis Course",
    type: "Test Course",
    progress: 0,
    totalLessons: 50,
    completedLessons: 0,
    totalVideos: 40,
    totalTests: 5,
    expiryDate: "1 Year",
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
          return (
            <div
              key={course.id}
              className="bg-white dark:bg-[#0c1427] rounded-md border border-gray-100 dark:border-[#172036] overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full"
            >
              {/* Image / Banner */}
              <div
                className={`h-[130px] w-full bg-gray-100 dark:bg-[#172036] flex items-center justify-center relative group overflow-hidden`}
              >
                <img
                  src="/images/course-thum.png"
                  alt={course.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link
                    to={
                      course.type === "Video Course"
                        ? "/lms/video-course-player"
                        : course.type === "Test Course"
                          ? "/lms/test-course-details"
                          : "#"
                    }
                    state={{ title: course.title, type: course.type, courseData: course }}
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-900 hover:bg-red-500 hover:text-white transition-colors"
                  >
                    <i className="material-symbols-outlined text-[20px]">
                      play_arrow
                    </i>
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="p-[12px] flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${course.type === "Video Course"
                      ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                      : "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
                      }`}
                  >
                    {course.type}
                  </span>
                </div>
                <h3
                  className={`${CARD_THEME.title} text-black dark:text-white mb-[8px] !text-[15px]`}
                  style={{ fontSize: "15px", lineHeight: "1.4" }}
                >
                  {course.title}
                </h3>

                <div className="mb-[10px]">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <i className="material-symbols-outlined text-[14px] text-gray-300">
                        play_circle
                      </i>
                      <span>Total Videos: {course.totalVideos}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <i className="material-symbols-outlined text-[14px] text-gray-300">
                        quiz
                      </i>
                      <span>Total Tests: {course.totalTests}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <i className="material-symbols-outlined text-[14px] text-gray-300">
                        event
                      </i>
                      <span>Validity: {course.expiryDate}</span>
                    </div>
                  </div>
                </div>

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
                    to={
                      course.type === "Video Course"
                        ? "/lms/video-course-player"
                        : course.type === "Test Course"
                          ? "/lms/test-course-details"
                          : "#"
                    }
                    state={{ title: course.title, type: course.type, courseData: course }}
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
