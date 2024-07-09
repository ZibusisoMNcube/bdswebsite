// components/Hero.tsx
"use client";
import React from 'react';
import Image from 'next/image';
import HeroImage from '../../public/images/hero.jpg';
import HeroLogo from '../../public/images/Logo.png';
import SmallLogo from '../../public/images/Logo.png';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
      <motion.div
        initial={{ scale: 0.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
        style={{ opacity: 0.35 }} // Set opacity to 65%
      >
        <Image src={HeroImage} alt="Hero Image" layout="fill" objectFit="cover" />
      </motion.div>
      <motion.div
        initial={{ scale: 1.5, rotate: 360, opacity: 0 }}
        animate={{ scale: 0.05, rotate: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute w-24 h-24"
      >
        <Image src={HeroLogo} alt="Hero Logo" layout="fill" objectFit="contain" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="text-center text-white text-4xl md:text-5xl font-bold z-10 px-4 py-5"
      >
        Welcome to Baobab Development Solutions
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="text-center text-2xl md:text-3xl font-bold z-10 rounded-lg px-4 py-2"
        style={{
          background: "linear-gradient(to bottom, #751904, #b44e0f)",
          border: "1px solid #751904",
          color: "white",
        }}
      >
        Discover amazing courses and more
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="z-10 py-5"
      >
        <Image id='logo' src={SmallLogo} alt="Small Logo" width={350} height={350} className="pb-10 m-5" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
        className="absolute bottom-5 p-5 text-center text-md md:text-xl font-bold z-10 rounded-md px-4"
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
    </div>
  );
};

export default Hero;
