// "use client";

// import { useEffect, useState, useMemo } from "react";
// import Link from "next/link";

// const BooksPage = () => {
//     const [books, setBooks] = useState([]);
//     const [search, setSearch] = useState("");
//     const [category, setCategory] = useState("All");
//     const [loading, setLoading] = useState(true);

    
//     useEffect(() => {
//         const fetchBooks = async () => {
//             try {
//                 const res = await fetch("https://add-to-book-map8.vercel.app/book.json");

//                 if (!res.ok) {
//                     throw new Error("Failed to fetch data");
//                 }

//                 const data = await res.json();
//                 setBooks(Array.isArray(data) ? data : []);
//             } catch (error) {
//                 console.log("Fetch error:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchBooks();
//     }, []);

    
//     const filteredBooks = useMemo(() => {
//         return books
//             .filter((book) =>
//                 category === "All" ? true : book.category === category
//             )
//             .filter((book) =>
//                 book.title?.toLowerCase().includes(search.toLowerCase())
//             );
//     }, [books, category, search]);

//     return (
//         <div className="flex min-h-screen bg-gray-100">

           
//             <div className="w-64 bg-white p-5 border-r border-gray-200 hidden md:block">
//                 <h2 className="font-semibold mb-4">Categories</h2>

//                 {["All", "Story", "Tech", "Science"].map((cat) => (
//                     <button
//                         key={cat}
//                         onClick={() => setCategory(cat)}
//                         className={`block w-full text-left px-3 py-2 rounded-md mb-2 text-sm ${category === cat
//                                 ? "bg-purple-600 text-white"
//                                 : "hover:bg-gray-100"
//                             }`}
//                     >
//                         {cat}
//                     </button>
//                 ))}
//             </div>

            
//             <div className="flex-1 p-5">

              
//                 <div className="mb-5">
//                     <input
//                         type="text"
//                         placeholder="Search books by title plz ..."
//                         value={search}
//                         onChange={(e) => setSearch(e.target.value)}
//                         className="w-full border border-gray-400 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                     />
//                 </div>

              
//                 {loading ? (
//                     <p className="text-center mt-10 text-gray-500"><span className="loading loading-spinner text-error"></span> Loading...</p>
//                 ) : (
//                     <>
                       
//                         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

//                             {filteredBooks.map((book) => (
//                                 <div
//                                     key={book.id}
//                                     className="bg-white rounded-xl shadow-md p-3 hover:shadow-xl transition"
//                                 >
//                                     <img
//                                         src={book.image_url}
//                                         alt={book.title}
//                                         className="w-full h-[250px] object-cover rounded-md"
//                                     />

//                                     <div className="mt-3">
//                                         <h3 className="text-sm font-semibold">{book.title}</h3>
//                                         <p className="text-xs text-gray-500">{book.author}</p>
//                                         <p className="text-xs text-gray-400">{book.category}</p>
//                                         <p className="text-xs text-gray-400">
//                                             {book.available_quantity} copies left
//                                         </p>
//                                     </div>

//                                     <Link href={`/allcard/${book.id}`}>
//                                         <button className="mt-3 w-full bg-purple-600 text-white py-1.5 rounded-md text-sm hover:bg-purple-700">
//                                             Details
//                                         </button>
//                                     </Link>
//                                 </div>
//                             ))}

//                         </div>

                      
//                         {filteredBooks.length === 0 && (
//                             <p className="text-center mt-10 text-gray-500">
//                                 No books found...
//                             </p>
//                         )}
//                     </>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default BooksPage;