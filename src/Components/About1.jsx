import React from "react";
import out from "../assets/kingsukh guesh house assets/out.jpg";

const About1 = () => {
  return (
    <div className="rounded-lg ">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6 py-8">
          {/* Image Section */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-6 md:mb-0 flex justify-center">
            <img
              className="object-cover h-80 md:h-96 object-center rounded-lg border-2 shadow-md"
              alt="Scenic View of Kingsukh Guest House"
              src={out}
            />
          </div>

          {/* Text Section */}
          <div className="lg:flex-grow md:w-1/2 w-full flex flex-col md:items-start items-center md:text-left text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900">
              About Us
            </h1>
            <p className="text-2xl font-medium mt-2 mb-6">
              The Best Holidays Start Here!
            </p>
            <p className="mb-6 leading-relaxed text-gray-700">
              Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay.
            </p>
            <p className="text-blue-800 mb-6">
              <strong>Address:</strong> <br />
              Beside Barshal Water Tank, <br />
              Manpur, Barhanti, West Bengal 723156. <br />
              <strong>Contact Us:</strong> +91 9007062180
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=919007062180"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-600 text-white py-2 px-6 rounded-lg hover:bg-pink-700 transition duration-300 shadow-lg"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About1;
