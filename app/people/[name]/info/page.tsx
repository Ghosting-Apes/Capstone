"use client";
import { useParams } from "next/navigation"
import Image from "next/image";
import { people } from "@/app/data/mock";

export default function InfoPage() {
    const params = useParams();
    const { name } = params;



    const formattedName = typeof name === "string" ? name!.split('-').join(' ') : name;

    const person = people.filter(p => p.name === formattedName)[0]

    console.log(person, name)

    return (
        <div className="flex flex-col w-full h-1/2 items-center p-8 ">
            <div className="flex w-full">
                <div className="flex h-full">
                    <Image 
                    src={person.url || ""} 
                    alt="hello" 
                    width={400}
                    height={200}
                    />
                </div>
                <div className="ml-10 p-10 w-full border-amber-400">
                    <h1 className="font-bold text-2xl mb-8">{formattedName}</h1>
                    <p><span className="font-semibold">Full Name:</span> {formattedName}</p>
                    <p><span className="font-semibold">Age:</span> {person?.data?.age}</p>
                    <p><span className="font-semibold">Birthday:</span> {person?.data?.birthday}</p>
                    <p><span className="font-semibold">Region:</span> {person?.data?.origin}</p>
                </div>
            </div>
            <div className="flex p-2 m-2 w-full">
                {person?.desc}
            </div>
        </div>
    )
}