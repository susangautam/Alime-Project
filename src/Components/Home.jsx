import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <>
      <div className="w-full h-screen relative">
        {/* Background image */}
        <img
          src="1.jpg"
          className="-z-50 fixed object-cover w-full h-full"
          alt="Background"
        />

        {/* Black Overlay */}
        <div className="w-full h-full bg-black bg-opacity-60 absolute top-0 left-0">
          {/* Navbar */}
          <div className="flex justify-between bg-black bg-opacity-40 items-center z-10 px-40 py-4 w-full absolute top-0 left-0">
            <div className="py-3 px-3">
              <img src="logo (1).png" className="h-8" alt="Logo" />
            </div>

            <div className="flex gap-10 items-center">
              <ul className="text-white font-semibold text-lg flex gap-6">
                <li>
                  <Link
                    to="/"
                    className="hover:text-primary p-3 cursor-pointer hover:border border-primary underline"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pages"
                    className="hover:text-primary p-3 hover:border border-primary cursor-pointer"
                  >
                    Pages
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-primary p-3 hover:border border-primary cursor-pointer"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gallery"
                    className="hover:text-primary p-3 hover:border border-primary cursor-pointer"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="hover:text-primary p-3 hover:border border-primary cursor-pointer"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-primary p-3 hover:border border-primary cursor-pointer"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <FaSearch className="m-2 text-white" />
                </li>
              </ul>
            </div>
          </div>

          {/* Main Text and Button */}
          <div className="flex flex-col items-start justify-center text-white absolute top-1/2 left-20 transform -translate-y-1/2 z-10 px-8 py-20">
            <div>
              <h1 className="text-7xl font-bold text-left">Hello</h1>
            </div>
            <div>
              <h1 className="text-7xl font-bold text-left">Im Jackson</h1>
            </div>
            <div className="w-full md:w-[40vw] text-xl mt-8">
              <h2>
                I photograph very instinctively. I see how it is taken like
                that. I do not follow certain styles, philosophers, or teachers.
              </h2>
            </div>
            <div className="mt-16">
              <button className="text-white rounded-full border-2 border-primary hover:bg-primary bg-transparent py-3 px-10 font-bold transition-all">
                Get a Quote
              </button>
            </div>
            <div className="text-white italic text-lg underline mt-8">
              hello.alime@gmail.com
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
