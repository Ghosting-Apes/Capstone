interface Metadata {
    age: number,
    birthday: string,
    origin: string,
    yearRange: TimePeriod
}
  
export interface Person {
  name: string,
  data: Metadata,
  desc: string,
  url: string,
}

export interface TimePeriod {
  start: number,
  end: number
}
  
export const people: Person[] = [
  {
    name: "Ibn Sina",
    desc: `The Father of Modern Medicine 
    \n Ibn Sina is one of the most influential doctors from the 11th century.`,
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