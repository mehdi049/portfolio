import { Container } from "@/components/container/container";
import AboutMe from "./components/about-me";
import Contact from "./components/contact";
import Hero from "./components/hero";
import MyExperience from "./components/my-experience";
import Portfolio from "./components/portfolio";
import Testimonials from "./components/testimonials";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 md:gap-20">
      <Container>
        <Hero />
      </Container>

      <Container>
        <AboutMe />
      </Container>

      <hr />
      <Container>
        <MyExperience />
      </Container>

      <hr />
      <Container>
        <Portfolio />
      </Container>

      <hr />
      <Container>
        <Testimonials />
      </Container>

      <hr />
      <Container>
        <Contact />
      </Container>
    </div>
  );
}
