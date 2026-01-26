
import React from "react";


const MyPurchases: React.FC = () => {
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

            <div className="trezo-card bg-white dark:bg-[#0c1427] mb-[25px] p-[20px] md:p-[25px] rounded-md">
                <div className="trezo-card-header mb-[20px] md:mb-[25px] flex items-center justify-between">
                    <div className="trezo-card-title">
                        <h5 className="mb-0 text-black dark:text-white font-bold">Order History</h5>
                    </div>
                </div>

                <div className="trezo-card-content">
                    <div className="table-responsive overflow-x-auto">
                        <table className="w-full">
                            <thead className="text-black dark:text-white border-b border-gray-100 dark:border-[#172036]">
                                <tr>
                                    <th className="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap first:rounded-tl-md">
                                        Order ID
                                    </th>
                                    <th className="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap">
                                        Course
                                    </th>
                                    <th className="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap">
                                        Date
                                    </th>
                                    <th className="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap">
                                        Price
                                    </th>
                                    <th className="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap">
                                        Status
                                    </th>
                                    <th className="font-medium ltr:text-left rtl:text-right px-[20px] py-[11px] bg-gray-50 dark:bg-[#15203c] whitespace-nowrap last:rounded-tr-md">
                                        Action
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="text-black dark:text-white">
                                {purchases.map((purchase, index) => (
                                    <tr key={index} className="border-b border-gray-100 dark:border-[#172036] last:border-none">
                                        <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] font-medium">
                                            {purchase.id}
                                        </td>
                                        <td className="ltr:text-left rtl:text-right px-[20px] py-[15px]">
                                            <div className="font-medium max-w-[300px] truncate" title={purchase.course}>
                                                {purchase.course}
                                            </div>
                                        </td>
                                        <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] text-gray-500 dark:text-gray-400">
                                            {purchase.date}
                                        </td>
                                        <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px] font-bold">
                                            {purchase.price}
                                        </td>
                                        <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px]">
                                            <span className={`inline-block px-2.5 py-1 rounded text-xs font-medium ${purchase.statusClass}`}>
                                                {purchase.status}
                                            </span>
                                        </td>
                                        <td className="ltr:text-left rtl:text-right whitespace-nowrap px-[20px] py-[15px]">
                                            {purchase.status === "Completed" ? (
                                                <button className="flex items-center gap-1 text-primary-500 hover:text-primary-600 font-medium transition-colors text-sm">
                                                    <i className="material-symbols-outlined text-[18px]">download</i>
                                                    Invoice
                                                </button>
                                            ) : (
                                                <span className="text-gray-400 text-sm">-</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyPurchases;
