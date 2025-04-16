import NavBar from "./components/NavBar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col pt-2 w-full h-full justify-center items-center">
      <div className="flex  w-190">
        <p>This website was initially made for my Interdisciplinary Capstone class. My original idea was to research and compare the histories of Middle Eastern medicine and Japanese medicine, 
        as my primary major is in medical sciences, and I have studied and pursued minors/certificates in both Arabic and Japanese language and culture. 
        As I was researching this topic however, I started to learn about many different kinds of traditional medicine like traditional Chinese medicine and ancient Greek medicine, 
        as well as the influence and similarities of some of these medical systems onto other systems. I soon realized that medical history is actually very interconnected with many cultures 
        adapting and learning from other cultures, and I decided to shift the scope of my project to give a more general overview of the history of medicine, highlighting many of the different 
        places, people, and works, among other things, that have contributed to the medicine we know and study today.
        <br></br>
        <br></br>
        In order to have a project that I can submit for my class, I will be limiting the
        scope of my website to mostly ancient/classical time periods up to renaissance times. In the future I would like to continue adding to this website and expanding its contents to the modern era. 
        I would like to thank my course instructor Dr. Dana Griffith and my primary mentor Mohamed Elayyadi for feedback and suggestions. I would also like to thank my computer science friends Henock Dinberu 
        and Bashar Rasras for assistance in creating this website. you have any comments, concerns, feedback, or suggestions, please <Link className="text-blue-400 underline" href="/contact">contact me here.</Link>
        <br></br>
        <br></br>
        I hope this website can be useful to anyone interested in medicine and its history and thank you for checking it out!
       </p>
      </div>
    </div>
  );
}
