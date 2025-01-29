import React from 'react';

function QuoteSec3() {
  return (
    <div className="container mx-auto px-4 py-20 mt-40">
      <div className="relative  mx-auto sec3-box" >
        {/* Large quote marks background */}
        <div className="absolute top-[-55px] left-[2rem] w-[155px] font-serif text-[#f3f6f3] leading-none"><img src="/bg-w.png" alt="" /></div>
        
        {/* Main content */}
        <div className="relative  max-w-4xl  text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-black">Culineer is on a </span> <span className="text-gray-500">mission to build </span> a more sustainable 
            <span className="text-[#8cc63f]"> world by making </span>
            <span className="text-gray-500">it easy for people </span>
            to eat locally-produced foods.          </h1>
          
          {/* Profile section */}
          <div className="mt-12 flex items-center pl-4">
            <div className="flex items-center space-x-4">
              <img 
                src="/founder.png"
                alt="CEO Profile"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-left">
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
    <div className=" bg-white">
      <QuoteSec3 />
    </div>
  );
}

export default App;