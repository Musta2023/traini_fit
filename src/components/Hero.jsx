import React from 'react'

function Hero() {
  return (
    <section className="bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-800 text-white py-20 px-6 rounded-3xl shadow-2xl my-8 mx-auto max-w-7xl">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl font-extrabold leading-tight mb-6 drop-shadow-xl">
            Welcome to Moroccan Fitness Blog
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-200">
            Many Moroccans struggle to find culturally relevant fitness advice.  
            Our platform offers personalized training plans, nutritional tips, and local gym info to help you transform your lifestyle.
          </p>
          <button className="bg-white text-purple-800 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-purple-200 transition duration-300">
            Explore Now
          </button>
        </div>

        {/* Image */}
        <div className="lg:w-1/2">
          <img
            src="/pexels-thelazyartist-2247179.jpg"
            alt="Fitness lifestyle"
            className="rounded-3xl shadow-2xl object-cover w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero