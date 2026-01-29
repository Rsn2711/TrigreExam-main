
import React from "react";

const Welcome: React.FC = () => {
  return (
    <>
      <div
        className="trezo-card mb-[25px] p-[20px] md:p-[30px] rounded-2xl relative overflow-hidden group"
        style={{
          background: "linear-gradient(135deg, #667EEA 0%, #764BA2 100%)",
        }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-white opacity-5 rounded-full translate-y-1/3 -translate-x-1/3 blur-2xl pointer-events-none"></div>

        <div className="trezo-card-content relative z-10 sm:ltr:pr-[250px] sm:rtl:pl-[250px]">
          <div className="md:py-[15px]">
            <h5 className="!mb-[10px] !font-bold !text-2xl md:!text-3xl !text-white tracking-tight">
              Welcome back, Student! <span className="text-3xl md:text-4xl animate-wave inline-block origin-[70%_70%]">👋</span>
            </h5>

            <p className="text-white/90 text-md font-medium max-w-[500px] leading-relaxed">
              You're doing great! Keep up the excellent work on your JEE preparation.
              Your consistency is key to success.
            </p>

            <div className="md:mt-[30px] md:flex items-center gap-[20px]">
              <div className="mt-[20px] md:mt-0 flex items-center p-3 pr-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all duration-300">
                <div className="w-[48px] h-[48px] ltr:mr-[15px] rtl:ml-[15px] bg-white/20 text-white rounded-lg flex items-center justify-center shadow-sm">
                  <i className="material-symbols-outlined text-[24px]">event</i>
                </div>
                <div>
                  <span className="block font-bold text-white text-xl">
                    135
                  </span>
                  <span className="block text-white/80 text-xs uppercase tracking-wide font-medium">Days Left (JEE 2025)</span>
                </div>
              </div>

              <div className="mt-[20px] md:mt-0 flex items-center p-3 pr-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all duration-300">
                <div className="w-[48px] h-[48px] ltr:mr-[15px] rtl:ml-[15px] bg-white/20 text-white rounded-lg flex items-center justify-center shadow-sm">
                  <i className="material-symbols-outlined text-[24px]">schedule</i>
                </div>
                <div>
                  <span className="block font-bold text-white text-xl">
                    142h
                  </span>
                  <span className="block text-white/80 text-xs uppercase tracking-wide font-medium">Hours Spent</span>
                </div>
              </div>
            </div>
          </div>

          <div className="sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:ltr:-right-[10px] sm:rtl:-left-[10px] sm:-mt-[10px] sm:max-w-[320px] drop-shadow-2xl">
            <img
              src="/images/online-learning.gif"
              alt="online-learning-image"
              className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-500"
              width={290}
              height={222}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
