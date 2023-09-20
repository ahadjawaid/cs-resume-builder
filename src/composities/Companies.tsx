import Image from "next/image";
import { companies, sizeStyle } from "@/config";


export default function Companies() {
    return (
        <div className={`flex flex-col max-w-3xl items-center gap-y-10 ${sizeStyle}`}>
            <h2 className="text-center text-slate-600 text-lg sm:text-xl">
                Our clients got interviews at these companies
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
                {
                    companies.map(({ name, path }, index) => (
                        <img className="h-6 sm:h-8 md:h-10" key={index} src={path} alt={name} />
                    ))
                }
            </div>
        </div>
    );
}