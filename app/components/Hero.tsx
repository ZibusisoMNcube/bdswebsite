// components/Hero.tsx

'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import HeroImage from '../../public/images/hero.jpg';
import SmallLogo from '../../public/images/Logo.png';
import styles from './styles/Hero.module.css';

const Hero: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 1500); // Total duration of initial animations plus screen split

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize(); // Check initial screen size
    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
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
          {/* Hero Image */}
          <motion.div
            initial={{ scale: 0.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0"
            style={{ opacity: 0.35 }} // Set opacity to 35%
          >
            <Image src={HeroImage} alt="Hero Image" layout="fill" objectFit="cover" />
          </motion.div>

          {/* Welcome text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className={`${styles.welcomeText} text-white text-4xl md:text-5xl font-bold z-10 px-4`}
            style={{ marginBottom: '10px' }}
          >
            Welcome to Baobab Development Solutions
          </motion.div>

          {/* Metropolis text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
            className={`${styles.metropolisText} text-white text-2xl md:text-3xl font-bold z-10 rounded-lg px-4 py-2`}
            style={{
              background: "linear-gradient(to bottom, #751904, #b44e0f)",
              border: "1px solid #751904",
              color: "white",
              marginBottom: '5px'
            }}
          >
            A Metropolis of Hospitality Training
          </motion.div>

          {/* SmallLogo - Hide on small screens */}
          {!isSmallScreen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 3, duration: 1 }}
              className="z-20 py-5 mb-2.5"
            >
              <Image id='logo' src={SmallLogo} alt="Small Logo" width={300} height={300} className="pb-5 m-5" />
            </motion.div>
          )}

          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1 }}
            className={`${styles.contactInfo} absolute bottom-20 p-5 text-center text-md md:text-xl font-bold z-10 rounded-md px-4`}
            style={{
              background: "linear-gradient(to bottom, #751904, #b44e0f)",
              border: "1px solid #751904",
              color: "white",
              marginBottom: '10px'
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
