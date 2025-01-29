export default function BusinessSec() {
    return (
      <>
        <div className="container">
          <div className="mt-28">
            <div className="bg-[#F3F9ED]  w-11/12 md:w-4/5 h-fit p-12 rounded-3xl px-6 relative max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 items-center gap-4 green-box">
              {/* Left Content */}
              <div className="left-content-text bg-red">
                <span className="inline-block bg-[#E5F3D4] text-[#85C349] text-sm font-semibold px-4 py-1 rounded-full">
                  For Business
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-black-700 mt-4">
                 <span className="text-[#85C349] ml-5">Producers</span>  <br /> <span className="text-gray-600 ">&</span> Markets
                </h1>
                <p className="text-gray-600 mt-4 text-lg">
                  Capture leads, engage customers and track your marketing efforts with limited to no marketing expertise. Culineer makes growing your business easy!
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center">
                    <span className="bg-[#85C349] w-5 h-5 flex items-center justify-center rounded-full text-white text-sm">
                      ✓
                    </span>
                    <span className="ml-4 text-gray-700 text-lg">
                      Increase sales and improve profits.
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-[#85C349] w-5 h-5 flex items-center justify-center rounded-full text-white text-sm">
                      ✓
                    </span>
                    <span className="ml-4 text-gray-700 text-lg">
                      Streamlined marketing and data insights.
                    </span>
                  </li>
                </ul>
                <button className="mt-6 bg-[#85C349] text-white px-8 py-3 rounded-full shadow hover:bg-[#85C349]">
                  Upgrade to a Professional Account
                </button>
              </div>
  
              {/* Right Content */}
              <div className="md:absolute md:right-0 w-full md:w-auto flex justify-center">
                <img
                  src="/Macbook.png"
                  alt="MacBook"
                  className="max-w-full  cursor-pointer macbook1"
                  width={500}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  