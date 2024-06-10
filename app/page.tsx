
import Image from "next/image";
import HeroImage from "../public/Table-mountain.jpg";
import styles from "./styles/Hero.module.css"
import Courses from "./components/courses/courses";
import Team from "./components/team/team";
import Carousel from "./components/carousel/carousel";
import GoogleMaps from './components/map/GoogleMaps';
import MyContactForm from './components/contact/MyContactForm';


export default function Home() {

 //   <GoogleMaps/>

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
                sizes="100vw"
                quality={100} // Adjust the image quality if needed
              /><div className={`${styles.heroText} `}>
             
            </div>
              
          </div>

          <div id="about" className="max-w-screen-md mx-auto px-4 py-10 text-center">
            <h2 className="text-2xl font-bold mb-4">About</h2>
            <p className="text-xs sm:text-sm md:text-base  lg:text-xl xl:text-2xl 2xl:text-3xl">
Welcome to Baobab Development Solutions

“Sondzela”

“Come closer and be rewarded with all the magic that Baobab Development Solutions has to offer”

BDS specialises in training within the Hotel & Hospitality Industry. We focus on Skills Training for Hotels, Guest Houses, Lodges, Restaurants and Yachts.

BDS’s four star training facilities are based in Cape Town, South Africa where we facilitate most classes, but we also offer ONLINE training options for students abroad or travelling who cannot attend class.

BDS’s forté is on-the-job-training which we conduct at the Client’s premises as per specifications.
.</p>
            <div id="courses" className="max-w-screen-md mx-auto   text-center">
                  <h2 className="text-2xl font-bold mb-4 py-10">Courses</h2>
            <Courses/>
                 
            </div>
        </div>

        

        <div id="team" className="grid grid-rows-3 gap-4 py-10 text-center">
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
          <iframe src="https://calendar.google.com/calendar/embed?src=baobabsolutions59%40gmail.com&ctz=Europe%2FStockholm" width="800" height="600" frameBorder="0" scrolling="no"></iframe>
          </div>

        </div>
        <div id="contact" className="grid grid-row-1 text-center">
        <h2 className="text-2xl font-bold mb-4 py-10">Contact</h2>
          <div className="grid grid-cols-3">

            <div id="map" className="map-container">
              <p>Map</p>

              <div className="mapContainer">
                <div id="my-map-display">
                  <iframe src="https://www.google.com/maps/embed/v1/place?q=Unit+3,+Prosperity+Park,+Computer+Rd,+Marconi+Beam,+Cape+Town,+7441&key=AIzaSyC82B-YYyOcgarmnkKfy9nkD39QB7SifuI"></iframe>
                </div>
                <a className="the-googlemap-enabler" rel="nofollow" href="https://www.bootstrapskins.com/themes" id="auth-map-data"></a>
              </div>
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

            <div className="grid grid-cols-2">
            <div>
            <h2>Send Us A Message</h2>
            <MyContactForm/>
            </div>
                
                 <div>
              
                <div className="grid grid-rows-3">
                <h2>Social Media</h2>
                  <div>
                  <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
      </svg>
                  </div>
                  <div>
                  <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
      </svg>
                  </div>
                  <div>
                  <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
      </svg>
                  </div>


                </div>
                
                </div>
              
            </div>

        </div>
  </div>
  );
}
