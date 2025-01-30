"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AOS from "aos";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useEffect } from "react";
import "aos/dist/aos.css";

export default function ResourcesEducation() {
  useEffect(() => {
    AOS.init({ duration: 1200, easing: "ease-in-out", once: true });
  }, []);

  const cardData = [
    {
      image: "/vegOne.jpeg",
      date: "December 6, 2021 Delia Hernandez",
      quote: "Muddassar MD Collection Emerges As A Favorite Among Designers",
      name: "Ryan Ekstrom Bothman",
      title: "Farmer",
      profileImage: "/founder.png",
    },
    {
      image: "/vegTwo.jpeg",
      date: "December 6, 2021 Delia Hernandez",
      quote: "Muddassar MD Collection Emerges As A Favorite Among Designers",
      name: "Jane Doe",
      title: "Chef",
      profileImage: "/founder.png",
    },
    {
      image: "/vegThree.jpeg",
      date: "December 6, 2021 Delia Hernandez",
      quote: "Muddassar MD Collection Emerges As A Favorite Among Designers",
      name: "John Smith",
      title: "Home Cook",
      profileImage: "/founder.png",
    },
    {
      image: "/vegFour.jpeg",
      date: "December 6, 2021 Delia Hernandez",
      quote: "Muddassar MD Collection Emerges As A Favorite Among Designers",
      name: "Emily Davis",
      title: "Food Blogger",
      profileImage: "/founder.png",
    },
  ];

  return (
    <div className="w-full h-fit p-10">
      {/* Heading Section with Animation */}
      <div className="Heading text-start pt-10">
        <h1
          className="text-[48px] font-semibold testinomal-head"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          Resources & <span className="text-[#85C349]">Education</span>
        </h1>
        <p
          className="text-[17px] text-[#6B6B6B]"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          Explore the best reviews we got from our clients.
        </p>
      </div>

      {/* Carousel Section */}
      <div className="pt-24">
        <Carousel opts={{ align: "start" }} className="w-full max-w-full mx-auto">
          <CarouselContent>
            {cardData.map((card, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3"
                data-aos="fade-up"
                data-aos-delay={index * 200 + 600}
              >
                <div className="p-1">
                  <div className="mx-auto h-[600px] bg-white overflow-hidden mb-4">
                    <img
                      src={card.image}
                      alt="Market scene"
                      className="w-full h-[459px] object-cover"
                      style={{ borderRadius: "16px" }}
                      data-aos="zoom-in"
                      data-aos-delay={index * 200 + 800}
                    />
                    <div className="p-4 pt-6 relative">
                      <p className="text-[#202020] text-[16px] text-lg font-medium">
                        {card.date}
                      </p>
                      <p className="text-black text-[22px] text-lg font-semibold">
                        {card.quote}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Buttons */}
          <div className="absolute top-[-140px] right-10 transform -translate-x-1/2 flex space-x-4 web-btn">
            <CarouselPrevious>
              <button className="w-[100px] h-[100px] rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                <ArrowLeft size={20} />
              </button>
            </CarouselPrevious>

            <CarouselNext>
              <button className="w-[100px] h-[100px] rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                <ArrowRight size={20} />
              </button>
            </CarouselNext>
          </div>

          <div className="absolute bottom-[-40px] left-10 transform -translate-x-1/2 flex space-x-4 mob-btn">
            <CarouselPrevious>
              <button className="w-[100px] h-[100px] rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                <ArrowLeft size={20} />
              </button>
            </CarouselPrevious>

            <CarouselNext>
              <button className="w-[100px] h-[100px] rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                <ArrowRight size={20} />
              </button>
            </CarouselNext>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
