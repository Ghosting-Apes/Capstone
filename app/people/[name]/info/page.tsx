"use client";
import { useParams } from "next/navigation"

export default function InfoPage() {
    const params = useParams();
    const { name } = params;

    return (
    <div className="flex justify-center">
        MORE INFO ON {typeof name === "string" ? name!.split('-').join(' ') : name}
    </div>)
}