import Link from "next/link"

interface TextLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

function TextLink({ href, children, className = "" }: TextLinkProps) {
    return (
        <>
            <Link href={href} className={`text-slate-500 hover:bg-slate-100 rounded-md px-2 py-1 ${className}`}>
                {children}
            </Link>
        </>
    )
}

export default TextLink;