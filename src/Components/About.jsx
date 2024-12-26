
function About() {
  const images = [
    '/3.jpg', '/4.jpg', '/5.jpg', '/6.jpg', '/7.jpg', '/8.jpg'
  ];

  return (
    <div className="bg-white shadow-xl">

      {/* About Section */}
      <section className="mt-20 text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          Follow Instagram 
        </h1>
        <p className="text-lg text-gray-600 mt-4">
        @alime_photographer
        </p>
      </section>

      {/* Image Section*/}
      <section className="mt-16">
        <div className="flex flex-row justify-center space-x-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="w-[250px] h-[250px] relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              {/* Overlay Hover Effect */}
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 transition-all hover:bg-opacity-0 rounded-lg"></div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default About;
