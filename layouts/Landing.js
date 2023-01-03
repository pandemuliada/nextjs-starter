import Button from "@/components/ui/Button";
import Drawer from "@/components/ui/Drawer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

const menus = [
  {
    label: "About",
    id: "about",
    url: "/about",
  },
  {
    label: "Services",
    id: "services",
    url: "/services",
  },
  {
    label: "Portfolio",
    id: "portfolio",
    url: "/portfolio",
  },
  {
    label: "Blog",
    id: "blog",
    url: "/blog",
  },
];

const LandingLayout = (props) => {
  const { children } = props;

  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-[1] py-2 w-full bg-white bg-opacity-80">
        <nav className="container flex justify-between items-center mx-auto">
          <Link href="/">
            <div className="relative block w-[135px] h-[80px]">
              <Image
                alt=""
                src="/logo-text.webp"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center flex-wrap">
            {menus.map((menu) => (
              <Link
                key={menu.id}
                href={`/landing${menu.url}`}
                className="hover:text-primary mr-8 last:mr-0"
              >
                {menu.label}
              </Link>
            ))}

            <Button>Contact</Button>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setOpenNav(true)}
              className="text-white bg-primary p-2 rounded-xl"
            >
              <IoMenu size={24} />
            </button>
          </div>
        </nav>
      </header>
      <Drawer
        width="350px"
        className="px-8"
        show={openNav}
        onClose={() => setOpenNav(false)}
      >
        <div className="h-[100px] flex items-center">
          <button
            onClick={() => setOpenNav(false)}
            className="text-white bg-primary p-2 rounded-xl"
          >
            <IoClose size={24} />
          </button>
        </div>

        <div
          className="flex flex-col justify-between"
          style={{ height: "calc(100% - 50px)" }}
        >
          <div className="flex flex-col items-start">
            {menus.map((menu) => (
              <Link
                key={menu.id}
                href={`/landing${menu.url}`}
                className="text-2xl hover:text-primary mb-5 last:mb-0"
              >
                {menu.label}
              </Link>
            ))}
          </div>
          <Button>Contact</Button>
        </div>
      </Drawer>

      {children}

      <footer className="bg-primary py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between">
          <div className="flex-none md:max-w-[30%] w-full">
            <Link href="/">
              <div className="relative block w-[135px] h-[80px]">
                <Image
                  alt=""
                  src="/logo.webp"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            <p className="text-white">
              We give small to midsize businesses access to world class software
              & design.
            </p>
          </div>
          <div className="flex-none w-full md:max-w-[40%] pt-5">
            <div className="md:w-[80%] mx-auto">
              <p className="font-bold text-xl text-white">Company</p>

              <div className="grid grid-cols-2 mt-8 text-white">
                <Link href="/landing/about" className="mb-4">
                  About
                </Link>
                <Link href="/landing/blog" className="mb-4">
                  Blog
                </Link>
                <Link href="/landing/service" className="mb-4">
                  Service
                </Link>
                <Link href="/landing/contact" className="mb-4">
                  Contact
                </Link>
                <Link href="/landing/portfolio" className="mb-4">
                  Portfolio
                </Link>
                <Link href="/landing/faq" className="mb-4">
                  FAQ
                </Link>
                <Link href="/landing/shop" className="mb-4">
                  Shop
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-none md:max-w-[20%] pt-5">
            <p className="font-bold text-xl text-white">Subscribe</p>
            <div className="mt-8">
              <p className="text-white">
                Subscribe to stay up to date on our latest designs, articles,
                and products!
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LandingLayout;
