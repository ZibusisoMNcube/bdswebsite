import Image from "next/image";
import HeroImage from "../public/Table-mountain.jpg";
import styles from "./styles/Hero.module.css"

export default function Home() {

  /**
   *        
  <h1 className="text-xs sm:text-sm md:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl">About</h1>
  <p className="text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl ">
    Baobab Development Solutions is a well-established Hospitality Training Provider that has been successfully certifying students for the Hospitality and Yachting Industries since 2014. 
    Our courses are internationally accredited in order to give our clients the credibility they have come to expect from Baobab Development Solutions. We pride ourselves on providing interactive learning solutions through theory and practical training, combining our industry experience, knowledge and skills in order to equip our students to excel in their fields.
    Baobab Development Solutions premier training facility is located in Cape Town, South Africa, where courses are facilitated from. Baobab Development Solutions specialises in providing in-house training for our hospitality and yachting clients as well as offering online courses for those requiring it.
  </p>
   */


  return (
   <div className="grid grid-rows-7 grid-flow-row gap-4">
          <div className={styles.hero}>
                <Image 
                src={HeroImage} // Path to your image in the public directory
                alt="Hero Image"
                layout="fill" // Ensure the image is responsive
                objectFit="cover" // Cover the container maintaining aspect ratio
                quality={100} // Adjust the image quality if needed
              /><div className={`${styles.heroText} p-15`}>
             
            </div>
              <div className={`${styles.heroText} p-15`}>
                <h1 className="text-xs sm:text-sm md:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl py-10">Baobab Development Solutions</h1>
                <p  className="text-xs sm:text-sm md:text-base  lg:text-xl xl:text-2xl 2xl:text-3xl">Come closer and be rewarded with all the magic that Baobab Development Solutions has to offer.
                Baobab Development Solutions specialises in training within the Hotel & Hospitality Industry. We focus on Skills Training for Hotels, Guest Houses, Lodges, Restaurants and Yachts.

              </p>
              </div>
          </div>

          <div className="max-w-screen-md mx-auto px-4 py-10 text-center">
            <h2 className="text-2xl font-bold mb-4">About</h2>
            <p className="text-xs sm:text-sm md:text-base  lg:text-xl xl:text-2xl 2xl:text-3xl"> Baobab Development Solutions is a well-established Hospitality Training Provider that has been successfully certifying students for the Hospitality and Yachting Industries since 2014. 
                Our courses are internationally accredited in order to give our clients the credibility they have come to expect from Baobab Development Solutions. We pride ourselves on providing interactive learning solutions through theory and practical training, combining our industry experience, knowledge and skills in order to equip our students to excel in their fields.
                Baobab Development Solutions premier training facility is located in Cape Town, South Africa, where courses are facilitated from. Baobab Development Solutions specialises in providing in-house training for our hospitality and yachting clients as well as offering online courses for those requiring it.</p>
          </div>

        
          
             
  </div>
  );
}
