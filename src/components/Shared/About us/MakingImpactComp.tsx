
'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import Heading from '@/components/UI/Title/Heading'
import Title from '@/components/UI/Title/Title'

const teamMembers = [
    {
        name: 'Dr. Nishu Ayedee',
        role: 'Founder & CEO',
        info: 'Founder, MentorEDGE',
        image: '/assets/images/team/na.jpg',
    },
    {
        name: 'Dr. Marcus Teunissen',
        role: 'Regional Director, Belgium',
        info: 'Director Health Promoters NL & Director GIST-T',
        image: '/assets/images/team/marcus.jpg',
    },
    {
        name: 'Mr. K. Venkataraj',
        role: 'Regional Director – South India',
        info: 'Founder, MobilityNxt – EV Training & Skilling Organisation',
        image: '/assets/images/team/KV.jpg',
    },
    {
        name: 'Dr. Sri (S) Sakuntala',
        role: 'Operations Manager – South India',
        info: 'Associate Professor, Malla Reddy University, Telangana',
        image: '/assets/images/team/SAK.jpg',
    },
    {
        name: 'Debabrata Roy',
        role: 'Consultant-Digital',
        info: '',
        image: '/assets/images/team/dr.jpg',
    },
]

const MakingImpactComp = () => {
    return (
        <div className="w-full bg-white py-10 px-[20px] md:px-[70px] max-w-[2000px] mx-auto">

            {/* Corporate Social Responsibility */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Right Side */}
                <div className="relative bg-white">
                    <div className="relative overflow-hidden rounded-sm">
                        <img
                            src="/assets/images/about/2.webp"
                            alt="Corporate Social Responsibility"
                            loading="lazy"
                            className="w-full h-full object-cover border"
                        />
                    </div>
                </div>

                {/* Left Side */}
                <div className="space-y-6">
                    <div className="text-start space-y-2 md:space-y-4">
                        <Title title="Corporate Social Responsibility" />
                        <Heading line1="Making an Impact" />
                    </div>

                    <p className="text-md leading-relaxed mb-8">
                        At Confab 360 Degree, we believe our people and our
                        organization have an important role to play in creating
                        a better future for all. Since our inception, we have
                        created a strong culture of giving back to the communities
                        where we live and work. Driven by our people, it is through
                        our collective actions that we can advance toward our
                        vision of empowering our clients, our people and the
                        communities we serve to own their future.
                    </p>

                    <div className="relative overflow-hidden rounded-sm">
                        <img
                            src="/assets/images/about/8.webp"
                            alt="Community engagement and social impact"
                            loading="lazy"
                            className="w-full h-full object-cover border"
                        />
                    </div>
                </div>
            </div>

            {/* Meet Our Team */}
            <section className="mt-20 md:mt-28">

                {/* Section Heading */}
                <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
                    <Title title="The People Behind Our Success" />
                    <Heading line1="Meet Our Team" />

                    <p className="text-md leading-relaxed text-gray-600 mt-4">
                        Our team is the driving force behind everything we do.
                        With diverse expertise, shared values and a commitment
                        to excellence, we work together to create meaningful
                        impact and deliver lasting value.
                    </p>
                </div>

                {/* Team Carousel */}
                <div className="relative team-carousel">

                    <Swiper
                            modules={[Autoplay, Navigation, Pagination]}
                            spaceBetween={24}
                            slidesPerView={1}
                            loop={true}

                            // Transition speed (milliseconds)
                            speed={1000}

                            // Automatic scrolling
                            autoplay={{
                                delay: 1000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}

                            navigation={{
                                prevEl: '.team-prev',
                                nextEl: '.team-next',
                            }}

                            pagination={{
                                clickable: true,
                                el: '.team-pagination',
                            }}

                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 24,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 28,
                                },
                                1280: {
                                    slidesPerView: 4,
                                    spaceBetween: 30,
                                },
                            }}

                            className="!pb-14"
>
                        {teamMembers.map((member, index) => (
                            <SwiperSlide key={member.name}>
                                <div className="group text-center h-full">

                                    {/* Member Image */}
                                    <div className="relative overflow-hidden rounded-md bg-gray-100 aspect-[4/5]">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            loading="lazy"
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>

                                    {/* Member Details */}
                                    <div className="pt-5 pb-3 space-y-2">
                                        <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                                            {member.name}
                                        </h3>

                                        <p className="text-sm font-medium text-gray-600">
                                            {member.role}
                                        </p>

                                        {member.info && (
                                            <p className="text-sm leading-relaxed text-gray-400">
                                                {member.info}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Arrows */}
                    <button
                        type="button"
                        className="team-prev absolute left-0 top-[40%] z-10 -translate-x-1/2 -translate-y-1/2 bg-white shadow-md border border-gray-200 rounded-full w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-gray-900 hover:text-white transition-all"
                        aria-label="Previous team members"
                    >
                        &#10094;
                    </button>

                    <button
                        type="button"
                        className="team-next absolute right-0 top-[40%] z-10 translate-x-1/2 -translate-y-1/2 bg-white shadow-md border border-gray-200 rounded-full w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-gray-900 hover:text-white transition-all"
                        aria-label="Next team members"
                    >
                        &#10095;
                    </button>

                    {/* Pagination */}
                    <div className="team-pagination flex justify-center items-center gap-2 mt-4" />
                </div>
            </section>

        </div>
    )
}

export default MakingImpactComp
