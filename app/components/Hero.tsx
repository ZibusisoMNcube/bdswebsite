'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import HeroImage from '../../public/images/hero.jpg';
import HeroLogo from '../../public/images/Logo.png';
import SmallLogo from '../../public/images/Logo.png';
import styles from './styles/Hero.module.css';

const Hero: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 1500); // Total duration of initial animations plus screen split
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            className={`${styles.initialScreen} flex justify-center items-center`}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className={`${styles.initialText} text-center`}
              initial={{ scale: 1 }}
              animate={{ scale: 1.1 }}
              transition={{ duration: 0.5, yoyo: Infinity }}
            >
              Baobab Development Solutions
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {!isAnimating && (
        <>
          <motion.div
            initial={{ scale: 0.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0"
            style={{ opacity: 0.35 }} // Set opacity to 35%
          >
            <Image src={HeroImage} alt="Hero Image" layout="fill" objectFit="cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="text-center text-white text-4xl md:text-5xl font-bold z-10 px-4 py-5 mb-2.5"
          >
            Welcome to Baobab Development Solutions
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="text-center text-2xl md:text-3xl font-bold z-10 rounded-lg px-4 py-2 mb-2.5"
            style={{
              background: "linear-gradient(to bottom, #751904, #b44e0f)",
              border: "1px solid #751904",
              color: "white",
            }}
          >
            A Metropolis of Hospitality Training
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 3, duration: 1 }}
            className="z-10 py-5 mb-2.5"
          >
            <Image id='logo' src={SmallLogo} alt="Small Logo" width={300} height={300} className="pb-5 m-5" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1 }}
            className="absolute bottom-20 p-5 text-center text-md md:text-xl font-bold z-10 rounded-md px-4"
            style={{
              background: "linear-gradient(to bottom, #751904, #b44e0f)",
              border: "1px solid #751904",
              color: "white",
            }}
          >
            <p>Contact: Yvette Van Zyl</p>
            <p>Telephone: +27 79 577 2042</p>
            <p>Email: info@baobabsolutions.co.za</p>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Hero;
