import MyProcess from "./MyProcess";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
type Project = {
  Title: string;
  "Tool Used": string;
  Link: string;
  Description: string;
  "Image URL": string;
};

// Reusable Animated Heading Component
function AnimatedHeading({ text }: { text: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.h2
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-2xl font-bold mb-4"
    >
      {text}
    </motion.h2>
  );
}

function App() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    fetch(
      "https://api.sheetbest.com/sheets/4023bb4f-0322-414a-9d05-d9ce5b474b7b"
    )
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen scroll-smooth bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300 ease-in-out relative">
      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
        <nav className="flex justify-center space-x-6 py-4">
          <a href="#about" className="text-sm font-medium hover:text-green-500">
            About
          </a>
          <a
            href="#projects"
            className="text-sm font-medium hover:text-green-500"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-sm font-medium hover:text-green-500"
          >
            Contact
          </a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-sm font-medium hover:text-green-500"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </nav>
      </header>

      {/* Animated Intro Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-20 px-4 bg-gradient-to-b from-green-50 to-transparent dark:from-gray-800"
      >
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Strategic & Results-Focused Design That Learners Might Even Enjoy
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          I design clear, creative, and inclusive learning experiences that make
          complex systems feel simple.
        </motion.p>
      </motion.section>

      {/* About Me Section */}
      <section id="about" className="py-12 px-4 max-w-4xl mx-auto">
        <AnimatedHeading text="About Me" />
        <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
          Hi, I’m Kim Lamothe, a curious, matcha-over-coffee kind of
          Instructional Designer who believes learning should be clear,
          inclusive, and just a little bit fun. I specialize in transforming
          complex information into engaging, accessible learning experiences
          that help people do their jobs better, and feel more confident doing
          them. With over a decade of experience, I have worked with government
          agencies, corporate teams, and mission-driven organizations to create
          eLearning, instructor-led training, and blended learning solutions. I
          love collaborating with subject matter experts, solving design
          challenges, and finding creative ways to make information stick.
          Whether you are here to explore project ideas, get to know my style,
          or find the right partner for your next learning solution, I’m glad
          you’re here!
        </p>
        <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
          I use tools like Articulate, Storyline, and Vyond. But what really
          powers my work? A steady blend of creativity, clarity, and optimism.
        </p>
        <MyProcess />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 px-4 max-w-6xl mx-auto">
        <AnimatedHeading text="Projects" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={project["Image URL"]}
                alt={`Thumbnail for ${project.Title}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <motion.h3
                  className="text-xl font-semibold mb-3"
                  whileHover={{ color: "#22c55e", scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {project.Title}
                </motion.h3>

                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 leading-snug whitespace-pre-line">
                  <span className="font-semibold">Description:</span>
                  <br />
                  {project.Description}
                </p>

                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  <span className="font-semibold">Tools Used:</span>{" "}
                  {project["Tool Used"]}
                </p>

                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  <span className="font-semibold">My Role:</span> Instructional
                  Designer
                </p>

                <motion.a
                  href={project.Link}
                  className="inline-block bg-green-500 text-white text-sm px-4 py-2 rounded hover:bg-green-600 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 250 }}
                >
                  View Project
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-12 px-4 text-center max-w-3xl mx-auto"
      >
        <AnimatedHeading text="Contact" />
        <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
          Want to collaborate or chat about matcha, tech, or training? Reach
          out!
        </p>
        <a
          href="mailto:kim@gracecedar.com"
          className="inline-block bg-green-500 text-white text-sm px-5 py-2 rounded hover:bg-green-600 transition"
        >
          Email Me
        </a>
        <a
          href="https://docs.google.com/document/d/1e54OtfsPnxVxRFm-MQsg1aT2geM-t3nhnAoj0cfJGRY/view"
          className="inline-block mt-4 bg-white dark:bg-gray-800 text-green-600 border border-green-500 text-sm px-5 py-2 rounded hover:bg-green-100 dark:hover:bg-gray-700 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume
        </a>
        <a
          href="https://www.linkedin.com/in/kimlamothe/"
          className="inline-block mt-4 ml-0 md:ml-4 bg-blue-600 text-white text-sm px-5 py-2 rounded hover:bg-blue-700 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect on LinkedIn
        </a>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-lg transition duration-300"
          aria-label="Scroll to top"
        >
          ↑ Top
        </button>
      )}

      {/* Footer */}
      <footer className="text-center py-6 mt-10 text-sm text-gray-500 dark:text-gray-400">
        <p>Thanks for stopping by. Let’s build something beautiful together!</p>
      </footer>


    </div>
  );
}

export default App;
