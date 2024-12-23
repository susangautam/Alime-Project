function Pages() {
  return (
    <div className="bg-white shadow-xl"> {/* Apply shadow to the main page container */}
      <ul className="flex center justify-center gap-20 text-2xl font-bold font-sans mt-32">
        <li className="underline decoration-primary">All</li>
        <li>Human</li>
        <li>Nature</li>
        <li>Country</li>
        <li>Video</li>
      </ul>

      <div className="m-40 flex flex-col gap-4">
        <div className="flex gap-x-6">
          <div className="group relative">
            <img
              src="3.jpg"
              className="transition duration-300 ease-in-out transform hover:scale-105 hover:opacity-80 hover:shadow-2xl"
              alt="Image 1"
            />
            {/* Hover Circle and Plus */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-12 h-12 rounded-full bg-primary text-white text-3xl flex items-center justify-center text-center mb-28">
                +
              </div>
            </div>
          </div>
          <div className="group relative">
            <img
              src="4.jpg"
              className="transition duration-300 ease-in-out transform hover:scale-105 hover:opacity-80 hover:shadow-2xl"
              alt="Image 2"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-12 h-12 rounded-full bg-primary text-white text-3xl flex items-center justify-center">
                +
              </div>
            </div>
          </div>
          <div className="group relative">
            <img
              src="5.jpg"
              className="transition duration-300 ease-in-out transform hover:scale-105 hover:opacity-80 hover:shadow-2xl"
              alt="Image 3"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-12 h-12 rounded-full bg-primary text-white text-3xl flex items-center justify-center mb-28">
                +
              </div>
            </div>
          </div>
          <div className="group relative">
            <img
              src="6.jpg"
              className="transition duration-300 ease-in-out transform hover:scale-105 hover:opacity-80 hover:shadow-2xl"
              alt="Image 4"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-12 h-12 rounded-full bg-primary text-white text-3xl flex items-center justify-center">
                +
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-x-6">
          <div className="group relative">
            <img
              src="7.jpg"
              className="transition duration-300 ease-in-out transform hover:scale-105 hover:opacity-80 hover:shadow-2xl relative bottom-28"
              alt="Image 5"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-12 h-12 rounded-full bg-primary text-white text-3xl flex items-center justify-center relative bottom-44">
                +
              </div>
            </div>
          </div>
          <div className="group relative">
            <img
              src="9.jpg"
              className="transition duration-300 ease-in-out transform hover:scale-105 hover:opacity-80 hover:shadow-2xl"
              alt="Image 6"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-12 h-12 rounded-full bg-primary text-white text-3xl flex items-center justify-center">
                +
              </div>
            </div>
          </div>
          <div className="group relative">
            <img
              src="8.jpg"
              className="transition duration-300 ease-in-out transform hover:scale-105 hover:opacity-80 hover:shadow-2xl relative h-[40vh] w-[40vw] bottom-28"
              alt="Image 7"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100  transition-opacity">
              <div className="w-12 h-12 rounded-full relative bottom-48 bg-primary text-white text-3xl flex items-center  justify-center">
                +
              </div>
            </div>
          </div>
          <div className="group relative">
            <img
              src="10.jpg"
              className="transition duration-300 ease-in-out transform hover:scale-105 hover:opacity-80 hover:shadow-2xl"
              alt="Image 8"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-12 h-12 rounded-full bg-primary relative bottom-36 text-white text-3xl flex items-center justify-center">
                +
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-x-6">
          <div className="group relative">
            <img
              src="37.jpg"
              className="transition duration-300 ease-in-out transform hover:scale-105 hover:opacity-80 hover:shadow-2xl relative bottom-60 w-[28vw]"
              alt="Image 9"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-12 h-12 rounded-full bg-primary relative bottom-56 text-white text-3xl flex items-center justify-center">
                +
              </div>
            </div>
          </div>
          <div className="group relative">
            <img
              src="5.jpg"
              className="transition duration-300 ease-in-out transform hover:scale-105 hover:opacity-80 hover:shadow-2xl relative h-[31vh] w-[28vw]"
              alt="Image 10"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-12 h-12 rounded-full bg-primary relative bottom-32 text-white text-3xl flex items-center justify-center">
                +
              </div>
            </div>
          </div>
          <div className="group relative">
            <img
              src="36.jpg"
              className="transition duration-300 ease-in-out transform hover:scale-105 hover:opacity-80 hover:shadow-2xl relative bottom-[36vh]"
              alt="Image 11"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-12 h-12 rounded-full relative bottom-60 bg-primary text-white text-3xl flex items-center justify-center">
                +
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pages;
