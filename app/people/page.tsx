import PersonCard from "../components/PersonCard";

interface Person {
  name: string,
  desc: string,
  url: string,
}

let people: Person[] = [
  {
    name: "Julius Caesar",
    desc: "A mildly important historical figure...",
    url: "https://media.istockphoto.com/id/539115110/photo/colosseum-in-rome-and-morning-sun-italy.jpg?s=612x612&w=0&k=20&c=9NtFxHI3P2IBWRY9t0NrfPZPR4iusHmVLbXg2Cjv9Fs="
  },
  {
    name: "Adku Atwan",
    desc: "Sensei :teacher-emoji:",
    url: "https://media.istockphoto.com/id/539115110/photo/colosseum-in-rome-and-morning-sun-italy.jpg?s=612x612&w=0&k=20&c=9NtFxHI3P2IBWRY9t0NrfPZPR4iusHmVLbXg2Cjv9Fs="
  },
  {
    name: 'Bashar "Wise Dodge" Rasras',
    desc: "mid asf",
    url: "https://media.istockphoto.com/id/539115110/photo/colosseum-in-rome-and-morning-sun-italy.jpg?s=612x612&w=0&k=20&c=9NtFxHI3P2IBWRY9t0NrfPZPR4iusHmVLbXg2Cjv9Fs="
  },
]

export default function People() {
  function makePeopleCards()  {
      return people.map((p, idx)=> <PersonCard key={idx} name={p.name} desc={p.desc} imgURL={p.url}  />)
  }

  return (
    <div className="flex flex-col w-full justify-center items-center p-8 ">
      <div className="flex w-full justify-evenly flex-wrap">
          {makePeopleCards()}
      </div>
    </div>
  );
}
