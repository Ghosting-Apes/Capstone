"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { places } from "@/app/data/mock";

export default function PlacePage() {
    const params = useParams();
    const slug = decodeURIComponent(params.name as string);
    const placeName = slug.split("_").join(" ");
    
    const place = places.filter(p => p.name === placeName)[0];


    return (
        <div>
            <div className="flex flex-col w-full h-1/2 items-center p-8 ">
                <div className="flex w-full">
                    <div className="flex h-full">
                        <Image 
                        src={place?.url || "/places/stock-img.jpg"} 
                        alt="hello" 
                        width={400}
                        height={200} />
                    </div>
                    <div className="ml-10 p-10 w-full">
                        <h1 className="font-bold text-2xl mb-8">{placeName}</h1>
                        <p><span className="font-semibold">Region:</span> {place?.origin}</p>
                    </div>
                </div>
                <div className="flex p-2 m-2 w-5/8">
                <pre style={{ fontFamily: 'inherit', whiteSpace: 'pre-wrap' }}>
                    {place?.desc}
                </pre>
            </div>
            </div>
        </div>
    )
}