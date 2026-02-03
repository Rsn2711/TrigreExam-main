
import React from "react";
import { Link } from "react-router-dom";

interface Announcement {
    id: number;
    title: string;
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
            category: "Exam Update",
            status: "New",
            time: "2h ago",
            isNew: true,
        },
        {
            id: 2,
            title: "New Quantitative Aptitude Module Added",
            category: "Content",
            status: "New",
            time: "5h ago",
            isNew: true,
        },
        {
            id: 3,
            title: "Scheduled System Maintenance",
            category: "System",
            status: "Important",
            time: "1d ago",
        },
        {
            id: 4,
            title: "Tier-II Mock Test Results Live",
            category: "Exam Update",
            status: "Resolved",
            time: "2d ago",
        },
        {
            id: 5,
            title: "New History Course Available",
            category: "Content",
            status: "New",
            time: "3d ago",
            isNew: true,
        },

    ];

    const displayedAnnouncements = announcements.slice(0, 3);

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

    return (
        <div className="trezo-card bg-white dark:bg-[#0c1427] p-[20px] md:p-[25px] rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-blue-50 dark:hover:bg-[#15203c]">

            <div className="trezo-card-header mb-[20px] pb-4 border-b border-gray-100 dark:border-[#172036] flex items-center justify-between shrink-0">
                <div className="trezo-card-title">
                    <h5 className="!mb-0">Announcements</h5>
                </div>
                <Link
                    to="/announcements"
                    className="text-primary-500 hover:text-primary-600 font-medium text-sm transition-colors"
                >
                    View All
                </Link>
            </div>

            <div className="trezo-card-content overflow-y-auto pr-2 custom-scrollbar">
                <div className="flex flex-col gap-[15px]">
                    {displayedAnnouncements.map((item) => (
                        <div
                            key={item.id}
                            className="p-[15px] rounded-md border border-gray-100 dark:border-[#172036] hover:bg-gray-50 dark:hover:bg-[#15203c] transition-all group cursor-pointer"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <span
                                    className={`px-2 py-0.5 rounded text-[10px] font-semibold border ${getCategoryColor(
                                        item.category
                                    )}`}
                                >
                                    {item.category}
                                </span>
                                <span className="text-xs text-gray-400">{item.time}</span>
                            </div>
                            <h6 className="text-sm font-semibold text-black dark:text-white mb-0 group-hover:text-primary-500 transition-colors line-clamp-2">
                                {item.title}
                            </h6>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Announcements;
