import React from 'react';
import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-black px-4 text-center">
          
            <h1 className="text-[120px] md:text-[160px] font-extrabold text-white leading-none tracking-tighter">
                404__NOYON
            </h1>

        
            <h2 className="text-xl md:text-2xl font-light text-gray-400 mt-4 uppercase tracking-[0.2em]">
             Not Found  PAGE
            </h2>

        
            <p className="max-w-md text-gray-500 my-8 text-[20px] leading-relaxed">
                 আপনার ফিডব্যাকের জন্য ধন্যবাদ। আমরা বিষয়টি আমাদের টিমের সাথে আলোচনা করবো
            </p>

            
            <Link 
                href="/" 
                className="border border-white text-white hover:bg-white hover:text-black font-medium py-3 px-10 transition-all duration-300 rounded-none shadow-lg"
            >
                BACK TO HOME PAGE
            </Link>
        </main>
    );
};

export default NotFoundPage;