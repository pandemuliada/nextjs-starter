import Button from "@/components/ui/Button";
import Drawer from "@/components/ui/Drawer";
import { CustomSelect, Input } from "@/components/ui/form";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoCart, IoClose, IoHeart, IoMenu, IoPerson } from "react-icons/io5";
import { CgBox } from "react-icons/cg";

const menus = [
  {
    label: "Hot",
    id: "hot",
    url: "/hot",
  },
  {
    label: "Gift Cards",
    id: "gift-cards",
    url: "/gift-cards",
  },
  {
    label: "Dicsount",
    id: "dicsount",
    url: "/dicsount",
  },
  {
    label: "Contact",
    id: "contact",
    url: "/contact",
  },
];

const MobileNav = (props) => {
  const { onClose, show } = props;

  return (
    <Drawer width="350px" className="px-8" show={show} onClose={onClose}>
      <div className="h-[100px] flex items-center">
        <button
          onClick={onClose}
          className="text-white bg-primary p-2 rounded-xl"
        >
          <IoClose size={24} />
        </button>
      </div>

      <div className="flex flex-col justify-between h-[calc(100%-120px)]">
        <div className="flex flex-col items-start">
          <Link
            href={`/ecommerce`}
            className="text-2xl hover:text-primary mb-5"
          >
            Catalog
          </Link>

          {menus.map((menu) => (
            <Link
              key={menu.id}
              href={`/ecommerce${menu.url}`}
              className="text-2xl hover:text-primary mb-5 last:mb-0"
            >
              {menu.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center">
          <div className="w-[44px]">
            <Button outline block className="min-w-full !p-0">
              <IoHeart size={20} />
            </Button>
          </div>
          <div className="flex items-center ">
            <div className="w-[44px] ml-3">
              <Button outline block className="min-w-full !p-0">
                <IoPerson size={20} />
              </Button>
            </div>
            <div className="ml-3">
              <p className="mb-0 truncate">Pande Muliada</p>
              <small className="text-xs">Balance : $500</small>
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

const EcommerceLayout = (props) => {
  const { children } = props;

  const [openCart, setOpenCart] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-[2] w-full bg-white border-b">
        <nav className="container flex items-center justify-between mx-auto">
          <Link href="/">
            <div className="relative block w-[110px] h-[70px]">
              <Image
                alt=""
                src="/logo-text.webp"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center flex-wrap ml-5">
            {menus.map((menu) => (
              <Link
                key={menu.id}
                href={`/landing${menu.url}`}
                className="hover:text-primary mr-8 last:mr-0"
              >
                {menu.label}
              </Link>
            ))}
          </div>
          <div className="flex">
            <CustomSelect
              value="en"
              options={[
                { label: "ENG", value: "en" },
                { label: "IDN", value: "id" },
              ]}
            />
            <div className="md:hidden ml-2">
              <button
                type="button"
                onClick={() => setOpenNav(true)}
                className="text-white bg-primary p-2.5 rounded-xl"
              >
                <IoMenu size={24} />
              </button>
            </div>
          </div>
        </nav>

        <MobileNav show={openNav} onClose={() => setOpenNav(false)} />
        <Drawer
          show={openCart}
          onClose={() => setOpenCart(false)}
          width="350px"
          className="pt-8 px-8"
        >
          <h4 className="font-bold text-xl">Your Cart (5)</h4>
        </Drawer>
      </header>

      {/* Search Menu */}
      <div
        id="search-menu"
        className="sticky top-[71px] z-[1] border-b h-[70px] bg-white"
      >
        <div className="container mx-auto flex h-full">
          <div className="hidden md:flex flex-0 flex-none border-r h-full items-center pr-5">
            <Button outline href="/ecommerce">
              <span className="text-lg mr-2">
                <CgBox />
              </span>
              <span>Catalog</span>
            </Button>
          </div>
          <div className="flex-1 px-2">
            <Input.Text
              className="border-none !h-full"
              placeholder="Search..."
              value=""
            />
          </div>
          <div className="border-l pl-5 flex items-center">
            <div className="w-[44px]">
              <Button
                outline
                block
                className="min-w-full !p-0"
                onClick={() => setOpenCart(true)}
              >
                <IoCart size={20} />
              </Button>
            </div>
            <div className="hidden md:block w-[44px] ml-3">
              <Button outline block className="min-w-full !p-0">
                <IoHeart size={20} />
              </Button>
            </div>
            <div className="hidden md:flex items-center">
              <div className="w-[44px] ml-3">
                <Button outline block className="min-w-full !p-0">
                  <IoPerson size={20} />
                </Button>
              </div>
              <div className="ml-3">
                <p className="mb-0">Pande Muliada</p>
                <small className="text-xs">Balance : $500</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {children}
    </>
  );
};

export default EcommerceLayout;
