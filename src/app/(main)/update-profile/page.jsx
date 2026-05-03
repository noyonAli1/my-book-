import React from 'react';
import Image from "next/image";
const UpdateProfile = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">

            <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl p-6 md:p-10">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                    {/* LEFT - FORM */}
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800">
                            Update Your Information
                        </h2>
                        <p className="text-gray-500 text-sm mt-1">
                            Make changes to your profile
                        </p>

                        <div className="mt-6 space-y-5">

                            {/* Full Name */}
                            <div>
                                <label className="text-sm text-gray-600">Full Name</label>
                                <input
                                    type="text"
                                    defaultValue="Update Your Name"
                                    className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                                />
                            </div>

                            {/* Photo URL */}
                            <div>
                                <label className="text-sm text-gray-600">Photo URL</label>
                                <input
                                    type="text"
                                    defaultValue="https:/photo.jpg"
                                    className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                                />
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-3 pt-2">
                                <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg text-sm transition">
                                    Update Information
                                </button>

                                <button className="border px-5 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100 transition">
                                    Cancel
                                </button>
                            </div>

                        </div>
                    </div>

                    {/* RIGHT - EMPTY (for image later) */}
                    <div className="hidden md:flex items-center justify-center h-full">

                        <div className="w-full h-[300px] border-2 border border-gray-300 rounded-xl flex items-center justify-center text-gray-400">
                            <Image src="/data-in.png" alt="Placeholder" width={800} height={700} />
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default UpdateProfile;