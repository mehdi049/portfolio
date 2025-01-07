import { H1 } from "@/components/typography/h1";
import { H3 } from "@/components/typography/h3";
import { Button } from "@/components/ui/button/button";
import { CircleArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div
      className="flex flex-col sm:flex-row gap-8 sm:gap-4 min-h-screen items-center sm:justify-between pt-[80px] md:pt-0 relative"
      id="home"
    >
      <div className="flex flex-col items-center sm:items-start gap-6 sm:gap-12 grow order-2 sm:order-1">
        <H1>
          Senior web <br />
          developer
        </H1>
        <H3 className="flex gap-2 items-center">
          <span className="border-b border-gray-500 w-6"></span>
          Mehdi Marouani
        </H3>
        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href="/cv/Mehdi-Marouani-CV-EN.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <Button>Download my CV</Button>
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <Button>Hire me on Upwork</Button>
          </a>
        </div>
      </div>
      <div className="order-1 sm:order-2">
        <Image
          src="/me.png"
          width={400}
          height={400}
          alt="Mehdi Marouani"
          className="border-2 border-gray-800 rounded-full p-2 sm:p-4 grayscale max-w-[200px] md:max-w-none"
        />
      </div>

      <Link href="#about-me">
        <CircleArrowDown className="text-gray-900 animate-bounce absolute bottom-4 sm:bottom-10 -ml-4 sm:-ml-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 cursor-pointer" />
      </Link>
    </div>
  );
}
