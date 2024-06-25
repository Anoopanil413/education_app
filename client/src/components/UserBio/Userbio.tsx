'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion';

import defaultProfilePic from '../../../public/default_profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import Image, { StaticImageData } from 'next/image';


const Userbio = () => {
    const [profilePic, setProfilePic] = useState<StaticImageData>();

    return (
        <div className="flex flex-col items-center bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-md mx-auto  border-2 border-blue-700">
            <div className="relative">
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                    <Image
                        src={profilePic || defaultProfilePic}
                        alt="Profile"
                        className="rounded-full border-2 border-gray-700"
                        width={128}
                        height={128}
                    />
                </motion.div>
                <motion.div
                    className="bg-black absolute right-2 bottom-2 border p-1 rounded-full"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                >
                    <button className="text-white w-8">
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                </motion.div>
            </div>
            <div className="mt-4 text-center">
                <h2 className="text-xl font-semibold text-gray-200">John Doe</h2>
                <p className="text-gray-400">johndoe@example.com</p>
                <p className="text-gray-400">+123 456 7890</p>
                <p className="text-gray-400">********</p>
            </div>
        </div>
    );
}

export default Userbio