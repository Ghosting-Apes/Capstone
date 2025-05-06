import Link from "next/link";
import React, { JSX } from "react";

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
desc: string | JSX.Element,
url: string,
}

export interface TimePeriod {
start: number,
end: number
}
export interface Works {
title: string,
desc: string | JSX.Element,
caption: string,
origin: string,
author?: string,
url?: string,
}

export interface Places {
name: string,
desc: string | JSX.Element,
caption: string,
origin: string,
url?: string
}
export interface Miscellaneous {
title: string,
desc: string | JSX.Element,
caption: string,
origin: string,
url?: string
}

export const miscellaneous: Miscellaneous[] = [
{
  title: "Humourism",
  caption: "The Ancient Greek Medical System",
  desc: (
  <>
      <p>
      Humourism is based on balancing the four humours, or bodily fluids, of the body. Adapted from Empedocles's notion of four classical roots, (air, fire, water, and earth), and incorporated into medicine as the four humours - blood, yellow bile, black bile, and phlegm. A balance of these humours meant good health, while imbalance was the cause of illness. The system is mentioned in the Hippocratic Corpus. According to <Link href="/people/hippocrates">Hippocrates</Link> and his followers, the four personality types (temperaments) emerge from the four humors. The system was formalized by <Link href="/people/Cladius_Galen">Galen</Link>, who further expanded upon it adding the variables hot-cold and wet-dry, as well as four major organs, each of which linked to a humour. Galen believed that achieving equilibrium differed for each person, which is why people varied in health, personality, and susceptibility to illness. The principles of humourism can be found in other systems such as within the five elements of the <Link href="/misc/Ayurveda">Ayurveda</Link> medical system.
      </p>
    <br />
    <p>
      The humour of blood was linked to the heart, with an excess causing a sanguine temperament; these people are optimistic, social, and easy going. Blood was also linked to air, heat/wetness, and the season of spring. The humour of yellow bile was linked to the liver, and the temperament caused by an excess was the choleric personality, with its members considered to be strong-willed, independent, and decisive. Yellow bile was also linked to fire, heat/dryness, and the season of summer. The humour of black bile was linked to the spleen, where people with excess had a melancholic temperament, being private, cautious, and logical. Black bile was also linked to earth, cold/dryness, and the season of fall. The humour of phlegm was linked to the brain, and an excess caused a phlegmatic person, who was calm, accepting, and slow to anger. Phlegm was also linked to water, cold/wetness, and the season of winter.
    </p>
    <br />
    <p>
      Excess of these humours was also linked to various symptoms. Excess blood lead to fever and inflammation, while excess yellow bile caused jaundice and indigestion, whereas excess black bile caused depression and melancholy, and excess phlegm caused chills and sneezes. Excess of these humours also affected temperaments. Excess blood could cause to tasks being abandoned or a person being forgetful. Excess yellow bile could lead to a person becoming over-assertive or disorganized. Excess black bile could cause worry and anxiety. Excess phlegm could cause laziness or a person to fear change.
    </p>
    <br />
    <p>
      An excess of these humours could be caused by a variety of different factors such as contaminated food or emotions like jealousy. Various techniques were employed to help restore balance in the humours. Blood letting allowed the body to drain excess blood, while yellow bile was removed through cupping or emetics, and emetics could also remove black bile, while coughing and sneezing where the bodies way of removing excess phlegm. Diets and herbs were also prescribed as a way to restore the balance of a certain humour. The system of humourism persisted for around 2000 years until new scientific research and understanding emerged in the 18th century.
    </p>
  </>
  ),
  origin: "Mediterranean/Middle East",
  url: "/misc/four-humours.jpg"
},
{
  title: "Traditional Chinese Medicine",
  caption: "The traditional Chinese medical system",
  desc: (
    <>
    <p>
  Traditional Chinese medicine is a medical system rooted in Chinese philosophy. The primary foundation of traditional Chinese medicine comes from the work <Link href="/work/Huangdi_Neijing/">Huangdi Neijing</Link>, a 2000 year old source, set as a discussion between the Yellow Emperor Huang-di and his advisors. The work itself has been edited over time but is still key to traditional practices and procedures performed now.
</p>
<br/>
<p>
  The work encompasses a variety of traditional ideas such as yin-yang, zang-fu, the five phases of energy (wu-xing), and the flow of life energy (“qi”), as well as discusses diagnostic procedures (checking pulses and the tongue) and treatments (herbal remedies, diets, meditation, exercise). 
</p>
<br/>
<p>
  Yin-yang is a concept that has pervaded Chinese medicine, philosophy, and culture for a millennia, with the central idea of an opposite but complimentary duality. Yin itself is considered watery, cool, dark, passive, and feminine, while yang is dry, hot, bright, active, and masculine. Both must co-exist, as you cannot have one without having the other. Zang-fu is then a system that assigns body parts to either yin or yang. The zang, or yin, organs are the lungs, heart, liver, spleen, and kidneys, whereas the fu, or yang, viscera are the stomach, intestines, gallbladder, and urinary bladder. The zang organs store up but do not eliminate but the fu viscera eliminate but do not store up.
</p>
<br/>
<p>
  Wu-xing is a concept that the five phases of energy (earth, water, fire, wood, and metal) encompass all elements of nature including humans. The five elements can also interact with each other. The generating (sheng) cycle describes how the elements support and create each other; water causes wood to grow, wood burns to make fire, fire creates ash (Earth), earth generates metal to be extracted, and metal can be heated into liquid. The controlling (ke) cycle describes how an element controls another to restrain growth. Water controls fire, which controls metal, which controls wood, which controls earth, which finally controls water. This relationship is also considered a grandmother-grandchild relationship. The overactive (cheng) cycle, then describes how the grandmother element (water) applies too much control on its grandchild element (fire), causing deficient expression of the grandchild. The counteracting (wu) cycle in turn describes how the grandchild element (fire) rebels against the grandmother element (water), “insulting” it; fire flares up and dries out water. <Link href="/misc/Ayurveda">Ayurveda</Link> has a similar system with the idea of the five elements.
</p>
<br/>
<p>
  Yin-yang, zang-fu, and wu-xing all interact with each other and affect the flow of qi within the body. Qi flows along channels known as meridians and an imbalance of this flow is what causes disease. Treatments focus on restoring the flow of qi to restore health. <Link href="/misc/Acupuncture">Acupuncture</Link> and moxibustion is a technique used to stimulate acupuncture points and meridian channels to help restore the body’s flow of qi.
</p>
<br/>
<p>
  Religion forbade mutilation of dead bodies therefore there are no scientific foundations for traditional anatomy. It was not until 1798 CE when dog-torn children who had died in an epidemic were studied, for increased anatomical knowledge.
</p>
<br/>
<p>
  Traditional Chinese medicine has also had an influence on medical systems that follow such as <Link href="/misc/Kampo">Kampo</Link>, the traditional Japanese medicine system that was then slightly modified and adopted into Taiwan, and then later exported into the West. Traditional Chinese medicine also differs from other systems like <Link href="/misc/Traditional_Arabic_and_Islamic_Medicine">traditional Arabic and Islamic medicine</Link>, as it has over 11000 herbal formulas, whereas the latter is typically only based on a single plant species or mixture with a few local species. 
</p>
<br/>
<p>
  In the 6th century CE, the physician Sun Simiao compiled many medical texts listing 1000s of remedies. His work, Qianjin Yaofang was also seen as the Chinese equivalent of the <Link href="/misc/Hippocratic_Oath">Hippocratic Oath</Link>.
</p>
    </>
  ),
  origin: "East Asia",
  url: "/misc/five-elements.png"
},
{
  title: "Acupuncture",
  caption: "Chinese Medical Needling",
  desc: (
    <>
  Acupuncture is a <Link href="/misc/Traditional_Chinese_Medicine">traditional Chinese medical</Link> technique, which has been used for over 4000 years, that involves the use of needles to alleviate pain and cure certain illnesses. Acupuncture is used in combination of moxibustion, which is the burning of mugwort on the skin.

  Acupuncture aims to correct the flow of qi within the patient and restore balance. Needles are inserted into the skin and underlaying tissue at specific points known as acupuncture points. These points can be far away from the location of the problem point. For example, the acupuncture points of the lower back can be found on the hand. These points can also be stimulated through pressure, heat, or a strong light.

  The origins of acupuncture is thought to be from the second book of <Link href="/work/Huangdi_Neijing">Huangdi Neijing</Link>, which contains techniques and uses of acupuncture. Illustrations of meridians and acupuncture points are also included.

  Modern Western studies have shown that this age old technique can be effective in relieving certain pains and discomforts.
</>

  ),
  origin: "East Asia",
  url: "/misc/acupuncture.jpg"
},
{
  title: "Hippocratic Oath",
  caption: "A Physicians Pledge",
  desc: (
    <>
      The Hippocratic Oath is the oldest and most widely known treatise on medical ethics used. Its origins are from <Link href="/people/Hippocrates_of_Kos/info">Hippocrates</Link> who made his new students swear by an oath to their peers and seniors that they will obey their duties as physicians to their patients. The Hippocratic Oath has been revised over time removing aspects like swearing to various Greek gods and changes to the view of abortions.
The following is the Classical Hippocratic Oath:
"I swear by Apollo the physician, and Aesculapius the surgeon, likewise Hygeia and Panacea, and call all the gods and goddesses to witness, that I will observe and keep this underwritten oath, to the utmost of my power and judgment.
I will reverence my master who taught me the art. Equally with my parents, will I allow him things necessary for his support, and will consider his sons as brothers. I will teach them my art without reward or agreement; and I will impart all my acquirement, instructions, and whatever I know, to my master's children, as to my own; and likewise to all my pupils, who shall bind and tie themselves by a professional oath, but to none else.
With regard to healing the sick, I will devise and order for them the best diet, according to my judgment and means; and I will take care that they suffer no hurt or damage.
Nor shall any man's entreaty prevail upon me to administer poison to anyone; neither will I counsel any man to do so. Moreover, I will give no sort of medicine to any pregnant woman, with a view to destroy the child.
Further, I will comport myself and use my knowledge in a godly manner.
I will not cut for the stone, but will commit that affair entirely to the surgeons.
Whatsoever house I may enter, my visit shall be for the convenience and advantage of the patient; and I will willingly refrain from doing any injury or wrong from falsehood, and (in an especial manner) from acts of an amorous nature, whatever may be the rank of those who it may be my duty to cure, whether mistress or servant, bond or free.
Whatever, in the course of my practice, I may see or hear (even when not invited), whatever I may happen to obtain knowledge of, if it be not proper to repeat it, I will keep sacred and secret within my own breast.
If I faithfully observe this oath, may I thrive and prosper in my fortune and profession, and live in the estimation of posterity; or on breach thereof, may the reverse be my fate!"

Many revisions have occurred and the following is the 1964 Dr. Louis Lasagna revision, that is widely accepted in many medical schools:

"I swear to fulfill, to the best of my ability and judgment, this covenant: 
I will respect the hard-won scientific gains of those physicians in whose steps I walk, and gladly share such knowledge as is mine with those who are to follow. 
I will apply, for the benefit of the sick, all measures [that] are required, avoiding those twin traps of overtreatment and therapeutic nihilism. 
I will remember that there is art to medicine as well as science, and that warmth, sympathy, and understanding may outweigh the surgeon's knife or the chemist's drug. 
I will not be ashamed to say "I know not," nor will I fail to call in my colleagues when the skills of another are needed for a patient's recovery. 
I will respect the privacy of my patients, for their problems are not disclosed to me that the world may know. 
Most especially must I tread with care in matters of life and death. If it is given me to save a life, all thanks. But it may also be within my power to take a life; this awesome responsibility must be faced with great humbleness and awareness of my own frailty. 
Above all, I must not play at God. 
I will remember that I do not treat a fever chart, a cancerous growth, but a sick human being, whose illness may affect the person's family and economic stability. My responsibility includes these related problems, if I am to care adequately for the sick. 
I will prevent disease whenever I can, for prevention is preferable to cure. 
I will remember that I remain a member of society, with special obligations to all my fellow human beings, those sound of mind and body as well as the infirm. 
If I do not violate this oath, may I enjoy life and art, respected while I live and remembered with affection thereafter. 
May I always act so as to preserve the finest traditions of my calling and may I long experience the joy of healing those who seek my help."
    </>
  ),
  origin: "Mediterranean/Middle East",
  url: "/misc/hippoath.jpg"
},
{
  title: "Ayurveda",
  caption: "\"Life Knowledge\"",
  desc: (
    <>
  Ayurveda (“Life Knowledge”) is a traditional medical system that has prevailed in southern Asia for over 2000 years. Its earliest form is dated to the Vedic period of Indian (c. 5000 BCE), while its roots are attributed to Dhanvantari, who was deified as the Hindu god of medicine and is the physician of other Hindu gods.

  The basis of Ayurveda is formed by two major works, <Link href="/work/Sushruta_Samhita">Sushruta Samhita</Link> and <Link href="/work/Chakara_Samhita">Chakara Samhita</Link>. There are also three more works that contribute to Ayurveda, those being Ashtanga Hridayam, Ashtanga Sangraha, and the Bower Manuscript.

  Similarly to concepts from <Link href="/misc/Traditional_Chinese_Medicine">traditional Chinese medicine</Link>, most Ayurveda systems are based on the idea of the five elements, water (jala/ap), fire (tejas/agni), earth (privthi/bhumi), air (pavana/vayu), and ether/space (akasha). Similary to <Link href="/misc/Humourism">Humourism</Link>, within a person the proportion of each element varies and contributes to three doshas, which are wind (vata), bile (pitta), and phlegm (kapha). When these dosha are in balance a person has good health, but imbalance causes sickness related to the dominant dosha. Increased vata may cause indigestion, flatulence, and cramps, while increased kapla may cause coughing and difficulty breathing. 

  Doshas flow within a person through pores in the body called srotas, which are similar to the meridian channels of <Link href="/misc/Acupuncture">acupuncture</Link>. The body has 16 of the srotas which carries energy, nutrients, waste, learning, and wisdom. Three srotas are connected to the outside world; prana vaha carries breath, while anna vaha carries food, and udaka vaha carries water. Another three srotas are used for metabolic waste; purisha vaha carries solid waste, while mutra vaha carries urine, and sveda vaha carries perspiration. There is a specific srota, maho vaha, for the mind which carries ideas, feelings, thoughts, and emotions. There is also the artava vaha srota for menstruation and the stanya vaha srota for lactation. The remaining seven srotas are connected to tissues of the body (dhatus), which includes rakta (blood), rasa (lymph), mamsa (muscles), asthi (bones), majja (bone marrow, brain, and nerves), medas (fat), and shukra (reproductive organs).

  Another concept found in Ayurvedic medicine is that of the seven “energy centers” (chakras). These chakras are not a part of the physical body, but are spinning vortexes found in the etheric realm. The chakras are aligned along the midline of the body and imbalance can lead to other parts of the body being affected like the doshas.

  Ayurvedic medicine also has the concept of “digestive fire” (agni). This not only referred the body’s metabolism, but also to the ability to assimilate learning, memories, and the ability to burn waste from the skin or mind. Agni can be influenced by the three doshas or seven chakras. 

  While Ayurvedic medicine has its roots to southern Asia, practice has spread worldwide, especially to those looking for alternative medical therapies.
</>

  ),
  origin: "South Asia",
  url: "/misc/ayurveda-chakra.png"
},
{
  title: "Kampo",
  caption: "\"Method from the Han Period\"",
  desc: (
    <>
  Kampo, which literally translates to “method from the Han period of ancient China (206 BCE – 220 CE) is the traditional herbal medical system of Japan. Before Kampo, Japanese medicine was based on prayers, rituals, and incantations, as evil spirits and the gods were believed to be the cause of ill health. Starting in 608 CE, Japanese physicians were sent to mainland China to study medicine, causing an influx of <Link href="/misc/Traditional_Chinese_Medicine">traditional Chinese medicine</Link> influence on Japanese medicine. By 982 CE, <Link href="/work/Ishinpo">Ishinpo</Link> by <Link href="/people/Tamba_Yasuyori/info">Tamba Yasuyori</Link> was completed, which is the oldest surviving Japanese medical work. It was not until the Edo period (1600 CE) for Japanese characteristics to form in Kampo. Works by <Link href="/people/Manase_Dosan/info">Manase Dosan</Link> and <Link href="/people/Nagata_Tokuhun/info">Nagata Tokuhun</Link> also contributed significantly to Kampo, promoting a holistic understanding of disease beyond symptom management. 

  Kampo has persisted to today with ~50% of Japanese physicians today prescribing some form of Kampo remedy and over 10000 pharmacies in Japan that dispense herbal remedies. Systemic research studies have also started to arise to test the effectiveness of Kampo therapies.
</>

  ),
  origin: "East Asia",
  url: "/misc/kampo.png"
},
{
  title: "Traditional Arabic and Islamic Medicine",
  caption: "A Rich Blend of Cultures",
  desc: (
    <>
  Traditional Arabic and Islamic Medicine is a culmination of centuries of healing practices from many different cultures. Before the advent of Islam, traditional medicine of the Middle East was rooted in ancient Mesopotamian, Egyptian, Greek, and Persian traditions. 

  The <Link href="/work/Code_Of_Hammurabi">Code of Hammurabi</Link> is often regarded as the origin of medicine as a profession and Babylonians believed illness to be a punishment from the gods with its cure as a reward. Assyrians believed that three demons (decay, liver diseases, and abortion/infant death) were responsible for disease, and cures were largely prayer based with a few emetic drugs used to “disgust” the evil spirit causing it to flee.  Ancient Egypt had priest physicians who had knowledge in anatomy, rheumatology, surgery, neurosurgery, and pharmacology. Ancient Iranian medicine has roots in Zoroastrianism, and causes of disease included the demon Ahriman, sin, poor diet, uncontrolled sexual appetite, or the god Ahura Mazda. There also existed three types of practitioners; healers by herbs, healers by surgery, and healers by instruction. The Durustpat (“Masters of Health”) were physicians who practiced preventative medicine, while the Tan Beshazak (“Healers of the Body”) were physicians who practiced clinical medicine, treating disease after it manifests. Little is known about the Arab Peninsula whoever it seems that Arabs knew how to treat septic wounds and ulcers, but also used disinfectants and understood that isolating infected patients could help prevent infectious disease.

  After Islam in the 7th century CE, medicine in the Arab peninsula transformed. One of the foundations of Islam was the pursuit of knowledge and thus the foundation of Islamic science arose during the Abbasid Caliphate with <Link href="/place/Baghdad">Baghdad</Link> at the center. Many texts were translated into Arabic from Greek, Syriac, and Sanskrit, and many physicians and scientists came to Baghdad. Physicians like <Link href="/people/Al-Razi/info">Al-Razi</Link> and <Link href="/people/Ibn_Sina/info">Ibn Sina</Link> arose further increasing Islamic medical knowledge. 

  During Ottoman times complementing medical systems existed. <Link href="/misc/Humourism">Humourism</Link>, used mostly by the upper class, religious medicine based on the prophetic teachings, used by all classes, and popular medicine not derived from a written tradition, used by the lower class existed. Ottomans also believed in humans being custodians of the natural world and greatly sponsored medical aid and charity for the sick. Many hospitals and public welfare centers were established in the centers of major cities. The Ottomans also believed that physical and mental health were closely related, and built hospitals near mosques, and did not isolate the sick (unless they were a leers patient). To the Ottomans, death was a part of the life cycle and medicine served to do no harm instead of curing all. 

  Traditional Arabic and Islamic medicine also differed from other systems like <Link href="/misc/Traditional_Chinese_Medicine">Traditional Chinese Medicine</Link>, <Link href="/work/Ayurveda">Ayurveda</Link>, and <Link href="/work/Kampo">Kampo</Link>, in that herbal remedies were typically based on a single plant species or a mix of few local plant species. These remedies were administered through inhaling the oils from boiling parts of the plant or by ingesting the plant in the form of a juice, syrup, paste, or other form.

  Traditional Arabic and Islamic medicine and other plant based therapies have seen a revival in recent times due to increased costs of chemical drugs and the side effects that come with them.
  </>
  ),
  origin: "Mediterranean/Middle East",
  url: "/misc/taim.jpg"
}
]

export const works: Works[] = [
{
  title: "Qanun fil Tib",
  caption: "Ibn Sina's Magnum Opus",
  author: "Ibn Sina",
  desc: (
    <>
    <p>
      <em>Qanun fil Tib</em>, or "Canon of Medicine", written by the Muslim physician <Link href="/people/Ibn_Sina/info">Ibn Sina</Link>, is one of the most influential medical works. This book was widely used in the West and Arab world, becoming the main medical source over <Link href="/people/Al-Razi/info">Al-Razi</Link>'s Kitab al-Hawi, and was the standard medical textbook used in Europe until the 17th century.
    </p>
    <br/>
    <p>
      The work contains over 1 million words that is encompassed within 5 volumes. It contained all medical and surgical knowledge of the time and included the doctrines of <Link href="/people/Hippocrates_of_Kos">Hippocrates</Link>, <Link href="/people/Cladius_Galen">Galen</Link>, and Aristotle. In the 12th century, <em>Qanun fil Tib</em> was translated into Latin, leading it to dominate medicine during medieval times. It has been translated into many languages and published many times since. 
    </p>
    <br/>
    <p>
      The first volume concerns the origins of health and sickness as well as the anatomy and function of the body. This volume contained four treatises the first of which discussed the four elements (earth, air, fire, and water), considering Galen's <Link href="/misc/Humourism">Four Humours</Link>; this treatise also discussed anatomy. The second treatise then moves on to etiology of disease and symptoms, while the third treatise discussed hygiene, health, sickness, as well as the definiteness of death. The final treatise discusses therapeutic classifications of disease (nosology), as well as general dietary treatments and regimens. The second volume moves on to discuss information on over 700 drugs and medicines. The third volume focused on diagnosis and treating different diseases to different parts of the body. The fourth volume's focus is on conditions affecting the entire body, while the final volume was centered around preparing medical remedies. The simple and compound drugs discussed within the second and fifth volumes develop upon Galen's humoral pathology.
    </p>
    <br/>
    <p>
      Ibn Sina also had intended for an appendix with his original clinical records, however these were lost, with only an Arabic text surviving within a 1593 Roman publication of <em>Qanun fil Tib</em>.
    </p>
    <br/>
    <p>
      <em>Qanun fil Tib</em> undoubtedly left a legacy upon medical learning and knowledge.
    </p>
</>
  ),
  origin: "Mediterranean/Middle East",
  url: "/works/qanun.jpg"
},
{
  title: "Sushruta Samhita",
  desc:(
    <>
      <p>
        The <em>Sushruta Samhita</em> forms one of the main basis of <Link href="/misc/Ayurveda">Ayurvedic</Link> medicine and is attributed to the Indian surgeon <Link href="/people/Sushruta/info">Sushruta</Link>. Samhita means collection/compilation and the <em>Sushruta Samhita</em> contains information about Ayurvedic surgery (shalya chikitsa), teeth extractions, cyst draining, cataract removal, hernia repair, setting broken bones, cauterizing hemorrhoids, and Samhita’s specialty, rhinoplasty, to name a few. The collection contains over 300 surgical procedures and 120 surgical tools, but also has over 1000 diseases and injuries along with more than 700 herbal remedies.
      </p>
      <br/>
      <p>
        As extensive as <em>Sushruta Samhita</em> was, it was unknown outside of India until the 8th century CE, during which it was translated into Arabic. It was not until the 19th century that the text was known in the West after Hamilton Bower purchased the now-called Bower Manuscript, which contained information from <em>Sushruta Samhita</em> as well as <Link href="/work/Charaka_Samhita">Charaka Samhita</Link>. The English translation became available in the 20th century CE after it was translated into three volumes by Kaviraj Kunja Lal Bhishagratna.
      </p>
    </>
  ),
  author: "Sushruta",
  origin: "South Asia",
  caption: "An Ayurvedic Surgical Collection",
  url: "/works/sush-sam.jpg"
},
{
  title: "Ishinpo",
  desc: (
  <>
    <p>
      <em>Ishinpo</em>, written by <strong>Tamba Yasuyori</strong>, who completed the work in 982 CE, is the oldest Japanese medical text that is still in existence. The work is a collection of 30 volumes based entirely upon classical <Link href="/misc/Traditional_Chinese_Medicine">traditional Chinese medicine</Link> texts from the Sui and Tang dynasties (581 CE – 907 CE). Due to this, yin and yang is the basis of the theory of disease causation. The work discusses a large range of topics from disease and their treatment, organized by the affected organs or systems, drugs and their formulas, <Link href="/misc/Acupuncture">acupuncture</Link>, diets, Buddhist sutras and more. The work itself also helped to preserve information from the Chinese texts used in this collection that have since been lost. The work itself had been sequestered in the imperial collection with very little copies in circulation. It was not until 1854 CE, when the Tokugawa shogun ordered for this work to be sent to the Edo Medical Academy for its revision and reproduction, for <em>Ishinpo</em> to be made known worldwide.
    </p>
    <br/>
    <p>
      <em>Ishinpo</em> is one of the significant texts of <Link href="/misc/Kampo">Kampo</Link>.
    </p>
  </>),
  author: "Tamba Yasuyori",
  origin: "East Asia",
  caption: "The Oldest Surviving Medical Text from Japan",
  url: "/works/ishinpo.png"
},
{
  title: "Kahun Papyrus",
  desc: (
    <>
      <p>
        The <em>Kahun Papyrus</em> is the most important of the medical papyri from which much of our knowledge on ancient Egyptian medicine comes from. The papyrus has different names depending on who financed it, translated it, or where it resides, with the earliest known being the gynecological papyrus (c. 1800 BCE). Other <em>Kahun Papyrus</em> include the Edwin Smith (c. 1600 BCE), Ebers (c. 1550 BCE), Heasrt, Erman, London, Brugsch, and Chester Beatty papyri.
      </p>
      <br/>
      <p>
        The <em>Ebers Papyrus</em> is the longest of the bunch and is comprised of hundreds of chants and spells against bad spirits, but also includes many mineral and herbal remedies. The <em>Edwin Smith Papyrus</em> on the other hand is much more systematic and a surgical treatise, covering 48 case studies. The cases typically start from the head and work down the body with examination, prognosis, and treatment notes.
      </p>
    </>
  ),
  author: "N/A",
  origin: "Mediterranean/Middle East",
  caption: "The Most Important Medical Papyrus",
  url: "/works/ebers-papyrus.png"
},
{
  title: "Charaka Samhita",
  desc: (
    <>
  The Charaka Samhita forms one of the main basis of <Link href="/work/Ayurvedic">Ayurvedic</Link> medicine as is attributed to the Indian physician <Link href="/people/Charaka/info">Charaka</Link>. Samhita means collection/compilation and the Charaka Samhita contains 110 chapters divided into 8 sections with instructions of how a physician should examine patients and make their diagnosis, similar to the teachings of <Link href="/people/Hippocrates/info">Hippocrates</Link>. The collection also contains recommended treatments including remedies that emphasize lifestyle, hygiene, exercise, and diet changes. Herbal/mineral based medicine are also included. The work is written in verse to aid its readers in memorization. 

  The Charaka Samhita has been adapted in other works, along with the <Link href="/work/Sushruta_Samhita">Sushruta Samhita</Link>, such as into Ashtanga Hridayam.
</>

  ),
  author: "Charaka",
  origin: "South Asia",
  caption: "An Ayurvedic Mediacl Collection",
  url: "/works/cha-sam.jpg"
},
{
  title: "Huangdi Neijing",
  desc: (
    <>
  The Huangdi Neijing (Yellow Emperor's Classic of Internal Medicine) is a 2000 year old work that is the primary source of knowledge about early <Link href="/misc/Traditional_Chinese_Medicine">traditional Chinese medicine</Link>. 
	
  The Huangdi Neijing is laid out in the format of a question and answer discussion between the Yellow Emperor Huang-di and his advisors. Huang-di asks a question and his advisors provide an answer. 
	
  The book itself covers many traditional concepts including yin-yang, zang-fu, the xu-xing, and flow of qi. The book also contains many diagnostic procedures like checking pulses, observing tongues, and examining excrement. A wide array of treatments are included such as herbal/mineral formulas, massages, special diets, meditation, bathing, exercise, and <Link href="/misc/Acupuncture">Acupuncture</Link>.
</>),
  author: "N/A",
  origin: "East Asia",
  caption: "Yellow Emperor's Classic of Internal Medicine",
  url: "/works/huand.png"
}
]

export const places: Places[] = [
{
  name: "Asclepeions",
  caption: "Temples Dedicated to Asclepios",
  desc: (
    <p>
      Asclepions were temples built in dedication to <Link href="/people/Asclepios/info">Asclepios</Link>, the Greek god of medicine and healing. These temples served as places for people to take refuge in and rest, while also pray and heal. While there are multiple of these temples, the most famous temple is located in Epidaurus, where Asclepios was said to be born. This temple was built in the 4th century BCE and is a UNESCO World Heritage Site.
    </p>
  ),
  origin: "Mediterranean/Middle East",
  url: "/places/asclepions.jpg"
},
{
  name: "Jundi Shapur",
  caption: "\"Beautiful Garden\"",
  desc: `
  Jundi Shapur, which means “Beautiful Garden”, was the first medical school in pre-Islamic ancient Iran (located in modern day Khuzestan). The location was originally founded by the Sassanid Emperor, Shapur I, as a prison, but became a refugee for intellectuals coming from the Greeks, Syrians, and Nestorians. 

  The Byzantines destroying the School of Edessa (modern day Urfa, Turkey) in 457 CE as well as it being later closed by Emperor Zeno in 489 CE, followed by the closing of the Athenian Academy by Byzantine Emperor Justinian in 529 CE, led to these Greek and Nestorian physicians to emigrate to Jundi Shapur, where they sought the patronage of Shapur II. Further more in 555 CE, king Khosraw Anushirawan, established a medical centre and hospital, allowing for the medical traditions of the Greeks, Persians, Indians, Jews, Nestorians, and Zoroastrians to meet and further develop; this was the foundation of medical developments under Muslim rule. The physician of the prophet Muhammad (PBUH) had trained at Jundi Shapur, and Jundi Shapur was the center of medical teaching in the Islamic world until Baghdad under Al-Mansur in 762 CE.
`,
  origin: "Mediterranean/Middle East",
  url: "/places/jundi.jpg"
},
{
  name: "Gokuraku-ji",
  caption: "The Temple of Paradise",
  desc: `
  Gokuraku-ji, often regarded as the “Temple of Paradise” is a prominent Buddhist institution in Kamakura, Japan, and was founded in 1259 CE, a time of the warrior government. The valley in which is stands was called “Hell Valley” as during ancient times, corpses of the deceased were abandoned there. 

  The temple served as a way to transform the once feared “Hell Valley” into a location of healing and hope. The temple transformed not only into a place of Buddhist prayer, but a place of education and free medical care to those in need. Japanese physicians like ***Kajiwara Shozen*** served here helping to shape his approach to medicine.
`,
  origin: "East Asia",
  url: "/places/gokurakuji.png"
},
{
  name: "Nalanda University",
  caption: "A Historic Indian University",
  desc: `
  Nalanda is a historic university in India, founded in 427 CE, and a hub for students from East and South Asia, who gathered to study medicine, among other topics. Nalanda is considered the first residential university. ***Ayurveda*** was extensively taught, which was spread by alumni to other parts of India.

  Chinese physicians came to Nalanda to study and brought back with them their new knowledge. This knowledge was later imported to Japan by Japanese students in China.
`,
  origin: "South Asia",
  url: "/places/nalanda.jpg"
}
]

export const people: Person[] = [
{
  name: "Ibn Sina",
  caption: `The Father of Modern Medicine`,
  desc: (
    <>
      Ibn Sina is one of the most influential doctors from the 11th century. He was a Muslim born in the Samanid Empire (Persia, modern day Uzbekistan) who memorized the Quran before becoming 10 years old. Following one of the teachings of the Quran—which was to gain knowledge—he started studying medicine at 16 years old and became a court physician at 18. His studies and practice led him to writing his most influential work{" "}
      <Link href="/work/Qanun_fil_Tib" className="text-blue-600 underline">
        Qanun fil Tib
      </Link>
      , a collection of 5 volumes containing all medical and surgical knowledge known during his time. This was not the only work he had written, as he authored 450 books including the also influential{" "}
        Shefa
      . His works were translated and used by medical universities worldwide up until the 17th century.
      <br />
      <br />
      Ibn Sina learned from the works of earlier physicians like{" "}
      <Link href="/people/Hippocrates_of_Kos/info" className="text-blue-600 underline">
        Hippocrates
      </Link>
      ,{" "}
      <Link href="/people/Cladius_Galen/info" className="text-blue-600 underline">
        Galen
      </Link>
      , and{" "}
      <Link href="/people/Al-Razi/info" className="text-blue-600 underline">
        Al-Razi
      </Link>
      , and furthered medical knowledge. Ibn Sina was one of the first physicians to link mental health and disease. He believed that exhaustion, drug abuse, sexual deviations, and congenital factors, among other things, were causes of mental disorders. He believed there was a link between the body and soul and recommended the use of physical exercise and musical therapy in addition to drugs as a treatment for mental disorders. One of his famous experiments utilized two lambs being cared for similarly, with the exception of one lamb facing a wolf. The lamb facing the wolf died before the lamb that could not see the wolf, which helped demonstrate the negative effects of stress on health. Ibn Sina further categorized mental disorders into 11 categories: sleeping disorders, transient brain dysfunctions, delirium, mental retardation, dementia, corruption of imagination, "dog's disease" (mania), melancholy, qhutrub, love disorder, and uterine suppression. He further described 5 forms of melancholy and 2 forms of mania.
      <br />
      <br />
      Ibn Sina also made strides towards furthering anatomical knowledge. He was the first physician to find the stomach in the left side of the abdominal cavity. He was also the first to prove that the clavicle (collarbone) was only found in humans. He also specified the position of the heart to the left side of the chest, unlike Galen who assumed it to be central, but also accurately describe the function of the aortic and atrioventricular valves of the heart. Ibn Sina further described the spinal cord to be a continuation of the brain and contained sensory and motor fibers. He was also able to accurately distinguish the functions of smooth and skeletal muscles. He was also able to describe the muscles of the eye and to determine the presence of "fertile" and "infertile" fluid from the testicles. He also is also considered one of the founders of pediatrics as he noted differences in peculiarities of the child's body compared to that of adults. Ibn Sina also contributed to the field of surgery. He routinely removed bullets, stones, and tumors. He also invented catheters with rounded tips and side holes from animal skin, which allowed for gentle procedures for his patients facing urinary disturbances. He was also the first to describe the antiseptic properties of alcohol, which became commonly used in medieval Europe and is still a common antiseptic used today.
      <br />
      <br />
      Infectiology was yet another field that Ibn Sina contributed to. He described the existence of "small-disease causing creatures”, and concluded measles, smallpox, and the plague to be of infectious origin. He recommended quarantining of the sick, which is a technique still used in modern hospitals today. 
      <br />
      <br />
      Ibn Sina also used drugs and herbal remedies as a part of his treatments. He understood how inflammation could occur before or after and infection and described the anti-inflammatory properties of saffron. He had around 30 remedies to treat/manage depression alone. He also provided a method for testing the effectiveness of drugs as he believed the quality of the drug needed to match the severity of the disease. He also believed that the same trials needed to provide similar results to that the effects of the drugs were consistent. 
      <br />
      <br />
      Ibn Sina was a prolific writer and philosopher, who discussed mathematics, geometry, astronomy, physics, and more, but his contributions to medicine were truly monumental.
    </>
  ),
  data: {
    age: 57,
    birthday: "c. 980 CE",
    yearRange: {start: 980, end: 1037},
    origin: "Mediterranean/Middle East"
  },
  url: "/people/ibn sina.png"
},
{
  name: "Al-Razi",
  caption: "Chief Physician and Hippocratic Reviver",
  desc: (
    <>
      Al-Razi was a chief physician in Rey and Baghdad hospitals who helped synthesize past medical knowledge like from{" "}
      <Link href="/people/Hippocrates_of_Kos/info" className="text-blue-600 underline">
        Hippocrates
      </Link>{" "}
      and{" "}
      <Link href="/people/Cladius_Galen/info" className="text-blue-600 underline">
        Galen
      </Link>
      . He was a prolific writer contributing over 100 works on metaphysics and medicine. His two most famous encyclopedic texts were Al-Mansouri fi Al-Tib (The Book on Medicine Dedicated to Al-Mansour) and Kitab Al-Hawi fi Al-Tib (The Comprehensive Book on Medicine). These texts were used after his death and translated into Latin for use in Europe. The famous physician{" "}
      <Link href="/people/Ibn_Sina/info" className="text-blue-600 underline">
        Ibn Sina
      </Link>{" "}
      borrowed heavily from Al-Razi.
      <br />
      <br />
      Al-Razi was the first to recommend clinical trials. He said that to observe the outcome of bloodletting on a condition, patients must be divided into two groups with only one group receiving the bloodletting to compare the outcome. Al-Razi was also considered “the Father of Pediatrics” due to his book *Kitab fi Al-Jadari wa Al-Hasbah*, which also included information on measles and smallpox.
      <br />
      <br />
      He also emphasized how doctor-patient relationships were important and revived the{" "}
      <Link href="/misc/Hippocratic_Oath" className="text-blue-600 underline">
        Hippocratic Oath
      </Link>
      , as he regarded all patients worthy of attention and entrusted physicians to do no harm. He also placed importance on patient history, using it to amend treatments. He believed in the importance of preventing rather than treating disease, searching for the cause. He knew about the benefits of good hygiene and diet.
      <br />
      <br />
      His philosophy and help in translating older texts left a lasting impact on future medical knowledge in the Islamic world and beyond.
    </>
  ),
  data: {
    age: 60,
    birthday: "c. 865 CE",
    yearRange: {start: 865, end: 925},
    origin: "Mediterranean/Middle East"
  },
  url: "/people/alrazi.png"
},
{
  name: "Imhotep",
  caption: "The Deified Egyptian Architect and Physician",
  desc: (
    <>
      Imhotep was an architect and the leader of the priest physicians in Ancient Egypt. He was active during the 27th century BCE and was the foremost medical figure of the time. He was later deified (c. 525BCE) as he was believed to be the son of the ancient Egyptian goddess of healing, Sekhmet, and was continued to be worshipped even after ancient Egyptian civilization faded, for the ancient Greeks associated him with{" "}
      <Link href="/place/Asclepeions/" className="text-blue-600 underline">
        Asclepios
      </Link>{" "}
      the god of healing.
      <br />
      <br />
      Although historians are uncertain of his actual role; he may have actually dispensed herbs as treatment or was the leader of the physicians and claimed the credit. Some also attribute him credit to authoring the original work of which the Edwin Smith Papyrus from the{" "}
      <Link href="/work/Kahun_Papyrus" className="text-blue-600 underline">
        Kahun Papyrus
      </Link>{" "}
      adapted.
    </>
  ),
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
  desc: (
    <>
      Asclepios is the Greek god of healing and medicine. His symbol is the Rod of Asclepios, which is a staff with a snake coiled around it. Some trace the origins of this symbol and Asclepios himself back to the ancient Egyptian{" "}
      <Link href="/people/Imhotep/info" className="text-blue-600 underline">
        Imhotep
      </Link>
      , who was deified as the Egyptian god of medicine. Temples dedicated to Asclepios are known as{" "}
      <Link href="/place/Asclepeions/" className="text-blue-600 underline">
        Asclepions
      </Link>
      .
      <br />
      <br />
      Asclepios was a part of early Greek medicine, which was highly influenced by ancient Egyptian medicine, with the belief in spirits and the supernatural. Prayers and rituals were offered to Asclepios as gifts to him by the sick in hopes of being cured.
    </>
  ),
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
  desc: (
    <>
      Hippocrates of Kos was a Greek physician is often given the title the Father of Medicine. He took Greek medicine from having a supernatural basis to a scientific basis and caused it to become a respected profession. He insisted on observation and recording case histories, and by doing so, he was able to compare cases and make the first systematic differentiation of disease.
      <br />
      <br />
      Hippocrates initially learned medicine from his father who was also a physician. Hippocrates was also know to have travelled, possibly reaching Libya and Egypt, however much of the details of his life are known. Hippocrates is most often attributed to the{" "}
        Hippocratic Corpus
      , which helps to distinguish Greek Medicine from ancient Egyptian and Mesopotamian medicine; it is uncertain however, how much of the writing came from Hippocrates himself, as his followers likely contributed.
      <br />
      <br />
      One of his greatest contributions is the{" "}
      <Link href="/misc/Hippocratic_Oath" className="text-blue-600 underline">
        Hippocratic Oath
      </Link>
      , which established a professional code of conduct, that even physicians of today must take. The medical school he founded at Cos (400 BCE), brought him fame as he made his incoming students take this oath, in front of peers and elders.
      <br />
      <br />
      During Hippocrates’ time knowledge of anatomy and physiology was limited since the Greeks did not dissect dead bodies, but through careful observation of patients, he was able to determine different illnesses such as tuberculosis and malaria. He made categories of illness from epidemic and endemic, to chronic and acute, which are terms still used in the modern era. He was also a skilled surgeon and studied orthopedics.
      <br />
      <br />
      Hippocrates also established the system of{" "}
      <Link href="/misc/Humourism" className="text-blue-600 underline">
        Humourism
      </Link>
      . He believed that imbalance of the humours caused disease, and was likely the first physician to believe diseases were natural and not by supernatural forces. He believed in diets and exercise to help build up the body’s strength, which would provide a person inherent resistance against disease. He also understood the importance of good hygiene and rest.
    </>
  ),

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
  desc: (
  <>
    Galen was a Roman physician and philosopher who became the foremost medical authority within the Roman Empire. Galen was also a prolific writer, writing over 400 volumes and building upon works from{" "}
    <Link href="/people/Hippocrates_of_Kos/info" className="text-blue-600 underline">
      Hippocrates
    </Link>{" "}
    and other Greek physicians, and his works influenced medical theory and practice until the 17th century CE. Galen embraced Hippocratic ideas like{" "}
    <Link href="/misc/Humourism" className="text-blue-600 underline">
      Humourism
    </Link>
    , and expanded upon it adding other variables like hot-cold and wet-dry.
    <br />
    <br />
    Galen was initially educated on rhetoric and philosophy, destined to become a lawyer or government official, however his hometown Pergamon had an{" "}
    <Link href="/place/Asclepeions/" className="text-blue-600 underline">
      Asclepion
    </Link>
    , which his father helped in renovating, causing him to ask Galen to take up medicine. Galen then studied in Smyrna and Alexandria, learning anatomical science and physiological theory.
    <br />
    <br />
    Upon returning to Pergamon in 157 CE, he took up a position as a physician-surgeon to the gladiators, where he was able to take notes on the different wounds sustained. He was able to help decrease death rates increasing his fame. After Pergamon fell to the Romans, Galen moved to Rome in 162 CE, where he performed public anatomical demonstrations using a variety of animals; the Romans did not dissect at this time. Although he was controversial he was able to treat and impress many influential citizens and became the court physician of multiple emperors including Marcus Aurelius.
    <br />
    <br />
    Galen soon began his prolific career, writing treatises covering topics of anatomy, physiology, pharmacy, and therapeutics. Galen was personally most interested in anatomy, which he believed served as the basis for all medicine; however, laws forbade him from directly opening human bodies. He therefore studied using animal models and was still able to make accurate descriptions of the true identity of  many muscles and tendons, such as showing the kidneys role in urine synthesis. However Galen also made many educated guesses, such as the heart being in the center of the body, which was proven incorrect by{" "}
    <Link href="/people/Ibn_Sina/info" className="text-blue-600 underline">
      Ibn Sina
    </Link>
    . Unfortunately many of his writings were lost to a fire at the Great Temple of Peace in Rome.
    <br />
    <br />
    Galen’s influence persisted through the ages until the 16th century CE when his tenets of medicine began to be dismantled, but his works were still referred to by some physicians in the 19th century.
  </>
),
  data: {
    age: 87,
    birthday: "c. 129 CE",
    yearRange: {start: 129, end: 216},
    origin: "Mediterranean/Middle East"
  },
  url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Claudius_Galenus_%281906%29_-_Veloso_Salgado.png/250px-Claudius_Galenus_%281906%29_-_Veloso_Salgado.png"
},
{
  name: 'Kajiwara Shozen',
  caption: "Buddhist Priest and Clinical Physician",
  desc: (
    <>
      Kajiwara Shozen was a monk-doctor, who studied Buddhist scriptures and mastered medicine under the Tanba and Wake families, who were heads of the medical bureau for generations. One of his greatest contributions was his writing, <i>Tonisho</i>, which was Japan’s first medical encyclopedia.
      <br />
      <br />
      During Shozen’s time religious institutions were not just centers of spiritual life, but also served as hubs of healing. Through working at{" "}
      <Link href="/place/Gokuraku-ji" className="text-blue-600 underline">
        Gokuraku-ji
      </Link>
      , he was able to merge the ethical imperatives of Buddhist teaching with direct clinical care. Shonzen also actively engaged with foreign medical knowledge. He accessed many Chinese texts from the Song dynasty (aided by their printing revolution), learning about a wide arrange of topics from disease, to health regimens to prevent the diseases, and medical ethics. In creating his <i>Tonisho</i>, he did not directly quote Chinese texts as many previous medical books did, but used his own words and kana (one of the writing forms in Japan) and was the first to include anatomical diagrams. During his time, medicine tended to be kept secret and within the family, but Shozen wanted to spread the profession to help save people.
      <br />
      <br />
      Shozen also took a dual approach to medicine. Through his Buddhist origins, he viewed illness as a manifestation of karmic imbalance. He encouraged moral and ritualistic practices to restore both physical health and spiritual integrity of the person; which helped offer a moral framework to understanding disease. Through embracing Song medical knowledge however, he was able to apply structured and textually based prescription methods. His work provided careful formulation and dosages of prescriptions.
      <br />
      <br />
      Through his working during a time of a warrior government he was able to advance the filed of wound medicine and pharmaceutical practice, that was able to carry on to future generations. He was able to demonstrate the importance of cross cultural exchange in furthering medicine. His legacy left a mark on Japanese medical knowledge.
    </>
  ),
  data: {
    age: 72,
    birthday: "1265 CE",
    yearRange: {start: 1265, end: 1337},
    origin: "East Asia"
  },
  url: "/people/kojiwara.jpg"
},
{
  name: 'Sushruta',
  caption: "The \"Renowned\" Indian Surgeon",
  desc: (
    <>
      Sushruta was an Indian surgeon likely active in the 6th century BCE, to which the major{" "}
      <Link href="/misc/Ayurveda" className="text-blue-600 underline">
        Avurvedic
      </Link>{" "}
      work{" "}
      <Link href="/work/Sushruta_Samhita" className="text-blue-600 underline">
        Sushruta Samhita
      </Link>
      . Very little is known about his life and his name is an epithet meaning “renowned.” He is also believed to be a contemporary to{" "}
        Charaka
      or having come slightly after.
      <br />
      <br />
      During Sushruta's time, surgery was being practiced in India, however he greatly advanced surgery. He was specialized in rhinoplasty and developed techniques like using an ant’s head to sew sutures. He also attracted many disciples, who he required six years of study before allowing them to begin training hands on, and had them taking an oath similar to that of the{" "}
      <Link href="/misc/Hippocratic_Oath" className="text-blue-600 underline">
        Hippocratic Oath
      </Link>
      .
      <br />
      <br />
      Sushruta had a holistic view of medicine, emphasizing the entire patient and not just the present symptoms.
      <br />
      <br />
      He has made significant contributions to Ayurvedic medicine but also to modern medical thought.
    </>
  ),
  data: {
    age: 0,
    birthday: "600 BCE",
    yearRange: {start: -600, end: -501},
    origin: "South Asia"
  },
  url: "/people/sushruta.jpg"
},
{
  name: 'Manase Dosan',
  caption: "Influential Japanese Physician",
  desc: (
    <>
      Manase Dosan, real name Shosei, was one of Japan’s most influential physicians, initiating the revival of Japanese medicine. His most significant work was{" "}
        Keitekishu
      (Collected Teachings), which was a 15-volume medical work, which classified diseases (and symptoms) into 51 groups. He also wrote a few other works.
      <br />
      <br />
      As a child, Dosan joined Shokoku-ji in Kyoto, where he became a postulant and learned poetry and calligraphy. He later went to Ashikaga-Gakko to study and became interested in medicine there. It was here that he learned about the Li-Zhu (cutting edge) medicine that had been imported from China. Upon returning to Kyoto he dedicated his time to medicine and began to gain fame by examining influential military commanders. He also established Keiteki-in Medical Center in Kyoto. He taught medicine to hundreds of disciples, reviving medicine in Japan.
    </>
  ),
  data: {
    age: 86,
    birthday: "1507 CE",
    yearRange: {start: 1507, end: 1594},
    origin: "East Asia"
  },
  url: "/people/menase.png"
},

]