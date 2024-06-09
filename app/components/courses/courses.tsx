import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import Link from "next/link";

export default function Courses() {


const content = [
    {
        title: "Catering Principles",
        subtitle: "Level 2",
        factsheet:"/factsheets/FOOD SAFETY FOR CATERING LEVEL 2 FACTSHEET.docx",
        imageUrl: "/images/BDSCatering_Principles_Level_2_Bar.jpg",
      },
      {
        title: "Conflict Management",
        subtitle: "Level 2",
        factsheet:"/factsheets/CONFLICT MANAGEMENT FACTSHEET.docx",
        imageUrl: "/images/BDSCONFLICT_MANAGEMENT_level_2.jpg",
      },
      {
        title: "Culinary And Hospitality",
        subtitle: "Level 2",
        factsheet:"/factsheets/FOOD SERVICE TABLE ATTENDANT CERTIFICATE FACTSHEET.docx",
        imageUrl: "/images/BDSCULINARY_AND_HOSPITALITY_level_2.jpg",
      },
      {
        title: "Customer service",
        subtitle: "Level 2",
        factsheet:"/factsheets/CUSTOMER SERVICE FACTSHEET.docx",
        imageUrl: "/images/BDSCUSTOMER_SERVICE_level_2.jpg",
      },
      {
        title: "Food Safety For Catering",
        subtitle: "Level 2",
        factsheet:"/factsheets/FOOD SAFETY FOR CATERING LEVEL 2 FACTSHEET.docx",
        imageUrl: "/images/BDSFOOD_SAFETY_for_Cateringlevel_2.jpg",
      },
      {
        title: "Hospitality And Catering Principles",
        subtitle: "Level 2",
        factsheet:"/factsheets/FOOD & BEVERAGE CERTIFICATE FACTSHEET.docx",
        imageUrl: "/images/BDSHOSPITALITY_and_Catering_Principles_Level_2.jpg",
      },

      {
        title: "Food Safety For Catering",
        subtitle: "Level 3",
        factsheet:"/factsheets/FOOD SAFETY FOR CATERING LEVEL 3 FACTSHEET.docx",
        imageUrl: "/images/BDSFood_Safety_for_Catering_level_3.jpg",
      },
      {
        title: "Food Allergen Management in Catering",
        subtitle: "Level 3",
        factsheet:"/factsheets/ALLERGENS FACTSHEET.docx",
        imageUrl: "/images/BDSFood_Allergen_Management_in_Catering_llevel_3.jpg",
      },
      {
        title: "Supervising Food Safety At Sea",
        subtitle: "Level 3",
        factsheet:"/factsheets/SUPERVISING FOOD SAFETY AT SEA FACTSHEET.docx",
        imageUrl: "/images/BDSSupervising_Food_Safety_at_Sea_level_3.jpg",
      },
      {
        title: "Supervising Food Safety At Sea",
        subtitle: "Level 3",
        factsheet:"/factsheets/BARISTA FACTSHEET.docx",
        imageUrl: "/images/BDSSupervising_Food_Safety_at_Sea_level_3.jpg",
      },
]
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        {content.map((item, index) =>(
            <div  key={index} className="bg-gray-200 p-4 relative mb-20">
                
                 <p className="text-tiny text-white/60 uppercase font-bold">{item.title}</p>
                <h4 className="text-white font-medium text-large">{item.subtitle}</h4>
                <Image 
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src={item.imageUrl}
            /> 
              <Link
              href={item.factsheet}
             
              
              >
                    <Button className="mt-4 bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center mx-auto block">
                    Download factsheet
    </Button>

       
              </Link>
              
           
            </div>
        ))}
     </div>
  );
}
