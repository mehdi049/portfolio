import Link from "next/link";

export const Header = () => {
  return (
    <nav className="flex sm:gap-4 justify-center items-center py-4 sm:py-8 fixed top-0 left-0 z-10 bg-white w-full shadow-sm shadow-gray-100">
      <HeaderLink href="#home">Home</HeaderLink>
      <HeaderLink href="#about-me">About me</HeaderLink>
      <HeaderLink href="#experience">Experience</HeaderLink>
      <HeaderLink href="#portfolio">Portfolio</HeaderLink>
      <HeaderLink href="#testimonials">Testimonials</HeaderLink>
      <HeaderLink href="#contact">Contact</HeaderLink>
    </nav>
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
