interface SectionsProps {
    sections: JSX.Element[];
    backgroundColor?: string;
    spacingStyle?: string;
}

export default function Sections({ sections, backgroundColor, spacingStyle }: SectionsProps) {
    return (
        sections.map((section, index) => (
            <section key={index} className={`${index % 2 == 1 && backgroundColor} ${spacingStyle}`}>
                {section}
            </section>
        ))
    );
}