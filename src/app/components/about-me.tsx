import { H4 } from "@/components/typography/h4";
import { H5 } from "@/components/typography/h5";
import { H6 } from "@/components/typography/h6";
import Image from "next/image";

export default function AboutMe() {
  const date = new Date();

  const expYears = date.getFullYear() - 2015;

  return (
    <div>
      <div
        className="flex flex-col gap-12 items-center justify-center"
        id="about-me"
      >
        <div className="space-y-8">
          <H4 className="text-center">About me</H4>

          <H5 className="text-center max-w-4xl mx-auto">
            I’m Mehdi Marouani, a Top-Rated Freelancer on Upwork with {expYears}
            + years of expertise in building high-quality, user-friendly, and
            responsive web applications.
          </H5>
          <p className="text-gray-500 text-sm max-w-6xl mx-auto">
            I am a highly skilled web developer specializing in both front-end
            and back-end development, with a strong focus on front-end
            technologies in recent years. <br /> As a top-rated freelancer on
            Upwork with 100% job success, I have a proven track record of
            delivering clean, maintainable, and well-documented code that
            ensures long-term scalability and ease of collaboration. <br /> My
            expertise lies in creating user-friendly, visually appealing, and
            efficient web solutions tailored to meet each client’s unique needs.
            <br />
            Passionate about problem-solving, I bring creativity and precision
            to every project, whether working independently or as part of a
            team.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-8 w-full">
          <StackItem image="html.png" title="HTML" />
          <StackItem image="css.png" title="CSS" />
          <StackItem image="typescript.png" title="Typescript" />
          <StackItem image="react.png" title="React" />
          <StackItem image="nextjs.png" title="NextJs" />
          <StackItem image="prisma.png" title="Prisma" />
          <StackItem image="tailwind.png" title="Tailwindcss" />
          <StackItem image="shadcn-ui.png" title="shadcn/ui" />
          <StackItem image="git.png" title="Git" />
          <StackItem image="jira.png" title="JIRA" />
          <StackItem image="postgresql.png" title="PostgresSql" />
          <StackItem image="strapi.png" title="Strapi" />
          <StackItem image="jest.png" title="Jest" />
          <StackItem image="cypress.png" title="Cypress" />
          <StackItem image="storybook.png" title="Storybook" />
          <StackItem image="pwa.png" title="PWA" />
        </div>
      </div>
    </div>
  );
}

type StackItemProps = {
  image: string;
  title: string;
};
const StackItem = ({ image, title }: StackItemProps) => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <Image
        alt=""
        height={50}
        width={50}
        src={`/stack/${image}`}
        className="grayscale w-8 h-8 sm:w-12 sm:h-12"
      />
      <H6 className="text-xs sm:font-medium sm:text-base text-gray-700">
        {title}
      </H6>
    </div>
  );
};
