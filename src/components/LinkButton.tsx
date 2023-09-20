import Link from "next/link";

type LinkButtonProps = {
    children: React.ReactNode;
    href: string;
    filled?: boolean;
    className?: string;
    target?: string;
}

const filledStyle = "bg-blue-600 hover:bg-blue-700 text-white";
const outlineStyle = "bg-white border-2 border-blue-500 hover:border-blue-600 text-blue-600 hover:text-blue-700";

export default function LinkButton({ children, href, filled=true, className="", target="" }: LinkButtonProps) {
    return(
        <Link href={href} target={target} className={`block px-3 py-1.5 ${filled ? filledStyle : outlineStyle} rounded-md font-semibold tracking-tight shadow text-center ${className}`}>
            {children}
        </Link>
    );
};