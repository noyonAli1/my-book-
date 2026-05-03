import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-[#0f172a] to-[#020617] text-white px-6 md:px-10 py-12">
            <div className="container mx-auto">

                {/* Top Section */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">

                    {/* Logo + Info */}
                    <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start">
                        <h1 className="text-2xl font-bold flex items-center gap-2">
                            <MdMenuBook className="text-2xl text-purple-600" />
                            BookNest
                        </h1>

                        <p className="mt-3 text-gray-400">
                            Your perfect reading partner.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-3 mt-4">
                            <div className="bg-gray-800 p-2 rounded-full hover:bg-purple-600 cursor-pointer transition">
                                <FaFacebookF />
                            </div>
                            <div className="bg-gray-800 p-2 rounded-full hover:bg-purple-600 cursor-pointer transition">
                                <FaTwitter />
                            </div>
                            <div className="bg-gray-800 p-2 rounded-full hover:bg-purple-600 cursor-pointer transition">
                                <FaInstagram />
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col items-center md:items-start">
                        <h2 className="font-semibold mb-3">Quick Links</h2>
                        <ul className="space-y-2 text-gray-400">
                            <li className="hover:text-white cursor-pointer">Home</li>
                            <li className="hover:text-white cursor-pointer">All Books</li>
                            <li className="hover:text-white cursor-pointer">My Profile</li>
                            <li className="hover:text-white cursor-pointer">About Us</li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div className="flex flex-col items-center md:items-start">
                        <h2 className="font-semibold mb-3">Categories</h2>
                        <ul className="space-y-2 text-gray-400">
                            <li className="hover:text-white cursor-pointer">Story</li>
                            <li className="hover:text-white cursor-pointer">Tech</li>
                            <li className="hover:text-white cursor-pointer">Science</li>
                        </ul>
                    </div>

                    {/* Contact (IMPORTANT PART) */}
                    <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
                        <h2 className="font-semibold mb-3">Contact Us</h2>
                        <ul className="space-y-2 text-gray-400">
                            <li>Email: bnoyon223@gmail.com</li>
                            <li>Phone: +880 1304868130</li>
                            <li>Address: Bogura, Bangladesh</li>
                        </ul>
                    </div>

                </div>

                {/* Bottom */}
                <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
                    © 2026 BookNest. Noyon+Shifa..
                </div>

            </div>
        </footer>
    );
}