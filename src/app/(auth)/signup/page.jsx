"use client";

import { authClient } from "@/lib/auth-client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { Description, FieldError, Input, Label, TextField } from "@heroui/react";

const SignupPage = () => {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const image = e.target.image.value;
        const password = e.target.password.value;

        console.log({ name, email, image, password });

        const { data, error } = await authClient.signUp.email({
            name,
            email,
            password,
            image,
        });

        console.log({ data, error });
        // if (error) {
        //     alert(error.message);
        //     return;
        // }


        if (!error) {
            router.push("/");
        }

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


                        <TextField isRequired name="name" type="text"  >
                            <Label>Name</Label>
                            <Input className="w-full mt-1 px-4 py-3 rounded-xl border" placeholder="Enter your name" />
                            <FieldError />
                        </TextField>


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


                        <TextField isRequired name="image" type="text">
                            <Label>Image URL</Label>
                            <Input className="w-full mt-1 px-4 py-3 rounded-xl border" placeholder="Image URL" />
                            <FieldError />
                        </TextField>

                        <TextField
                            isRequired
                            minLength={8}
                            name="password"
                            type="password"
                            validate={(value) => {
                                if (value.length < 8) {
                                    return "Password must be at least 8 characters";
                                }
                                if (!/[A-Z]/.test(value)) {
                                    return "Password must contain at least one uppercase letter";
                                }
                                if (!/[0-9]/.test(value)) {
                                    return "Password must contain at least one number";
                                }

                                return null;
                            }}
                        >
                            <Label>Password</Label>
                            <Input className="w-full mt-1 px-4 py-3 rounded-xl border" placeholder="Enter your password" />
                            <Description>
                                Must be at least 8 characters with 1 uppercase and 1 number
                            </Description>
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