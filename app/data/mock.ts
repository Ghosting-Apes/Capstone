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
  url?: string,
}

export interface Places {
  name: string,
  desc: string,
  caption: string,
  origin: string,
  url?: string
}
export interface Miscellaneous {
  title: string,
  desc: string,
  caption: string,
  origin: string,
  url?: string
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
  },
  {
    title: "Traditional Chinese Medicine",
    caption: "The traditional Chinese medical system",
    desc: `Traditional Chinese medicine is a medical system rooted in Chinese philosophy. The primary foundation of traditional Chinese medicine comes from the work ***Huangdi Neijing***, a 2000 year old source, set as a discussion between the Yellow Emperor Huang-di and his advisors. The work itself has been edited over time but is still key to traditional practices and procedures performed now.
The work encompasses a variety of traditional ideas such as yin-yang, zang-fu, the five phases of energy (wu-xing), and the flow of life energy (“qi), as well as discusses diagnostic procedures (checking pulses and the tongue) and treatments (herbal remedies, diets, meditation, exrcise). 
Yin-yang is a concept that has pervaded Chinese medicine, philosophy, and culture for a millennia, with the central idea of an opposite but complimentary duality. Yin itself is considered watery, cool, dark, passive, and feminine, while yang is dry, hot, bright, active, and masculine.  Both must co-exist, as you cannot have one without having the other. Zang-fu is then a system that assigns body parts to either yin or yang. The zang, or yin, organs are the lungs, heart, liver, spleen, and kidneys, whereas the fu, or yang, viscera are the stomach, intestines, gallbladder, and urinary bladder. The zang organs store up but do not eliminate but the fu viscera eliminate but do not store up.
Wu-xing is a concept that the five phases of energy (earth, water, fire, wood, and metal) encompass all elements of nature including humans. The five elements can also interact with each other. The generating (sheng) cycle describes how the elements support and create each other; water causes wood to grow, wood burns to make fire, fire creates ash (Earth), earth generates metal to be extracted, and metal can be heated into liquid. The controlling (ke) cycle describes how an element controls another to restrain growth. Water controls fire, which controls metal, which controls wood, which controls earth, which finally controls water. This relationship is also considered a grandmother-grandchild relationship. The overactive (cheng) cycle, then describes how the grandmother element (water) applies to much control on its grandchild element (fire), causing deficient expression of the grandchild. The counteracting (wu) cycle in turn describes how the grandchild element (fire) rebels against the grandmother element (water), “insulting” it; fire flares up and dries out water.  ***Ayurveda*** has a similar system with the idea of the five elements.
Yin-yang, zang-fu, and wu-xing all interact with each other and affect the flow of qi within the body. Qi flows along channels known as meridians and an imbalance of this flow is what causes disease. Treatments focus on restoring the flow of qi to restore health. ***Acupuncture*** and moxibustion is a technique used to stimulate acupuncture points and meridian channels to help restore the body’s flow of qi.
Religion forbade mutilation of dead bodies therefore there are no scientific foundations for traditional anatomy. It was not until 1798 CE when dog-torn children who had died in an epidemic were studied, for increased anatomical knowledge.
Traditional Chinese medicine has also had an influence of medical systems that follow such as ***Kampo***, the traditional Japanese medicine system that was then slightly modified and adopted into Taiwan, and then later exported into the West. Traditional Chinese medicine also differs from other systems like ***traditional Arabic and Islamic medicine***, as it has over 11000 herbal formulas, whereas the latter is typically only based on a single plant species or mixture with a few local species. 
In the 6th century CE, the physician ***Sun Simiao*** compiled many medical texts listing 1000s of remedies. His work, ***Qianjin Yaofang*** was also seen as the Chinese equivalent of the ***Hippocratic Oath***.
`,
    origin: "East Asia"
  },
  {
    title: "Ayurveda",
    caption: "\"Life Knowledge\"",
    desc: `Ayurveda (“Life Knowledge”) is a traditional medical system that has prevailed in southern Asia for over 2000 years. Its earliest form is dated to the Vedic period of Indian (c. 5000 BCE), while its roots are attributed to ***Dhanvantari***, who was deified as the Hindu god of medicine and is the physician of other Hindu gods.
The basis of Ayurveda is formed by two major works, ***Sushruta Samhita*** and ***Chakara Samhita***. There are also three more works that contribute to Ayurveda, those being ***Ashtanga Hridayam***, Ashtanga Sangraha, and the Bower Manuscript.
Similarly to concepts from ***traditional Chinese medicine***, most Ayurveda systems are based on the idea of the five elements, water (jala/ap), fire (tejas/agni), earth (privthi/bhumi), air (pavana/vayu), and ether/space (akasha). Similary to ***Humourism***, within a person the proportion of each element various and contributes to three doshas, which are wind (vata), bile (pitta), and phlegm (kapha). When these dosha are in balance a person has good health, but imbalance causes sickness related to the dominate dosha. Increased vata may cause indigestion, flatulence, and cramps, while increased kapla may cause coughing and difficulty breathing. 
Doshas flow within a person through pores in the body called srotas, which are similar to the meridian channels of ***acupuncture***. The body has 16 of the srotas which carries energy, nutrients, waste, learning, and wisdom. Three srotas are connected to the outside world; prana vaha carries breath, while anna vaha carries food, and udaka vaha carries water. Another three srotas are used for metabolic waste; purisha vaha carries solid waste, while mutra vaha carries urine, and sveda vaha carries perspiration. There is a specific srota, maho vaha, for the mind which carries ideas, feelings, thoughts, and emotions. There is also the artava vaha srota for menstruation and the stanya vaha srota for lactation. The remaining seven srotas are connected to tissues of the body (dhatus), which includes rakta (blood), rasa (lymph), mamsa (muscles), asthi (bones), majja (bone marrow, brain, and nerves), medas (fat), and shukra (reproductive organs).
Another concept found in Ayurvedic medicine is that of the seven “energy centers” (chakras). These chakras are not a part of the physical body, but are spinning vortexes found in the etheric realm. The chakras are aligned along the midline of the body and imbalance can lead to other parts of the body being affected like the doshas.
Ayurvedic medicine also has the concept of “digestive fire” (agni). This not only referred the body’s metabolism, but also to the ability to assimilate learning, memories, and the ability to burn waste from the skin or mind. Agni can be influenced by the three doshas or seven chakras. 
While Ayurvedic medicine has its roots to southern Asia, practice has spread worldwide, especially to those looking for alternative medical therapies.
`,
    origin: "South Asia"
  }
]

export const works: Works[] = [
  {
    title: "Qanun fil Tib",
    caption: "Ibn Sina's Magnum Opus",
    author: "Ibn Sina",
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
    title: "Sushrita Samhita",
    desc: `The Sushruta Samhita forms one of the main basis of ***Ayurvedic*** medicine and is attributed to the Indian surgeon ***Sushruta***. 
    Samhita means collection/compilation and the Sushruta Samhita contains information about Ayurvedic surgery (shalya chikitsa), teeth extractions, 
    cyst draining, cataract removal, hernia repair, setting broken bones, cauterizing hemorrhoids, and Samhitas specialty, rhinoplasty, to name a few. 
    The collection contains over 300 surgical procedures and 120 surgical tools, but also has over 1000 diseases and injuries along with more than 700 herbal remedies.
    As extensive as Sushrita Samhita was, it was unknown outside of India until the 8th century CE, during when it was translated in Arabic. It was not until the 19th 
    century that the text was known in the West after Hamilton Bower purchased the now called Bower Manuscript which contained information 
    from Sushruta Samhita as well as ***Charaka Samhita***. The English translation became available in the 20th century CE after it was translated 
    into three volumes by Kaviraj Kunja Lal Bhishagratna.`,
    author: "Sushrita",
    origin: "South Asia",
    caption: "An Ayurvedic Surgical Collection"
  },
  {
    title: "Ishinpo",
    desc: `Ishinpo, written by ***Tamba Yasuyori***, who completed the work in 982 CE, is the oldest Japanese medical text that is still in existence. 
    The work is a collection of 30 volumes based entirely upon classical ***traditional Chinese medicine*** texts from the Sui and Tang dynasties (581 CE - 907 CE). 
    Due to this, yin and yang is the basis of the theory of disease causation. The work discusses a large range of topics from disease and their treatment, organized by
    the affected organs or systems, drugs and their formulas, ***acupuncture***, diets, Buddhist sutras and more. The work itself also helped to preserve information
    from the Chinese texts used in this collection that have since been lost. The work itself had been sequestered in the imperial collection with very little copies
    in circulation. It was not until 1854 CE, when the Tokugawa shogun ordered for this work to be sent to the Edo Medical Academy for its revision and reproduction,
    for Ishinpo to be made known worldwide. Ishinpo is one of the significant texts of ***Kampo***.`,
    author: "Tamba Yasuyori",
    origin: "East Asia",
    caption: "The Oldest Surviving Medical Text from Japan"
  },
  {
    title: "Kahun Papyrus",
    desc: `N/A`,
    author: "N/A",
    origin: "Mediterranean/Middle East",
    caption: "The Most Important Medical Papyrus"
  }
]

export const places: Places[] = [
  {
    name: "Asclepeions",
    caption: "Temples Dedicated to Asclepios",
    desc: `Asclepions were temples built in dedication to ***Asclepios***, the Greek god of medicine and healing. These temples served as places for people to take refuge in and rest, while also pray and heal. While there are multiple of these temples, the most famous temple
    is located in Epidaurus, where Asclepios was said to be born. This temple was built in the 4th century BCE and is a UNESCO World Heritage Site.`,
    origin: "Mediterranean/Middle East"
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
      age: 57,
      birthday: "c. 980 CE",
      yearRange: {start: 980, end: 1037},
      origin: "Mediterranean/Middle East"
    },
    url: "https://i0.wp.com/oxsci.org/wp-content/uploads/2019/11/IbnSina_2.png?w=1336&ssl=1"
  },
  {
    name: "Al-Razi",
    caption: "Chief Physician and Hippocratic Reviver",
    desc: `N/A`,
    data: {
      age: 60,
      birthday: "c. 865 CE",
      yearRange: {start: 865, end: 925},
      origin: "Mediterranean/Middle East"
    },
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Imhotep.svg/250px-Imhotep.svg.png"
  },
  {
    name: "Imhotep",
    caption: "The Deified Egyptian Architect and Physician",
    desc: `Imhotep was an architect and the leader of the priest physicians in Ancient Egypt. He was active during the 27th century BCE and was the foremost medical figure of the time. He was later deified (c. 525BCE) as he was believed to be the son of the ancient Egyptian goddess of healing, Sekhmet, and was continued to be worshipped even after ancient Egyptian civilization faded, for the ancient Greeks associated him with ***Asclepios*** the god of healing.
Although historians are uncertain of his actual role; he may have actually dispensed herbs as treatment or was the leader of the physicians and claimed the credit. Some also attribute him credit to authoring the original work of which the Edwin Smith Papyrus from the ***Kahun Papyrus*** adapted.
`,
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
    caption: "Greek God of Medicine",
    desc: `Asclepios is the Greek god of healing and medicine. His symbol is the Rod of Asclepios which is a staff with a snake coiled around it. Some trace the origins of this symbol and Asclepios himself back to the ancient Egyptian ***Imhotep***, who was deified as the Egyptian god of medicine. Temples dedicated to Asclepios are known as ***Asclepions***. 
Asclepios was a part of early Greek medicine, which was highly influenced by ancient Egyptian medicine, with the belief of spirits and the supernatural. Prayers and rituals were offered to Asclepios as gifts to him by the sick in hopes of being cured. 
`,
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
    caption: "The Father of Medicine",
    desc: `The Father of Medicine`,
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
    caption: "The Roman Philosopher and Physician",
    desc: `N/A`,
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
    caption: "Buddhist Priest and Clinical Physician",
    desc: `N/A`,
    data: {
      age: 72,
      birthday: "1265 CE",
      yearRange: {start: 1265, end: 1337},
      origin: "East Asia"
    },
    url: "https://muse.jhu.edu/book/1740/image/front_cover?format=largecover"
  },
  {
    name: 'Sushruta',
    caption: "The \"Renowned\" Indian Surgeon",
    desc: `Sushruta was an Indian surgeon likely active in the 6th century BCE, to which the major ***Avurvedic*** work ***Sushruta Samhita***. Very little is known about his life and his name is an epithet meaning “renowned”. He is also believed to be a contemporary to ***Charaka*** or having come slightly after. 
During Sushruta's time, surgery was being practiced in India, however he greatly advanced surgery. He was specialized in rhinoplasty and developed techniques like using an ant’s head to sew sutures. He also attracted many disciples, who he required six years of study before allowing them to begin training hands on, and had them taking an oath similar to that of the ***Hippocratic Oath***. 
Sushruta had a holistic view of medicine, emphasizing the entire patient and not just the present symptoms. 
He has made significant contributions to Ayurvedic medicine but also to modern medical thought.
`,
    data: {
      age: 0,
      birthday: "600 BCE",
      yearRange: {start: -600, end: -501},
      origin: "South Asia"
    },
    url: "https://muse.jhu.edu/book/1740/image/front_cover?format=largecover"
  }
]