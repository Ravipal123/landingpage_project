"use client"
import React, { useState } from 'react'; 
import Link from 'next/link';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-blue-700 text-white">
            <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-0">
                <h1 className="text-lg md:text-xl font-bold">Imeleo</h1>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex flex-grow ml-5">
                    <ul className="flex space-x-4 md:space-x-6">
                        <li><Link href="/solutions" className="hover:underline">Solutions</Link></li>
                        <li><Link href="/services" className="hover:underline">Services</Link></li>
                        <li><Link href="/about-us" className="hover:underline">About Us</Link></li>
                        <li><Link href="/careers" className="hover:underline">Careers</Link></li>
                        <li><Link href="/why-us" className="hover:underline">Why Us</Link></li>
                        <li><Link href="/blogs" className="hover:underline">Blogs</Link></li>
                    </ul>
                </nav>

                {/* Mobile Navigation Toggle */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMobileMenu} className="text-white text-2xl">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>

                {/* Desktop Search Bar */}
                <div className="hidden md:block relative flex-grow max-w-xs">
                    <input
                        type="text"
                        placeholder="Search"
                        className="px-2 py-1 rounded-full pl-10 w-full"
                    />
                    <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-blue-700`}>
                <ul className="flex flex-col items-center space-y-4 py-4">
                    <li><Link href="/solutions" className="hover:underline" onClick={toggleMobileMenu}>Solutions</Link></li>
                    <li><Link href="/services" className="hover:underline" onClick={toggleMobileMenu}>Services</Link></li>
                    <li><Link href="/about-us" className="hover:underline" onClick={toggleMobileMenu}>About Us</Link></li>
                    <li><Link href="/careers" className="hover:underline" onClick={toggleMobileMenu}>Careers</Link></li>
                    <li><Link href="/why-us" className="hover:underline" onClick={toggleMobileMenu}>Why Us</Link></li>
                    <li><Link href="/blogs" className="hover:underline" onClick={toggleMobileMenu}>Blogs</Link></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
