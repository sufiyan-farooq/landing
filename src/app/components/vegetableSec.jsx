import React from 'react';



function VegetableSec() {
  return (
    <>
    <div className="relative  p-8   mt-28 , " style={{ backgroundImage: 'url(/graph-bg.jpg)',zIndex:"9999999",height:"800px",maxHeight:"1000px"}}>
    <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Start building your <span className="text-[#8cc63f]">market</span>
          <br />
          <span className="text-[#8cc63f]">community</span> today.
        </h1>
        <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto">
          Join our community to stay updated with your favorite food producer or market.
        </p>
        <button className="mt-8 px-8 py-3 bg-[#8cc63f] text-white rounded-full font-medium hover:bg-opacity-90 transition-colors">
          Get Started
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <div className="flex justify-between gap-4 items-end">
          <img 
          src='veg1.png'
            className="w-[120px] h-[660px] object-cover [border-top-right-radius:50%] hidden md:block"
            alt="Food"
          />
          <img 
            src="veg2.png"
            className="w-[153px] h-[420px] object-cover rounded-t-full hidden md:block"
            alt="Vegetables"
          />
          <img 
            src="/veg3.png"
            className= "vegThree object-cover rounded-t-full"
            alt="Fresh produce"
          />
          <img 
            src="/veg4.png"
            className="vegFour  object-cover rounded-t-full"
            alt="Market vegetables"
          />
          <img 
            src="/veg5.png"
            className="w-[240px] h-[420px] object-cover rounded-t-full hidden md:block"
            alt="Fresh greens"
          />
          <img 
            src="/veg6.png"
            className="w-[150px] h-[660px] object-cover [border-top-left-radius:50%] hidden md:block"
            alt="Market produce"
          />
        </div>
      </div>
    </div>
 

    </>
  );
}

export default VegetableSec;