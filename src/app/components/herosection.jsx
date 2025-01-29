import React from "react";

const HeroSection = () => {

  return (
<section className="relative bg-white py-12 px-6 md:px-16 lg:px-24 mt-32 bg-[url('/circle.png')] bg-no-repeat bg-center heroSec">
      <div className="text-center max-w-4xl mx-auto relative">
        <img
          src="/heading.png"
          alt="Heading Icon"
          className="absolute heading-image" style={{top:"-1.5rem",left:"2.5rem",width:"3rem",height:"3rem"}}
        />
        <h1 className="font-bold leading-tight hero-head ">
          Discover and <span className="text-[#85C349]">Support</span> Your <span className="text-[#85C349]">Local Food </span> Heroes
        </h1>
        <p className="mt-4 text-gray-600">
          Connecting consumers with local food producers for a healthier,
          sustainable future.
        </p>

        {/* Buttons */}
        <div className="flex justify-center">
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <button className="bg-white text-black hero-btn border">
              Join as a Consumer
            </button>
            <button className="bg-[#85C349] text-white hero-btn">
              Upgrade Your Business
            </button>
          </div>
          <div>
            <img src="/arrow.png" className="ml-[20px] md:mr-[20px]" alt="" />
          </div>
        </div>

      </div>

      {/* Stats Section */}
      <div className="mt-8 flex justify-center gap-12 text-center">
        <div>
          <h2 className="text-3xl font-bold">200+</h2>
          <p className="text-gray-600">Total Producers</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold">199+</h2>
          <p className="text-gray-600">Happy Customers</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mx-auto">
        <img src="/hersectionBottom.png " className="mx-auto hero-sec-bottom" alt="Search Section" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-15 hidden lg:block ">
  <img src="/herosectionLeft.png" alt="Arrow Icon" />
</div>
<div className="absolute top-0 right-14 hidden lg:block ">
  <img src="/herosectionRight.png" alt="Floating Element" />
</div>

    </section>
  );
};

export default HeroSection;
