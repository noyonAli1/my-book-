import { FaBookOpen, FaLock, FaHeadphones } from "react-icons/fa";
import { MdOutlineLibraryBooks } from "react-icons/md";

const WhyChoose = () => {
    return (
        <section className="py-14 bg-gray-50">
            <div className="container mx-auto px-4">

                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
                    Why Choose <span className="text-purple-600">BookNest?</span>
                </h2>

                {/* Cards */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 py-5">

                    {/* Card 1 */}
                    <div className="group bg-white p-6  rounded-xl shadow-sm hover:shadow-lg transition duration-300 text-center">
                        <FaBookOpen className="text-3xl text-purple-600 mx-auto mb-3 group-hover:scale-110 transition" />
                        <h3 className="font-semibold mb-1 group-hover:text-purple-600">Huge Collection</h3>
                        <p className="text-gray-500 text-sm">
                            Thousands of books in one place
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition duration-300 text-center">
                        <MdOutlineLibraryBooks className="text-3xl text-purple-600 mx-auto mb-3 group-hover:scale-110 transition" />
                        <h3 className="font-semibold mb-1 group-hover:text-purple-600">Easy Borrowing</h3>
                        <p className="text-gray-500 text-sm">
                            Borrow books with one click
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition duration-300 text-center">
                        <FaLock className="text-3xl text-purple-600 mx-auto mb-3 group-hover:scale-110 transition" />
                        <h3 className="font-semibold mb-1 group-hover:text-purple-600">Secure & Safe</h3>
                        <p className="text-gray-500 text-sm">
                            Your data is always protected
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition duration-300 text-center">
                        <FaHeadphones className="text-3xl text-purple-600 mx-auto mb-3 group-hover:scale-110 transition" />
                        <h3 className="font-semibold mb-1 group-hover:text-purple-600">24/7 Support</h3>
                        <p className="text-gray-500 text-sm">
                            We are here to help you
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default WhyChoose;