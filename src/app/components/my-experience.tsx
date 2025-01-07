import { H2 } from "@/components/typography/h2";
import { Ul } from "@/components/ui/ul/ul";

export default function MyExperience() {
  return (
    <div>
      <div
        className="flex flex-col gap-12 items-center justify-center"
        id="experience"
      >
        <H2 className="text-center max-w-2xl">My experience</H2>

        <div className="space-y-6">
          <ExperienceItem
            title="Senior software engineer"
            company="Vistaprint"
            link="https://www.vistaprint.com/"
            date="2019 - present"
          >
            <Ul>
              <li>
                I belong to the supply chain team, our role involves developing,
                managing, and supporting the IT aspect of the business that is
                used by over +200 suppliers and +70 plant users.
              </li>
            </Ul>
          </ExperienceItem>

          <ExperienceItem
            title="Junior software engineer"
            company="Vistaprint"
            link="https://www.vistaprint.com/"
            date="2018 - 2019"
          >
            <Ul>
              <li>
                Completed assigned tasks within deadlines and demonstrated
                willingness to learn new technologies.
              </li>
              <li>
                Enhanced the UI layout and made the web portal fully responsive,
                increasing client usage by 150%.
              </li>
              <li>
                Actively participated in Agile sprint planning, stand-ups, and
                retrospectives.
              </li>
            </Ul>
          </ExperienceItem>

          <ExperienceItem
            title="Lead front-end developer"
            company="Flitter"
            link="https://flitter.fr"
            date="2022 - 2024"
          >
            <Ul>
              <li>
                As a member of a team of 10, I was in charge of all front-end
                codebases and ensured that visitors were provided with the best
                user experience and features to encourage them to use our auto
                insurance.
              </li>
            </Ul>
          </ExperienceItem>

          <ExperienceItem
            title="Freelancer web developer"
            company="Upwork"
            link="#"
            date="2021 - 2022"
          >
            <Ul>
              <li>
                Top Rated freelancer with +20 projects completed successfully
                and 100% job success rate.
                <br />
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700 underline"
                >
                  my Upwork profile
                </a>
              </li>
            </Ul>
          </ExperienceItem>

          <ExperienceItem
            title="Web developer"
            company="AllAboutOnline"
            date="2015 - 2017"
          >
            <Ul>
              <li>
                Part of a team of 5, our role was to support and maintain
                several projects simultaneously.
              </li>
            </Ul>
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
  children: React.ReactNode;
};
const ExperienceItem = ({
  title,
  company,
  link,
  date,
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
          <span className="text-sm text-gray-500 font-normal">({date})</span>
        </p>
      </div>
      <div className="text-gray-500 text-sm">{children}</div>
    </div>
  );
};
