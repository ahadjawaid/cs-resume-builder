import Image from "next/image";
import { sizeStyle, testimonials } from "@/config";

export default function Testimonials() {
    return (
        <div className={`flex flex-col gap-y-8 ${sizeStyle}`}>
            <div>
                <h2 className="text-blue-600 font-bold tracking-tight uppercase text-md sm:text-lg">
                    Testimonials
                </h2>
                <h3 className="text-slate-800 text-4xl sm:text-5xl font-bold tracking-tight mt-1">
                    See what our customers are saying about us.
                </h3>
                <p className="text-slate-500 text-md sm:text-lg mt-4">
                    Our software is so simple that people can’t help but fall in love with it. Simplicity is easy when you just skip tons of mission-critical features.
                </p>
            </div>
            <div className="flex flex-wrap items-center justify-around gap-8">
                {
                    testimonials.map(({ name, title, text, path }, index) => (
                        <figure key={index} className="relative flex flex-col max-w-md rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10 outline outline-1 outline-slate-200">
                            <svg aria-hidden="true" width="105" height="78" className="absolute left-6 top-6 fill-slate-100"><path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" /></svg>
                            <blockquote className="relative">
                                <p className="text-lg tracking-tight text-slate-900">
                                    {text}
                                </p>
                            </blockquote>

                            <div className="relative h-[1px] bg-slate-300 my-4 rounded-full" />

                            <figcaption className="relative flex items-center justify-between ">
                                <div>
                                    <h4 className="font-display text-base text-slate-900">
                                        {name}
                                    </h4>
                                    <p className="mtext-sm text-slate-500">
                                        {title}
                                    </p>
                                </div>
                                <div className="overflow-hidden rounded-full bg-slate-50 outline outline-1 outline-slate-200">
                                    {path && <Image src={path} alt="Ahadj" height={56} width={56} className="h-14 w-14 object-cover" />}
                                </div>
                            </figcaption>
                        </figure>
                    ))
                }
            </div>
        </div>
    );
}