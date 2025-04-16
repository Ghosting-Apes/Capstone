import NavBar from "../components/NavBar";
import PeopleCard from "../components/PeopleCard";

export default function People() {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center p-8">
      <div className="flex w-full justify-evenly">
        <PeopleCard name="Julius Caesar" desc="A mildly important historical figure..." imgURL="https://media.istockphoto.com/id/539115110/photo/colosseum-in-rome-and-morning-sun-italy.jpg?s=612x612&w=0&k=20&c=9NtFxHI3P2IBWRY9t0NrfPZPR4iusHmVLbXg2Cjv9Fs=" />
        <PeopleCard name="Adku Atwan" desc="Sensei :teacher-emoji:" imgURL="https://media.istockphoto.com/id/539115110/photo/colosseum-in-rome-and-morning-sun-italy.jpg?s=612x612&w=0&k=20&c=9NtFxHI3P2IBWRY9t0NrfPZPR4iusHmVLbXg2Cjv9Fs=" />
        <PeopleCard name='Bashar "Wise Dodge" Rasras' desc="mid asf" imgURL="https://media.istockphoto.com/id/539115110/photo/colosseum-in-rome-and-morning-sun-italy.jpg?s=612x612&w=0&k=20&c=9NtFxHI3P2IBWRY9t0NrfPZPR4iusHmVLbXg2Cjv9Fs=" />
      </div>
    </div>
  );
}
