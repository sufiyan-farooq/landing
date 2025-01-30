'use client'
import  { useEffect } from 'react';
import { Check } from 'lucide-react';
import AOS from 'aos';
import React from 'react';

function ConsumerSec() {
    useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className=" bg-white">
      <div className=" mx-auto  mt-14">
        <div className="bg-[#F3F9ED]  h-fit p-8 pb-20 relative mx-auto  rounded-xl flex flex-wrap green-box  " >
          <div className="grid md:grid-cols-2  items-start">
            {/* Content - Reordered for mobile */}
            <div className="col-span-full md:col-start-2 max-w-xl order-1" data-aos="fade-left" data-aos-delay="500">
              <span className="inline-block bg-[#E5F3D4] text-[#85C349] text-sm font-semibold px-3 py-1 rounded-full">
                For Consumers
              </span>
              
              <h1 className="text-4xl md:text-5xl font-bold mt-6">
                <span className='text-gray-600'>Home</span> <span className="text-[#85C349]">Cooks</span><span className='text-gray-600'> &</span><br />
                Chefs
              </h1>
              
              <p className="text-gray-600 mt-4 text-lg leading-relaxed">
                Find local producers in your area, get reminders to go to market, know what's available each week. Learn about ingredients and recipes to help bring out their best.
              </p>
              
              <ul className="mt-8 space-y-4">
                <li className="flex items-center text-gray-700">
                  <span className="bg-[#85C349] w-5 h-5 flex items-center justify-center rounded-full text-white">
                    <Check size={14} />
                  </span>
                  <span className="ml-3">
                    Easier access to local ingredients.
                  </span>
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="bg-[#85C349] w-5 h-5 flex items-center justify-center rounded-full text-white">
                    <Check size={14} />
                  </span>
                  <span className="ml-3">
                    Improved eating habits and confidence in food quality.
                  </span>
                </li>
              </ul>
              
              <button className="mt-8 bg-[#85C349] text-white px-6 py-3 rounded-full font-medium hover:bg-[#85C349] transition-colors duration-200" style={{

                fontSize:"15px"
              }}>
                Join the Culineer Community
              </button>
            </div>

            {/* MacBook Image */}
            <div className="relative md:absolute md:left-0 order-2 md:order-1 mx-auto">
              <img
                src="/Macbook2.png"
                alt="MacBook Pro Mockup"
                className="w-full max-w-[500px]  cursor-pointer macbookimg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConsumerSec;