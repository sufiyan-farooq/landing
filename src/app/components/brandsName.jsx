const LOGOS = [
    <img src="/brand1.png" alt="Brand 1" width={250} height={30} className="text-slate-800" />,
    <img src="/brand2.png" alt="Brand 2" width={250} height={30} className="text-slate-800" />,
    <img src="/brand3.png" alt="Brand 3" width={250} height={30} className="text-slate-800" />,
    <img src="/brand4.png" alt="Brand 4" width={250} height={30} className="text-slate-800" />,
    <img src="/brand5.png" alt="Brand 5" width={250} height={30} className="text-slate-800" />,
    <img src="/brand6.png" alt="Brand 6" width={250} height={30} className="text-slate-800" />,
  ];
  
  export const BrandNames = () => {
    return (
      <>
        <div className="relative m-auto mt-20 w-full overflow-hidden bg-white">
          <div className="animate-infinite-slider flex">
            {LOGOS.map((logo, index) => (
              <div className="slide flex w-[250px] items-center justify-center" key={index}>
                {logo}
              </div>
            ))}
            {LOGOS.map((logo, index) => (
              <div className="slide flex w-[250px] items-center justify-center" key={`second-${index}`}>
                {logo}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-40"></div>
      </>
    );
  };
  