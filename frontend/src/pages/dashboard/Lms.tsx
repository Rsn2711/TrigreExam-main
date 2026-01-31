import StudentsInterestedTopics from "../../components/Dashboard/LMS/StudentsInterestedTopics";
import QuickAccess from "../../components/Dashboard/LMS/QuickAccess";
import Announcements from "../../components/Dashboard/LMS/Announcements";
import StatsCard from "../../components/Dashboard/LMS/StatsCard";
import Welcome from "../../components/Dashboard/LMS/Welcome";
import CourseList, { type Course } from "../../components/Dashboard/LMS/CourseList";

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

const Lms = () => {
  return (
    <>
      <div className="mb-[25px]">
        <Welcome />
      </div>

      <div className="sm:grid sm:grid-cols-3 gap-[15px] mb-[25px]">
        <StatsCard
          title="TESTS TAKEN"
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
          title="AVG. SCORE"
          value="78%"
          icon="monitoring"
          iconClassName="bg-success-50 text-success-600"
          badge={
            <div className="flex items-center gap-1 bg-success-50 text-success-600 text-[10px] font-semibold px-1.5 py-0.5 rounded-full mt-1 w-fit">
              <i className="material-symbols-outlined text-[12px]">
                trending_up
              </i>
              <span>+2.5% increase</span>
            </div>
          }
        />
        <StatsCard
          title="ALL INDIA RANK"
          value="#142"
          icon="workspace_premium"
          iconClassName="bg-orange-50 text-orange-500"
          badge={
            <span className="inline-block bg-success-50 text-success-600 text-[10px] font-semibold px-1.5 py-0.5 rounded-full mt-1 w-fit">
              Top 5%
            </span>
          }
        />
      </div>

      <div className="grid grid-cols-1 gap-[15px] mb-[25px]">
        <CourseList title="Enrolled Courses" courses={coursesData} />
        <CourseList title="Featured Courses" courses={coursesData} />
        <CourseList title="Explore Courses" courses={coursesData} />
      </div>

      <div className="lg:grid lg:grid-cols-5 gap-[15px]">
        <div className="lg:col-span-3 h-full pb-[25px]">
          <StudentsInterestedTopics />
        </div>

        <div className="lg:col-span-2 flex flex-col h-full">
          <QuickAccess />
          <div className="flex-grow pb-[25px]">
            <Announcements />
          </div>
        </div>
      </div>


    </>
  );
};

export default Lms;
