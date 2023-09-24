import PricingCard from "./PricingCard";
import { pricing, sizeStyle } from "../config";

export default function Pricing() {
    return (
        <div id="pricing" className={`flex flex-col gap-y-10 ${sizeStyle}`}>
            <div className="flex flex-col">
                <h1 className="text-blue-600 font-bold tracking-tight uppercase text-md sm:text-lg">
                    Pricing
                </h1>
                <h2 className="text-slate-800 text-4xl sm:text-5xl font-bold tracking-tight mt-1">
                    Get your dream tech job.
                </h2>
                <p className="text-slate-500 text-md sm:text-lg mt-4">
                    Perfect your CS resume with a small fraction of your potential hourly salary.
                </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
                {
                    pricing.map((pricing, index) => (
                        <PricingCard key={index} {...pricing} />
                    ))
                }
            </div>
        </div>
    );
}