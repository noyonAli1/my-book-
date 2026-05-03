"use client";
import Link from "next/link";
import { FaUser, FaEnvelope, FaImage, FaBook } from "react-icons/fa";
import { MdDataThresholding, MdManageAccounts } from "react-icons/md";


const page = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">

            
            <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl p-8 md:p-10">

                {/* Top Section */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-gray-400 border-b pb-6">

                    <div className="flex items-center gap-5">

                        <div className="w-[80px] h-[80px] rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-sm font-medium">
                            Image
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800">
                                Tanvir Ahmed
                            </h2>
                            <p className="text-purple-600 text-sm">
                                tanvir@example.com
                            </p>
                            <p className="text-gray-400 text-xs mt-1">
                                Member Since: May 15, 2024
                            </p>
                        </div>
                    </div>

                    <Link
                        href="/update-profile"
                        className="bg-gradient-to-r gap-2 from-purple-500 to-indigo-500 text-white px-5 flex items-center justify-center py-2 rounded-full text-sm hover:from-purple-600 hover:to-indigo-600 transition">
                        <MdDataThresholding className="text-lg" />    Update Information
                    </Link>
                </div>

                {/* Bottom Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 text-sm">

                    <div className="space-y-5">

                        {/* Full Name */}
                        <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                            <span className="flex items-center gap-2 text-gray-500">
                                <FaUser /> Full Name
                            </span>
                            <span className="text-gray-800 font-medium">
                                Tanvir Ahmed
                            </span>
                        </div>

                        {/* Email */}
                        <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                            <span className="flex items-center gap-2 text-gray-500">
                                <FaEnvelope /> Email Address
                            </span>
                            <span className="text-gray-800 font-medium">
                                tanvir@example.com
                            </span>
                        </div>

                        {/* Photo URL */}
                        <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                            <span className="flex items-center gap-2 text-gray-500">
                                <FaImage /> Photo URL
                            </span>
                            <span className="text-gray-800 font-medium truncate max-w-[180px]">
                                https://example.com/photo.jpg
                            </span>
                        </div>

                        {/* Total Borrowed */}
                        <div className="flex justify-between items-center">
                            <span className="flex items-center gap-2 text-gray-500">
                                <FaBook /> Total Borrowed
                            </span>
                            <span className="text-gray-800 font-medium">
                                5 Books
                            </span>
                        </div>

                    </div>

                    {/* Borrow Card */}
                    <div className="flex items-center justify-center md:justify-end">
                        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-8 rounded-xl shadow-md w-full md:w-[220px] text-center">
                            <p className="flex items-center justify-center gap-2 text-sm text-white/90">

                                <span>Borrowed</span>

                                <MdManageAccounts className="text-xl text-yellow-300" />

                            </p>
                            <h3 className="text-4xl font-bold mt-2">
                                2 Books
                            </h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default page;