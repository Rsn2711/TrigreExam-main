import React from "react";

const TotalEnrolled: React.FC = () => {
    return (
        <div className="bg-white dark:bg-[#0c1427] h-full rounded-2xl p-[12px] shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-between">
            <div className="flex flex-col gap-0.5">
                <span className="block text-gray-500 dark:text-gray-400 text-[10px] font-bold uppercase tracking-wider">
                    AVG. SCORE
                </span>
                <h3 className="mb-0 text-xl font-bold text-gray-900 dark:text-white mt-0">
                    78%
                </h3>
                <div className="flex items-center gap-1 bg-success-50 text-success-600 text-[10px] font-semibold px-1.5 py-0.5 rounded-full mt-1 w-fit">
                    <i className="material-symbols-outlined text-[12px]">trending_up</i>
                    <span>+2.5% increase</span>
                </div>
            </div>
            <div className="w-[42px] h-[42px] rounded-2xl bg-success-50 dark:bg-[#15203c] text-success-600 flex items-center justify-center text-xl">
                <i className="material-symbols-outlined text-[20px]">monitoring</i>
            </div>
        </div>
    );
};

export default TotalEnrolled;
