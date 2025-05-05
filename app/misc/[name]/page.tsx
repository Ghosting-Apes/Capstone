"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { miscellaneous } from "@/app/data/mock";


export default function MiscPage() {
    const params = useParams();
    const slug = decodeURIComponent(params.name as string);
    const miscTitle = slug.split("-").join(" ");
    
    const misc = miscellaneous.filter(m => m.title === miscTitle)[0];

    return (
        <div>
            <div className="flex flex-col w-full h-1/2 items-center p-8 ">
                <div className="flex w-full">
                    <div className="flex h-full">
                        <Image 
                        src={"https://media.istockphoto.com/id/539115110/photo/colosseum-in-rome-and-morning-sun-italy.jpg?s=612x612&w=0&k=20&c=9NtFxHI3P2IBWRY9t0NrfPZPR4iusHmVLbXg2Cjv9Fs="} 
                        alt="hello" 
                        width={400}
                        height={200} />
                    </div>
                    <div className="ml-10 p-10 w-full">
                        <h1 className="font-bold text-2xl mb-8">{miscTitle}</h1>
                        <p><span className="font-semibold">Region:</span> {misc?.origin}</p>
                    </div>
                </div>
                <div className="flex p-2 m-2 w-full">
                    {misc?.desc}
                </div>
            </div>
        </div>
    )
}