import LinkButton from "@/components/LinkButton";
import { sizeStyle, navigation } from "@/config";

export default function CallToAction() {
    return (
        <div className={`${sizeStyle}`}>
            <div className="flex flex-col items-center">
                <h2 className="text-slate-800 text-4xl sm:text-5xl font-bold tracking-tight mt-1">
                    Get started today
                </h2>
                <p className="text-slate-500 text-md sm:text-lg mt-4">
                    It’s time to take control of your career. Fix your resume so you can get the job you want!
                </p>
            </div>
            <LinkButton href={navigation.getStarted} target="_blank" className="mt-8 max-w-xs mx-auto">
                Get Started
            </LinkButton>
        </div>
    );
}