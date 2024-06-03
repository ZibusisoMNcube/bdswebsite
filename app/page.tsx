
import Image from "next/image";
import HeroImage from "../public/Table-mountain.jpg";
import styles from "./styles/Hero.module.css"
import Courses from "./components/courses/courses";
import Team from "./components/team/team";
import Carousel from "./components/carousel/carousel";
import GoogleMaps from './components/map/GoogleMaps';
import ContactForm from "./components/contact/ContactForm";


export default function Home() {

 

  const DATA = [
    { image: '/images/image002.png' },
    { image: '/images/image003.png' },
  ]

  return (
   <div className="grid grid-rows-7 grid-flow-row ">
          <div className={styles.hero}>
                <Image 
                src={HeroImage} // Path to your image in the public directory
                alt="Hero Image"
                layout="fill" // Ensure the image is responsive
                objectFit="cover" // Cover the container maintaining aspect ratio
                quality={100} // Adjust the image quality if needed
              /><div className={`${styles.heroText} `}>
             
            </div>
              <div className={`${styles.heroText} `}>
                <h1 className="text-xs sm:text-sm md:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl py-10">Baobab Development Solutions</h1>
                <p  className="text-xs sm:text-sm md:text-base  lg:text-xl xl:text-2xl 2xl:text-3xl">Baobab Development Solutions is a well-established Hospitality Training Provider that has been successfully certifying students for the Hospitality and Yachting Industries since 2014. 
Our courses are internationally accredited in order to give our clients the credibility they have come to expect from BDS. We pride ourselves on providing interactive learning solutions through theory and practical training, combining our industry experience, knowledge and skills in order to equip our students to excel in their fields.
BDS’s premier training facility is located in Cape Town, South Africa, where courses are facilitated from. BDS specialises in providing in-house training for our hospitality and yachting clients as well as offering online courses for those requiring it.


              </p>
              </div>
          </div>

          <div className="max-w-screen-md mx-auto px-4 py-10 text-center">
            <h2 className="text-2xl font-bold mb-4">About</h2>
            <p className="text-xs sm:text-sm md:text-base  lg:text-xl xl:text-2xl 2xl:text-3xl">
Welcome to Baobab Development Solutions

“Sondzela”

“Come closer and be rewarded with all the magic that Baobab Development Solutions has to offer”

BDS specialises in training within the Hotel & Hospitality Industry. We focus on Skills Training for Hotels, Guest Houses, Lodges, Restaurants and Yachts.

BDS’s four star training facilities are based in Cape Town, South Africa where we facilitate most classes, but we also offer ONLINE training options for students abroad or travelling who cannot attend class.

BDS’s forté is on-the-job-training which we conduct at the Client’s premises as per specifications.
.</p>
            <div className="max-w-screen-md mx-auto   text-center">
                  <h2 className="text-2xl font-bold mb-4 py-10">Courses</h2>

                  <Courses/>
            </div>
        </div>

        

        <div className="grid grid-rows-3 gap-4 py-10 text-center">
        <h2 className="text-2xl font-bold mb-4 py-10">The team</h2>

        <Team/>
        </div>

        <div className="grid grid-row-1 text-center">
        <h2 className="text-2xl font-bold mb-4 py-10">Our Accreditations & Awards</h2>
        <main className="flex min-h-screen flex-col items-center justify-center text-center">
      <Carousel data={DATA} />
    </main>

        </div>

        <div className="grid grid-row-1 text-center">
        <h2 className="text-2xl font-bold mb-4 py-10">Calendar</h2>
          <div className="grid grid-cols-2">

            <div>
              <h2>Ongoing</h2>
            </div>
            <div>
            <h2>Starting</h2>
            </div>
          </div>

        </div>
        <div className="grid grid-row-1 text-center">
        <h2 className="text-2xl font-bold mb-4 py-10">Contact</h2>
          <div className="grid grid-cols-3">

            <div id="map" className="map-container">
              <p>Map</p>
            <GoogleMaps/>
            </div>
            <div >
            <p>Contact Information</p>
            <p>Name: Yvette Van Zyl</p>
            <p>Telephone: +27 79 577 2042</p>
            <p>Email: info@baobabsolutions.co.za</p>
            
            </div>
      <div>
      <p>Operating Hours</p>
      <p>Monday - Friday: 8am - 5pm</p>

      </div>
          </div>

            <div>
              <ContactForm/>
            </div>

        </div>
  </div>
  );
}
