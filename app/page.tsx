import React from 'react';
import Head from 'next/head';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Courses_2 from './components/Courses_2';
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
        <meta name="keywords" content="Baobab Development Solutions, to inour other keywords, here" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.tobedetermined.bds/focuspage" />
        {/* ***************** */}

      </Head>
      <div className="w-screen">
        <section id="hero" className="bg-gradient-to-b from-[#E3974B] to-[#BC7B4C] py-10 w-screen">
          <Hero />
        </section>
        <section id="welcome" className="bg-gradient-to-b from-[#BC7B4C] to-[#96320B] pt-10 w-screen">
          <Welcome />
        </section>
        <section id="courses" className="bg-gradient-to-b from-[#96320B] to-[#E94516] py-5 w-screen">
          <h2 id ="courses header"className="text-3xl font-bold text-center">Our Courses</h2>
          <Courses_2 />
        </section>
        <section id="team" className="bg-gradient-to-b from-[#E94516] to-[#E3974B] py-5 w-screen">
          <h2 id ="team header"className="text-3xl font-bold text-center ">Our Team</h2>
          <Team />
        </section>
        <section id="awards" className="bg-gradient-to-b from-[#E3974B] to-[#E94516] py-5 w-screen">
          <Awards />
        </section>
        <section id="calendar" className="bg-gradient-to-b from-[#E94516] to-[#BC7B4C] py-5 w-screen">
          <Calendar />
        </section>
        <section id="contact" className="bg-gradient-to-b from-[#BC7B4C] to-[#96320B] py-5 w-screen">
          <Contact />
        </section>

      </div>
    </>
  );
};

export default Home;
