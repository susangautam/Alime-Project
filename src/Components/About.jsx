import About from "./About";

function Pages() {
  return (
    <div className="bg-white shadow-xl">
      {/* Navigation links */}
      <ul className="flex center justify-center gap-20 text-2xl font-bold font-sans mt-32">
        <li className="underline decoration-primary">All</li>
        <li>Human</li>
        <li>Nature</li>
        <li>Country</li>
        <li>Video</li>
      </ul>

      <div className="m-40 flex flex-col gap-4">
        {/* Image grid */}
        <div className="flex gap-x-6">
          <div className="group relative">
            <div className="relative overflow-hidden">
              <img
                src="3.jpg"
                className="transition duration-300 ease-in-out transform hover:scale-105 hover:opacity-80 hover:shadow-2xl"
                alt="Image 1"
              />
              {/* Black overlay on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-12 h-12 rounded-full bg-primary text-white text-3xl flex items-center justify-center text-center mb-28">
                +
              </div>
            </div>
          </div>

          <div className="group relative">
            <div className="relative overflow-hidden">
              <img
                src="4.jpg"
                className="transition duration-300 ease-in-out transform hover:scale-105 hover:opacity-80 hover:shadow-2xl"
                alt="Image 2"
              />
              {/* Black overlay on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-12 h-12 rounded-full bg-primary text-white text-3xl flex items-center justify-center">
                +
              </div>
            </div>
          </div>

          <div className="group relative">
            <div className="relative overflow-hidden">
              <img
                src="5.jpg"
                className="transition duration-300 ease-in-out transform hover:scale-105 hover:opacity-80 hover:shadow-2xl"
                alt="Image 3"
              />
              {/* Black overlay on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-12 h-12 rounded-full bg-primary text-white text-3xl flex items-center justify-center mb-28">
                +
              </div>
            </div>
          </div>

          <div className="group relative">
            <div className="relative overflow-hidden">
              <img
                src="6.jpg"
                className="transition duration-300 ease-in-out transform hover:scale-105 hover:opacity-80 hover:shadow-2xl"
                alt="Image 4"
              />
              {/* Black overlay on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-12 h-12 rounded-full bg-primary text-white text-3xl flex items-center justify-center">
                +
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-x-6">
          <div className="group relative">
            <div className="relative overflow-hidden">
              <img
                src="7.jpg"
                className="transition duration-300 ease-in-out transform hover:scale-105 hover:opacity-80 hover:shadow-2xl relative bottom-28"
                alt="Image 5"
              />
              {/* Black overlay on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-12 h-12 rounded-full bg-primary text-white text-3xl flex items-center justify-center relative bottom-44">
                +
              </div>
            </div>
          </div>

          <div className="group relative">
            <div className="relative overflow-hidden">
              <img
                src="9.jpg"
                className="transition duration-300 ease-in-out transform hover:scale-105 hover:opacity-80 hover:shadow-2xl"
                alt="Image 6"
              />
              {/* Black overlay on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-12 h-12 rounded-full bg-primary text-white text-3xl flex items-center justify-center">
                +
              </div>
            </div>
          </div>

          <div className="group relative">
            <div className="relative overflow-hidden">
              <img
                src="8.jpg"
                className="transition duration-300 ease-in-out transform hover:scale-105 hover:opacity-80 hover:shadow-2xl relative h-[40vh] w-[40vw] bottom-28"
                alt="Image 7"
              />
              {/* Black overlay on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-12 h-12 rounded-full relative bottom-48 bg-primary text-white text-3xl flex items-center justify-center">
                +
              </div>
            </div>
          </div>

          <div className="group relative">
            <div className="relative overflow-hidden">
              <img
                src="10.jpg"
                className="transition duration-300 ease-in-out transform hover:scale-105 hover:opacity-80 hover:shadow-2xl"
                alt="Image 8"
              />
              {/* Black overlay on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-12 h-12 rounded-full bg-primary relative bottom-36 text-white text-3xl flex items-center justify-center">
                +
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-x-6">
          <div className="group relative">
            <div className="relative overflow-hidden">
              <img
                src="37.jpg"
                className="transition duration-300 ease-in-out transform hover:scale-105 hover:opacity-80 hover:shadow-2xl relative bottom-60 w-[28vw]"
                alt="Image 9"
              />
              {/* Black overlay on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-12 h-12 rounded-full bg-primary relative bottom-56 text-white text-3xl flex items-center justify-center">
                +
              </div>
            </div>
          </div>

          <div className="group relative">
            <div className="relative overflow-hidden">
              <img
                src="5.jpg"
                className="transition duration-300 ease-in-out transform hover:scale-105 hover:opacity-80 hover:shadow-2xl relative h-[31vh] w-[28vw]"
                alt="Image 10"
              />
              {/* Black overlay on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-12 h-12 rounded-full bg-primary relative bottom-32 text-white text-3xl flex items-center justify-center">
                +
              </div>
            </div>
          </div>

          <div className="group relative">
            <div className="relative overflow-hidden">
              <img
                src="36.jpg"
                className="transition duration-300 ease-in-out transform hover:scale-105 hover:opacity-80 hover:shadow-2xl relative bottom-[36vh]"
                alt="Image 11"
              />
              {/* Black overlay on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-12 h-12 rounded-full relative bottom-60 bg-primary text-white text-3xl flex items-center justify-center">
                +
              </div>
            </div>
          </div>
        </div>

        {/* View More Button */}
        <div className="flex justify-center">
          <button className="px-8 py-3 text-primary font-bold text-xl rounded-3xl border border-primary transition-colors duration-300 hover:bg-primary hover:text-white">
            View More
          </button>
        </div>
        <About />
      </div>
    </div>
  );
}

export default Pages;
