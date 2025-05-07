"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { miscellaneous } from "@/app/data/mock";


export default function MiscPage() {
    const params = useParams();
    const slug = decodeURIComponent(params.name as string);
    const miscTitle = slug.split("_").join(" ");
    
    const misc = miscellaneous.filter(m => m.title === miscTitle)[0];

    return (
        <div>
            <div className="flex flex-col w-full h-1/2 items-center p-8 ">
                <div className="flex w-full">
                    <div className="flex h-full">
                        <Image 
                        src={misc?.url || "/misc/stock-img.jpg"} 
                        alt="hello" 
                        width={400}
                        height={200} />
                    </div>
                    <div className="ml-10 p-10 w-full text-lg ">
                        <h1 className="font-bold text-2xl mb-8">{miscTitle}</h1>
                        <p><span className="font-semibold">Region:</span> {misc?.origin}</p>
                    </div>
                </div>
                <div className="flex flex-col p-2 m-2 w-5/8">
                <pre className="mb-5 text-xl" style={{ fontFamily: 'inherit', whiteSpace: 'pre-wrap' }}>
                    {misc?.desc}
                </pre>
                <div>
                    <h1 className="font-bold">References: {misc?.references?.map(r => `${r}`).join(',')}</h1>
                </div>
            </div>
            </div>
        </div>
    )
}