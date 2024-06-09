import React from "react";
import Links from "next/link";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import { title } from "process";


export default function Team (){

const content = [
    {
        name: "Yvette Van Zyl",
        title: "Director, Facilitator, Assessor, Moderator",
        bio:"Yvette is a hospitality expert with a career in Hotel Management, Conference & Events Management, Restaurant & Bar Management and Hospitality Training Management that spans 27 years. Yvette’s Hotel Management career started with a 4 year apprenticeship and a Food & Beverage Manager position at Protea Hotel Gold Reef City and led her to the United Kingdom where she managed Hell Bay Hotel Restaurant, the Thames Hotel and the Head Office for Dulux Paints International in Buckinghamshire in a period of 7 years abroad. Yvette believes teaching is learning and learning is teaching which has led her to opening Baobab Development Solutions in 2014 in Cape Town, South Africa. She has an insatiable passion for Hospitality services and training. Her commitment to teaching new generations is anchored in professionalism, experience, enthusiasm and ethics.",
        imageUrl: "/images/Corp-18.jpg",
      },
      {
        name:"Ansie Fourie",
        title: "Facilitator, Assessor, Moderator",
        bio: "Ansie is a seasoned veteran in the Education, Training & Development Practices Sector with a career that started as a Home Economics Secondary School Teacher 50 years ago and progressed to Senior Lecturer for Food Preparation Diploma at NorthLink College, Cape Town, South Africa. Ansie’s passion for the culinary arts and the learning process makes her one of the most successful Facilitators of her era. She has managed to evolve with the Hospitality & Catering Industry over the years proving her with excellent outcomes in her craft. Her success with Baobab Development Solutions’ Food Safety students is a testament of her commitment to her learners.",
        imageUrl: "/images/ansie 2.JPG",
      },
      {
        name: "Lindie van der Merwe",
        title: "Facilitator & Assessor",
        bio:"Lindie spent 7 years in the Yachting Industry where she combined her international Hairdresser, Barber & Nail Technician qualification with the yachting qualifications working her way from Spa Stewardess on M/Y RoMEA 82m / Private yacht to Senior Spa Stewardess on Al Seer Marine 125m / Private and finally to Spa Manager on Hill Robinson 125m / Private. Lindie’s enthusiasm, attention to detail and boundless energy has led her to Baobab Development Solutions in 2022 when she traded in her sea legs for the classroom. She has since enjoyed great success in utilising her yachting experience to resonate with the ‘green’ yachties about to embark on their yachting careers.",
        imageUrl: "/images/FB_IMG_1715680437347.jpg",
      },
]

return(<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  {content.map((item, index) => (
        <div key={index} className=" p-10 relative flex flex-col items-center ">
          <Image 
            alt={item.name}
            className="w-full h-full"
            src={item.imageUrl}
          />
          <h2 className="text-xl font-bold mt-2">{item.name}</h2>
          <h3 className="text-lg mt-1">{item.title}</h3>
          <p className="text-sm mt-2">{item.bio}</p>
        </div>
      ))}
</div>
)
}