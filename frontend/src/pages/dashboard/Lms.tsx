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
    shortDescription: "Comprehensive test series for Class 13 droppers covering all major subjects.",
    image: "/images/courses/neev-course.png",

    // 🔑 ONLY REQUIRED DATA FOR CARD
    totalVideos: 12,
    completedTests: 13,
    totalTests: 20,
    expiryDate: "Dec 31, 2025",

    progress: 65,
    viewLink: "/lms/course-details",

    price: "FREE",
    originalPrice: "₹599",
    discount: "Discount of 100% applied",

    // ❌ NOT USED IN CARD UI ANYMORE
    features: [],
  },
  {
    id: 2,
    title: "JEE Advanced Chemistry",
    subtitle: "Complete Test Series 2025",
    shortDescription: "Master Organic, Inorganic, and Physical Chemistry with our advanced test series.",
    image: "/images/courses/neev-course.png",
    totalVideos: 8,
    completedTests: 9,
    totalTests: 20,
    expiryDate: "Dec 31, 2025",
    progress: 45,
    viewLink: "/lms/course-details",
    price: "FREE",
    originalPrice: "₹599",
    discount: "Discount of 100% applied",
    features: [],
  },
  {
    id: 3,
    title: "JEE Advanced Mathematics",
    subtitle: "Complete Test Series 2025",
    shortDescription: "Boost your problem-solving skills with high-level mathematics questions and solutions.",
    image: "/images/courses/neev-course.png",
    totalVideos: 15,
    completedTests: 6,
    totalTests: 20,
    expiryDate: "Dec 31, 2025",
    progress: 30,
    viewLink: "/lms/course-details",
    price: "FREE",
    originalPrice: "₹599",
    discount: "Discount of 100% applied",
    features: [],
  },
  {
    id: 4,
    title: "NEET Physics",
    subtitle: "Complete Test Series 2025",
    image: "/images/courses/neev-course.png",
    totalVideos: 20,
    completedTests: 16,
    totalTests: 20,
    expiryDate: "Dec 31, 2025",
    progress: 80,
    viewLink: "/lms/course-details",
    price: "FREE",
    originalPrice: "₹599",
    discount: "Discount of 100% applied",
    features: [],
  },
  {
    id: 5,
    title: "NEET Biology",
    subtitle: "Complete Test Series 2025",
    image: "/images/courses/neev-course.png",
    totalVideos: 10,
    completedTests: 4,
    totalTests: 20,
    expiryDate: "Dec 31, 2025",
    progress: 20,
    viewLink: "/lms/course-details",
    price: "FREE",
    originalPrice: "₹599",
    discount: "Discount of 100% applied",
    features: [],
  },
  {
    id: 6,
    title: "NEET Chemistry",
    subtitle: "Complete Test Series 2025",
    image: "/images/courses/neev-course.png",
    totalVideos: 18,
    completedTests: 11,
    totalTests: 20,
    expiryDate: "Dec 31, 2025",
    progress: 55,
    viewLink: "/lms/course-details",
    price: "FREE",
    originalPrice: "₹599",
    discount: "Discount of 100% applied",
    features: [],
  },
];

const Lms = () => {
  return (
    <>
      {/* Welcome Section */}
      <div className="mb-[25px]">
        <Welcome />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-[25px] mb-[25px]">
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

      {/* Courses + Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mb-[25px]">
        <div className="lg:col-span-2">
          <Courses
            title="Enrolled Courses"
            courses={coursesData}
            variant="horizontal"
          />
        </div>

        <div className="flex flex-col gap-[25px]">
          <QuickAccess />
          <Announcements />
        </div>
      </div>

      {/* Explore Courses */}
      <div className="grid grid-cols-1 gap-[15px] mb-[25px]">
        <Courses title="Explore Courses" courses={coursesData} />
      </div>
    </>
  );
};

export default Lms;
