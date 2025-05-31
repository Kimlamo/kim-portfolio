// Chatbot.tsx
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { X } from "lucide-react";

export default function Chatbot() {
  const [collapsed, setCollapsed] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "👋 Hey, I’m SCORMy — zipped, packaged, and here to guide you through Kim’s portfolio. No LMS required.",
      fromBot: true,
    },
    {
      text: "Why did the microlearning module get promoted? It always made a big impact in just two minutes.",
      fromBot: true,
    },
    {
      text: "Who are you here as today?",
      fromBot: true,
    },
  ]);

  const [input, setInput] = useState("");
  const [options, setOptions] = useState([
    {
      label: "I’m a recruiter",
      action: () => {
        addBotMessage("Great! Here are a few quick links for you:");
        setOptions([
          {
            label: "View Resume",
            action: () =>
              window.open(
                "https://docs.google.com/document/d/1e54OtfsPnxVxRFm-MQsg1aT2geM-t3nhnAoj0cfJGRY/view",
                "_blank"
              ),
          },
          {
            label: "See Key Projects",
            action: () =>
              addBotMessage(
                "Check out: Neurodiversity in the Workplace, Accessibility in eLearning, and SCORM for Healthcare."
              ),
          },
          {
            label: "What tools does Kim use?",
            action: () =>
              addBotMessage(
                "Kim regularly uses Articulate Storyline, Rise 360, Vyond, Camtasia, and Canva."
              ),
          },
        ]);
      },
    },
    {
      label: "I’m a potential client",
      action: () => {
        addBotMessage("Welcome! Here’s how Kim can support your team:");
        setOptions([
          {
            label: "View Work Samples",
            action: () =>
              addBotMessage(
                "Take a look at the Projects section for full samples."
              ),
          },
          {
            label: "Learn About Her Process",
            action: () => {
              addBotMessage("Let me walk you through Kim’s process.");
              setTimeout(() => {
                const section = document.getElementById("process");
                if (section) section.scrollIntoView({ behavior: "smooth" });
              }, 500);
            },
          },
          {
            label: "Does she do accessibility?",
            action: () =>
              addBotMessage(
                "Absolutely. All designs are 508-compliant and tested with JAWS and Adobe accessibility tools."
              ),
          },
        ]);
      },
    },
    {
      label: "I’m just browsing",
      action: () => {
        addBotMessage(
          "Totally fine! Feel free to explore the Projects section, and click any button if you want help later."
        );
        setOptions([]);
      },
    },
  ]);

  function addBotMessage(text: string, opts: any[] = []) {
    setMessages((prev) => [...prev, { text, fromBot: true }]);
    setOptions(opts);
  }

  function handleSend() {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { text: input, fromBot: false }]);
    setInput("");
    addBotMessage("Thanks for your message! Kim will get back to you soon.");
  }

  if (collapsed) {
    return (
      <button
        onClick={() => setCollapsed(false)}
        className="fixed bottom-6 right-6 bg-green-500 text-white px-3 py-2 rounded shadow-lg z-50 text-sm hover:bg-green-600"
      >
        Open SCORMy
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-80 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg z-50 text-sm">
      <div className="flex justify-between items-center p-3 border-b font-semibold dark:text-white">
        <span>Chat with SCORMy</span>
        <button onClick={() => setCollapsed(true)} aria-label="Close chat">
          <X className="w-4 h-4 text-gray-600 dark:text-gray-300" />
        </button>
      </div>
      <div className="p-3 h-48 overflow-y-auto space-y-2 text-sm">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded whitespace-pre-wrap ${
              msg.fromBot
                ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
                : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            }`}
          >
            {idx === 0 && msg.fromBot ? (
              <Typewriter
                words={[msg.text]}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={45}
                deleteSpeed={0}
                delaySpeed={1000}
              />
            ) : (
              msg.text
            )}
          </div>
        ))}
      </div>
      <div className="px-3 pb-2 space-y-2">
        {options.map((opt, i) => (
          <button
            key={i}
            onClick={opt.action}
            className="w-full text-left bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 px-3 py-1 rounded hover:bg-green-200 dark:hover:bg-green-700 transition"
          >
            {opt.label}
          </button>
        ))}
      </div>
      <div className="flex items-center border-t p-2">
        <input
          type="text"
          className="flex-1 px-2 py-1 border rounded text-sm dark:bg-gray-900 dark:text-white"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="ml-2 text-sm bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
        >
          Send
        </button>
      </div>
    </div>
  );
}
