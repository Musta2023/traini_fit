import React from "react"
import execrise from "../assets/exercise.png"
import Gyms from "../assets/gyms.png"
import nutrition from "../assets/nutrition.png"


const blogs = [
  {
    title: "5 Best Workouts for Building Strength",
    image: Gyms,
    category: "Gyms",
    date: "July 4, 2025",
    excerpt:
      "Discover the most effective exercises to build raw power and increase your strength naturally.",
  },
  {
    title: "Morning Routines to Boost Energy",
    image: execrise,
    category: "Exercises",
    date: "July 1, 2025",
    excerpt:
      "Start your day right with these simple and energizing fitness habits.",
  },
  {
    title: "Top 10 Foods for Muscle Growth",
    image: nutrition,
    category: "nutrition",
    date: "June 28, 2025",
    excerpt:
      "Fuel your gains with these protein-packed, nutrient-dense foods recommended by fitness pros.",
  },
]

const Blogs = () => {
  return (
    <section className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Fitness Blogs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="max-w-md mx-auto rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
          >
            <img
              className="w-full h-48 object-cover"
              src={blog.image}
              alt={blog.title}
            />
            <div className="p-4">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
                {blog.category}
              </span>
              <h3 className="mt-2 text-xl font-bold text-gray-900">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-500">{blog.date}</p>
              <p className="mt-2 text-gray-700 text-sm">{blog.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Blogs
