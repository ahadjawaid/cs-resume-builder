import Logo from "@/components/Logo";
import LinkButton from "@/components/LinkButton";
import TextLink from "@/components/TextLink";
import { navigationLinks, navigation, sizeStyle } from "@/config";
import HamburgerMenu from "@/components/HambugarMenu";

function Navbar() {
    return (
        <div className={`${sizeStyle}`}>
            <div className="flex items-center justify-between items-center">
                <Logo />
                <div className="hidden md:flex gap-x-6">
                    {
                        navigationLinks.map(({ href, name }, index) => (
                            <TextLink key={index} href={href}>
                                {name}
                            </TextLink>
                        ))
                    }
                </div>
                <div className="flex items-center gap-x-4">
                    <div className="hidden sm:flex">
                        <LinkButton href={navigation.getStarted}>
                            Get started
                        </LinkButton>
                    </div>
                    <div className="md:hidden">
                        <HamburgerMenu />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;