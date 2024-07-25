import React from 'react';
import Head from 'next/head';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Courses_2 from './components/Courses';
import Team from './components/Team';
import Calendar from './components/Calendar';
import Contact from './components/Contact';
import Awards from './components/Awards';


const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Baobab Development Solutions</title>

        {/* to be done later */}
        <meta name="description" content="Baobab Development Solutions" />
        <meta name="keywords" content="Hotel Development Solutions, Hotel Development Services, Hotel Solutions Consulting, Hospitality Development Planning, Highfield Food Safety Course, Highfield Food Safety Certification, Accredited Food Safety Courses, Highfield Food Safety Training, Baobab Hospitality, Baobab Hospitality Services, Baobab Hotel Management, Baobab Hospitality Consulting, Food Safety Certificate South Africa, South Africa Food Safety Certification, Food Safety Training South Africa, Accredited Food Safety South Africa, Baobab Education, Baobab Educational Programs, Baobab Training Courses, Baobab Learning Solutions, Baobab, Baobab Services, Baobab Consulting, Baobab Solutions, Hospitality, Hospitality Management, Hospitality Training, Hospitality Services, Highfield, Highfield Certification, Highfield Training, Highfield Courses, Food Service, Food Service Management, Food Service Training, Food Service Solutions, Food Safety, Food Safety Standards, Food Safety Compliance, Food Safety Management, Food Safety Cape Town, Cape Town Food Safety, Food Safety Training Cape Town, Food Safety Certification Cape Town, Allergens, Food Allergens Training, Allergens Safety Certification, Food Allergy Management, Highfield Courses, Highfield Accredited Courses, Highfield Training Programs, Highfield Certification Courses, Yachting Food Safety, Yachting Food Safety Training, Marine Food Safety Certification, Yacht Crew Food Safety, Food & Beverage, Food & Beverage Management, Food & Beverage Training, Food & Beverage Services, Barista, Barista Training Courses, Professional Barista Certification, Barista Skills Development" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="http://baobabsolutions.co.za/" />
        {/* ***************** */}

      </Head>
      <div className="w-screen">
        <section id="hero" className="bg-gradient-to-b from-[#E3974B] to-[#96320B] py-10 w-screen">
          <Hero />
        </section>
        <section id="welcome" className="bg-gradient-to-b from-[#96320B] to-[#96320B] pt-0  w-screen">
          <Welcome />
        </section>
        <section id="courses" className="bg-gradient-to-b from-[#96320B] to-[#E94516] pt-20 w-screen">
          <h2 id ="courses header"className="text-3xl font-bold text-center">Our Courses</h2>
          <Courses_2 />
        </section>
        <section id="calendar" className="bg-gradient-to-b from-[#E94516] to-[#BC7B4C] py-5 w-screen">
          <Calendar />
        </section>
        <section id="team" className="bg-gradient-to-b from-[#BC7B4C] to-[#E94516] pt-20 w-screen">
          <h2 id ="team header"className="text-3xl font-bold text-center ">Meet Our Team</h2>
          <Team />
        </section>
        <section id="awards" className="bg-gradient-to-b from-[#E94516] to-[#BC7B4C] py-5 w-screen">
        <h2 id ="team header"className="text-3xl font-bold text-center ">Our Accreditations</h2>
          <Awards />
        </section>
       
        <section id="contact" className="bg-gradient-to-b from-[#BC7B4C] to-[#96320B] py-5 w-screen">
          <Contact />
        </section>

      </div>
    </>
  );
};

export default Home;
