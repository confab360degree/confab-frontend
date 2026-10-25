import HeadBanner from '@/components/Layout/Banner/HeadBanner'
import Navbar from '@/components/Layout/Header/Navbar'
import Carousel from '@/components/UI/Carousel/Carousel'
import { UpcomingEventList } from '@/constants/data/events/upcomingEvent'
import Link from 'next/link'
import React from 'react'
import { GoDotFill } from 'react-icons/go'
import { LuCalendar } from 'react-icons/lu'

const UpcomingEvent = () => {
  return (
    <>
    <Navbar/>
    <HeadBanner title='Upcoming Events' />

    <div className='w-full bg-white py-10 px-[20px] md:px-[70px] max-w-7xl mx-auto flex flex-col justify-center items-center gap-5'>
        
        <div className='flex flex-col justify-center items-center gap-5'>
            <h1 className='text-lg text-center font-[700]'>CONFAB 360 DEGREE ANNOUNCES THE</h1>
        <div >
              <Link href={'/assets/file/event_files/ICETS-2027.pdf'} download="ICETS-2027.pdf" className='flex w-fit px-[40px] py-[10px] border-2 border-[#4970b3] text-white bg-transparent'><h1 className='text-md text-[#4970b3]'>Upcoming Events</h1></Link>

            </div>
        </div>
        
        <div className="space-y-6">
          {UpcomingEventList.map((event, index) => (
            <div key={event.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
                
                {/* Event Information Column */}
                <div className="p-5 lg:p-10 flex flex-col justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                  <div className="space-y-5">
                    {/* <span className="inline-block px-4 py-2 bg-[#f27521] text-white text-sm font-semibold rounded-full mb-4">
                      EVENT {index + 1}
                    </span> */}

                    {
                        event.title && (
                            <h2 className="text-2xl lg:text-3xl font-bold leading-tight ">
                      {event.title}
                    </h2>
                        )
                    }

  {
    event.event && (
        <div className='flex flex-col gap-3'>
             {
                event.event.map((item,i)=>(
                    <div key={i} className='flex flex-col gap-3'>
                        <Link href={item.link} className='text-lg font-[700] bannerTitle'>{item.title}</Link>
                        {
                            item.date && (
                                <p className='text-md flex justify-start items-start gap-2'><LuCalendar className='flex-shrink-0 text-[18px] mt-1 text-[#f27521]'/>{item.date}</p>
                            )
                        }
                    </div>
                ))
             }
        </div>
    )
  }

                    {
                        event.info && 
                        <p className='text-md
                         mt-4'>{event.info}</p>
                    }
                    {
                    
                    event.pointList &&
                                        event.pointList.map((item,i)=>(
                                             <p key={i} className='text-md flex justify-start items-start gap-2 mt-4'><GoDotFill className='flex-shrink-0 text-[10px] mt-2' />{item}</p>
                                        ))
                                    }
                    
                  </div>
                </div>
                
                {/* Carousel Column - FIXED */}
                <div className="relative flex items-center justify-center w-full h-full p-5">
                  <div className="flex items-center justify-center">
                    <Carousel autoplay={true}>
                      {event.images.map((image, imgIndex) => (
                        <div key={imgIndex} className="flex items-center justify-center h-[400px]">
                          <img
                            src={image}
                            alt={`${event.title} - Image ${imgIndex + 1}`}
                            loading='lazy'
                            className="w-[300px] min-h-[350px] object-contain"
                          />
                        </div>
                      ))}
                    </Carousel>
                  </div>
                </div>
                
              </div>
            </div>
          ))}
        </div>
    </div>

    </>
  )
}

export default UpcomingEvent