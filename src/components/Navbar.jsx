import { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="bg-white shadow-lg fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <a href="#" className="text-2xl font-bold text-gray-800">
                            Mansi Joshi
                        </a>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
                        <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
                        <a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a>
                        <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-gray-900">About</a>
                        <a href="#projects" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Projects</a>
                        <a href="#skills" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Skills</a>
                        <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Contact</a>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar 