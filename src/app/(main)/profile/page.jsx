"use client";
import { Avatar } from "@heroui/react";
import Link from "next/link";
import { FaUser, FaEnvelope, FaImage, FaBook } from "react-icons/fa";
import { MdDataThresholding, MdManageAccounts } from "react-icons/md";
import { authClient } from "@/lib/auth-client";

// import { redirect } from "next/navigation";
const page = () => {

    const userData = authClient.useSession();
    const user = userData.data?.user;



//   if (!user) {
//     redirect("/signin");
//   }



    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">


            <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl p-8 md:p-10">

                {/* Top Section */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-gray-400 border-b pb-6">

                    <div className="flex items-center gap-5">

                        <Avatar>
                            <Avatar.Image alt="John Doe" src={user?.image}
                                referrerPolicy="no-referrer"
                            />
                            <Avatar.Fallback>{user?.name?.split(" ").map((n) => n[0]).join("")}</Avatar.Fallback>
                        </Avatar>

                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800">
                                {user?.name || "Noyon RAj"}
                            </h2>
                            <p className="text-purple-600 text-sm">
                                {user?.email || "noyon@example.com"}
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
                                {user?.name || "Noyon Raj"}
                            </span>
                        </div>

                        {/* Email */}
                        <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                            <span className="flex items-center gap-2 text-gray-500">
                                <FaEnvelope /> Email Address
                            </span>
                            <span className="text-gray-800 font-medium">
                                {user?.email || "Noyon@example.com"}
                            </span>
                        </div>

                        {/* Photo URL */}
                        <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                            <span className="flex items-center gap-2 text-gray-500">
                                <FaImage /> Photo URL
                            </span>
                            <span className="text-gray-800 font-medium truncate max-w-[180px]">
                                {user?.image || "https://img.heroui.chat/image/avatar?w=400&h=400&u=3"}
                            </span>
                        </div>

                        {/* Total Borrowed */}
                        <div className="flex justify-between items-center">
                            <span className="flex items-center gap-2 text-gray-500">
                                <FaBook /> Total Borrowed
                            </span>
                            <span className="text-gray-800 font-medium">
                               {2} Books
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