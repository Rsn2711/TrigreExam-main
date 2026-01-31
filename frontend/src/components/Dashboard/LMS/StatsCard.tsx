import React, { type ReactNode } from "react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: string;
  iconClassName: string;
  badge: ReactNode;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  icon,
  iconClassName,
  badge,
}) => {
  return (
    <div
      className="
        bg-white dark:bg-[#0c1427]
        h-full
        rounded-2xl
        p-[12px]
        shadow-sm
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-lg
        hover:bg-blue-50
        dark:hover:bg-[#15203c]
        flex items-center justify-between
      "
    >
      <div className="flex flex-col gap-0.5">
        <span className="block text-gray-500 dark:text-gray-400 text-[10px] font-bold uppercase tracking-wider">
          {title}
        </span>
        <h3 className="mb-0 text-xl font-bold text-gray-900 dark:text-white mt-0">
          {value}
        </h3>
        {badge}
      </div>

      <div
        className={`w-[42px] h-[42px] rounded-2xl flex items-center justify-center text-xl dark:bg-[#15203c] ${iconClassName}`}
      >
        <i className="material-symbols-outlined text-[20px]">{icon}</i>
      </div>
    </div>
  );
};

export default StatsCard;
