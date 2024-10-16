/**
 * v0 by Vercel.
 * @see https://v0.dev/t/CowzfwdSDEY
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Navbar() {
  return (
    <header className="bg-black ">
      <div className="navbar__inner flex items-center justify-between px-4 py-2 ">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Image
            src={"/images/logos/logo-sm-white.svg"}
            className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] xl:w-[100px] xl:h-[100px]"
            width={100}
            height={100}
          />
        </Link>
        <div className="hidden md:flex items-center  gap-12 text-white">
          <Link
            href="/about"
            className="text-4xl xl:text-3xl font-medium   underline-offset-4"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-4xl xl:text-3xl font-medium   underline-offset-4"
            prefetch={false}
          >
            Services
          </Link>
          <Link
            href="/trucks"
            className="text-4xl xl:text-3xl font-medium   underline-offset-4"
            prefetch={false}
          >
            Truck types
          </Link>
          <Link
            href="/how-to-start"
            className="text-4xl xl:text-3xl font-medium  underline-offset-4"
            prefetch={false}
          >
            How to start
          </Link>
          <Link
            href="/shippers"
            className="text-4xl xl:text-3xl font-medium  underline-offset-4"
            prefetch={false}
          >
            Shippers
          </Link>
          <Link
            href="/faq"
            className="text-4xl xl:text-3xl font-medium   underline-offset-4"
            prefetch={false}
          >
            FAQ
          </Link>
          <Link
            href="/contact-us"
            className="text-4xl xl:text-3xl font-medium   underline-offset-4"
            prefetch={false}
          >
            Contact us
          </Link>
        </div>
        <div className="hidden md:block">
          <Link
            className="nav-link px-[3.2rem] py-[2rem] lg:px-[4.4rem]  lg:py-[1.8rem] btn-danger navbar__btn rounded-lg text-3xl"
            href="tel:3024259299"
          >
            {" "}
            (302) 425 92 99
          </Link>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="transparent" className="md:hidden">
              <svg width="50" height="50" viewBox="0 0 100 100">
                <path
                  class="menu-toggle__line menu-toggle__line--line1"
                  d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                ></path>
                <path
                  class="menu-toggle__line menu-toggle__line--line2"
                  d="M 20,50 H 80"
                ></path>
                <path
                  class="menu-toggle__line menu-toggle__line--line3"
                  d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                ></path>
              </svg>
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Image
              src={"/images/logos/logo-lg-black.svg"}
              width={200}
              height={100}
              style={{'transform' : 'translateY(-50px)'}}
            />
            <div className="grid w-[200px] p-4">
              <Link
                href="/about"
                className="text-6xl my-8 no-underline text-black  font-medium   underline-offset-4"
                prefetch={false}
              >
                About
              </Link>
              <Link
                href="/services"
                className=" text-6xl my-8 no-underline text-black  font-medium   underline-offset-4"
                prefetch={false}
              >
                Services
              </Link>
              <Link
                href="/trucks"
                className=" text-6xl my-8 no-underline text-black  font-medium   underline-offset-4"
                prefetch={false}
              >
                Truck types
              </Link>
              <Link
                href="/how-to-start"
                className=" text-6xl my-8 no-underline text-black  font-medium  underline-offset-4"
                prefetch={false}
              >
                How to start
              </Link>
              <Link
                href="/shippers"
                className=" text-6xl my-8 no-underline text-black  font-medium  underline-offset-4"
                prefetch={false}
              >
                Shippers
              </Link>
              <Link
                href="/faq"
                className=" text-6xl my-8 no-underline text-black  font-medium   underline-offset-4"
                prefetch={false}
              >
                FAQ
              </Link>
              <Link
                href="/contact-us"
                className=" text-6xl no-underline text-black  font-medium   underline-offset-4"
                prefetch={false}
              >
                Contact us
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
