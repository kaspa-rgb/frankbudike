import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        <nav className="bg-black shadow z-30" id='#navbar'>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button */}
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 text-gray-500 rounded-md hover:text-gray-700 focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg className="block text-white w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="block text-white w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            )}
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="p-2">
                            <h1 className="text-xl font-bold text-white">Frank Studios</h1>
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4 ml-[90%]">
                                <Link to="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-medium">Home</Link>
                                <Link to="/#gallery" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-medium">Gallery</Link>
                                <Link to="/biography" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-medium">Biography</Link>
                                <Link to="https://wa.me/message/4RIDHY4CPZPGI1" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-medium">Contact</Link>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`sm:hidden ${isOpen ? '' : 'hidden'}`} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <Link to="/" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                    <Link to="/#gallery" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Gallery</Link>
                    <Link to="/biography" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Biography</Link>
                    <Link to="https://wa.me/message/4RIDHY4CPZPGI1" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
                    
                </div>
            </div>
        </nav>

        <Outlet/>
        </>
    );
};

export default Navbar;
