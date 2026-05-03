"use client";

import Link from "next/link";
import { useState } from "react";
import { MdMenuBook } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import { usePathname } from "next/navigation";
// import { auth } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";


const Navbar = () => {

  const userData = authClient.useSession();
  const user = userData.data?.user;
  console.log(user);


  const handleSignOut = async () => {
    await authClient.signOut();
  }



  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Active style..........Noyon Raj
  const activeClass = (path) =>
    pathname === path
      ? "border-b-2 border-purple-500 text-purple-400 pb-1"
      : "pb-1";

  return (
    <div className="bg-[#0f172a] sticky top-0 z-50">

  
      <div className="container mx-auto px-6 py-4 flex justify-between items-center text-white">

       
        <h1 className="text-xl font-bold flex items-center gap-2">
          <MdMenuBook className="text-2xl text-purple-600" />
          <span className="text-blue-500">Book</span> Nest
        </h1>

        
        <div className="hidden md:flex gap-6">
          <Link href="/" className={activeClass("/")}>Home</Link>
          <Link href="/books" className={activeClass("/books")}>All Books</Link>
          <Link href="/profile" className={activeClass("/profile")}>My Profile</Link>
        </div>

        
        {!user &&
          <div className="flex gap-2">
            <Link
              href="/signin"
              className="hidden md:block bg-purple-700 hover:bg-purple-800 px-5 py-2 rounded-md"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="hidden md:block bg-purple-700 hover:bg-purple-800 px-5 py-2 rounded-md"
            >
              Register
            </Link>
          </div>
        }
        {
          user && <div className="flex gap-3 items-center">
            <Avatar className="w-8 h-8">
              <Avatar.Image alt="John Doe" src={user?.image}
                referrerPolicy="no-referrer"
              />
              <Avatar.Fallback>{user?.name?.split(" ").map((n) => n[0]).join("")}</Avatar.Fallback>
            </Avatar>
            <button  className="btn btn-primary rounded-3xl px-3 py-1 text-sm" onClick={handleSignOut}>
              Sign Out
            </button>
          </div>

        }






    
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-2xl"
        >
          <HiMenu />
        </button>
      </div>

   
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}


      <div
        className={`fixed top-0 left-0 h-full w-[80%] max-w-sm bg-[#1e293b] z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"
          }`}
      >
       
        <div className="flex justify-between items-center px-6 py-4 text-white border-b border-gray-700">
          <h1 className="text-lg font-bold flex items-center gap-2">
            <MdMenuBook className="text-xl text-purple-500" />
            <span className="text-blue-400">Book</span> Nest
          </h1>

          <button onClick={() => setOpen(false)} className="text-2xl">
            <HiX />
          </button>
        </div>

       
        <div className="px-6 py-6 space-y-5 text-white">

          <Link
            href="/"
            onClick={() => setOpen(false)}
            className={`block ${activeClass("/")}`}
          >
            Home
          </Link>

          <Link
            href="/books"
            onClick={() => setOpen(false)}
            className={`block ${activeClass("/books")}`}
          >
            All Books
          </Link>

          <Link
            href="/profile"
            onClick={() => setOpen(false)}
            className={`block ${activeClass("/profile")}`}
          >
            My Profile
          </Link>


          <div className="pt-6 space-y-3">
            <Link
              href="/signin"
              onClick={() => setOpen(false)}
              className="block bg-purple-700 text-center py-2 rounded-md"
            >
              Login
            </Link>

            <Link
              href="/signup"
              onClick={() => setOpen(false)}
              className="block border border-purple-500 text-center py-2 rounded-md"
            >
              Register
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;