
import React from "react";

interface Announcement {
    id: number;
    title: string;
    description: string;
    category: "Exam Update" | "Content" | "System";
    status: "New" | "Important" | "Resolved";
    time: string;
    isNew?: boolean;
}

const Announcements: React.FC = () => {
    const announcements: Announcement[] = [
        {
            id: 1,
            title: "SSC CGL 2024 Exam Dates Announced",
            description: "The Staff Selection Commission has officially released the tentative schedule for the Tier-I examination. Check your eligibility and start preparing now.",
            category: "Exam Update",
            status: "New",
            time: "2h ago",
            isNew: true,
        },
        {
            id: 2,
            title: "New Quantitative Aptitude Module Added",
            description: "We have updated the Advanced Mastery Program with 20 new lessons on Trigonometry and Geometry shortcuts.",
            category: "Content",
            status: "New",
            time: "5h ago",
            isNew: true,
        },
        {
            id: 3,
            title: "Scheduled System Maintenance",
            description: "The platform will be undergoing scheduled maintenance on Sunday from 2 AM to 4 AM. Please plan your study sessions accordingly.",
            category: "System",
            status: "Important",
            time: "1d ago",
        },
        {
            id: 4,
            title: "Tier-II Mock Test Results Live",
            description: "Results for the All India Mock Test held on Saturday are now available. Check your detailed analysis report.",
            category: "Exam Update",
            status: "Resolved",
            time: "2d ago",
        },
    ];

    const getCategoryColor = (category: Announcement["category"]) => {
        switch (category) {
            case "Exam Update":
                return "bg-primary-50 text-primary-600 border-primary-100";
            case "Content":
                return "bg-purple-50 text-purple-600 border-purple-100";
            case "System":
                return "bg-orange-50 text-orange-600 border-orange-100";
            default:
                return "bg-gray-50 text-gray-600 border-gray-100";
        }
    };

    const getStatusColor = (status: Announcement["status"]) => {
        switch (status) {
            case "New":
                return "bg-red-500 text-white";
            case "Important":
                return "bg-amber-500 text-white";
            case "Resolved":
                return "bg-success-500 text-white";
            default:
                return "bg-gray-500 text-white";
        }
    };

    return (
        <>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-[25px] gap-[15px]">
                <div>
                    <h2 className="text-xl font-bold text-black dark:text-white mb-1">
                        Announcements
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">
                        Stay updated with the latest news and platform updates.
                    </p>
                </div>

                <div className="relative">
                    <i className="material-symbols-outlined absolute left-[15px] top-1/2 -translate-y-1/2 text-gray-400">search</i>
                    <input
                        type="text"
                        placeholder="Search announcements..."
                        className="bg-white dark:bg-[#0c1427] h-[45px] rounded-md outline-none pl-[45px] pr-[20px] w-full md:w-[300px] border border-gray-100 dark:border-[#172036] focus:border-primary-500 transition-all text-black dark:text-white"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-[20px]">
                {announcements.map((item) => (
                    <div
                        key={item.id}
                        className="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-md border border-gray-100 dark:border-[#172036] hover:bg-gray-50 dark:hover:bg-[#15203c] transition-all duration-300 cursor-pointer group"
                    >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-[15px]">
                            <div className="flex items-center gap-3">
                                <span
                                    className={`px-3 py-1 rounded text-xs font-semibold border ${getCategoryColor(
                                        item.category
                                    )}`}
                                >
                                    {item.category}
                                </span>
                                {item.isNew && (
                                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${getStatusColor(item.status)}`}>
                                        {item.status}
                                    </span>
                                )}
                            </div>
                            <span className="text-sm text-gray-400 flex items-center gap-1">
                                <i className="material-symbols-outlined text-[16px]">schedule</i>
                                {item.time}
                            </span>
                        </div>

                        <h3 className="text-lg font-bold text-black dark:text-white mb-[8px] group-hover:text-primary-600 transition-colors">
                            {item.title}
                        </h3>

                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-4xl">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Announcements;
