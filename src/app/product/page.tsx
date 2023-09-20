import BaseOutlet from "@/outlets/BaseOutlet"
import Product from "@/composities/Product"
import { spacingStyle } from "@/config"

export default function Page() {
    return (
      <BaseOutlet>
        <section className={spacingStyle}>
          <Product />
        </section>
      </BaseOutlet>
    )
  }