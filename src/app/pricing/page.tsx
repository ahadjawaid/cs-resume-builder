import BaseOutlet from "@/outlets/BaseOutlet"
import Pricing from "@/composities/Pricing"
import { spacingStyle, backgroundColor, faq } from "@/config"
import Sections from "@/outlets/Sections"
import Questions from "@/composities/Questions"

const sections = [
  <Pricing key={0} />,
  <Questions key={1} questions={faq} />
]

export default function Page() {
    return (
      <BaseOutlet>
        <Sections sections={sections} spacingStyle={spacingStyle} backgroundColor={backgroundColor} />
      </BaseOutlet>
    )
  }