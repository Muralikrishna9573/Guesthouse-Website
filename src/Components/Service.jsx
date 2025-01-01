import React from 'react';

const Service = () => {
  return (
    <div className="bg-white-50">
      <section className="text-gray-600 body-font">
        <div className="container px-4 md:px-8 lg:px-16 py-16 mx-auto">
          {/* Header Section */}
          <div className="flex flex-wrap w-full mb-16 flex-col items-center text-center">
            <p className="text-xl text-indigo-600 p-2 font-semibold uppercase">Our Services</p>
            <h1 className="sm:text-3xl text-4xl font-bold title-font mb-4 text-gray-900">What We Offer</h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Explore our wide range of services designed to elevate your business and exceed your expectations.
            </p>
          </div>

          {/* Services Grid */}
          <div className="flex flex-wrap -m-4">
            {[
              {
                title: "Shooting Stars",
                description: "Creative solutions tailored for your unique challenges.",
                iconPath: "M22 12h-4l-3 9L9 3l-3 9H2",
              },
              {
                title: "The Catalyzer",
                description: "Innovative strategies to accelerate growth.",
                iconPath: "M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12",
              },
              {
                title: "Neptune",
                description: "Comprehensive analytics to drive data-informed decisions.",
                iconPath: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 7a4 4 0 100-8 4 4 0 000 8z",
              },
              {
                title: "Melanchole",
                description: "Engaging designs to captivate your audience.",
                iconPath: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7",
              },
              {
                title: "Bunker",
                description: "Robust solutions to safeguard your assets.",
                iconPath: "M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z",
              },
              {
                title: "Ramona Falls",
                description: "End-to-end support for seamless implementation.",
                iconPath: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
              },
            ].map((service, index) => (
              <div key={index} className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 shadow-md p-6 rounded-lg bg-white h-full flex flex-col">
                  <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <svg
                      aria-label={service.title}
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d={service.iconPath}></path>
                    </svg>
                  </div>
                  <h2 className="text-lg text-gray-900 font-bold title-font mb-2">{service.title}</h2>
                  <p className="leading-relaxed text-base text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call-to-Action Button */}
          <div className="flex justify-center mt-12">
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-6 rounded-lg text-lg font-medium">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
