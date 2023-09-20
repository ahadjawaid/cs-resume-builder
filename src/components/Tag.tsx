interface TagProps {
    children: React.ReactNode;
    className?: string;
}

export default function Tag({ children, className="" }: TagProps) {
    return (
        <span className={`px-3 py-1.5 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full ${className}`}>
            {children}
        </span>
    );
}