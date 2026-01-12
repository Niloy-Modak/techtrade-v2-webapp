"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

const bannersContents = [
  {
    src: "/banner/banner.png",
    title: "iPhone 14",
    model: "Pro",
    subtitle: "Created to change everything for the better. For everyone.",
  },
  {
    src: "/banner/banner3.jpg",
    title: "Samsung Galaxy",
    model: "S23",
    subtitle: "Innovation meets performance in a sleek design.",
  },
  {
    src: "/banner/banner2.jpg",
    title: "Google Pixel",
    model: "8",
    subtitle: "Smarter, faster, and more helpful than ever.",
  },
];

const Banner = () => {
  // State to store the swiper instance so we can control it with custom buttons
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-lg  mb-8 group">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="w-full rounded-lg"
        onSwiper={setSwiperInstance} // Capture the swiper instance
      >
        {bannersContents.map((banner, idx) => (
          <SwiperSlide key={idx} className="rounded-lg">
            <div className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-lg mt-4 mb-8 ">
              <Image
                src={banner.src}
                alt={`${banner.title} ${banner.model}`}
                priority={idx === 0}
                width={1920}
                height={900}
                className="w-full h-auto object-cover rounded-lg  "
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-[#101010] via-[#10101080] to-transparent" />

              {/* Text Content */}
              <div className="absolute inset-0 flex items-center md:px-8">
                <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
                  <div className="max-w-xl space-y-4 text-left">
                    <p className="text-sm tracking-wide text-gray-300 hidden sm:block">
                      Pro.Beyond.
                    </p>
                    <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold text-white">
                      {banner.title}{" "}
                      <span className="font-bold">{banner.model}</span>
                    </h1>
                    <p className="text-gray-300 text-sm md:text-base">
                      {banner.subtitle}
                    </p>
                    <button className="mt-4 hidden sm:inline-flex items-center px-6 py-3 border border-white/40 rounded-lg text-white hover:bg-white hover:text-black transition duration-300">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* --- CUSTOM NAVIGATION BUTTONS (Apple Liquid Effect) --- */}

      {/* Previous Button */}
      <button
        onClick={() => swiperInstance?.slidePrev()}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 
                   w-12 h-12  items-center justify-center rounded-full 
                   bg-white/10 backdrop-blur-md border border-white/20 text-white 
                   shadow-lg transition-all duration-300
                   hover:bg-white/20 hover:scale-105 hover:border-white/40
                   hidden md:flex" // Hidden on mobile, flex on desktop
        aria-label="Previous Slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={() => swiperInstance?.slideNext()}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 
                   w-12 h-12 items-center justify-center rounded-full 
                   bg-white/10 backdrop-blur-md border border-white/20 text-white 
                   shadow-lg transition-all duration-300
                   hover:bg-white/20 hover:scale-105 hover:border-white/40
                   hidden md:flex"
        aria-label="Next Slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </section>
  );
};

export default Banner;
