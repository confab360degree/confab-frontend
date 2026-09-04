'use client'

import { Carousel, Image } from 'antd';
import React, { useRef, useState } from 'react'
import Title from '../UI/Title/Title';
import Heading from '../UI/Title/Heading';
import { CarouselRef } from 'antd/es/carousel';
import Link from 'next/link';

const UpcomingEventsComp = () => {

const carouselRef = useRef<CarouselRef>(null);
    
const [currentSlide, setCurrentSlide] = useState<number>(0);

const upcomingEventsList = [
  {
      image: "/assets/images/upcomingEvent/GEP.jpg",
      title: ""
    },
    {
      image: "/assets/images/upcomingEvent/ICATS2026.jpg",
      title: ""
    },
    {
      image: "/assets/images/upcomingEvent/CIECI2026.jpg",
      title: ""
    },
  
  // {
  //     image: "/assets/images/upcomingEvent/AIVHI3.jpg",
  //     title: ""
  //   },
  //   {
  //     image: "/assets/images/upcomingEvent/AIVHI4.jpg",
  //     title: ""
  //   },
  // {
  //     image: "/assets/images/upcomingEvent/AIVHI5.jpg",
  //     title: ""
  //   },
  // {
  //     image: "/assets/images/upcomingEvent/AIVHI6.jpg",
  //     title: ""
  //   },
  // {
  //     image: "/assets/images/upcomingEvent/AIVHI7.jpg",
  //     title: ""
  //   },
   
  //    {
  //     image: "/assets/images/upcomingEvent/AIBT1.jpg",
  //     title: ""
  //   },
  //   {
      
  //     image: "/assets/images/upcomingEvent/AIBT2.jpg",
  //     title: ""
  //   },
  //   {
      
  //     image: "/assets/images/upcomingEvent/AIBT3.jpg",
  //     title: ""
  //   },
  //   {
      
  //     image: "/assets/images/upcomingEvent/AIBT4.jpg",
  //     title: ""
  //   },
  //   {
  //     image: "/assets/images/upcomingEvent/AIBT5.jpg",
  //     title: ""
  //   },
  //   {
  //     image: "/assets/images/upcomingEvent/AIBT6.jpg",
  //     title: ""
  //   },
  //   {
  //     image: "/assets/images/upcomingEvent/AIBT7.jpg",
  //     title: ""
  //   },
  //   {
  //     image: "/assets/images/upcomingEvent/AIBT8.jpg",
  //     title: ""
  //   },
]

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      // {
      //   breakpoint: 1220,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 1,
      //   }
      // },
      //  {
      //   breakpoint: 865,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   }
      // }
    ]
  };

  const handleAfterChange = (current: number) => {
    setCurrentSlide(current)
  }

  return (
      <div className="testimonials-carousel w-full bg-white py-10 px-[20px] md:px-[70px] max-w-[2000px] mx-auto">
      
        {/* Header */}
        <div className="text-center space-y-2 md:space-y-4 mb-8">
          <Title title='Upcoming Events'/>
          <Heading line1='Don’t Miss Our Upcoming Events'/>
        </div>

 <div className="relative mb-10">
          <Carousel ref={carouselRef} afterChange={handleAfterChange} {...carouselSettings}>
            {upcomingEventsList.map((items,i) => (
              <div key={i} className="px-4 !flex !justify-center !items-center">
                   <div className="max-w-[350px] max-h-full bg-white overflow-hidden ">
                      <img
                        src={items.image}
                        alt={items.title}
                        className="w-full h-full object-cover border "
                      />
                    </div>
                    {/* <p className='text-sm text-center'>{items.title} hello</p> */}
              </div>
            ))}
          </Carousel>


<div className="flex justify-center mt-12 space-x-2">
            {upcomingEventsList.map((_, index) => (
              <button
                key={index}
                onClick={() => carouselRef.current?.goTo(index)}
                className={`
                  w-2 h-2 rounded-full transition-all duration-300
                  ${index === currentSlide 
                    ? 'bg-[#f27521] scale-125' 
                    : 'border border-gray-300 bg-white hover:bg-gray-400'
                  }
                `}
                aria-label={`Go to recent Update ${index + 1}`}
              />
            ))}
          </div>

        </div>

<div className='w-full flex justify-center items-center'>
              <Link href={'/assets/file/event_files/ICATS2026.pdf'} download="ICATS2026.pdf" className='px-[40px] py-[10px] border-2 border-[#4970b3] text-white bg-transparent'><h1 className='text-md text-[#4970b3]'>Download</h1></Link>

            </div>
        </div>
  )
}

export default UpcomingEventsComp