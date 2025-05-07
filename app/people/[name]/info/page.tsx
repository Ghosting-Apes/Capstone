"use client";
import { useParams } from "next/navigation"
import Image from "next/image";
import { people } from "@/app/data/mock";

export default function InfoPage() {
    const params = useParams();
    const slug = decodeURIComponent(params.name as string);
    const formattedName = slug.split('_').join(' ');

    const person = people.filter(p => p.name === formattedName)[0];

    return (
        <div className="flex flex-col w-full h-1/2 items-center p-8 ">
            <div className="flex w-full h-3/4">
                <div className="flex h-full">
                    <Image 
                    src={person?.url ?? "/people/stock-img.jpg"} 
                    alt="hello" 
                    width={400}
                    height={200}
                    />
                </div>
                <div className="ml-10 p-10 w-full">
                    <h1 className="font-bold text-2xl mb-8">{formattedName}</h1>
                    {person?.data?.age !== 0 && <p className="text-lg "><span className="font-semibold">Age:</span> {person?.data?.age}</p>}
                    {person?.data?.birthday !== "N/A" && <p className="text-lg "><span className="font-semibold">Birthday:</span> {person?.data?.birthday}</p>}
                    <p className="text-lg"><span className="font-semibold">Region:</span> {person?.data?.origin}</p>
                </div>
            </div>
            <div className="flex flex-col p-2 m-2 w-5/8">
                <div className="whitespace-pre-wrap font-inherit mb-5 text-xl ">
                    {person?.desc}
                </div>
                <div>
                    <h1 className="font-bold">References: {person?.references?.map(r => `${r}`).join(',')}</h1>
                </div>
            </div>
        </div>
    )
}