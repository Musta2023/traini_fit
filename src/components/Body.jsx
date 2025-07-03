import React from 'react';

const BodyTypes = () => {
  return (
    <section id="body-types" className="bg-white rounded-3xl shadow-2xl p-8 my-8">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 relative">
        🎯 Body Types & Recommendations
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></div>
      </h2>

      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Skinny Fat */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">🤸‍♂️ Skinny Fat</h3>
          <h4 className="text-lg font-medium text-gray-700 mb-2">Low Muscle, High Fat</h4>
          <div className="mb-4">
            <h5 className="font-semibold text-indigo-600 mb-2">Food:</h5>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
              <li>High protein (1.6–2.2g/kg body weight)</li>
              <li>Moderate complex carbs (oats, brown rice)</li>
              <li>Healthy fats (avocado, nuts)</li>
              <li>Slight caloric surplus or maintenance</li>
              <li>Avoid sugars and processed foods</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-indigo-600 mb-2">Sport:</h5>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
              <li>Heavy strength training 3-5x/week</li>
              <li>Minimal cardio (1-2x/week light)</li>
              <li>Focus on muscle building and body recomposition</li>
            </ul>
          </div>
        </div>

        {/* Skinny */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">🏃‍♂️ Skinny</h3>
          <h4 className="text-lg font-medium text-gray-700 mb-2">Low Fat, Low Muscle</h4>
          <div className="mb-4">
            <h5 className="font-semibold text-green-600 mb-2">Food:</h5>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
              <li>High calories, high protein (2g/kg)</li>
              <li>Lots of complex carbs and healthy fats</li>
              <li>Frequent meals (4-6 per day)</li>
              <li>Focus on calorie-dense, clean foods</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-green-600 mb-2">Sport:</h5>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
              <li>Strength training 4-5x/week, focus on compound lifts</li>
              <li>Minimal to no cardio</li>
              <li>Goal: muscle gain (bulking)</li>
            </ul>
          </div>
        </div>

        {/* Fat */}
        <div className="bg-gradient-to-br from-orange-50 to-red-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">💪 Fat</h3>
          <h4 className="text-lg font-medium text-gray-700 mb-2">High Fat, Low Muscle</h4>
          <div className="mb-4">
            <h5 className="font-semibold text-pink-600 mb-2">Food:</h5>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
              <li>Caloric deficit, high protein (2g/kg)</li>
              <li>Low sugar, focus on fiber and lean protein</li>
              <li>Moderate healthy fats and complex carbs</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-pink-600 mb-2">Sport:</h5>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
              <li>Strength training 3-4x/week</li>
              <li>Cardio 3-5x/week (mix of HIIT and steady-state)</li>
              <li>Goal: fat loss while preserving muscle</li>
            </ul>
          </div>
        </div>


        {/* Nearest Gyms */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">🏢 Nearest Gyms to You</h3>
          <ul className="list-disc list-inside text-gray-600 text-sm space-y-2">
            <li><span className="font-semibold text-gray-800">Ousama Gym</span> - Great equipment and trainers.</li>
            <li><span className="font-semibold text-gray-800">Fitnessam</span> - Friendly environment and modern facilities.</li>
            <li><span className="font-semibold text-gray-800">GloryFit</span> - Affordable memberships and group classes.</li>
            <li><span className="font-semibold text-gray-800">Fitapam</span> - Spacious, clean, and welcoming gym for all levels.</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default BodyTypes;
