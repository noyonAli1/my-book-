import Image from 'next/image';
import React from 'react';

const Hader = () => {
    return (
       <section className="relative h-[500px] w-full">
  <div>
    {/* Background Image */}
    <Image
      src="/newbook.png"
      alt="Header Background"
      fill
      className="object-cover"
      priority
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/70"></div>

    {/* Content */}
    <div className="relative z-10 h-full flex items-center container mx-auto px-4 md:px-8 lg:px-0 lg:mr-40 mr-0">
      
      <div className=" max-w-xl text-white ml-2 sm:ml-4 md:ml-16 lg:ml-0 mr- ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-16 md:mt-20">
          Find Your <br />
          <span className="text-purple-500">Next Read</span>
        </h1>

        <p className="mt-4 text-gray-300 text-sm sm:text-base md:text-lg">
          Explore thousands of books across different categories
          and borrow your favorites easily.
        </p>

        <button className="mt-6 bg-purple-600 hover:bg-purple-700 px-5 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center gap-2 text-sm sm:text-base">
          Browse Now →
        </button>
      </div>

    </div>

    {/* Bottom border line */}
    <div className="absolute bottom-0 left-0 w-full h-[3px] bg-purple-600"></div>
  </div>
</section>
    );
};

export default Hader;