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
    name: "Julius Caesar",
    desc: "A mildly important historical figure...",
    data: {
      age: 100,
      birthday: "November 4th, 2002",
      yearRange: {start: 100, end: 2025},
      origin: "Rome, Italy"
    },
    url: "https://media.istockphoto.com/id/539115110/photo/colosseum-in-rome-and-morning-sun-italy.jpg?s=612x612&w=0&k=20&c=9NtFxHI3P2IBWRY9t0NrfPZPR4iusHmVLbXg2Cjv9Fs="
  },
  {
    name: "Adku Atwan",
    desc: "Sensei :teacher-emoji:",
    data: {
      age: 0,
      birthday: "",
      yearRange: {start: 2003, end: 2025},
      origin: ""
    },
    url: "https://media.istockphoto.com/id/539115110/photo/colosseum-in-rome-and-morning-sun-italy.jpg?s=612x612&w=0&k=20&c=9NtFxHI3P2IBWRY9t0NrfPZPR4iusHmVLbXg2Cjv9Fs="
  },
  {
    name: 'Bashar "Wise Dodge" Rasras',
    desc: "mid asf",
    data: {
      age: 0,
      birthday: "",
      yearRange: {start: 2006, end: 2025},
      origin: ""
    },
    url: "https://media.istockphoto.com/id/539115110/photo/colosseum-in-rome-and-morning-sun-italy.jpg?s=612x612&w=0&k=20&c=9NtFxHI3P2IBWRY9t0NrfPZPR4iusHmVLbXg2Cjv9Fs="
  },
]