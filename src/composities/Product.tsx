import { sizeStyle } from "@/config";

export default function Product() {
    return (
        <div className={`${sizeStyle}`}>
            <div className="flex flex-col">
                <h1 className="text-blue-600 font-bold tracking-tight uppercase text-md sm:text-lg">
                    Product
                </h1>
                <h2 className="text-slate-800 text-4xl sm:text-5xl font-bold tracking-tight mt-1">
                    Build your tech resume with us
                </h2>
                <p className="text-slate-500 text-md sm:text-lg mt-4">
                    Simply tell use about your experiences and will write your resume bullet points for you.
                </p>
            </div>
            <div>
                
            </div>
        </div>
    );
}