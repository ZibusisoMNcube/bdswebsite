// components/Courses.tsx
'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './styles/Courses.module.css'; // Import the CSS module
import './styles/customScrollbar.css'; // Import custom scrollbar CSS

interface Course {
  title: string;
  subtitle: string;
  factsheet: string;
  image: string;
}

const courses: Course[] = [
  {
    title: "Highfield Level 2 Certificate in Hospitality and Catering Principles (Beverage Service) (RQF)",
    subtitle: "Level 2",
    factsheet:"/factsheets/FOOD SAFETY FOR CATERING LEVEL 2 FACTSHEET.docx",
    image: "/images/BDSCatering_Principles_Level_2_Bar.jpg",
  },
  {
    title: "Highfield Level 2 Award, in Conflict Management (RQF)",
    subtitle: "Level 2",
    factsheet:"/factsheets/CONFLICT MANAGEMENT FACTSHEET.docx",
    image: "/images/BDSCONFLICT_MANAGEMENT_level_2.jpg",
  },
  {
    title: "Highfield Level 2 Certificate in Hospitality and Catering Principles (Food & Beverage Service) (RQF)",
    subtitle: "Level 2",
    factsheet:"/factsheets/FOOD SERVICE TABLE ATTENDANT CERTIFICATE FACTSHEET.docx",
    image: "/images/BDSCULINARY_AND_HOSPITALITY_level_2.jpg",
  },
  {
    title: "Highfield Level 2 Certificate in Customer Service (RQF)",
    subtitle: "Level 2",
    factsheet:"/factsheets/CUSTOMER SERVICE FACTSHEET.docx",
    image: "/images/BDSCUSTOMER_SERVICE_level_2.jpg",
  },
  {
    title: "Food Safety (Level 2)",
    subtitle: "Level 2",
    factsheet:"/factsheets/FOOD SAFETY FOR CATERING LEVEL 2 FACTSHEET.docx",
    image: "/images/BDSFOOD_SAFETY_for_Cateringlevel_2.jpg",
  },
  {
    title: "Highfield Level 3 Award in Food Safety for Catering (RQF)",
    subtitle: "Level 3",
    factsheet:"/factsheets/FOOD & BEVERAGE CERTIFICATE FACTSHEET.docx",
    image: "/images/BDSHOSPITALITY_and_Catering_Principles_Level_2.jpg",
  },
  {
    title: "Highfield Level 2 Certificate in Hospitality and Catering Principles (Food Service) (RQF)",
    subtitle: "Level 3",
    factsheet:"/factsheets/FOOD SAFETY FOR CATERING LEVEL 3 FACTSHEET.docx",
    image: "/images/BDSFood_Safety_for_Catering_level_3.jpg",
  },
  {
    title: "Highfield Level 3 Award in Food Allergen Management in Catering (RQF)",
    subtitle: "Level 3",
    factsheet:"/factsheets/ALLERGENS FACTSHEET.docx",
    image: "/images/BDSFood_Allergen_Management_in_Catering_llevel_3.jpg",
  },
  {
    title: "Food Safety (Level 3)",
    subtitle: "Level 3",
    factsheet:"/factsheets/SUPERVISING FOOD SAFETY AT SEA FACTSHEET.docx",
    image: "/images/BDSSupervising_Food_Safety_at_Sea_level_3.jpg",
  },
  {
    title: "Highfield Level 2 Award in Barista Skills (RQF)",
    subtitle: "Level 3",
    factsheet:"/factsheets/BARISTA FACTSHEET.docx",
    image: "/images/BDSBARISTA FACTSHEET.jpg",
  },
];

const Courses: React.FC = () => {
  return (
    <section id="coursesinnersection" className={`${styles.coursesSection} py-5 custom-scrollbar overflow-auto`} style={{ height: '140%' }}>
      <div className={`${styles.coursesContainer} container mx-auto max-w-7xl px-4 h-full`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 h-full">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CourseCard: React.FC<{ course: Course; index: number }> = ({ course, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="p-4 flex flex-col h-full"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.2 } }
      }}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-gradient-to-b from-[#751904] to-[#b44e0f] rounded-lg shadow-xl overflow-hidden flex flex-col h-full transform transition-transform duration-300"
        style={{ perspective: 1000 }}
      >
        <Image 
          src={course.image} 
          alt={course.title}
          className="w-full h-48 object-cover rounded-t-lg"
          width={300}
          height={200} 
        />
        <div className="p-4 flex flex-col flex-grow">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-black">{course.title}</h3>
          </div>
          <div className="mt-auto mb-4">
            <Link href={course.factsheet} legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" className="bg-[#751904] hover:bg-[#4c1303] text-white mt-4 py-2 px-4 rounded-md inline-block text-center">
                Download Factsheet
              </a>
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Courses;