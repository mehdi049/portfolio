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
      <nav className="flex md:hidden gap-4 justify-between items-center fixed top-0 left-0 z-10 bg-white w-full shadow-sm shadow-gray-100 p-4 w-full">
        <Image alt="Menu" height={36} width={36} src="/logo.png" />
        <Sheet>
          <SheetTrigger asChild>
            <Menu className="text-gray-700" />
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Mehdi Marouani</SheetTitle>
              <SheetDescription>Personal portfolio</SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <HeaderLink href="#home">Home</HeaderLink>
              <HeaderLink href="#about-me">About me</HeaderLink>
              <HeaderLink href="#experience">Experience</HeaderLink>
              <HeaderLink href="#portfolio">Portfolio</HeaderLink>
              <HeaderLink href="#testimonials">Testimonials</HeaderLink>
              <HeaderLink href="#contact">Contact</HeaderLink>
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
      className="border-b border-b-transparent hover:border-black uppercase px-1.5 sm:px-2 font-semibold text-sm sm:text-base"
    >
      {children}
    </Link>
  );
};
