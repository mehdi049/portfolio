import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import { Container } from "@/components/container/container";

export const metadata: Metadata = {
  title: "Mehdi Marouani",
  description: "Web developer and freelancer",
  keywords: ["Next.js", "TypeScript", "Tailwind CSS"],
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
