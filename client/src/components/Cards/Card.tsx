'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { container, item } from '@/utils/motion';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

// const containerVariants = {
//   hidden: { opacity: 1, scale: 0 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       delayChildren: 0.3,
//       staggerChildren: 0.2,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//   },
// };

export interface PropsType {
    heading: string
    imags: any
    color: string
    data?: any
}

const Card: React.FC<PropsType> = ({ heading, imags, color, data }: PropsType) => {
    return (
        <div className={`w-[200px] h-[250px] overflow-hidden shadow-[rgba(0,0,15,0.5)_10px_5px_4px_0px] bg-gray-900 border  border-blue-700  relative rounded-md`}>
            <h2 className='font-bold text-2xl border-b border-blue-700 text-blue-500 text-center p-4 shadow-lg'>{heading}</h2>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={container}
                style={styles.animationContainer}
                className={`absolute top-[40%] left-[30%] transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border-blue-700  z-0 flex items-center justify-center`}

            >
                <motion.div variants={item} style={styles.circle}>
                    <Image src={imags} alt="description" style={styles.image} />
                </motion.div>

            </motion.div>

            <motion.div variants={item} className='bg-black absolute left-2 bottom-2 border p-1 rounded-full transform hover:scale-110 transition duration-300'>
                <button className='text-white w-8'><FontAwesomeIcon icon={faPenToSquare} /></button>
            </motion.div>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    cardContainer: {
        width: '200px',
        height: '250px',
        border: '1px solid #ddd',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.6)',



        position: 'relative',
    },
    animationContainer: {
        position: 'absolute',
        top: '40%',
        left: '30%',
        transform: 'translate(-50%, -50%)',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        backgroundColor: 'blue',
        zIndex: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    circle: {
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', // Zig-zag pattern
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '50%',
    },
    heading: {
        zIndex: 1,
        color: '#333',
        marginTop: '20px',
        textAlign: 'center',
    },
};

export default Card;
