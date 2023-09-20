import BaseOutlet from "@/outlets/BaseOutlet"
import Pricing from "@/composities/Pricing"
import { spacingStyle } from "@/config"

export default function Page() {
    return (
      <BaseOutlet>
        <section className={spacingStyle}>
          <Pricing />
        </section>
      </BaseOutlet>
    )
  }