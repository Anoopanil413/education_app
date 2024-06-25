'use client'

import React, { ReactElement, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ children }: { children: ReactElement }) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative h-[100vh-72px]  flex ">
            {/* Toggle Button for Small Screens */}
            <div className="md:hidden absolute top-4 left-4 z-20">
                <button onClick={toggleSidebar} className="focus:outline-none">
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
                </button>
            </div>

            {/* Sidebar */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="fixed inset-0 bg-gray-900 text-white md:static md:w-64 z-10  h-[calc(100vh-72px)] border-2 border-blue-900"
                    >
                        <div className="p-4">
                            <h2 className="text-2xl font-bold mb-4">Content</h2>
                            <ul className='gap-4 space-y-4'>
                                <motion.li
                                    whileHover={{ scale: 1.1 }}
                                    className="p-2 cursor-pointer border border-blue-800 rounded-lg text-center"
                                >
                                    Home
                                </motion.li>
                                <motion.li
                                    whileHover={{ scale: 1.1 }}
                                    className="p-2 cursor-pointer border border-blue-800 rounded-lg text-center"
                                >
                                    About
                                </motion.li>
                                <motion.li
                                    whileHover={{ scale: 1.1 }}
                                    className="p-2 cursor-pointer border border-blue-800 rounded-lg text-center"
                                >
                                    Services
                                </motion.li>
                                <motion.li
                                    whileHover={{ scale: 1.1 }}
                                    className="p-2 cursor-pointer border border-blue-800 rounded-lg text-center text-blue-700 font-bold "
                                >
                                    Contact
                                </motion.li>
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <div className={`flex-1  overflow-y-auto p-4 transition-all duration-300 ${isOpen ? "w-[90vw]" : "w-[100vw]"}`}>
                {children}
            </div>
        </div>
    );
};

export default Sidebar;
