import React from "react";
import out from "../assets/kingsukh guesh house assets/out.jpg";

const About1 = () => {
  return (
    <div className="border-2">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
          {/* Image Section */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-6 md:mb-0 flex justify-center">
            <img
              className="object-cover h-80 md:h-96 object-center rounded border-2"
              alt="hero"
              src={out}
            />
          </div>

          {/* Text Section */}
          <div className="lg:flex-grow md:w-1/2 w-full flex flex-col md:items-start items-center md:text-left text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Us
              <br className="hidden lg:inline-block" />
              The Best Holidays Start Here!
            </h1>
            <p className="mb-8 leading-relaxed text-gray-700">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos
              poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Learn More
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About1;
