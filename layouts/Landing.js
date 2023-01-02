import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

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

  return (
    <>
      <header className="py-2 sticky top-0 w-full bg-white bg-opacity-80">
        <nav className="container flex justify-between items-center mx-auto">
          <Link href="/">
            <div className="relative block w-[135px] h-[80px]">
              <Image src="/logo-text.webp" fill objectFit="contain" />
            </div>
          </Link>

          <div className="hidden md:flex items-center flex-wrap">
            {menus.map((menu) => (
              <Link
                key={menu.id}
                href={`/landing/${menu.url}`}
                className="mr-8 last:mr-0"
              >
                {menu.label}
              </Link>
            ))}

            <Button>Contact</Button>
          </div>
        </nav>
      </header>

      {children}

      <footer></footer>
    </>
  );
};

export default LandingLayout;
