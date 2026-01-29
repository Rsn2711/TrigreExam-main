
import React from "react";

const TotalEnrolled: React.FC = () => {
  return (
    <>
      <div className="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] rounded-2xl border border-gray-100 dark:border-[#172036] shadow-sm flex justify-between items-center group hover:shadow-lg hover:-translate-y-1 hover:bg-blue-50 dark:hover:bg-[#15203c] transition-all duration-300 cursor-pointer">
        <div className="trezo-card-content">
          <span className="block text-black font-bold text-sm mb-1">Avg. Score</span>

          <h3 className="text-[28px] font-bold text-gray-900 dark:text-white mb-1">78%</h3>

          <span className="inline-block text-xs font-medium text-success-600 bg-success-50 dark:bg-[#15203c] px-2 py-0.5 rounded-full">
            +2.5% increase
          </span>
        </div>

        <div className="flex items-center justify-center w-[55px] h-[55px] bg-success-50 text-success-600 rounded-2xl dark:bg-[#15203c]">
          <i className="material-symbols-outlined !text-[28px]">
            trending_up
          </i>
        </div>
      </div>
    </>
  );
};

export default TotalEnrolled;
