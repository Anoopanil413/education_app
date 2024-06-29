'use client'

import React from 'react'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';

const Category = ({ name }: { name: string }) => {
    return (
        <>

            <motion.div className='relative w-[180px] ' whileTap={{ scale: 0.95 }}>

                <FontAwesomeIcon icon={faFolder} className="w-[180px] h-auto text-gray-900 transition-transform hover:scale-110 " />
                <p className='absolute bottom-8 right-[30%] left-[30%] text-blue-500 font-bold text-xl'>{name}</p>
            </motion.div>
            {/* <motion.div
                className="bg-gray-900 border border-blue-700 rounded-lg  max-w-xs mx-auto flex flex-col items-center cursor-pointer"
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.8)" }}
                whileTap={{ scale: 0.95 }}
            >
                <motion.div
                    className="w-48 h-48 flex items-center justify-center bg-gray-700 rounded-lg"
                    whileHover={{ rotate: 15 }}
                    whileTap={{ rotate: -15 }}
                >
                </motion.div>
            </motion.div> */}

        </>
    )
}

export default Category