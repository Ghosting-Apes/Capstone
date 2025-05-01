"use client";
import { useState } from "react";
import PersonCard from "../components/PersonCard";
import { people } from "../data/mock";

export default function People() {
  const [search, setSearch] = useState("");

  function makePeopleCards()  {
      return people.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
      .map((p, idx)=> <PersonCard key={idx} name={p.name} desc={p.desc} imgURL={p.url}  />)
  }

  return (
    <div className="flex flex-col w-full justify-center items-center p-8 ">
      <div className="p-2">
        <input type="text" onChange={(e) => setSearch(e.target.value)} className="p-1 border-1 focus:outline-none focus:ring-0" />
        <button className="bg-gray-300 p-1 m-2">Sort by</button>
      </div>
      <div className="flex w-full justify-evenly flex-wrap">
          {makePeopleCards()}
      </div>
    </div>
  );
}
