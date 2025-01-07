import { H2 } from "@/components/typography/h2";
import { Button } from "@/components/ui/button/button";
import { Github, Linkedin, Mail, Phone, Pin } from "lucide-react";

export default function Contact() {
  return (
    <div>
      <div
        className="flex flex-col gap-12 items-center justify-center"
        id="contact"
      >
        <H2 className="text-center max-w-2xl">Contact</H2>

        <div className="space-y-6 sm:space-y-12">
          <div className="flex justify-center flex-wrap sm:flex-nowrap gap-6 sm:gap-12">
            <p className="flex items-center gap-2 justify-center sm:justify-start">
              <span className="text-gray-500">
                <Phone size="16px" />
              </span>
              <span className="text-gray-500">+216 99 334 081</span>
            </p>
            <p className="flex items-center gap-2 justify-center sm:justify-start">
              <span className="text-gray-500">
                <Pin size="16px" />
              </span>
              <span className="text-gray-500">Tunis, Tunisia</span>
            </p>
          </div>
          <div className="flex justify-center  flex-wrap sm:flex-nowrap gap-6 sm:gap-12">
            <p className="flex items-center gap-2 justify-center sm:justify-start">
              <span className="text-gray-500">
                <Mail size="16px" />
              </span>
              <span className="text-gray-500">
                mehdi.marouani.freelancer@gmail.com
              </span>
            </p>
            <p className="flex items-center gap-4 justify-center sm:justify-start">
              <a
                className="text-gray-500 border border-gray-300 p-1 hover:bg-gray-100 duration-200"
                href="https://www.linkedin.com/in/mehdi-marouani-a653a059/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin />
              </a>
              <a
                className="text-gray-500 border border-gray-300 p-1 hover:bg-gray-100 duration-200"
                href="https://github.com/mehdi049"
                target="_blank"
                rel="noreferrer"
              >
                <Github />
              </a>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <a href="#" target="_blank" rel="noreferrer">
            <Button>Hire me on Upwork</Button>
          </a>
        </div>
      </div>
    </div>
  );
}
