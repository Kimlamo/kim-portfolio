import { useState } from "react";

export default function MyProcess() {
  const [open, setOpen] = useState<number | null>(null);

  const steps = [
    {
      title: "Discover",
      content: `Every project starts with understanding: who are the learners, what they need to do differently, and where the gaps are. I review existing materials, meet with stakeholders and SMEs, and ask the right questions (plus a few unexpected ones).`,
    },
    {
      title: "Design",
      content: `Next comes the blueprint. I define learning objectives, structure the content, and choose the best delivery format, whether that’s eLearning, ILT, microlearning, or a blended approach.`,
    },
    {
      title: "Develop",
      content: `This is where ideas take shape. I storyboard, script, build interactions, and develop multimedia while ensuring everything meets instructional best practices and accessibility standards.`,
    },
    {
      title: "Test",
      content: `I test early and often, through feedback loops, prototypes, and refinements to ensure the experience is effective and learner-centered.`,
    },
    {
      title: "Deliver & Reflect",
      content: `After launch, I help evaluate success and reflect on key insights. This ongoing feedback loop helps ensure each project improves on the last.`,
    },
  ];

  return (
    <section id="process" className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6">My Process</h2>
      {steps.map((step, index) => (
        <div key={index} className="mb-4 border border-gray-300 rounded">
          <button
            className="w-full text-left px-4 py-3 font-semibold bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
            onClick={() => setOpen(open === index ? null : index)}
          >
            {step.title}
          </button>
          {open === index && (
            <div className="px-4 py-3 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm leading-relaxed">{step.content}</p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
