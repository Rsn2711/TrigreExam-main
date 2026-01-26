
import React from "react";

const TotalMentors: React.FC = () => {
  return (
    <>
      <div className="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md">
        <div className="trezo-card-content">
          <span className="block">Total Documents</span>

          <h5 className="!text-[20px] mt-[3px] !mb-0">145</h5>

          <div className="flex items-center justify-center mx-auto text-orange-500 bg-orange-100 dark:bg-[#15203c] w-[77px] h-[77px] my-[15px] rounded-full">
            <i className="material-symbols-outlined !text-[32px]">description</i>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="block">Downloaded</span>

            <span className="leading-none text-success-600">
              <i className="material-symbols-outlined !text-[20px]">
                file_download
              </i>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TotalMentors;
