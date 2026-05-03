"use client";

import React from 'react';
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import Link from 'next/link';
const UpdateProfile = () => {

    const onSubmit = async(e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const image = e.target.image.value;
           

        await authClient.updateUser({
            name,
            image,
        });
        console.log(name, image);   
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl p-6 md:p-10">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                    {/* LEFT */}
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800">
                            Update Your Information
                        </h2>

                        <form className="mt-6 space-y-5" onSubmit={onSubmit}>

                            <div>
                                <label className="text-sm text-gray-600">Full Name</label>
                                <input
                                placeholder='Inter change name'
                                    name='name'
                                    type="text"
                                    className="w-full mt-1 px-4 py-2 border rounded-lg"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-gray-600">Photo URL</label>
                                <input
                                placeholder='Enter photo URL'
                                    name='image'
                                    type="text"
                                    className="w-full mt-1 px-4 py-2 border rounded-lg"
                                />
                            </div>

                            <div className="flex lg:gap-20 pt-2 gap-4">
                                <button type='submit' className="bg-purple-600 text-white px-5 py-2 rounded-lg">
                                    Update Information
                                </button>

                                

                               <Link href="/profile" className="btn btn-primary rounded-lg">
                                    Back to Profile
                                </Link>
                            </div>

                        </form>
                    </div>

                    {/* RIGHT */}
                    <div className="hidden md:flex items-center justify-center h-full">
                        <Image src="/data-in.png" alt="Placeholder" width={800} height={700} />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;