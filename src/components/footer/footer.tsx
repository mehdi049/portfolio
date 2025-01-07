import { Container } from "../container/container";

export const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <>
      <hr className="my-12 md:my-20" />
      <Container>
        <footer className="pb-12 md:pb-20">
          <p className="text-center text-xs text-gray-500">
            &copy; {currentYear} Made with love by -{" "}
            <a
              href="https://github.com/mehdi049"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline"
            >
              Mehdi Marouani
            </a>
          </p>
        </footer>
      </Container>
    </>
  );
};
