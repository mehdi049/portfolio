"use client";

import { H2 } from "@/components/typography/h2";
import { H6 } from "@/components/typography/h6";
import gsap from "gsap";
import { Quote } from "lucide-react";
import { useEffect, useState } from "react";

export default function Testimonials() {
  const [activeFeedback, setActiveFeedback] = useState(0);

  const feedbacks = [
    {
      name: "Hager",
      position: "CEO at Flitter",
      testimonial:
        "Mehdi is a great and experienced front-end developer. We really enjoyed our collaboration with Mehdi : he is reliable, flexible, always available and very easy to collaborate with ! Mehdi was definitely part of our team and largely contributed to our growth and success ! Thanks again Mehdi for our collaboration, we are really greatfull !",
    },
    {
      name: "Laurent",
      position: "Upwork client",
      testimonial:
        "Mehdi delivered quality work. The HTML and CSS is clear and responsive, and I was able to integrate it to my website easily. I appreciate that Mehdi had quick working solutions to the small issues I had while integrating the HTML. Great job overall and would definitely recommend him.",
    },
    {
      name: "Toby",
      position: "Upwork client",
      testimonial:
        "This man is a true gem and I was very lucky to stumble across him when I was rebuilding my last website. He is up front, straightforward, and talented. If he is outside of his comfort zone, he won't BS you / will provide an alternative solution.",
    },
    {
      name: "Pavol",
      position: "Upwork client",
      testimonial:
        "It was a pleasure to work with Mehdi. Very responsive, easy to communicate, fast and incorporated all the comments I had. Overall, I'm very pleased with the end results and would be happy to work with Mehdi again.",
    },
    {
      name: "Stephan",
      position: "Upwork client",
      testimonial:
        "Yet a first class delivery from Mehdi. Extremely pleasant to work with. Implementation of a design from Figma to Razor Pages. Delivered in extremely timely manner, and the minor adjustments from my side was solved very fast.",
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      "#testimonial-items",
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
      }
    );
  }, [activeFeedback]);

  return (
    <div>
      <div
        className="flex flex-col gap-12 items-center justify-center relative"
        id="testimonials"
      >
        <div className="space-y-4">
          <H2 className="text-center max-w-2xl">Testimonials</H2>
          <p className="text-xs text-gray-500">
            * You can find more testimonials on my{" "}
            <a
              href="https://www.upwork.com/freelancers/~01e6f3c6f9d5b0b5c6"
              target="_blank"
              rel="noreferrer"
              className="text-gray-700 underline"
            >
              Upwork profile
            </a>
            .
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-20 w-full"
          id="testimonial-items"
        >
          <TestimonialItem
            name={feedbacks[activeFeedback].name}
            position={feedbacks[activeFeedback].position}
            testimonial={feedbacks[activeFeedback].testimonial}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-20 w-full">
          <div className="md:col-start-2 col-span-1 md:col-span-2 flex gap-2 sm:gap-4 justify-center md:justify-start">
            {feedbacks.map((feedback, index) => (
              <div
                className="flex items-center gap-2"
                key={index}
                onClick={() => setActiveFeedback(index)}
              >
                <span
                  className={`font-medium cursor-pointer hover:text-gray-600 ${
                    index === activeFeedback ? "text-gray-600" : "text-gray-400"
                  }`}
                >
                  0{index + 1}
                </span>
                {index === activeFeedback && index !== feedbacks.length - 1 && (
                  <span className="w-16 border-b border-gray-400"></span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

type TestimonialItemProps = {
  name: string;
  position?: string;
  testimonial: string;
};
const TestimonialItem = ({
  name,
  position,
  testimonial,
}: TestimonialItemProps) => {
  return (
    <>
      <div className="col-span-1 flex gap-4 sm:gap-8 items-start">
        <Quote className="rotate-180" />
        <div>
          <H6 className="text-gray-900">{name}</H6>
          <span className="font-semibold text-xs text-gray-500">
            {position}
          </span>
        </div>
      </div>
      <div className="col-span-2">
        <p className="text-gray-500">&quot;{testimonial}&quot;</p>
      </div>
    </>
  );
};
