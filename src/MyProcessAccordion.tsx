import { useState } from "react";

const steps = [
  {
    title: "Discover",
    content:
      "I start by getting to know the learners, the goals, and the gaps. This means reviewing existing materials, meeting with stakeholders and SMEs, and asking all the right questions (and sometimes the odd ones too).",
  },
  {
    title: "Design",
    content:
      "Next, I create a blueprint for success. I map out learning objectives, structure the content, and select the best format, whether that’s eLearning, ILT, microlearning, or a combination of approaches.",
  },
  {
    title: "Develop",
    content:
      "This is where the magic happens. I storyboard, build interactions, write scripts, and develop media. I make sure everything is aligned with accessibility standards and instructional best practices.",
  },
  {
    title: "Test",
    content:
      "I believe in testing early and often. I gather feedback, run pilot sessions, and adjust based on what works and what doesn’t. I want learners to walk away saying, “Wow, I actually learned something.”",
  },
  {
    title: "Deliver and Reflect",
    content:
      "Once everything is polished and ready to go, I support the launch and evaluate results. I look at what we can learn from the experience so that every project gets better than the last.",
  },
];

export default function MyProcessAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm py-3 px-6 flex justify-center gap-6 border-b border-gray-200 dark:border-gray-700 text-sm font-medium">
        <a href="#about" className="hover:text-blue-600 transition-colors">
          About
        </a>
        <a href="#process" className="hover:text-blue-600 transition-colors">
          Process
        </a>
        <a href="#projects" className="hover:text-blue-600 transition-colors">
          Projects
        </a>
        <a href="#resume" className="hover:text-blue-600 transition-colors">
          Resume
        </a>
      </nav>

      <section id="process" className="max-w-3xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">
          My Instructional Design Process
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
          Designing great learning experiences is not about slapping content on
          slides and calling it a day. I follow a thoughtful, learner-centered
          process that blends strategy, creativity, and collaboration.
        </p>
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-5 py-4 font-semibold bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none transition-colors"
              >
                {step.title}
              </button>
              {openIndex === index && (
                <div className="px-5 py-4 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-all duration-300">
                  {step.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
