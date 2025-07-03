import React from "react";
import { motion } from "framer-motion"; // make sure to install: npm i framer-motion

const features = [
  {
    id: "culture",
    title: "Culturally Relevant",
    description:
      "Fitness content designed specifically for Moroccan lifestyle, food habits, and culture.",
    icon: (
      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zm0 13l10-5v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6l10 5z" />
      </svg>
    ),
  },
  {
    id: "plans",
    title: "Custom Plans",
    description:
      "Training and nutrition programs tailored to your body type and personal goals.",
    icon: (
      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    id: "gyms",
    title: "Nearby Gyms",
    description:
      "Discover the best local gyms in Morocco with honest reviews and recommendations.",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    id: "progress",
    title: "Progress Tracking",
    description:
      "Track your workouts and monitor your transformation with clear, visual stats.",
    icon: (
      <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M9 17v-6a2 2 0 012-2h2" />
        <path d="M3 13l4-4 3 3 4-4 5 5" />
      </svg>
    ),
  },
];

function Feature({ title, description, icon }) {
  return (
    <motion.div
      className="flex items-start p-6 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
    >
      <div className="mr-4">{icon}</div>
      <div>
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}

export default function Content() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto" aria-labelledby="features-title">
      <h2 id="features-title" className="text-4xl font-extrabold text-center text-indigo-700 mb-12">
        Why Choose Fit Morocco?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((f) => (
          <Feature key={f.id} title={f.title} description={f.description} icon={f.icon} />
        ))}
      </div>
    </section>
  );
}