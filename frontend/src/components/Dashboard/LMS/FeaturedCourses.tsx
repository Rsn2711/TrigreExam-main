import React from "react";
import { Link } from "react-router-dom";

/* ====== DESIGN TOKENS (ONE PLACE CONTROL) ====== */
const CARD_THEME = {
  wrapper:
    "trezo-card bg-white dark:bg-[#0c1427] rounded-2xl overflow-hidden w-[260px] h-[260px] min-w-[260px] shadow-sm flex-shrink-0 border border-gray-100 dark:border-[#172036] hover:-translate-y-1 hover:shadow-lg hover:bg-blue-50 dark:hover:bg-[#15203c] transition-all duration-300 cursor-pointer flex flex-col",

  title:
    "!text-[17px] md:!text-[17px] font-medium text-black dark:text-white leading-snug truncate",

  subtitle: "text-gray-500 text-[10px] truncate",

  statText:
    "flex items-center gap-1 text-gray-500 text-[10px] font-medium",

  expiryBox:
    "flex items-center gap-1 bg-blue-50 dark:bg-blue-900/20 px-1.5 py-1 rounded-md",

  button:
  "block w-full text-center bg-white border border-primary-500 text-primary-500 font-medium py-1 rounded-md transition-all duration-300 hover:bg-primary-500 hover:text-white flex items-center justify-center gap-1 text-[10px]",
};

type Course = {
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

const coursesData: Course[] = [
  {
    id: 1,
    title: "JEE Advanced Physics",
    subtitle: "Complete Test Series 2025",
    image:
      "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=600",
    progress: 65,
    completedTests: 13,
    totalTests: 20,
    expiryDate: "Dec 31, 2025",
    viewLink: "/lms/course-details",
    totalVideos: 12,
  },
  {
    id: 2,
    title: "JEE Advanced Chemistry",
    subtitle: "Complete Test Series 2025",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=600",
    progress: 45,
    completedTests: 9,
    totalTests: 20,
    expiryDate: "Dec 31, 2025",
    viewLink: "/lms/course-details",
    totalVideos: 8,
  },
  {
    id: 3,
    title: "JEE Advanced Mathematics",
    subtitle: "Complete Test Series 2025",
    image:
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=600",
    progress: 30,
    completedTests: 6,
    totalTests: 20,
    expiryDate: "Dec 31, 2025",
    viewLink: "/lms/course-details",
    totalVideos: 15,
  },
  {
    id: 4,
    title: "NEET Physics",
    subtitle: "Complete Test Series 2025",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600",
    progress: 80,
    completedTests: 16,
    totalTests: 20,
    expiryDate: "Dec 31, 2025",
    viewLink: "/lms/course-details",
    totalVideos: 20,
  },
  {
    id: 5,
    title: "NEET Biology",
    subtitle: "Complete Test Series 2025",
    image:
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=600",
    progress: 20,
    completedTests: 4,
    totalTests: 20,
    expiryDate: "Dec 31, 2025",
    viewLink: "/lms/course-details",
    totalVideos: 10,
  },
];

const FeaturedCourses: React.FC = () => {
  return (
    <div className="mb-[25px]">
      <div className="mb-[15px]">
        <h5 className="font-bold text-[18px] dark:text-white">
          Featured Courses
        </h5>
      </div>

      <div className="flex gap-[25px] overflow-x-auto pb-4 scrollbar-hide">
        {coursesData.map((course) => (
          <div key={course.id} className={CARD_THEME.wrapper}>
            <div className="h-[110px] w-full overflow-hidden flex-shrink-0">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-[10px] flex flex-col flex-grow justify-between">
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCourses;
