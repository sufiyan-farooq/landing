'use client';
import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function Testimonial() {
  const cardData = [
    {
      image: '/vegOne.jpeg',
      quote:
        'Ordering from Culineer is always a breeze. Their website is user-friendly, and my purchases arrive quickly!',
      name: 'Ryan Ekstrom Bothman',
      title: 'Farmer',
      profileImage: '/founder.png',
    },
    {
      image: '/vegTwo.jpeg',
      quote:
        'Culineer has transformed the way I shop for groceries. The quality is unmatched!',
      name: 'Jane Doe',
      title: 'Chef',
      profileImage: '/founder.png',
    },
    {
      image: '/vegThree.jpeg',
      quote: 'I love the variety Culineer offers. It\'s my go-to for fresh produce.',
      name: 'John Smith',
      title: 'Home Cook',
      profileImage: '/founder.png',
    },
    {
      image: '/vegFour.jpeg',
      quote: 'Culineer makes grocery shopping so convenient and enjoyable!',
      name: 'Emily Davis',
      title: 'Food Blogger',
      profileImage: '/founder.png',
    },
    {
      image: '/vegFive.jpeg',
      quote: 'Culineer makes grocery shopping so convenient and enjoyable!',
      name: 'Emily Davis',
      title: 'Food Blogger',
      profileImage: '/founder.png',
    },
    {
      image: '/vegSix.jpeg',
      quote: 'Culineer makes grocery shopping so convenient and enjoyable!',
      name: 'Emily Davis',
      title: 'Food Blogger',
      profileImage: '/founder.png',
    },
  ];

  return (
    <div className="bg-[#F3F9ED] w-full h-fit p-5 pb-20 md:p-20 ">
      <div className="Heading text-center pt-20 md:pt-20">
        <h1 className="text-3xl md:text-4xl lg:text-[48px] font-semibold">
          See what our <span className="text-[#85C349]">Clients Said </span> about us
        </h1>
        <p className="text-base md:text-lg text-[#6B6B6B] mt-2">
          Explore the best reviews we got from our clients.
        </p>
      </div>

      <div className="pt-20  ">
        <Carousel opts={{ align: 'start' }} className="w-full mx-auto">
          <CarouselContent>
            {cardData.map((card, index) => (
              <CarouselItem
                key={index}
                className="basis-full sm:basis-3/4 md:basis-1/2 lg:basis-1/3 px-4"
              >
                <div className="p-1">
                  <div className="w-full bg-white rounded-2xl shadow-lg overflow-hidden mb-4">
                    <img
                      src={card.image}
                      alt="Market scene"
                      className="w-full h-60 md:h-72 lg:h-80 object-cover"
                    />
                    <div className="p-4 pt-6 relative">
                      <p className="text-gray-700 text-lg md:text-xl font-semibold">
                        {card.quote}
                      </p>
                      <div className="flex items-center mt-4 pt-4">
                        <img
                          src={card.profileImage}
                          alt={card.name}
                          className="w-10 h-10 rounded-full"
                        />
                        <div className="ml-3">
                          <p className="text-gray-900 font-semibold">{card.name}</p>
                          <p className="text-gray-500 text-sm">{card.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Buttons */}
          <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 flex space-x-4">
            <CarouselPrevious>
              <button className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                <ArrowLeft size={20} />
              </button>
            </CarouselPrevious>
            <CarouselNext>
              <button className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                <ArrowRight size={20} />
              </button>
            </CarouselNext>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
