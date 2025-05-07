"use client";
import { useParams } from "next/navigation"
import { people, works, miscellaneous, places } from "@/app/data/mock";
import DataCard, { CardType } from "@/app/components/DataCard";


export default function RegionPage() {
    const params = useParams();
    const slug = decodeURIComponent(params.name as string);

    let regionName = slug.split("-").map(n => n.charAt(0).toUpperCase() + n.slice(1)).join(" ");
    if (regionName === "Middle East") {
        regionName = "Mediterranean/Middle East";
    }

    const getPeople = () => {
        return people.filter(p => p.data.origin === regionName || p.data.origin.includes(regionName))
        .map((p, idx) => <DataCard key={idx} name={p.name} caption={p.caption} imgURL={p.url || "/places/stock-img.jpg"} cardType={CardType.Person} />)
    }

    const getWorks = () => {
        return works.filter(w => w.origin === regionName || w.origin.includes(regionName))
        .map((w, idx) => <DataCard key={idx} name={w.title} caption={w.caption} imgURL={w.url || "/works/stock-img.jpg"} cardType={CardType.Work} />)
    }

    const getPlaces = () => {
        return places.filter(p => p.origin === regionName || p.origin.includes(regionName))
        .map((p, idx) => <DataCard key={idx} name={p.name} caption={p.caption} imgURL={p.url || "/places/stock-img.jpg"} cardType={CardType.Place} />)
    }


    const getMisc = () => {
        return miscellaneous.filter(m => m.origin === regionName || m.origin.includes(regionName))
        .map((m, idx) => <DataCard key={idx} name={m.title} caption={m.caption} imgURL={m.url || "/misc/stock-img.jpg"} cardType={CardType.Miscellaneous} />)
    }

    return (
        <div className="m-5 flex flex-col">
            <div className="items-center text-center">
                <h1 className="text-4xl p-2 font-bold">{regionName || "unknown-region"}</h1>
            </div>
            <h1 className="text-3xl p-2 font-semibold border-b-2">People</h1>
            <div className="flex justify-around p-2 " >
                {getPeople()}
            </div>
            
            <h1 className="text-3xl p-2 font-semibold border-b-2">Works</h1>
            <div className="flex justify-around p-2">
                {getWorks()}
            </div>
            <h1 className="text-3xl p-2 font-semibold border-b-2">Places</h1>
            <div className="flex justify-around p-2">
                {getPlaces()}
            </div>
            <h1 className="text-3xl p-2 font-semibold border-b-2">Miscellaneous</h1>
            <div className="flex justify-around p-2">
                {getMisc()}
            </div>
        </div>
    )
}