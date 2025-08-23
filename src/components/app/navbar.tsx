import Link from "next/link"
import Image from "next/image"

import { ThemeSwitcher } from "@/components/app/theme-switcher"

async function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-20 mx-auto flex h-[70px] w-full items-center border-b-4 border-border bg-secondary-background px-5">
      <div className="mx-auto flex w-[1300px] text-foreground max-w-full items-center justify-between">
        <div className="flex items-center xl:gap-10 gap-10">
          <Link
            className="size-8 rounded-base flex items-center justify-center overflow-hidden"
            href={"/"}
          >
            <Image
              src="/logo.png"
              alt="BlueBuild Digital"
              width={28}
              height={28}
              priority
            />
          </Link>

          <div className="items-center text-base font-base xl:gap-10 lg:flex gap-10 hidden">
            <Link href="#why-choose-us">Why Choose Us</Link>
            <Link href="#about-us">About Us</Link>
            <Link href="#global-coverage">Global Coverage</Link>
            <Link href="#testimonials">Testimonials</Link>
            <Link href="/careers">Careers</Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center justify-end gap-4">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
