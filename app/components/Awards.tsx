'use client';
// components/Welcome.tsx
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import styles from './styles/Welcome.module.css';
import Image from 'next/image';
import award1 from '../../public/images/image002.png';
import award2 from '../../public/images/image003.png';

const Awards: React.FC = () => {
  return (
    <div>
      <div className="container mx-auto text-center ">
        <h2 className="text-3xl font-bold mb-5">Our Awards</h2>
        <div className="w-full flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 5, duration: 1 }}
            className="z-10 flex justify-center"
          >
            <Image id='award1' src={award1} alt="Small Logo" width={400} height={200} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 6, duration: 1 }}
            className="z-10 flex justify-center"
          >
            <Image id='award2' src={award2} alt="Small Logo" width={300} height={200} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
