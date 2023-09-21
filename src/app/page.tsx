// Outlet
import BaseOutlet from "@/outlets/BaseOutlet";
import Sections from "@/outlets/Sections";

// Composities
import Hero from "@/composities/Hero"
import Product from "@/composities/Product";
import Pricing from "@/composities/Pricing";
import Questions from "@/composities/Questions";
import Companies from "@/composities/Companies";
import Testimonials from "@/composities/Testimonials";

// Constants
import { faq, spacingStyle, backgroundColor } from "@/config";
import CallToAction from "@/composities/CallToAction";

const sections = [
  <Hero key={0} />,
  <Companies key={1} />,
  // <Product key={2} />,
  <Pricing key={3} />, 
  <Testimonials key={4} />, 
  <CallToAction key={5} />, 
  <Questions key={6} questions={faq} />
]

export default function Home() {
  return (
    <BaseOutlet>
      <Sections sections={sections} backgroundColor={backgroundColor} spacingStyle={spacingStyle} />
    </BaseOutlet>
  )
}