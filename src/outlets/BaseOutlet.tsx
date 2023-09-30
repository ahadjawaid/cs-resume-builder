import Navbar from "@/composities/Navbar";
import Footer from "@/composities/Footer";
import { spacingStyle, sizeStyle } from "@/config";

interface BaseOutletProps {
    children: React.ReactNode;
}

export default function BaseOutlet({ children }: BaseOutletProps) {
    return (
        <div>
            <nav className={`py-6 sm:py-8 md:py-10`}>
                <Navbar />
            </nav>
            {children}
            <footer className={`px-6 py-10 ${spacingStyle} ${sizeStyle}`}>
                <Footer />
            </footer>
        </div>
    );
}