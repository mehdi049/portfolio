import { H2 } from "@/components/typography/h2";
import { H5 } from "@/components/typography/h5";
import { H6 } from "@/components/typography/h6";
import Image from "next/image";

export default function Portfolio() {
  return (
    <div
      className="flex flex-col gap-12 items-center justify-center"
      id="portfolio"
    >
      <div className="space-y-4">
        <H2 className="text-center max-w-2xl">Portfolio</H2>
        <p className="text-xs text-gray-500">
          * Please note that some websites have been updated since I originally
          developed them.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20 w-full">
        <PortfolioItem
          index={1}
          bg="flitter-landing.webp"
          title="Flitter (landing pages)"
          year="2022 - 2024"
        />
        <PortfolioItem
          index={2}
          bg="flitter-estimate.webp"
          title="Flitter (estimate steps)"
          year="2022 - 2024"
        />
        <PortfolioItem
          index={3}
          bg="flitter-app.webp"
          title="Flitter (app)"
          year="2022 - 2024"
        />
        <PortfolioItem
          index={4}
          bg="vistaprint-domains.webp"
          title="Vistaprint (domains)"
          year="2022 - 2024"
        />
        <PortfolioItem index={5} bg="matchi.webp" title="Matchi" year="2024" />
        <PortfolioItem index={6} bg="joplin.webp" title="Joplin" year="2021" />
        <PortfolioItem
          index={7}
          bg="boiswood.webp"
          title="Boiswood"
          year="2016"
        />
        <PortfolioItem
          index={8}
          bg="translogistica.webp"
          title="Translogistica"
          year="2021"
        />
        <PortfolioItem
          index={9}
          bg="effortless-renovation.webp"
          title="EffortlessRenovation"
          year="2021"
        />
      </div>
    </div>
  );
}

type PortfolioItemProps = {
  index: number;
  bg?: string;
  title: string;
  year: string;
};
const PortfolioItem = ({ index, bg, title, year }: PortfolioItemProps) => {
  return (
    <div className="flex flex-col gap-4 cursor-pointer">
      <Image
        src={`/portfolio/${bg}`}
        width={1100}
        height={700}
        alt={title}
        className={`bg-gray-50 border-2 border-gray-100 p-4 w-full object-contain `}
      />
      <div className="flex gap-2 sm:gap-4 items-start">
        <H5 className="font-semibold">0{index}.</H5>
        <div>
          <H5 className="font-semibold">{title}</H5>
          <H6 className="text-gray-700 text-sm font-light">{year}</H6>
        </div>
      </div>
    </div>
  );
};
