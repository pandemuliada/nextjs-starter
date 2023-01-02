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
      <header className="py-2 sticky top-0 w-full bg-white bg-opacity-80">
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

        <div className="flex flex-col justify-between h-[calc(100%-120px)]">
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

      <footer></footer>
    </>
  );
};

export default LandingLayout;
