// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import Link from "next/link";


// const BookDetailsPage = () => {
//     const { id } = useParams(); 

//     const [book, setBook] = useState(null);

//     useEffect(() => {
//         const fetchBook = async () => {
//             try {
//                 const res = await fetch("https://add-to-book-map8.vercel.app/book.json");
//                 const data = await res.json();

                
//                 const singleBook = data.find(
//                     (item) => item.id.toString() === id
//                 );

//                 setBook(singleBook);
//             } catch (error) {
//                 console.log(error);
//             }
//         };

//         if (id) fetchBook();
//     }, [id]);

//     if (!book) {
//         return (
//             <p className="text-center mt-20 text-gray-500">
//                <span className="loading loading-spinner text-warning"></span>

//             </p>
//         );
//     }

//     return (
       
//         <div className=" py-20 bg-gray-100 flex items-center justify-center p-5">
//             <div className="bg-white rounded-xl shadow-lg p-6 md:flex gap-8 max-w-4xl w-full">

//                 {/* Left Image */}
//                 <div className="md:w-1/3">
//                     <img
//                         src={book.image_url}
//                         alt={book.book_title}
//                         className="rounded-lg w-full h-[400px] object-cover"
//                     />
//                 </div>

//                 {/* Right Content */}
//                 <div className="md:w-2/3 mt-4 md:mt-0">
//                     <h2 className="text-2xl font-bold text-gray-800">
//                         {book.title}
//                     </h2>

//                     <span className="inline-block mt-2 px-3 py-1 text-xs bg-purple-100 text-purple-600 rounded-full">
//                       {book.category}
//                     </span>

                    

//                     {/* Info */}
//                     <div className="mt-4 space-y-2 text-sm">
//                         <p>
//                             <strong>Available Copies:</strong>{" "}
//                             <span className="text-green-600">
//                                 {book.available_quantity} copies left
//                             </span>
//                         </p>
//                         <p className="mb-20">
//                             <strong>Author Name:</strong> {book.author}
//                         </p>

//                           <Link href="/" className=" font-medium hover:underline btn btn-primary">
//                                 Next Book
//                             </Link>
                       
//                     </div>

                 
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default BookDetailsPage;