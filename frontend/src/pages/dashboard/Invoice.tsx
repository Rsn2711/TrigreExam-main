import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Invoice: React.FC = () => {
    const { orderId } = useParams<{ orderId: string }>();
    const [showDownloadMenu, setShowDownloadMenu] = useState(false);

    // Mock Data
    const invoiceData = {
        invoiceNo: orderId || "10Y113X4675",
        date: "10/11/2023",
        billTo: {
            name: "Dinesh Kumar S",
            phone: "+91-81442 26158",
            address: "Chennai, India"
        },
        items: [
            {
                description: "Agile for developers + MITRE ATT&CK Framework Essentials",
                quantity: 1,
                unitPrice: 66000,
                amount: 66000
            }
        ],
        total: 66000
    };

    const handleDownloadTxt = () => {
        const textContent = `
INVOICE
TrigreExam Japan
Invoice No: ${invoiceData.invoiceNo}
Date: ${invoiceData.date}

Bill To:
${invoiceData.billTo.name}
${invoiceData.billTo.phone}
${invoiceData.billTo.address}

Items:
${invoiceData.items.map(item => `${item.description} - Qty: ${item.quantity} - Price: ${item.unitPrice} - Amount: ${item.amount}`).join('\n')}

Total: ${invoiceData.total}
        `;
        const blob = new Blob([textContent], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Invoice-${invoiceData.invoiceNo}.txt`;
        a.click();
        window.URL.revokeObjectURL(url);
        setShowDownloadMenu(false);
    };

    return (
        <div className="min-h-screen bg-[#f3f4f6] dark:bg-[#0b0f1a] flex flex-col font-sans h-screen">
            {/* Top Bar / Toolbar */}
            <div className="bg-white dark:bg-[#0c1427] border-b border-gray-200 dark:border-[#172036] h-[60px] flex items-center justify-between px-4 sticky top-0 z-50 shadow-sm print:hidden">
                <div className="flex items-center gap-4">
                    {/* Download Button with Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setShowDownloadMenu(!showDownloadMenu)}
                            className="bg-[#10b981] hover:bg-[#059669] text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm font-medium transition-colors"
                        >
                            <span className="material-symbols-outlined text-[20px]">download</span>
                            Download
                            <span className="material-symbols-outlined text-[20px]">expand_more</span>
                        </button>

                        {/* Dropdown Menu */}
                        {showDownloadMenu && (
                            <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-[#1e293b] rounded-md shadow-xl border border-gray-200 dark:border-[#2d3748] py-1 z-50">
                                <a
                                    href="/images/TrigreExamInvoice.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-[#2d3748] text-sm text-gray-700 dark:text-gray-200 transition-colors"
                                    onClick={() => setShowDownloadMenu(false)}
                                >
                                    <span className="material-symbols-outlined text-red-500">picture_as_pdf</span>
                                    <span>PDF</span>
                                </a>
                                <button
                                    onClick={handleDownloadTxt}
                                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-[#2d3748] text-sm text-gray-700 dark:text-gray-200 transition-colors text-left"
                                >
                                    <span className="material-symbols-outlined text-blue-500">description</span>
                                    <span>TXT</span>
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="h-6 w-px bg-gray-300 dark:bg-gray-600 mx-2"></div>

                    <div className="flex items-center gap-1">
                        <button className="p-2 hover:bg-gray-100 dark:hover:bg-[#1e293b] rounded-full text-gray-600 dark:text-gray-400 transition-colors" title="Bookmark">
                            <span className="material-symbols-outlined text-[20px]">bookmark_border</span>
                        </button>
                        <button className="p-2 hover:bg-gray-100 dark:hover:bg-[#1e293b] rounded-full text-gray-600 dark:text-gray-400 transition-colors" title="Share">
                            <span className="material-symbols-outlined text-[20px]">share</span>
                        </button>
                        <button className="p-2 hover:bg-gray-100 dark:hover:bg-[#1e293b] rounded-full text-gray-600 dark:text-gray-400 transition-colors" title="More options">
                            <span className="material-symbols-outlined text-[20px]">more_horiz</span>
                        </button>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="relative hidden md:block group">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <span className="material-symbols-outlined text-[20px]">search</span>
                        </span>
                        <input
                            type="text"
                            placeholder="Find in document"
                            className="bg-[#f3f4f6] dark:bg-[#1e293b] h-9 pl-10 pr-4 rounded-md border border-transparent focus:bg-white dark:focus:bg-[#0c1427] focus:border-primary-500 outline-none w-[240px] transition-all text-sm text-gray-700 dark:text-gray-200 placeholder-gray-500"
                        />
                    </div>
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-[#1e293b] rounded-full text-gray-600 dark:text-gray-400 transition-colors" title="Fullscreen">
                        <span className="material-symbols-outlined text-[20px]">fullscreen</span>
                    </button>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex overflow-hidden">
                {/* Left Sidebar Tools */}
                <div className="w-[60px] bg-white dark:bg-[#0c1427] border-r border-gray-200 dark:border-[#172036] flex flex-col items-center py-4 gap-6 z-40 print:hidden shrink-0">
                    <div className="flex flex-col gap-4 w-full px-2 items-center">
                        <button className="p-2 hover:bg-gray-100 dark:hover:bg-[#1e293b] rounded-lg text-gray-600 dark:text-gray-400 transition-colors group relative" title="Table of Contents">
                            <span className="material-symbols-outlined text-[24px]">format_list_bulleted</span>
                        </button>
                        <button className="p-2 hover:bg-gray-100 dark:hover:bg-[#1e293b] rounded-lg text-gray-600 dark:text-gray-400 transition-colors group relative" title="Pages">
                            <span className="material-symbols-outlined text-[24px]">filter_none</span>
                        </button>
                    </div>

                    <div className="w-8 h-px bg-gray-200 dark:bg-gray-700"></div>

                    <div className="flex flex-col gap-4 w-full px-2 items-center">
                        <button className="p-2 hover:bg-gray-100 dark:hover:bg-[#1e293b] rounded-lg text-gray-600 dark:text-gray-400 transition-colors group relative" title="Crop">
                            <span className="material-symbols-outlined text-[24px]">crop</span>
                        </button>
                        <button className="p-2 hover:bg-gray-100 dark:hover:bg-[#1e293b] rounded-lg text-gray-600 dark:text-gray-400 transition-colors group relative" title="Edit / Sign">
                            <span className="material-symbols-outlined text-[24px]">edit</span>
                        </button>
                    </div>

                    {/* Page Navigation at Bottom */}
                    <div className="mt-auto flex flex-col items-center gap-2 mb-4 w-full">
                        <div className="w-8 h-px bg-gray-200 dark:bg-gray-700 mb-2"></div>

                        <button
                            className="p-1 hover:bg-gray-100 dark:hover:bg-[#1e293b] rounded text-gray-600 dark:text-gray-400 transition-colors"
                            onClick={() => { }}
                        >
                            <span className="material-symbols-outlined text-[24px]">keyboard_arrow_up</span>
                        </button>

                        <div className="flex flex-col items-center bg-white dark:bg-[#1e293b] border border-gray-300 dark:border-gray-600 rounded px-2 py-1 w-10 text-center">
                            <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">1</span>
                        </div>
                        <span className="text-xs text-gray-500">1</span>

                        <button
                            className="p-1 hover:bg-gray-100 dark:hover:bg-[#1e293b] rounded text-gray-600 dark:text-gray-400 transition-colors"
                            onClick={() => { }}
                        >
                            <span className="material-symbols-outlined text-[24px]">keyboard_arrow_down</span>
                        </button>
                    </div>
                </div>

                {/* Document Viewer Area */}
                <div className="flex-1 overflow-auto p-4 md:p-8 flex justify-center bg-[#e5e7eb] dark:bg-[#0b0f1a]">
                    <div className="bg-white dark:bg-white shadow-xl max-w-[850px] w-full min-h-[1100px] p-12 md:p-16 relative">

                        {/* Header Logo */}
                        <div className="flex justify-center mb-12">
                            <h1 className="text-4xl font-bold tracking-tight flex items-center gap-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                                <span className="text-[#a855f7]">Trigre</span><span className="text-[#1f2937]">Exam</span>
                            </h1>
                        </div>

                        {/* Company Address */}
                        <div className="flex justify-end mb-12 text-right">
                            <div className="max-w-[400px]">
                                <h2 className="text-2xl font-bold text-[#1f2937] mb-2">TrigreExam India llp</h2>
                                <p className="text-[#4b5563] text-sm leading-relaxed">
                                    J-203, The Palm Drive, Sector 66, Golf Course Extension Road<br />
                                    Gurgaon Gurgaon HR 122101
                                </p>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="border-b-2 border-[#374151] mb-12"></div>

                        {/* Bill To & Details */}
                        <div className="flex justify-between items-start mb-16">
                            <div className="flex gap-16">
                                <span className="text-sm font-bold text-[#1f2937] min-w-[60px] pt-1">Bill To</span>
                                <div className="text-sm text-[#4b5563]">
                                    <p className="font-medium text-[#1f2937] mb-2">{invoiceData.billTo.name}</p>
                                    <p className="mb-2">{invoiceData.billTo.phone}</p>
                                    <p>{invoiceData.billTo.address}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-[auto_auto] gap-x-8 gap-y-2 text-sm text-right">
                                <span className="font-bold text-[#1f2937]">Invoice no.</span>
                                <span className="text-[#4b5563]">{invoiceData.invoiceNo}</span>

                                <span className="font-bold text-[#1f2937]">Date</span>
                                <span className="text-[#4b5563]">{invoiceData.date}</span>
                            </div>
                        </div>

                        {/* Table */}
                        <div className="mb-0">
                            <table className="w-full border-collapse border border-[#9ca3af]">
                                <thead>
                                    <tr className="bg-white border-b border-[#9ca3af]">
                                        <th className="text-left p-3 text-sm font-medium text-[#374151] border-r border-[#9ca3af] w-[55%]">Description</th>
                                        <th className="text-left p-3 text-sm font-medium text-[#374151] border-r border-[#9ca3af] w-[15%]">Quantity</th>
                                        <th className="text-left p-3 text-sm font-medium text-[#374151] border-r border-[#9ca3af] w-[15%]">Unit price</th>
                                        <th className="text-left p-3 text-sm font-medium text-[#374151] w-[15%]">Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {invoiceData.items.map((item, idx) => (
                                        <tr key={idx} className="border-b border-[#9ca3af]">
                                            <td className="p-3 text-sm text-[#1f2937] border-r border-[#9ca3af] align-top">
                                                {item.description}
                                            </td>
                                            <td className="p-3 text-sm text-[#1f2937] border-r border-[#9ca3af] align-top">
                                                {item.quantity}
                                            </td>
                                            <td className="p-3 text-sm text-[#1f2937] border-r border-[#9ca3af] align-top">
                                                Rs. {item.unitPrice.toLocaleString()}
                                            </td>
                                            <td className="p-3 text-sm text-[#1f2937] align-top">
                                                Rs. {item.amount.toLocaleString()}
                                            </td>
                                        </tr>
                                    ))}
                                    {/* Empty rows for visual spacing similar to screenshot if needed, but keeping it dynamic for now */}
                                    <tr className="border-b border-[#9ca3af] h-[30px]">
                                        <td className="border-r border-[#9ca3af]"></td>
                                        <td className="border-r border-[#9ca3af]"></td>
                                        <td className="border-r border-[#9ca3af]"></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Total */}
                        <div className="flex justify-end border-b border-[#9ca3af] border-x border-x-[#9ca3af] py-3 pr-3">
                            <div className="flex gap-16 w-[30%] justify-between">
                                <span className="text-sm text-[#374151]">Total</span>
                                <span className="text-sm font-medium text-[#1f2937]">Rs. {invoiceData.total.toLocaleString()}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Invoice;
