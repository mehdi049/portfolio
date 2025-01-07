import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import { Container } from "@/components/container/container";

export const metadata: Metadata = {
  title: "Mehdi Marouani | Web Developer Portfolio",
  description:
    "Discover my portfolio as a front-end and full-stack developer. I specialize in building modern web applications using Next.js, Tailwind CSS, and Prisma.",
  keywords: [
    "Web Developer",
    "Front-End Developer",
    "Freelancer",
    "Upwork freelancer",
    "Next.js",
    "Tailwind CSS",
    "Prisma",
    "Freelancing",
    "Portfolio",
  ],
  openGraph: {
    title: "Mehdi Marouani | Web Developer Portfolio",
    description:
      "Explore my professional journey and projects as a Next.js web developer with expertise in front-end and full-stack development.",
    url: "https://portfolio-mehdis-projects-572e839f.vercel.app/",
    siteName: "Mehdi Marouani Portfolio",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Preview of my Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehdi Marouani | Web Developer Portfolio",
    description:
      "Explore my professional journey and projects as a Next.js web developer with expertise in front-end and full-stack development.",
    images: ["/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth scroll-py-28">
      <body className="antialiased">
        <Container>
          <Header />
        </Container>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
