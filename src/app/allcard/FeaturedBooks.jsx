"use client";
import Link from "next/link";
import { useState } from "react";

const FeaturedBooks = ({ data }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleData = showAll ? data : data.slice(0, 4); 

  return (
    <section className='bg-gray-50  py-10'>
      <div className='container mx-auto'>
        <div className="px-4 md:px-10 py-10 bg-gray-50">

          {/* Heading */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl text-bold md:text-2xl font-semibold text-gray-800">
                Featured Books
              </h2>
              <p className="text-md text-gray-500  hidden md:block">
                Discover handpicked books just for you
              </p>
            </div>

            <button
              onClick={() => setShowAll(!showAll)}
              className="border-0 cursor-pointer px-4 py-1 rounded-md text-sm hover:bg-black-100 transition btn btn-primary duration-200 "
            >
              {showAll ? "Show Less" : "View All"}
            </button>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 justify-items-center md:grid-cols-3 lg:grid-cols-4 gap-5 ">

            {visibleData.map((book) => (
              <div
                key={book.id}
                className="w-full max-w-[320px] bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 p-3 transform hover:-translate-y-2 hover:scale-[1.02]"
              >
                <div className="overflow-hidden rounded-md">
                  <img
                    src={book.image_url}
                    alt={book.title}
                    className="w-full h-[400px] object-cover rounded-md"
                  />
                </div>

                <div className="mt-3 space-y-1">
                  <h3 className="font-semibold text-sm text-gray-800">
                    {book.title}
                  </h3>
                  <p className="text-xs text-gray-500">{book.author}</p>
                  <p className="text-xs text-gray-400">{book.category}</p>
                  <p className="text-xs text-gray-400">
                    {book.available_quantity} copies left
                  </p>
                </div>

                <Link href={`/allcard/${book.id}`}>
                  <button className="mt-3 w-full cursor-pointer bg-purple-600 text-white py-1.5 rounded-md text-sm hover:bg-purple-700">
                    View Details
                  </button>
                </Link>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;

