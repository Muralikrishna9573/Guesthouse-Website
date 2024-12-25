import React from 'react';
import ayodhya from '../assets/kingsukh guesh house assets/ayodhya.webp';

const About = () => {
  return (
    <div className="h-auto mt-0 ml-5 mr-5 mb-4 mt-12">
      <div className="relative">
        <img className="h-80 w-full object-cover rounded-3xl" src={ayodhya} alt="Ayodhya" />
        <p className="absolute rounded-3xl inset-0 flex justify-center items-center text-white text-lg font-semibold bg-black bg-opacity-50">
          Simple-Unique-Friendly
        </p>
        <p className='absolute inset-0 felx justify-center items-center text-white text-3xl font-semibold m-48 ml-[30%]'>
         Make Yourself At Home
         In Our <span className='text-pink-600'>Guest House</span>.
        </p>
        
      </div>
      <div className="m-5 flex justify-center items-center">
      <a
    href="https://api.whatsapp.com/send?phone=919007062180"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700 transition duration-300"
  >
    Book Now
  </a>
      </div>
   </div>
  );
};

export default About; 
