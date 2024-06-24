'use client'

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="w-full shadow h-[72px] border border-blue-900 bg-gray-900 text-white">
            <div className="flex items-center justify-between p-4">
                {/* Hamburger menu for small screens */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
                    </button>
                </div>

                {/* Logo */}
                <div className="flex items-center">
                    <div className="text-2xl font-bold">Logo</div>
                </div>

                {/* Profile Icon */}
                {isLoggedIn && (
                    <div className="hidden md:block">
                        <FontAwesomeIcon icon={faUserCircle} size="2x" />
                    </div>
                )}
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white shadow-md"
                    >
                        <ul className="flex flex-col items-center">
                            <li className="p-2">
                                <a href="#profile">Profile</a>
                            </li>
                            <li className="p-2">
                                <a href="#settings">Settings</a>
                            </li>
                            <li className="p-2">
                                <a href="#logout">Logout</a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
