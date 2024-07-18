'use client';
// components/Awards.tsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import award1 from '../../public/images/image002.png';
import award2 from '../../public/images/image003.png';
import styles from './styles/Awards.module.css';

const reviews = [
  { text: " Extensive knowledge about industry, fun and engaging presentation , positive and fun classroom atmosphere.", author: "Megan Strong", time: "18-06-2024" },
  { text: " Lecturer was very prepared, friendly & worked at a good pace.", author: "Danielle Heyink", time: "16-05-2024" },
  { text: "Learning in a comfortable and relaxing environment, where everyone is treated fairly.", author: "Darla Grimsdell", time: "23-04-2024" },
  { text: " Lindie is excellent! Read the room well and knew all the content. Very helpful!", author: " Jenna Coetzee", time: "08-04-2024" },
  { text: " Yvette is welcoming, patient and very informative.", author: " Entle Masipa", time: "25-03-2024" },
  { text: " Enjoyed our lecturer very much. Ansie was very informative and filled with wisdom. The coffee and tea was a special touch.", author: "Novellen Pienaar", time: "19-03-2024" },
  { text: "I enjoyed the open communication and the fact that our lecturer had experience in the yachting industry.", author: "Francis Sebastian Bosman", time: "06-02-2024" },
  { text: "I thoroughly enjoyed my course. I loved the interaction and the clear explanation. Had no need for any questions.", author: "Simone Winterback", time: "12-01-2024" },

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
          {/* <h2 className="text-2xl font-bold mb-3">{currentReview.heading}</h2> */}
          <p className="text-lg mb-3">{currentReview.text}</p>
          <p className="text-sm text-[#751904]">~ {currentReview.author}, {currentReview.time} ~ </p>
          
        </div>
      </div>
    </div>
  );
};

export default Awards;
