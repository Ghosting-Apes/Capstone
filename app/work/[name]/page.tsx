"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { works } from "@/app/data/mock";

export default function WorkPage() {
    const params = useParams();
    const slug = decodeURIComponent(params.name as string);;
    const workName = slug.split("-").join(" ");

    const work = works.filter(w => w.title === workName)[0];

    return (
        <div>
            <div className="flex flex-col w-full h-1/2 items-center p-8 ">
                <div className="flex w-full">
                    <div className="flex h-full">
                        <Image 
                        src={work.url || "/works/stock-img.jpg"} 
                        alt="hello" 
                        width={400}
                        height={200} />
                    </div>
                    <div className="ml-10 p-10 w-full">
                        <h1 className="font-bold text-2xl mb-8">{workName}</h1>
                        <p><span className="font-semibold">Author:</span> {"no-author"}</p>
                        <p><span className="font-semibold">Region:</span> {work?.origin}</p>
                    </div>
                </div>
                <div className="flex p-2 m-2 w-5/8">
                <pre style={{ fontFamily: 'inherit', whiteSpace: 'pre-wrap' }}>
                    {work?.desc}
                </pre>
            </div>
            </div>
        </div>
    )
}