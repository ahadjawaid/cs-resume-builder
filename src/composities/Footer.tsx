import Link from "next/link";
import { socials, owner, navigationLinks } from "@/config";
import TextLink from "@/components/TextLink";
import Logo from "@/components/Logo";

function Footer() {
    return (
        <div className="flex flex-col gap-y-4 mt-4 sm:gap-y-8">
            <div className="mx-auto">
                <Logo />
            </div>
            <div className="flex justify-center gap-x-4">
                {
                    navigationLinks.map(({ name, href }, index) => (
                        <TextLink key={index} href={href}>
                            {name}
                        </TextLink>
                    ))
                }
            </div>

            <div className="h-[1px] bg-slate-200 rounded-full my-4" />

            <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-y-5">
                <div className="text-sm text-slate-400">
                    © 2023 {owner}. All rights reserved.
                </div>
                <div className="flex gap-x-2">
                    {socials.map(({ name, url, icon }, index) => (
                        <Link key={index} href={url} className="group" target="_blank">
                            {icon}
                            <span className="sr-only">{name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Footer;