// components/Navbar.js
import React, { useState } from "react";
import Link from "next/link";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faBars)

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Link href="/">
                            <div className="text-2xl font-semibold cursor-pointer mr-6">
                                <img
                                    src="/logo.png"
                                    alt="Logo"
                                    className="h-24 w-auto"

                                />
                            </div>
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <NavItem href="#about">About</NavItem>
                        <NavItem href="#courses">Courses</NavItem>
                        <NavItem href="#testimonials">Testimonials</NavItem>
                        <NavItem href="#contact">Contact Us</NavItem>
                    </div>
                    <div className="flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-blue-600 focus:outline-none"
                        >
                            <FontAwesomeIcon icon={faBars} className="text-3xl" />
                        </button>
                    </div>
                </div>
            </div>
            <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <NavItemMobile setIsOpen={setIsOpen} href="#about">About</NavItemMobile>
                    <NavItemMobile setIsOpen={setIsOpen} href="#courses">Courses</NavItemMobile>
                    <NavItemMobile setIsOpen={setIsOpen} href="#testimonials">Testimonials</NavItemMobile>
                    <NavItemMobile setIsOpen={setIsOpen} href="#contact">Contact Us</NavItemMobile>
                </div>
            </div>
        </nav>
    );
};


const NavItem = ({ href, children }) => (
    <Link href={href}>
        <div className="text-blue-600 hover:text-red-600 px-3 py-2 rounded-md md:text-l font-semibold">
            {children}
        </div>
    </Link>
);


const NavItemMobile = ({ href, children, setIsOpen }) => (
    <Link href={href}>
        <div
            onClick={() => setIsOpen(false)}
            className="text-blue-600 block hover:text-red-600 px-3 py-2 rounded-md text-base font-medium"
        >
            {children}
        </div>
    </Link>
);

export default Navbar;
