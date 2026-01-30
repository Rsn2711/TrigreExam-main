import React from "react";

const TotalMentors: React.FC = () => {
  return (
    <div className="bg-white dark:bg-[#0c1427] h-full rounded-2xl p-[12px] shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-between">
      <div className="flex flex-col gap-0.5">
        <span className="block text-gray-500 dark:text-gray-400 text-[10px] font-bold uppercase tracking-wider">
          ALL INDIA RANK
        </span>
        <h3 className="mb-0 text-xl font-bold text-gray-900 dark:text-white mt-0">
          #142
        </h3>
        <span className="inline-block bg-success-50 text-success-600 text-[10px] font-semibold px-1.5 py-0.5 rounded-full mt-1 w-fit">
          Top 5%
        </span>
      </div>
      <div className="w-[42px] h-[42px] rounded-2xl bg-orange-50 dark:bg-[#15203c] text-orange-500 flex items-center justify-center text-xl">
        <i className="material-symbols-outlined text-[20px]">workspace_premium</i>
      </div>
    </div>
  );
};

export default TotalMentors;
