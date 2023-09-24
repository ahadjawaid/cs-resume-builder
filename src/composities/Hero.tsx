import LinkButton from "@/components/LinkButton";
import Image from "next/image";
import { navigation, sizeStyle } from "@/config";


export default function Hero() {
    return (
        <div id="hero" className={`flex flex-col md:flex-row items-center gap-10 ${sizeStyle}`}>
            <div className="max-w-2xl flex flex-col">
                <h1 className="text-blue-600 font-bold tracking-tight uppercase text-md sm:text-lg">
                    Optimize your resume
                </h1>
                <h2 className="text-slate-800 text-4xl sm:text-5xl font-bold tracking-tight mt-1">
                    Pass the resume screening!
                </h2>
                <p className="text-slate-500 text-md sm:text-lg mt-4">
                    We help you build a resume that will get you noticed by recruiters and hiring managers.
                </p>
                    <LinkButton href={navigation.getStarted} className="mt-6 max-w-xs">
                        Get Started
                    </LinkButton>
            </div>
            <div className="hidden md:flex">
                <Image
                    src="/hero.jpg"
                    alt="Hero Image"
                    width={500}
                    height={500}
                />
            </div>
        </div>
    );
}