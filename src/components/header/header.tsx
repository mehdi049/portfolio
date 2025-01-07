import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

import { Menu } from "lucide-react";
import Image from "next/image";

export const Header = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <header>
      <nav className="hidden md:flex sm:gap-4 justify-center items-center py-4 sm:py-8 fixed top-0 left-0 z-10 bg-white w-full shadow-sm shadow-gray-100">
        <HeaderLink href="#home">Home</HeaderLink>
        <HeaderLink href="#about-me">About me</HeaderLink>
        <HeaderLink href="#experience">Experience</HeaderLink>
        <HeaderLink href="#portfolio">Portfolio</HeaderLink>
        <HeaderLink href="#testimonials">Testimonials</HeaderLink>
        <HeaderLink href="#contact">Contact</HeaderLink>
      </nav>
      <nav className="flex md:hidden gap-4 justify-between items-center fixed top-0 left-0 z-10 bg-white shadow-sm shadow-gray-100 p-4 w-full">
        <Image alt="Menu" height={36} width={36} src="/logo.png" />
        <Sheet>
          <SheetTrigger asChild>
            <Menu className="text-gray-700" />
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle></SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>
            <div className="flex flex-col justify-between h-full">
              <div className="grid gap-4 py-4">
                <HeaderLinkMobile href="#home">01. Home</HeaderLinkMobile>
                <HeaderLinkMobile href="#about-me">
                  02. About me
                </HeaderLinkMobile>
                <HeaderLinkMobile href="#experience">
                  03. Experience
                </HeaderLinkMobile>
                <HeaderLinkMobile href="#portfolio">
                  04. Portfolio
                </HeaderLinkMobile>
                <HeaderLinkMobile href="#testimonials">
                  05. Testimonials
                </HeaderLinkMobile>
                <HeaderLinkMobile href="#contact">06. Contact</HeaderLinkMobile>
              </div>
              <p className="text-xs text-gray-500">
                &copy; {currentYear} Made with love by -{" "}
                <a
                  href="https://github.com/mehdi049"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium underline"
                >
                  Mehdi
                </a>
              </p>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

type HeaderLinkProps = {
  children: React.ReactNode;
  href: string;
};
const HeaderLink = ({ children, href }: HeaderLinkProps) => {
  return (
    <Link
      href={href}
      className="border-b border-b-transparent hover:border-gray-900 uppercase px-1.5 sm:px-2 font-semibold text-sm sm:text-base"
    >
      {children}
    </Link>
  );
};

const HeaderLinkMobile = ({ children, href }: HeaderLinkProps) => {
  return (
    <Link
      href={href}
      className="border-b border-b-transparent hover:border-gray-900 font-medium text-lg text-gray-500 hover:text-gray-900 w-max"
    >
      {children}
    </Link>
  );
};
