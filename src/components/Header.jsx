export default function Header() {
    return (
        <header className="bg-white/95 backdrop-blur-sm p-4 fixed top-0 left-0 right-0 z-50 shadow-xl">
            <nav className="max-w-6xl mx-auto flex justify-between items-center">
                <a href="#" className="text-2xl font-bold text-indigo-600">
                🏋️ FitLife
                </a>

                {/* Navigation Links */}
                <ul className="hidden md:flex space-x-8">
                <li><a href="#home" className="text-gray-700 hover:text-indigo-600 font-medium">Home</a></li>
                <li><a href="#body-types" className="text-gray-700 hover:text-indigo-600 font-medium">Body Types</a></li>
                <li><a href="#nutrition" className="text-gray-700 hover:text-indigo-600 font-medium">Nutrition</a></li>
                <li><a href="#exercises" className="text-gray-700 hover:text-indigo-600 font-medium">Exercises</a></li>
                <li><a href="#gyms" className="text-gray-700 hover:text-indigo-600 font-medium">Find Gyms</a></li>
                </ul>

                {/* Right Section: Search + Auth Buttons (Desktop) */}
                <div className="hidden md:flex items-center space-x-4">
                {/* Search */}
                <div className="relative">
                    <input
                    type="text"
                    placeholder="Search..."
                    className="pl-3 pr-10 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-indigo-500"
                    />
                    <button className="absolute right-0 top-0 bottom-0 px-3 text-indigo-600 hover:text-indigo-800">
                    🔍
                    </button>
                </div>

                {/* Auth Buttons */}
                <a href="/signin" className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-50 transition">Sign In</a>
                <a href="/signup" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">Sign Up</a>
                </div>
            </nav>
        </header>

    );
}
