export default function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-sm p-4 fixed top-0 left-0 right-0 z-50 shadow-xl">
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-indigo-600">
            🏋️ FitLife
          </a>
          <ul className="hidden md:flex space-x-8">
            <li><a href="#home" className="text-gray-700 hover:text-indigo-600 font-medium">Home</a></li>
            <li><a href="#body-types" className="text-gray-700 hover:text-indigo-600 font-medium">Body Types</a></li>
            <li><a href="#nutrition" className="text-gray-700 hover:text-indigo-600 font-medium">Nutrition</a></li>
            <li><a href="#exercises" className="text-gray-700 hover:text-indigo-600 font-medium">Exercises</a></li>
            <li><a href="#gyms" className="text-gray-700 hover:text-indigo-600 font-medium">Find Gyms</a></li>
          </ul>
          <div className="md:hidden flex flex-col cursor-pointer">
            <span className="w-6 h-0.5 bg-gray-700 mb-1"></span>
            <span className="w-6 h-0.5 bg-gray-700 mb-1"></span>
            <span className="w-6 h-0.5 bg-gray-700"></span>
          </div>
        </nav>
      </header>

  );
}
