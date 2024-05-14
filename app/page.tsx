import Image from "next/image";
import {Button} from '@nextui-org/button';

export default function Home() {
  return (
   <div className="grid grid-rows-7 grid-flow-col">
  <div>
    hero picture
  </div>
  <div>
      About
  </div>
  <div>
      courses
  </div>
  <div>
      Accreditations
  </div>
  <div>
      Calendar
  </div>
  <div>
Contact
  </div>
  <div>
Team
  </div>
   </div>
  );
}
