
import React from "react";
import { useNavigate } from "react-router-dom";


const MyPurchases: React.FC = () => {
    const navigate = useNavigate();
    // Demo Data
    const purchases = [
        {
            id: "#ORD-00124",
            course: "SSC CGL Foundation Program (Comprehensive Preparation Course)",
            date: "25 Oct 2024",
            price: "₹4999",
            status: "Completed",
            statusClass: "text-success-600 bg-success-50",
            invoice: "INV-1023",
        },
        {
            id: "#ORD-00123",
            course: "SSC CGL Quantitative Aptitude – Advanced Mastery Program",
            date: "15 Oct 2024",
            price: "₹1499",
            status: "Completed",
            statusClass: "text-success-600 bg-success-50",
            invoice: "INV-1022",
        },
        {
            id: "#ORD-00120",
            course: "SSC English Grammar & Vocabulary – Comprehensive Course",
            date: "10 Oct 2024",
            price: "₹999",
            status: "Pending",
            statusClass: "text-warning-600 bg-warning-50",
            invoice: "-",
        },
        {
            id: "#ORD-00115",
            course: "Previous Year Questions (PYQs) – Practice & Analysis Course",
            date: "01 Oct 2024",
            price: "₹499",
            status: "Completed",
            statusClass: "text-success-600 bg-success-50",
            invoice: "INV-1015",
        },
    ];

    return (
        <>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-[25px] gap-[15px]">
                <div>
                    <h2 className="text-xl font-bold text-black dark:text-white mb-1">
                        My Purchases
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">
                        View your order history and download invoices.
                    </p>
                </div>

                <div className="relative">
                    <i className="material-symbols-outlined absolute left-[15px] top-1/2 -translate-y-1/2 text-gray-400">search</i>
                    <input
                        type="text"
                        placeholder="Search orders..."
                        className="bg-white dark:bg-[#0c1427] h-[45px] rounded-md outline-none pl-[45px] pr-[20px] w-full md:w-[300px] border border-gray-100 dark:border-[#172036] focus:border-primary-500 transition-all text-black dark:text-white"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[25px]">
                {purchases.slice(0, 3).map((purchase, index) => {
                    // Define images for each card
                    const images = [
                        '/images/ssc.png',
                        '/images/cat.webp',
                        '/images/upsc.webp'
                    ];
                    const titles = ['SSC Essentials', 'CAT Essentials', 'UPSC Essentials'];
                    const image = images[index % 3];
                    const title = titles[index % 3];

                    return (
                        <div
                            key={index}
                            className="bg-white dark:bg-[#0c1427] rounded-xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl border border-gray-100 dark:border-[#172036]"
                        >
                            {/* Image Header */}
                            <div className="relative h-[140px] overflow-hidden">
                                <img
                                    src={image}
                                    alt={title}
                                    className="w-full h-full object-cover"
                                    style={{ objectPosition: 'center top' }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>

                            {/* Card Content */}
                            <div className="p-5">
                                {/* Badge */}
                                <div className="mb-3">
                                    <span className="inline-block px-2.5 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-xs font-bold rounded uppercase tracking-wide">
                                        Video Course
                                    </span>
                                </div>

                                {/* Course Title */}
                                <h5 className="text-[15px] font-bold text-black dark:text-white mb-3 leading-snug line-clamp-2 min-h-[42px]">
                                    {purchase.course}
                                </h5>

                                {/* Meta Information */}
                                <div className="flex flex-wrap items-center gap-3 mb-3 text-[12px] text-gray-500 dark:text-gray-400">
                                    <div className="flex items-center gap-1">
                                        <i className="material-symbols-outlined !text-[16px]">receipt_long</i>
                                        <span>{purchase.id}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <i className="material-symbols-outlined !text-[16px]">calendar_today</i>
                                        <span>{purchase.date}</span>
                                    </div>
                                </div>

                                {/* Status */}
                                <div className="mb-4">
                                    <span className={`inline-block px-2.5 py-1 rounded text-xs font-semibold ${purchase.statusClass}`}>
                                        {purchase.status}
                                    </span>
                                </div>

                                {/* Price and Action */}
                                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-[#172036]">
                                    <div>
                                        <span className="text-xl font-bold text-black dark:text-white">{purchase.price}</span>
                                    </div>

                                    {purchase.status === "Completed" && (
                                        <button
                                            onClick={() => navigate(`/invoice/${encodeURIComponent(purchase.id)}`)}
                                            className="flex items-center gap-1.5 py-2 px-4 border-2 border-primary-600 text-primary-600 rounded-lg text-[13px] font-semibold hover:bg-primary-600 hover:text-white transition-all"
                                        >
                                            <i className="material-symbols-outlined !text-[18px]">download</i>
                                            Invoice
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default MyPurchases;
