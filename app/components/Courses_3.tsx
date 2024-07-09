'use client';
// components/Courses.tsx
import React , { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Course {
  title: string;
  subtitle: string;
  factsheet: string;
  image: string;
}

const courses: Course[] = [
  
    {
      title: "Food Safety For Catering",
      subtitle: "Level 3",
      factsheet:"/factsheets/FOOD SAFETY FOR CATERING LEVEL 3 FACTSHEET.docx",
      image: "/images/BDSFood_Safety_for_Catering_level_3.jpg",
    },
    {
      title: "Food Allergen Management in Catering",
      subtitle: "Level 3",
      factsheet:"/factsheets/ALLERGENS FACTSHEET.docx",
      image: "/images/BDSFood_Allergen_Management_in_Catering_llevel_3.jpg",
    },
    {
      title: "Supervising Food Safety At Sea",
      subtitle: "Level 3",
      factsheet:"/factsheets/SUPERVISING FOOD SAFETY AT SEA FACTSHEET.docx",
      image: "/images/BDSSupervising_Food_Safety_at_Sea_level_3.jpg",
    },
    {
      title: "Supervising Food Safety At Sea",
      subtitle: "Level 3",
      factsheet:"/factsheets/BARISTA FACTSHEET.docx",
      image: "/images/BDSSupervising_Food_Safety_at_Sea_level_3.jpg",
    },
];

const Courses: React.FC = () => {
  const [visibleCourses, setVisibleCourses] = useState<Course[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate which courses are in view based on scroll position
  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollTop, clientHeight, scrollHeight } = containerRef.current;
      const coursesToShow = Math.ceil((scrollTop + clientHeight) / scrollHeight * courses.length);
      setVisibleCourses(courses.slice(0, Math.min(coursesToShow, courses.length)));
    }
  };

  // Initialize visible courses on mount
  useEffect(() => {
    handleScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update visible courses on scroll
  useEffect(() => {
    const scrollHandler = () => {
      handleScroll();
    };
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <section id="courses" className="py-20" ref={containerRef}>
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-4xl font-bold text-center mb-8"></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {visibleCourses.map((course, index) => (
            <motion.div 
              key={index} 
              className="p-4 flex flex-col h-full"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full transform transition-transform duration-300"
                style={{ perspective: 1000 }}
              >
                {/* <motion.div
                  whileHover={{ rotateY: -10 }}
                  className="relative w-full h-48"
                > */}
                  <Image 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                    width={300}
                    height={200} 
                  />
                {/* </motion.div> */}
                <div className="p-4 flex flex-col flex-grow">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-black">{course.title}</h3>
                  </div>
                  <div className="mb-4">
                    <p className="text-gray-700">{course.subtitle}</p>
                  </div>
                  <div className="mt-auto mb-4">
                    <Link href={course.factsheet} legacyBehavior>
                      <a target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white mt-4 py-2 px-4 rounded-md inline-block text-center">
                        Download Factsheet
                      </a>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;