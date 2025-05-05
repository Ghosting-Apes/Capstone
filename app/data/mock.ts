interface Metadata {
    age: number,
    birthday: string,
    origin: string,
    yearRange: TimePeriod
}
  
export interface Person {
  name: string,
  data: Metadata,
  caption?: string,
  desc: string,
  url: string,
}

export interface TimePeriod {
  start: number,
  end: number
}
export interface Works {
  title: string,
  desc: string,
  caption: string,
  origin: string,
  author?: string,
}

export interface Places {
  name: string,
  desc: string,
  caption: string,
  origin: string
}
export interface Miscellaneous {
  title: string,
  desc: string,
  caption: string,
  origin: string
}

export const miscellaneous: Miscellaneous[] = [
  {
    title: "Humourism",
    caption: "The ancient Greek medical system",
    desc: `The ancient Greek medical system
    \n Humorism is based on balancing the four humours, or bodily fluids, of the body. Adapted from Empedocles's notion of four classical roots, (air, fire, water, and earth), and incorporated into medicine as the 
    four humours - blood, yellow bile, black bile, and phlegm. A balance of these humours meant good health, while imbalance was the cause of illness. The system is mentioned in the ***Hippocratic Corpus***. 
    According to ***Hippocrates*** and his followers, the four personality types (temperaments) emerge from the four humors. The system was formalized by 
    ***Galen***, who further expanded upon it adding the variables hot-cold and wet-dry, as well as four major organs, each of which linked to a humour. Galen believed that achieving equilibrium differed for each person, which is why people varied in health, personality, and sussceptibility to illness. 
    The principles of humourism can be found in other systems such as within the ***five elements*** of the ***Ayurveda*** medical system.
    
    The humour of blood was linked to the heart, with an excess causing a sanguine temperament; these people are optimistic, social, and easy going. Blood was also linked to air, heat/wetness, and the season of spring. 
    The humour of yellow bile was linked to the liver, and the temperament caused by an excess was the choleric personality, with its members considered to be strong-willed, independent, and decisive. Yellow bile was also linked to fire, heat/dryness, and the season of summer.
    The humour of black bile was linked to the spleen, where people with excess had a melancholic temperament, being private, cautious, and logical. Black bile was also linked to earth, cold/dryness, and the season of fall.
    The humour of phlegm was linked to the brain, and an excess caused a phlegmatic person, who was calm, accepting, and slow to anger. Phlegm was also linked to water, cold/wetness, and the season of winter.
    
    Excess of these humours was also linked to various symptoms. Excess blood lead to fever and inflammation, while excess yellow bile caused jaundice and indigestion, 
    whereas excess black bile caused depression and melancholy, and excess phlegm caused chills and sneezes. Excess of these humours also affected temperaments. Excess blood could cause to tasks being abonded or a person being forgetful. 
    Excess yellow bile could lead to a person becoming over-assertive or disorganized. Excess black bile could cause worry and anxiety. Excess phlegm could cause laziness or a person to fear change.

    An excess of these humours could be caused by a variety of different factors such as contaminated food or emotions like jealousy.
    Various techniques were employed to help restore balance in the humours. Blood letting allowed the body to drain excess blood, while yellow bile was removed through cupping or emetics, and emetics could also remove black bile, while coughing and sneezing where the bodies way of removing excess phelgm. 
    Diets and herbs were also prescribed as a way to restore the balance of a certain humour.
    
    The system of humourism persisted for around 2000 years until new scientific research and understanding emerged in the 18th century.`,
    origin: "Mediterranean/Middle East"
  } 
]

export const works: Works[] = [
  {
    title: "Qanun fil Tib",
    caption: "Ibn Sina's Magnum Opus",
    desc: `Ibn Sina's Magnum Opus
    \n Qanun fil Tib, or "Canon of Medicine", written by the Muslim physician ***Ibn Sina***, is one of the most influential medical works. This book was widley used 
    in the West and Arab world, becoming the main medical source over ***Al-Razi***'s ***Kitab al-Hawi***, and was the standard medical textbook used in Europe until the 17th century.
    
    The work contains over 1 million words that is encompassed within 5 volumes. It contained all medical and surgical knowledge of the time and included the doctrines of 
    ***Hippocrates***, ***Galen***, and Aristotle. In the 12th century, Qanun fil Tib was translated into Latin, leading it dominate medicine during medieval times.
    It has been translated into many languages and published many times since. 
    
    The first volume concerns the origins of health and sickness as well as the anatomy and function of the body. This volume contained four treatises the first of which discussed the four elements (earth, air, fire, and water), considering
    Galen's ***Four Humours***; this treatise also discussed anatomy. The second treatise then moves on to etiology of disease and symptoms, while the third treatise discussed hygine, health, sickness, as well as the definiteness of death. The final treatise discusses therapuetic classifications of disease (nosology),
    as well as general dietary treatments and regimens. The second volume moves on to discuss information on over 700 drugs and medicines. The third volume focused on diagnosis and treating different diseases to different parts of the body. The fourth volume's focus is on conditions affecting the entire body, while the final volume was centered around 
    preparing medical remedies. The simple and compound drugs discussed within the second and fifth volumes develop upon Galen's humoral pathology.
    
    Ibn Sina also had intended for an appendix with his original clinical records, however these were lost, with only an Arabic text surving within a 1593 Roman publication of Qanun fil Tib.
    
    Qanun fil Tib undoubtably left a legacy upon medical learning and knowledge.`,
    origin: "Mediterranean/Middle East"
  },
  {
    title: "",
    desc: "",
    origin: "",
    caption: ""
  }
]

export const places: Places[] = [
  {
    name: "Asclepeions",
    desc: `Temples dedicated to Asclepios
    \n Asclepions were temples built in dedication to ***Asclepios***, the Greek god of medicine and healing. These temples served as places for people to take refuge in and rest, while also pray and heal. While there are multiple of these temples, the most famous temple
    is located in Epidaurus, where Asclepios was said to be born. This temple was built in the 4th century BCE and is a UNESCO World Heritage Site.`,
    origin: "Mediterranean/Middle East",
    caption: "",
  }
]

export const people: Person[] = [
  {
    name: "Ibn Sina",
    caption: `The Father of Modern Medicine`,
    desc: 
`Ibn Sina is one of the most influential doctors from the 11th century. He was a Muslim born in the Samanid Empire (Persia, modern day Uzbekistan)
who memorized the Quran before becoming 10 years old. Following one of the teachings of the Quran which was to gain knowledge, started studying medicine
at 16 years old and became a court physician at 18 years old. His studies and practice led him to writing his most influential work ***Qanun fil Tib***,
a collection of 5 volumes, containing all medical and surgical knowledge known during his time. This was not the only work he had written as he authored 450
books including the also influential ***Shefa***. His works were translated and used by medical universities worldwide up until the 17th century. 
Ibn Sina learned from the works of earlier physicians like ***Hippocrates***, ***Galen***, and ***Al-Razi***, and furthered medical knowledge. 

Ibn Sina was one of the first physicians to link mental health and disease. He believed that exhaustian, drug abuse, sexual devations, and congenital factors, 
among other things were causes of mental disorders. He believed there was a link between the body and soul and recommended the use of physical exercise and musical therapy 
in addition to drugs as a treatment for mental disorders. One of his famous experiments utilized 2 lambs being cared for similarly with the exception of one lamb
facing a wolf. The lamb facing the wolf died before the lamb that could not see the wolf, which helped demonstrate the negative effects of stress on health.
Ibn Sina further categorized mental disorders into 11 categories, which were sleeping disorders, transient brain dysfunctions,
delirium, mental retardation, dementia, corruption of imagination, "dog's disease" (mania), melancholy, qhutrub, love disorder, and uterine suppression. He further described 
5 forms of melancholy and 2 forms of mania. 

Ibn Sina also made strides towards furthering anatomical knowledge. He was the first physician to find the stomach in the left side of the abdominal cavity. He was also the first to prove
that the clavicle (collarbone) was only found in humans. He also specified the position of the heart to the left side of the chest, unlike Galen who assumed it to be
central, but also accuratley describe the function of the aortic and atrioventricular valves of the heart. Ibn Sina further described the spinal cord to be a continuation of the brain and contained sensory and motor fibers. He was also able to accuratelty distinguish the functions of
smooth and skeletal muscles. He was also able to describe the muscles of the eye and to determine the presence of "fertile" and "infertile" fluid from the testicles. He also is also considered
one of the founders of pediatrics as he noted differences in peculiarities of the child's body compared to that of adults. 

Ibn Sina also contributed to the field of surgery. He routinely removed bullets, stones, and turmors. He also invented catheters with rounded tips and side holes from animal skin, 
which allowed for gentle procedures for his patients facing urinary disturbances. He was also the first to describe the antiseptic properties of alcohol, which became commonly used in
medieval Europe and is still a common antiseptic used today.

Infectiology was yet another field that Ibn Sina contributed to. He described the existance of "small-disease causing creatures, and concluded measles, smallpox, and the plague to be of infectious origin.
He recommended quarantining of the sick, which is a technique still used in modern hospitals today.

Ibn Sina also used drugs and herbal remedies as a part of his treatments. He understood how inflammation could occur before or anfter and infection and described the anti-inflammatory properties of saffron.
He had around 30 remedies to treat/manage depression alone. He also provided a method for testing the effectiveness of drugs as he believed the quality of the drug
needed to match the severity of the disease. He also believed that the same trials needed to provide similar results to that the effects of the drugs were consistent.

Ibn Sina was a prolific writer and philosopher, who discussed mathematics, geometry, astronomy, physics, and more, but his contributions to medicine were truly monumental.`,
    data: {
      age: 56,
      birthday: "c.980 CE",
      yearRange: {start: 980, end: 1037},
      origin: "Mediterranean/Middle East"
    },
    url: "https://i0.wp.com/oxsci.org/wp-content/uploads/2019/11/IbnSina_2.png?w=1336&ssl=1"
  },
  {
    name: "Imhotep",
    desc: "The Deified Egyptian Architect and Physician",
    data: {
      age: 0,
      birthday: "c. 27th century BCE",
      yearRange: {start: -2700, end: -2601},
      origin: "Mediterranean/Middle East"
    },
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Imhotep.svg/250px-Imhotep.svg.png"
  },
  {
    name: 'Asclepios',
    desc: "Greek God of Medicine",
    data: {
      age: 0,
      birthday: "N/A",
      yearRange: {start: -1200, end: 2025},
      origin: "Mediterranean/Middle East"
    },
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Asklepios_-_Epidauros.jpg/250px-Asklepios_-_Epidauros.jpg"
  },
  {
    name: 'Hippocrates of Kos',
    desc: "The Father of Medicine",
    data: {
      age: 90,
      birthday: "c. 460 BCE",
      yearRange: {start: -460, end: -370},
      origin: "Mediterranean/Middle East"
    },
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Hippocrates.jpg/250px-Hippocrates.jpg"
  },
  {
    name: 'Cladius Galen',
    desc: "The Roman Philospoher and Physician",
    data: {
      age: 87,
      birthday: "c. 129 CE",
      yearRange: {start: 129, end: 216},
      origin: "Mediterranean/Middle East"
    },
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Claudius_Galenus_%281906%29_-_Veloso_Salgado.png/250px-Claudius_Galenus_%281906%29_-_Veloso_Salgado.png"
  },
  {
    name: 'Kajiwara Shōzen',
    desc: "Buddhist Priest and Clinical Physician",
    data: {
      age: 72,
      birthday: "1265 CE",
      yearRange: {start: 1265, end: 1337},
      origin: "East Asia"
    },
    url: "https://muse.jhu.edu/book/1740/image/front_cover?format=largecover"
  },
]