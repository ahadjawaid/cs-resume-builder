import Image from "next/image";

export default function Logo() {
    return (
        <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="CS Resume Builder" width={30} height={30} />

            <p className="hidden sm:inline tracking-tight  sm:text-lg font-bold text-blue-600">
                CS Resume Builder
            </p>
        </div>
    );
};