
import React from "react";
import { Link } from "react-router-dom";

const QuickAccess: React.FC = () => {
    const items = [
        {
            title: "Announcements",
            icon: "campaign",
            link: "/announcements",
            color: "text-primary-500",
            bg: "bg-primary-50",
        },
        {
            title: "Documents",
            icon: "description",
            link: "/documents", // Placeholder link
            color: "text-purple-500",
            bg: "bg-purple-50",
        },
        {
            title: "Results",
            icon: "bar_chart",
            link: "/my-results",
            color: "text-success-500",
            bg: "bg-success-50",
        },
        {
            title: "Contact Us",
            icon: "contact_support",
            link: "/front-pages/contact",
            color: "text-orange-500",
            bg: "bg-orange-50",
        },
    ];

    return (
        <>
            <div className="trezo-card bg-white dark:bg-[#0c1427] h-full p-[20px] md:p-[25px] rounded-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-blue-50 dark:hover:bg-[#15203c]">
                <div className="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between">
                    <div className="trezo-card-title">
                        <h5 className="!mb-0">Quick Access</h5>
                    </div>
                </div>

                <div className="trezo-card-content">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
                        {items.map((item, index) => (
                            <Link
                                key={index}
                                to={item.link}
                                className="flex items-center p-[15px] rounded-md bg-gray-50 dark:bg-[#15203c] hover:bg-gray-100 dark:hover:bg-[#1c2a4f] transition-all group"
                            >
                                <div
                                    className={`w-[45px] h-[45px] flex items-center justify-center rounded-full text-[24px] ${item.color} ${item.bg}`}
                                >
                                    <i className="material-symbols-outlined">{item.icon}</i>
                                </div>
                                <div className="ltr:ml-[15px] rtl:mr-[15px]">
                                    <h6 className="text-md font-semibold text-black dark:text-white mb-0 group-hover:text-primary-500 transition-colors">
                                        {item.title}
                                    </h6>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default QuickAccess;
