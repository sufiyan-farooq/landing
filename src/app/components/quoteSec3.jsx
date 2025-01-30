'use client'
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function QuoteSec3() {
  useEffect(() => {
    AOS.init({ duration: 1500, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="container mx-auto px-4 py-20 mt-40">
      <div className="relative mx-auto sec3-box" data-aos="fade-up">
        {/* Large quote marks background */}
        <div
          className="absolute top-[-55px] left-[2rem] w-[155px] font-serif text-[#f3f6f3] leading-none"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <img src="/bg-w.png" alt="" />
        </div>

        {/* Main content */}
        <div className="relative max-w-4xl text-center">
          <h1
            className="text-4xl md:text-5xl font-bold leading-tight"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <span className="text-black">Culineer is on a </span>
            <span className="text-gray-500">mission to build </span> a more sustainable
            <span className="text-[#8cc63f]"> world by making </span>
            <span className="text-gray-500">it easy for people </span>
            to eat locally-produced foods.
          </h1>

          {/* Profile section */}
          <div
            className="mt-12 flex items-center pl-4"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <div className="flex items-center space-x-4">
              <img
                src="/founder.png"
                alt="CEO Profile"
                className="w-16 h-16 rounded-full object-cover"
                data-aos="fade-right"
                data-aos-delay="1000"
              />
              <div className="text-left" data-aos="fade-left" data-aos-delay="1200">
                <h3 className="font-semibold text-lg">John Doe</h3>
                <p className="text-gray-600">CEO and Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="bg-white">
      <QuoteSec3 />
    </div>
  );
}

export default App;
