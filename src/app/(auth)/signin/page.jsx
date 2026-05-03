"use client";

import { authClient } from "@/lib/auth-client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { FieldError, Input, Label, TextField } from "@heroui/react";

const SignupPage = () => {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();


        const email = e.target.email.value;

        const password = e.target.password.value;

        console.log({ email, password });

        const { data, error } = await authClient.signUp.email({

            email,
            password

        });

        console.log({ data, error });



        router.push("/");
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="flex w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden">

                {/* LEFT IMAGE */}
                <div className="hidden md:flex w-1/2 bg-gradient-to-br from-purple-700 to-indigo-600 p-10 items-center">
                    <img
                        src="/reg.png"
                        className="w-full rounded-3xl py-2 h-full object-cover"
                    />
                </div>

                <div className="w-full md:w-1/2 p-8 sm:p-10">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Create Account
                    </h2>

                    <p className="text-gray-500 mt-1 mb-6">
                        Join Book World today
                    </p>

                    <form onSubmit={onSubmit} className="space-y-4">





                        <TextField
                            isRequired
                            name="email"
                            type="email"
                            validate={(value) => {
                                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                    return "Please enter a valid email address";
                                }

                                return null;
                            }}
                        >
                            <Label>Email</Label>
                            <Input className="w-full mt-1 px-4 py-3 rounded-xl border" placeholder="john@example.com" />
                            <FieldError />
                        </TextField>





                        <TextField
                            isRequired
                            name="password"
                            type="password"
                            validate={(value) => {
                                if (value.length < 8) {
                                    return "Password must be at least 8 characters long";
                                }

                                return null;
                            }}
                        >
                            <Label>Password</Label>
                            <Input className="w-full mt-1 px-4 py-3 rounded-xl border" placeholder="••••••••" />
                            <FieldError />
                        </TextField>



                        <button
                            type="submit"
                            className="w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-purple-600 to-indigo-600"
                        >
                            Sign Up
                        </button>




                        <button
                            type="button"
                            className="w-full py-3 rounded-xl border flex items-center justify-center gap-2 hover:bg-gray-50 transition"
                        >
                            <img
                                src="https://www.svgrepo.com/show/475656/google-color.svg"
                                alt="Google Logo"
                                className="w-5 h-5"
                            />

                            Continue with Google
                        </button>

                        <p className="text-center text-sm text-gray-600 mt-4">
                            Already have an account?
                            <Link
                                href="/signin"
                                className="text-purple-600 font-medium hover:underline"
                            >
                                Login here
                            </Link>
                        </p>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
