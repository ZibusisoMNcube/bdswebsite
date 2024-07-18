'use client';
// components/Welcome.tsx
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import styles from './styles/Welcome.module.css';

const Welcome: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: false });

  const animationVariants = {
    hidden: { opacity: 0 },
    visible: (direction: string) => {
      switch (direction) {
        case 'left':
          return { opacity: 1, x: 0, transition: { duration: 1.5 } };
        case 'right':
          return { opacity: 1, x: 0, transition: { duration: 2.5 } };
        case 'bottom':
          return { opacity: 1, y: 0, transition: { duration: 3 } };
        case 'top':
          return { opacity: 1, y: 0, transition: { duration: 4.5 } };
        default:
          return {};
      }
    },
  };

  const directions = ['left', 'right', 'bottom', 'top', 'left', 'right', 'bottom', 'top'];

  return (
    <div className={styles.welcome_container}>
      <div className={`container mx-auto text-center pt-10 ${styles.welcome_text}`} ref={ref}>
        {directions.map((direction, index) => (
          <motion.p
            key={index}
            className={`text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl pb-16 ${styles.welcome_text}`}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={direction}
            variants={animationVariants}
            style={{ x: direction === 'left' || direction === 'right' ? (direction === 'left' ? -100 : 100) : 0, y: direction === 'top' || direction === 'bottom' ? (direction === 'top' ? -100 : 100) : 0 }}
          >
            {index === 0 && 'Baobab Development Solutions is a well-established Hospitality Training Provider that has been successfully certifying students for the Hospitality and Yachting Industries since 2014.'}
            {index === 1 && 'Our courses are internationally accredited in order to give our clients the credibility they have come to expect from BDS. We pride ourselves on providing interactive learning solutions through theory and practical training, combining our industry experience, knowledge and skills in order to equip our students to excel in their fields.'}
            {index === 2 && 'BDS’s premier training facility is located in Cape Town, South Africa, where courses are facilitated from. BDS specialises in providing in-house training for our hospitality and yachting clients as well as offering online courses for those requiring it.'}
          </motion.p>
        ))}
      </div>
    </div>
  );
};

export default Welcome;
