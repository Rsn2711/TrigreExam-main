import PerformanceStats from "../../components/Dashboard/LMS/PerformanceStats";
import QuickAccess from "../../components/Dashboard/LMS/QuickAccess";
import Announcements from "../../components/Dashboard/LMS/Announcements";
import StatsCard from "../../components/Dashboard/LMS/StatsCard";
import Welcome from "../../components/Dashboard/LMS/Welcome";
import Courses, { type Course } from "../../components/Dashboard/LMS/Courses";

const coursesData: Course[] = [
  {
    id: 1,
    title: "Class 13 (Dropper) Test Series ( X Series...)",
    subtitle: "Complete Test Series 2025",
    image: "/images/courses/neev-course.png",
    progress: 65,
    completedTests: 13,
    totalTests: 20,
    expiryDate: "Dec 31, 2025",
    viewLink: "/lms/course-details",
    totalVideos: 12,
    price: "FREE",
    originalPrice: "₹599",
    discount: "Discount of 100% applied",
    features: [
      "Live Test on Sundays only",
      "Free for all (No batch required)",
      "Syllabus and details for upcoming test shared by Monday",
      "Useful for Careerwill Students (Batch Enrollment) – X1, X2, X3",
      "NTA-like Exam Interface",
      "Detailed Performance Analysis",
      "Question Insights + 📌 Bookmark for revision",
      "Reattempt option available",
      "Updates in Announcement Section",
      "Results every Monday at 10:00 AM"
    ]
  },
  {
    id: 2,
    title: "JEE Advanced Chemistry",
    subtitle: "Complete Test Series 2025",
    image: "/images/courses/neev-course.png",
    progress: 45,
    completedTests: 9,
    totalTests: 20,
    expiryDate: "Dec 31, 2025",
    viewLink: "/lms/course-details",
    totalVideos: 8,
    price: "FREE",
    originalPrice: "₹599",
    discount: "Discount of 100% applied",
    features: [
      "Live Test on Sundays only",
      "Free for all (No batch required)",
      "Syllabus and details for upcoming test shared by Monday",
      "Useful for Careerwill Students (Batch Enrollment) – X1, X2, X3",
      "NTA-like Exam Interface",
      "Detailed Performance Analysis",
      "Question Insights + 📌 Bookmark for revision",
      "Reattempt option available",
      "Updates in Announcement Section",
      "Results every Monday at 10:00 AM"
    ]
  },
  {
    id: 3,
    title: "JEE Advanced Mathematics",
    subtitle: "Complete Test Series 2025",
    image: "/images/courses/neev-course.png",
    progress: 30,
    completedTests: 6,
    totalTests: 20,
    expiryDate: "Dec 31, 2025",
    viewLink: "/lms/course-details",
    totalVideos: 15,
    price: "FREE",
    originalPrice: "₹599",
    discount: "Discount of 100% applied",
    features: [
      "Live Test on Sundays only",
      "Free for all (No batch required)",
      "Syllabus and details for upcoming test shared by Monday",
      "Useful for Careerwill Students (Batch Enrollment) – X1, X2, X3",
      "NTA-like Exam Interface",
      "Detailed Performance Analysis",
      "Question Insights + 📌 Bookmark for revision",
      "Reattempt option available",
      "Updates in Announcement Section",
      "Results every Monday at 10:00 AM"
    ]
  },
  {
    id: 4,
    title: "NEET Physics",
    subtitle: "Complete Test Series 2025",
    image: "/images/courses/neev-course.png",
    progress: 80,
    completedTests: 16,
    totalTests: 20,
    expiryDate: "Dec 31, 2025",
    viewLink: "/lms/course-details",
    totalVideos: 20,
    price: "FREE",
    originalPrice: "₹599",
    discount: "Discount of 100% applied",
    features: [
      "Live Test on Sundays only",
      "Free for all (No batch required)",
      "Syllabus and details for upcoming test shared by Monday",
      "Useful for Careerwill Students (Batch Enrollment) – X1, X2, X3",
      "NTA-like Exam Interface",
      "Detailed Performance Analysis",
      "Question Insights + 📌 Bookmark for revision",
      "Reattempt option available",
      "Updates in Announcement Section",
      "Results every Monday at 10:00 AM"
    ]
  },
  {
    id: 5,
    title: "NEET Biology",
    subtitle: "Complete Test Series 2025",
    image: "/images/courses/neev-course.png",
    progress: 20,
    completedTests: 4,
    totalTests: 20,
    expiryDate: "Dec 31, 2025",
    viewLink: "/lms/course-details",
    totalVideos: 10,
    price: "FREE",
    originalPrice: "₹599",
    discount: "Discount of 100% applied",
    features: [
      "Live Test on Sundays only",
      "Free for all (No batch required)",
      "Syllabus and details for upcoming test shared by Monday",
      "Useful for Careerwill Students (Batch Enrollment) – X1, X2, X3",
      "NTA-like Exam Interface",
      "Detailed Performance Analysis",
      "Question Insights + 📌 Bookmark for revision",
      "Reattempt option available",
      "Updates in Announcement Section",
      "Results every Monday at 10:00 AM"
    ]
  },
  {
    id: 6,
    title: "NEET Chemistry",
    subtitle: "Complete Test Series 2025",
    image: "/images/courses/neev-course.png",
    progress: 55,
    completedTests: 11,
    totalTests: 20,
    expiryDate: "Dec 31, 2025",
    viewLink: "/lms/course-details",
    totalVideos: 18,
    price: "FREE",
    originalPrice: "₹599",
    discount: "Discount of 100% applied",
    features: [
      "Live Test on Sundays only",
      "Free for all (No batch required)",
      "Syllabus and details for upcoming test shared by Monday",
      "Useful for Careerwill Students (Batch Enrollment) – X1, X2, X3",
      "NTA-like Exam Interface",
      "Detailed Performance Analysis",
      "Question Insights + 📌 Bookmark for revision",
      "Reattempt option available",
      "Updates in Announcement Section",
      "Results every Monday at 10:00 AM"
    ]
  },
];

const Lms = () => {
  return (
    <>
      <div className="mb-[25px]">
        <Welcome />
      </div>

      <div className="sm:grid sm:grid-cols-3 gap-[15px] mb-[25px]">
        <StatsCard
          title="TOTAL TESTS ATTEMPTED"
          value="24"
          icon="track_changes"
          iconClassName="bg-red-50 text-red-500"
          badge={
            <span className="inline-block bg-success-50 text-success-600 text-[10px] font-semibold px-1.5 py-0.5 rounded-full mt-1 w-fit">
              +4 this week
            </span>
          }
        />
        <StatsCard
          title="ENROLLED COURSES"
          value="12"
          icon="library_books"
          iconClassName="bg-purple-50 text-purple-600"
          badge={
            <div className="flex items-center gap-1 bg-success-50 text-success-600 text-[10px] font-semibold px-1.5 py-0.5 rounded-full mt-1 w-fit">
              <i className="material-symbols-outlined text-[12px]">
                trending_up
              </i>
              <span>+2 new</span>
            </div>
          }
        />
        <StatsCard
          title="TOTAL DOCUMENTS"
          value="350"
          icon="description"
          iconClassName="bg-blue-50 text-blue-500"
          badge={
            <span className="inline-block bg-success-50 text-success-600 text-[10px] font-semibold px-1.5 py-0.5 rounded-full mt-1 w-fit">
              +5 new
            </span>
          }
        />
      </div>

      <div className="lg:grid lg:grid-cols-3 gap-[25px] mb-[25px]">
        <div className="lg:col-span-2 h-full">
          <Courses
            title="Enrolled Courses"
            courses={coursesData}
            variant="horizontal"
          />
        </div>

        <div className="lg:col-span-1 flex flex-col gap-[25px] h-full">
          <QuickAccess />
          <div className="flex-grow">
            <Announcements />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-[15px] mb-[25px]">
        {/* <Courses title="Featured Courses" courses={coursesData} /> */}
        <Courses title="Explore Courses" courses={coursesData} />
      </div>

      {/* <div className="mb-[25px]">
        <PerformanceStats />
      </div> */}


    </>
  );
};

export default Lms;
