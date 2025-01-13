import { H2 } from "@/components/typography/h2";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge/badge";

export default function MyExperience() {
  return (
    <div>
      <div
        className="flex flex-col gap-12 items-center justify-center"
        id="experience"
      >
        <H2 className="text-center max-w-2xl">My experience</H2>

        <div className="space-y-6 w-full">
          <ExperienceItem
            title="Senior software engineer"
            company="Vistaprint"
            link="https://www.vistaprint.com/"
            date="2018 - present"
            contractType="Full-time"
            workType="Remote"
            mainStack={[
              "Gatsby",
              "Figma",
              "Gitlab",
              "End-to-end testing",
              "Monorepo (lerna)",
              "Microservices",
              "AWS",
            ]}
          >
            <Accordion type="single" collapsible defaultValue="item-1">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Senior software Engineer | Transition to the Digital team
                </AccordionTrigger>
                <AccordionContent className="text-gray-500 text-sm">
                  Promoted to Senior Software Engineer and joined the Digital
                  Team at Vista. Focused on enhancing customer-facing digital
                  solutions, including the seamless integration of domain
                  purchasing and hosting services in collaboration with Wix.
                  Played a key role in driving innovative features and
                  delivering impactful digital experiences.{" "}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Software Engineer | Part of the Supply Chain team
                </AccordionTrigger>
                <AccordionContent className="text-gray-500 text-sm">
                  Collaborated within a distributed team of 8 members across 3
                  countries to develop, manage, and support IT systems integral
                  to Vista’s supply chain operations. Supported over 200
                  suppliers and 70 plant users with scalable and efficient
                  solutions to optimize supply chain processes.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ExperienceItem>

          <ExperienceItem
            title="Lead front-end developer"
            company="Flitter"
            link="https://flitter.fr"
            date="2022 - 2024"
            contractType="Part-time | Freelance"
            workType="Remote"
            mainStack={[
              "React",
              "Next.js",
              "Vite",
              "Tailwind CSS",
              "Figma",
              "API Integration",
              "Storybook",
              "Cypress",
              "Jest",
            ]}
          >
            <p className="text-sm text-gray-500">
              Held ownership of the front-end codebase, ensuring its maintenance
              and continuous development. Collaborated closely with the
              designer, backend team, and CTO to deliver new features and
              optimize the user experience. Actively participated in Agile
              sprint planning, daily stand-ups, and retrospectives to align
              development efforts with business goals and ensure team
              efficiency.
            </p>
          </ExperienceItem>

          <ExperienceItem
            title="Freelancer web developer"
            company="Upwork"
            link="https://www.upwork.com/freelancers/~011c1c4df7e86a3d93"
            date="2021 - 2022"
            contractType="Freelance"
            workType="Remote"
          >
            <p className="text-sm text-gray-500">
              Built a reputation as a top-rated freelancer on Upwork, delivering
              high-quality web development solutions to clients worldwide.
              Successfully completed diverse projects, ranging from custom
              websites and interactive forms to responsive landing pages, while
              consistently exceeding client expectations and maintaining a 100%
              job success rate.
            </p>
          </ExperienceItem>

          <ExperienceItem
            title="Web developer"
            company="AllAboutOnline"
            date="2015 - 2017"
            contractType="Full-time"
            workType="On site"
            mainStack={[
              "HTML",
              "CSS",
              "JavaScript",
              "jQuery",
              "Bootstrap",
              ".NET",
              "SQL Server",
              "MVC",
              "Entity Framework",
            ]}
          >
            <p className="text-sm text-gray-500">
              Developed fully functional web applications for customers,
              collaborating closely with clients and the designer to deliver
              solutions that met their business needs. Engaged with potential
              clients to understand their requirements and proactively suggested
              strategies to enhance their online presence and achieve their
              goals.
            </p>
          </ExperienceItem>
        </div>
      </div>
    </div>
  );
}

type ExperienceItemProps = {
  title: string;
  company: string;
  link?: string;
  date: string;
  contractType:
    | "Freelance"
    | "Part-time"
    | "Full-time"
    | "Part-time | Freelance";
  workType: "Remote" | "On site";
  mainStack?: string[];
  children: React.ReactNode;
};
const ExperienceItem = ({
  title,
  company,
  link,
  date,
  contractType,
  workType,
  mainStack,
  children,
}: ExperienceItemProps) => {
  return (
    <div className="grid sm:grid-cols-2 gap-4 odd:bg-gray-50 p-4">
      <div>
        <p className="text-gray-700 font-bold">{title}</p>
        <p className="text-gray-700 font-medium">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="text-gray-700 underline"
            >
              {company}
            </a>
          ) : (
            <>{company}</>
          )}{" "}
          <span className="text-xs text-gray-500 font-normal">
            {" "}
            | {contractType} | {workType}
          </span>
        </p>
        <p className="text-gray-500 text-xs">{date}</p>
      </div>
      <div>
        {children}

        {mainStack && (
          <div className="mt-4">
            <div className="flex flex-wrap gap-2 mt-2">
              {mainStack.map((stack, index) => (
                <Badge key={index}>{stack}</Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
