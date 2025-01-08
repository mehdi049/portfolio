"use client";

import { H2 } from "@/components/typography/h2";
import { H5 } from "@/components/typography/h5";
import { H6 } from "@/components/typography/h6";
import { Badge } from "@/components/ui/badge/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

import Image from "next/image";

type PortfolioItem = {
  index?: number;
  image: string;
  title: string;
  year: string;
  link: string;
  description: React.ReactNode;
  mainStack: string[];
};

const portfolioItems: PortfolioItem[] = [
  {
    image: "matchi.webp",
    title: "Matchi",
    year: "2024 - 2025",
    link: "https://matchi-shadcn.vercel.app/",
    description: (
      <>
        <p className="text-gray-700 text-sm font-medium">
          Side Project | Full-Stack Development
        </p>
        <p className="text-gray-500 text-sm">
          Matchi is a web app I am building from scratch to connect sports
          enthusiasts by matching them with activities, events, and like-minded
          players. As a side project, it highlights my skills in full-stack
          development, combining Next.js, Tailwind CSS, and Prisma to deliver a
          seamless user experience. Key features include:
        </p>
        <ul className="list-disc space-y-2 ml-4">
          <li className="text-gray-500 text-sm">
            Personalized matchmaking for players based on their preferences.
          </li>
          <li className="text-gray-500 text-sm">
            Event creation and management for organizing sports activities.
          </li>
          <li className="text-gray-500 text-sm">
            Real-time updates on player and event availability.
          </li>
        </ul>
        <p className="text-gray-500 text-sm">
          With a minimalistic design and a focus on simplicity, Matchi
          demonstrates my ability to create scalable and user-centric
          applications while addressing real-world community needs.
        </p>
      </>
    ),
    mainStack: [
      "Next.js",
      "Tailwind CSS",
      "Shadcn",
      "Prisma",
      "Postgresql",
      "PWA",
      "Sentry",
      "Zod",
      "Next-auth",
    ],
  },
  {
    image: "vistaprint-domains.webp",
    title: "Vistaprint (Domains)",
    year: "2022 - 2024",
    link: "https://www.vistaprint.com/digital-marketing/domains/",
    description: (
      <>
        <p className="text-gray-700 text-sm font-medium">
          Domain Hosting Integration for Vista Customers
        </p>
        <p className="text-gray-500 text-sm">
          As part of the digital team at Vista, I contributed to a project
          enabling customers to purchase domains for hosting their websites
          through a seamless integration with Wix. My role focused on:
        </p>
        <ul className="list-disc space-y-2 ml-4">
          <li className="text-gray-500 text-sm">
            Implementing user-friendly front-end interfaces using modern
            frameworks.
          </li>
          <li className="text-gray-500 text-sm">
            Ensuring smooth API communication between Vista and Wix for
            streamlined domain purchases.
          </li>
          <li className="text-gray-500 text-sm">
            Collaborating closely with cross-functional teams to align the
            project with customer needs and business goals.
          </li>
        </ul>
        <p className="text-gray-500 text-sm">
          This project highlights my expertise in creating intuitive digital
          experiences and my ability to deliver solutions through effective
          teamwork.
        </p>
      </>
    ),
    mainStack: [
      "Gatsby",
      "Figma",
      "Gitlab",
      "End-to-end testing",
      "Monorepo (lerna)",
      "Microservices",
    ],
  },
  {
    image: "flitter-landing.webp",
    title: "Flitter (Landing pages)",
    year: "2022 - 2024",
    link: "https://flitter.fr/",
    description: (
      <>
        <p className="text-gray-700 text-sm font-medium">
          Landing Pages for Flitter Insurance
        </p>
        <p className="text-gray-500 text-sm">
          I developed high-performance landing pages for Flitter Insurance,
          turning Figma designs into responsive, pixel-perfect web pages. This
          project involved close collaboration with the designer and CTO to
          ensure the final product aligned with both the brand&apos;s visual
          identity and technical requirements. Key contributions included:
        </p>
        <ul className="list-disc space-y-2 ml-4">
          <li className="text-gray-500 text-sm">
            Translating detailed Figma designs into clean, maintainable code
            using modern front-end technologies.
          </li>
          <li className="text-gray-500 text-sm">
            Optimizing performance and responsiveness across devices for an
            enhanced user experience.
          </li>
          <li className="text-gray-500 text-sm">
            Iterating rapidly based on feedback to meet tight deadlines without
            compromising quality.
          </li>
        </ul>
        <p className="text-gray-500 text-sm">
          This project demonstrates my ability to transform creative concepts
          into functional, user-centric interfaces while working effectively
          with cross-disciplinary teams.
        </p>
      </>
    ),
    mainStack: ["React", "Next.js", "Tailwind CSS", "Figma"],
  },
  {
    image: "flitter-estimate.webp",
    title: "Flitter (Quote steps)",
    year: "2022 - 2024",
    link: "https://devis.flitter.fr/?s=carSearchImmat",
    description: (
      <>
        <p className="text-gray-700 text-sm font-medium">
          Dynamic Pricing Questionnaire for Flitter Insurance
        </p>
        <p className="text-gray-500 text-sm">
          I developed a multi-step questionnaire for Flitter Insurance to
          generate personalized car insurance pricing. The system dynamically
          calculates quotes based on user inputs such as car model, parking
          type, city, age, and selected addons. My role included:
        </p>
        <ul className="list-disc space-y-2 ml-4">
          <li className="text-gray-500 text-sm">
            Translating detailed Figma designs into an interactive,
            user-friendly interface.
          </li>
          <li className="text-gray-500 text-sm">
            Collaborating with the backend team to integrate APIs for real-time
            pricing calculations.
          </li>
          <li className="text-gray-500 text-sm">
            Ensuring a seamless user experience with optimized responsiveness
            and accessibility.
          </li>
        </ul>
        <p className="text-gray-500 text-sm">
          This project showcases my ability to build complex, data-driven user
          flows while working collaboratively to deliver a cohesive product.
        </p>
      </>
    ),
    mainStack: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Figma",
      "API Integration",
      "Storybook",
      "Cypress",
      "Jest",
    ],
  },
  {
    image: "flitter-app.webp",
    title: "Flitter (App)",
    year: "2022 - 2024",
    link: "https://app.flitter.fr/",
    description: (
      <>
        <p className="text-gray-700 text-sm font-medium">
          Customer Dashboard for Flitter Insurance
        </p>
        <p className="text-gray-500 text-sm">
          I developed a comprehensive user dashboard for Flitter Insurance,
          providing customers with a centralized platform to manage their car
          insurance. Key features of the dashboard included:
        </p>
        <ul className="list-disc space-y-2 ml-4">
          <li className="text-gray-500 text-sm">
            Viewing detailed insurance data, including policy information and
            coverage details.
          </li>
          <li className="text-gray-500 text-sm">
            Insuring additional vehicles with a streamlined process.
          </li>
          <li className="text-gray-500 text-sm">
            Adding or removing addons to customize coverage.
          </li>
          <li className="text-gray-500 text-sm">
            Accessing a complete history of previous and current incidents.
          </li>
        </ul>
        <p className="text-gray-500 text-sm">
          This project involved close collaboration with the backend team to
          ensure seamless data integration and a smooth user experience. It
          highlights my ability to build intuitive, feature-rich dashboards
          tailored to user needs.
        </p>
      </>
    ),
    mainStack: [
      "Vite",
      "Tailwind CSS",
      "API Integration",
      "Cypress",
      "Jest",
      "Storybook",
    ],
  },
  {
    image: "effortless-renovation.webp",
    title: "EffortlessRenovation",
    year: "2024",
    link: "https://www.effortlessrenovations.com/",
    description: (
      <>
        <p className="text-gray-700 text-sm font-medium">
          Upwork Client | Full-Stack Development
        </p>
        <p className="text-gray-500 text-sm">
          I created a custom website for a building renovation company,
          transforming Figma designs into a fully functional and visually
          appealing platform.
        </p>
        <p className="text-gray-500 text-sm">
          Built entirely from scratch, the website features:
        </p>
        <ul className="list-disc space-y-2 ml-4">
          <li className="text-gray-500 text-sm">
            A multi-step form to generate detailed renovation quotes based on
            user inputs.
          </li>
          <li className="text-gray-500 text-sm">
            Responsive design ensuring an optimal experience across all devices.
          </li>
          <li className="text-gray-500 text-sm">
            Clean and maintainable code for easy future enhancements.
          </li>
        </ul>
        <p className="text-gray-500 text-sm">
          This project highlights my expertise in end-to-end development,
          delivering tailored solutions that meet client requirements while
          providing a seamless user experience.
        </p>
      </>
    ),
    mainStack: ["React", "Next.js", "Tailwind CSS", "Zod", "Figma"],
  },
  {
    image: "joplin.webp",
    title: "Joplin",
    year: "2021",
    link: "https://joplinapp.org/",
    description: (
      <>
        <p className="text-gray-700 text-sm font-medium">
          Upwork Client | Front-End Development
        </p>
        <p className="text-gray-500 text-sm">
          I developed a fully functional website by converting a detailed Figma
          design into responsive, pixel-perfect web pages. Built entirely from
          scratch, the project focused on:
        </p>
        <ul className="list-disc space-y-2 ml-4">
          <li className="text-gray-500 text-sm">
            Delivering a seamless translation of the design into clean,
            maintainable code.
          </li>
          <li className="text-gray-500 text-sm">
            Ensuring responsiveness and compatibility across devices and
            browsers.
          </li>
          <li className="text-gray-500 text-sm">
            Optimizing performance to provide a smooth user experience.
          </li>
        </ul>
        <p className="text-gray-500 text-sm">
          This project demonstrates my proficiency in translating creative
          concepts into functional, high-quality web applications while adhering
          to client specifications.
        </p>
      </>
    ),
    mainStack: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Figma"],
  },
  {
    image: "translogistica.webp",
    title: "Translogistica",
    year: "2021",
    link: "https://www.translogisticasa.com/",
    description: (
      <>
        <p className="text-gray-700 text-sm font-medium">
          Upwork Client | Front-End Development
        </p>
        <p className="text-gray-500 text-sm">
          I created a custom website for a building transportation company,
          transforming Figma designs into a responsive and user-friendly
          platform. Built entirely from scratch, the project showcased:
        </p>
        <ul className="list-disc space-y-2 ml-4">
          <li className="text-gray-500 text-sm">
            Precise implementation of the design to maintain brand consistency.
          </li>
          <li className="text-gray-500 text-sm">
            Responsive and optimized performance across devices and browsers.
          </li>
          <li className="text-gray-500 text-sm">
            Clean, maintainable code to facilitate future updates and
            scalability.
          </li>
        </ul>
        <p className="text-gray-500 text-sm">
          This project highlights my ability to deliver high-quality,
          tailor-made solutions that meet client requirements and enhance their
          online presence.
        </p>
      </>
    ),
    mainStack: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Figma"],
  },
  {
    image: "boiswood.webp",
    title: "Boiswood",
    year: "2016",
    link: "https://www.boiswood.co.uk/",
    description: (
      <>
        <p className="text-gray-700 text-sm font-medium">
          UK Client | Front-End Development
        </p>
        <p className="text-gray-500 text-sm">
          I developed a website for a UK-based client to showcase and manage
          their range of gas and liquid control products. The project involved
          close collaboration with the designer, client, and manager to ensure
          the final product met technical and aesthetic requirements. Key
          aspects included:
        </p>
        <ul className="list-disc space-y-2 ml-4">
          <li className="text-gray-500 text-sm">
            Crafting a clean and user-friendly front-end interface using HTML
            and CSS.
          </li>
          <li className="text-gray-500 text-sm">
            Ensuring seamless integration with a .NET-based backend for dynamic
            content management.
          </li>
          <li className="text-gray-500 text-sm">
            Maintaining clear communication with stakeholders to align design
            and functionality with business goals.
          </li>
        </ul>
        <p className="text-gray-500 text-sm">
          This project highlights my ability to collaborate effectively in
          cross-functional teams while delivering high-quality, client-focused
          solutions.
        </p>
      </>
    ),
    mainStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      ".NET",
      "SQL Server",
      "MVC",
      "Entity Framework",
    ],
  },
];

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

      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {portfolioItems.map((item, index) => (
          <PortfolioItem
            key={index}
            index={index + 1}
            image={item.image}
            title={item.title}
            year={item.year}
            description={item.description}
            link={item.link}
            mainStack={item.mainStack}
          />
        ))}
      </div>

      <div className="md:hidden">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-xs sm:max-w-sm"
        >
          <CarouselContent>
            {portfolioItems.map((item, index) => (
              <CarouselItem key={index}>
                <PortfolioItem
                  index={index + 1}
                  image={item.image}
                  title={item.title}
                  year={item.year}
                  description={item.description}
                  link={item.link}
                  mainStack={item.mainStack}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 sm:-left-12" />
          <CarouselNext className="-right-4 sm:-right-12" />
        </Carousel>
      </div>
    </div>
  );
}

const PortfolioItem = ({
  index,
  image,
  title,
  year,
  description,
  link,
  mainStack,
}: PortfolioItem) => {
  const isMobile = useIsMobile();

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <div className="space-y-4 cursor-pointer overflow-hidden">
            <Image
              src={`/portfolio/${image}`}
              width={1100}
              height={700}
              alt={title}
              className="bg-gray-50 border-2 border-gray-100 p-4 object-contain"
            />
            <div className="flex gap-2 sm:gap-4 items-start">
              <H5 className="font-semibold">0{index}.</H5>
              <div>
                <H5 className="font-semibold">{title}</H5>
                <H6 className="text-gray-700 text-sm font-light">{year}</H6>
              </div>
            </div>
          </div>
        </SheetTrigger>
        <SheetContent side={isMobile ? "bottom" : "right"}>
          <SheetHeader>
            <SheetTitle>{title}</SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <div className="space-y-4 sm:space-x-6 mt-4">
            <Image
              src={`/portfolio/${image}`}
              width={1100}
              height={700}
              alt={title}
              className="bg-gray-50 border-2 border-gray-100 p-4 object-contain w-60 mx-auto sm:w-full"
            />
            <div className="max-h-[200px] md:max-h-[310px] overflow-y-scroll">
              <div className="space-y-2">{description}</div>
            </div>
            <div className="space-y-2">
              <H5>Main stack</H5>
              <div className="flex flex-wrap gap-2">
                {mainStack.map((stack, index) => (
                  <Badge key={index}>{stack}</Badge>
                ))}
              </div>
            </div>
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="text-sm block underline text-gray-700 hover:text-gray-900 duration-100"
            >
              Link to website
            </a>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};
