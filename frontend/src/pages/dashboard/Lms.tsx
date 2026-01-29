import Courses from "../../components/Dashboard/LMS/Courses";
import FeaturedCourses from "../../components/Dashboard/LMS/FeaturedCourses";
import ExploreCourses from "../../components/Dashboard/LMS/ExploreCourses";
import StudentsInterestedTopics from "../../components/Dashboard/LMS/StudentsInterestedTopics";
import QuickAccess from "../../components/Dashboard/LMS/QuickAccess";
import Announcements from "../../components/Dashboard/LMS/Announcements";
import TotalCourses from "../../components/Dashboard/LMS/TotalCourses";
import TotalEnrolled from "../../components/Dashboard/LMS/TotalEnrolled";
import TotalMentors from "../../components/Dashboard/LMS/TotalMentors";
import Welcome from "../../components/Dashboard/LMS/Welcome";

const Lms = () => {
  return (
    <>
      <div className="mb-[25px]">
        <Welcome />
      </div>

      <div className="sm:grid sm:grid-cols-3 gap-[15px] mb-[25px]">
        <div>
          <TotalCourses />
        </div>

        <div>
          <TotalEnrolled />
        </div>

        <div>
          <TotalMentors />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-[15px] mb-[25px]">
        <Courses />
        <FeaturedCourses />
        <ExploreCourses />
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
