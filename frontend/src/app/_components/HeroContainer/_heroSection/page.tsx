import React from 'react'
import Image from 'next/image'
import HeroImage from '../../../../../public/img/heroimg.png'

function HeroSection() {
  return (
    <div className="w-full min-h-[500px] bg-primary py-6 sm:py-12 rounded-b-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 sm:space-y-6 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
              Discover Your Next{' '}
              <span className="block text-[#6366f1] mt-2 sm:mt-6">Favorite Book.</span>
            </h1>
            <p className="text-gray-600 text-base sm:text-lg px-4 sm:px-0">
              Search millions of books, explore captivating stories, and uncover hidden literary gems. Your next adventure starts here.
            </p>
            <button className="bg-[#6366f1] text-base text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-md font-semibold hover:bg-[#5558e6] transition-colors border-black/75 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)]">
              Explore Now
            </button>
          </div>

          <div className="relative mt-8 md:mt-0">
            <div className="absolute top-8 sm:top-16 right-0 left-0 flex justify-center gap-4 sm:gap-16 -z-1">
              <div className="bg-[#bef8cc] rounded-lg px-6 sm:px-20 py-4 sm:py-10">
                <div className="text-xl sm:text-2xl font-bold">21K +</div>
                <div className="text-gray-600 text-sm sm:text-base">E-Books</div>
              </div>
              <div className="bg-[#bef8cc] rounded-lg px-6 sm:px-20 py-4 sm:py-10">
                <div className="text-xl sm:text-2xl font-bold">57K +</div>
                <div className="text-gray-600 text-sm sm:text-base">Active Users</div>
              </div>
            </div>

            <div className="mt-8 sm:mt-16 relative z-1">
              <Image src={HeroImage}  alt="hero-image" className="w-full h-auto"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection