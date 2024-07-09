
'use client';
// components/Welcome.tsx
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
//import { scroll } from 'framer-motion';
import styles from './styles/Welcome.module.css';
import Image from 'next/image';
import award1 from '../../public/images/image002.png';
import award2 from '../../public/images/image003.png';

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
    <div>
      <div className="container mx-auto text-center pt-10" ref={ref}>
        {directions.map((direction, index) => (
          <motion.p
            key={index}
            className="text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl pb-16"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={direction}
            variants={animationVariants}
            style={{ x: direction === 'left' || direction === 'right' ? (direction === 'left' ? -100 : 100) : 0, y: direction === 'top' || direction === 'bottom' ? (direction === 'top' ? -100 : 100) : 0 }}
          >
            {/* {index === 0 && 'Welcome to Baobab Development Solutions'}
            {index === 1 && '“Sondela”'}
            {index === 2 && '“Come closer and be rewarded with all the magic that Baobab Development Solutions has to offer”'}
            {index === 3 && 'BDS specialises in training within the Hotel & Hospitality Industry. We focus on Skills Training for Hotels, Guest Houses, Lodges, Restaurants and Yachts.'}
            {index === 4 && 'BDS’s four star training facilities are based in Cape Town, South Africa where we facilitate most classes, but we also offer ONLINE training options for students abroad or travelling who cannot attend class.'}
            {index === 5 && 'BDS’s forté is on-the-job-training which we conduct at the Client’s premises as per specifications.'}
            {index === 6 && 'Scroll down to explore more!'} */}

            {index === 0 && 'Baobab Development Solutions is a well-established Hospitality Training Provider that has been successfully certifying students for the Hospitality and Yachting Industries since 2014.'}
            {index === 1 && 'Our courses are internationally accredited in order to give our clients the credibility they have come to expect from BDS. We pride ourselves on providing interactive learning solutions through theory and practical training, combining our industry experience, knowledge and skills in order to equip our students to excel in their fields.'}
            {index === 2 && 'BDS’s premier training facility is located in Cape Town, South Africa, where courses are facilitated from. BDS specialises in providing in-house training for our hospitality and yachting clients as well as offering online courses for those requiring it.'}
          </motion.p>


        ))}
        {/* <div><h2 className="text-3xl font-bold mb-5">Our Awards</h2></div>
        <div className="w-full flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8">

        
        
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 5, duration: 1 }}
            className="z-10 "
          >
            <Image id='award1' src={award1} alt="Small Logo" width={400} height={200}  />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 6, duration: 1 }}
            className="z-10"
          >
            <Image id='award2' src={award2} alt="Small Logo" width={300} height={200}  />
          </motion.div>

        </div> */}
      </div>


    </div >
  );
};

export default Welcome;

