import LinkButton from "@/components/LinkButton";
import Tag from "@/components/Tag";
import { CheckIcon } from "@heroicons/react/20/solid";
import { navigation } from "@/config";

interface PricingCardProps {
    title: string;
    price: number;
    percentageOff: number;
    features: string[];
    highlight?: boolean;
    monthly?: boolean;
}

function calculateBeforePrice(percentageOff: number, price: number) {
    return Math.round(price * (100 / (100 - percentageOff)));
}
export default function PricingCard({
    title,
    price,
    percentageOff,
    features,
    highlight = false,
    monthly = false
}: PricingCardProps) {
    return (
        <div className="flex flex-col sm:max-w-sm justify-between px-10 sm:px-14 py-10 rounded-md outline outline-1 outline-slate-200 shadow-lg w-full sm:w-auto bg-white">
            <div className="flex flex-col gap-y-5">
                <div className="flex items-center justify-between">
                    <h2 className={`${highlight ? "text-blue-600 text-xl" : "text-slate-800 text-xl"} font-medium`}>
                        {title}&nbsp;&nbsp;
                    </h2>
                    {
                        highlight && (
                            <Tag className="">
                                Most Popular
                            </Tag>
                        )
                    }
                </div>

                <div className="flex flex-col gap-y-2">
                    <div className="flex items-center gap-x-3">
                        <h3 className="text-slate-800 text-4xl font-bold">
                            ${price}
                            {
                                monthly && (
                                    <span className="text-slate-700 text-base">
                                        &nbsp;/month
                                    </span>
                                )
                            }
                        </h3>
                        <h4 className="text-slate-400 text-xl font-semibold line-through">
                            ${calculateBeforePrice(percentageOff, price)}
                            {
                                monthly && (
                                    <span className="text-xs">
                                        &nbsp;/month
                                    </span>
                                )
                            }
                        </h4>
                    </div>
                    <p className="text-blue-500 text-sm font-medium">
                        {percentageOff}% off - Limited time offer!
                    </p>
                </div>

                <div className="flex flex-col gap-y-3">
                    {
                        features.map((feature, index) => (
                            <div key={index} className="flex gap-x-3 text-slate-700 text-md font-light">
                                <span>
                                    <CheckIcon className="h-5 w-5 text-green-600" />
                                </span>
                                {feature}
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="mt-12">
                <LinkButton href={navigation.purchaseLink} filled={highlight}>
                    Purchase
                </LinkButton>
            </div>
        </div>
    );
}