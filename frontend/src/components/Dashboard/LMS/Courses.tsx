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
  totalVideos: number;
};

const coursesData: Course[] = [
  {
    id: 1,
    title: "JEE Advanced Physics",
    subtitle: "Complete Test Series 2025",
    image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=600",
    color: "bg-white",
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
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=600",
    color: "bg-white",
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
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=600",
    color: "bg-white",
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
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600",
    color: "bg-white",
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
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=600",
    color: "bg-white",
    progress: 20,
    completedTests: 4,
    totalTests: 20,
    expiryDate: "Dec 31, 2025",
    viewLink: "/lms/course-details",
    totalVideos: 10,
  }
];

const Courses: React.FC = () => {
  return (
    <>
      <div className="mb-[25px]">
        {/* Header */}
        <div className="mb-[15px]">
          <h5 className="font-bold text-[18px] dark:text-white">Enrolled Courses</h5>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex gap-[25px] overflow-x-auto pb-4 scrollbar-hide">
          {coursesData.map((course) => (
            <div
              key={course.id}
              className="trezo-card bg-white dark:bg-[#0c1427] rounded-2xl overflow-hidden min-w-[350px] md:min-w-[380px] shadow-sm flex-shrink-0 border border-gray-100 dark:border-[#172036] hover:-translate-y-1 hover:shadow-lg hover:bg-blue-50 dark:hover:bg-[#15203c] transition-all duration-300 cursor-pointer"
            >
              {/* Header Image */}
              <div className="h-[180px] w-full overflow-hidden relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Body */}
              <div className="p-[20px] md:p-[25px]">
                <h3 className="text-black text-lg md:text-xl font-bold mb-1">{course.title}</h3>
                <p className="text-gray-500 text-xs mb-4">{course.subtitle}</p>



                {/* Stats Row */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                    <i className="material-symbols-outlined text-[18px]">play_lesson</i>
                    <span>{course.totalVideos} Videos • {course.totalTests} Tests</span>
                  </div>

                  <div className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 px-3 py-2 rounded-lg">
                    <i className="material-symbols-outlined text-blue-500 text-[18px]">schedule</i>
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

export default Courses;
