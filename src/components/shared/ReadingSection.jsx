import Image from "next/image";
import { IoBookOutline } from "react-icons/io5";

const ReadingSection = () => {
  return (
    <section className="bg-[#f5f1ea] py-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Image */}
        <div className="w-full">
         <Image
            src="/allbook.jpg"
            alt="Reading Books"
            width={600}
            height={300}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </div>

        {/* Right Content */}
        <div>
          <p className="inline-block border border-[#8c3b1c] text-[#8c3b1c] px-4 py-1 rounded-full  text-sm mb-4">
             Discover Books
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
            Discover, track and enjoy your reading journey
          </h2>

          <p className="mt-4 text-gray-600">
            Explore thousands of books, track your reading progress, and connect
            with fellow readers. BookNest makes your reading life easier and more enjoyable.
          </p>

          <button className="mt-6 bg-[#8c3b1c] hover:bg-[#6e2f16] text-white px-6 py-3 rounded-full">
            Explore Books
          </button>
        </div>

      </div>
    </section>
  );
};

export default ReadingSection;