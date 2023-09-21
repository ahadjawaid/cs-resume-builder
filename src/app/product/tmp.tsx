import BaseOutlet from "@/outlets/BaseOutlet"
import Product from "@/composities/Product"
import { spacingStyle, backgroundColor } from "@/config"
import CallToAction from "@/composities/CallToAction"
import Sections from "@/outlets/Sections"

const sections = [
  <Product key={0} />,
  <CallToAction key={1} />
]

export default function Page() {
    return (
      <BaseOutlet>
        <Sections sections={sections} spacingStyle={spacingStyle} backgroundColor={backgroundColor} />
      </BaseOutlet>
    )
  }