// Outlet
import BaseOutlet from "@/outlets/BaseOutlet";

// Composities
import Hero from "@/composities/Hero"
import Product from "@/composities/Product";
import Pricing from "@/composities/Pricing";
import Questions from "@/composities/Questions";
import Companies from "@/composities/Companies";
import Testimonials from "@/composities/Testimonials";

// Constants
import { faq, spacingStyle } from "@/config";
import CallToAction from "@/composities/CallToAction";

const backgroundColor = "bg-slate-100 py-12";

const sections = [
  <Companies />,
  // <Product />,
  // <Pricing />, 
  <Testimonials />, 
  <CallToAction />, 
  <Questions questions={faq} />
]

export default function Home() {
  return (
    <BaseOutlet>
      <main className={`${spacingStyle}`}>
        <Hero />
      </main>
      {
        sections.map((section, index) => (
          <section key={index} className={`${index % 2 == 0 && backgroundColor} ${spacingStyle}`}>
            {section}
          </section>
        ))
      }
    </BaseOutlet>
  )
}