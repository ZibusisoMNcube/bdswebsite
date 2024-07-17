'use client';
// components/Awards.tsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import award1 from '../../public/images/image002.png';
import award2 from '../../public/images/image003.png';
import styles from './styles/Awards.module.css';

const reviews = [
  { heading: "Excellent Service", text: "The service provided was excellent and met all my expectations.", author: "John Doe", time: "2 days ago" },
  { heading: "Highly Recommend", text: "I highly recommend this company for their outstanding work.", author: "Jane Smith", time: "1 week ago" },
  { heading: "Professional Team", text: "The team was professional and delivered great results.", author: "Alice Johnson", time: "3 days ago" },
  // Add more reviews as needed
];

const Awards: React.FC = () => {
  const [currentReview, setCurrentReview] = useState(reviews[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * reviews.length);
      setCurrentReview(reviews[randomIndex]);
    }, 7000); // Change review every 7 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="container mx-auto text-center">
        {/* <h2 className="text-3xl font-bold mb-5">Our Accreditations</h2> */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="z-10 flex justify-center shadow-xl"
          >
            <Image id='award1' src={award1} alt="Award 1" width={400} height={200} />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="z-10 flex justify-center shadow-xl"
          >
            <Image id='award2' src={award2} alt="Award 2" width={400} height={200} />
          </motion.div>
        </div>
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-3">{currentReview.heading}</h2>
          <p className="text-lg mb-3">{currentReview.text}</p>
          <p className="text-sm text-[#751904]">- {currentReview.author}, {currentReview.time}</p>
        </div>
      </div>
    </div>
  );
};

export default Awards;
