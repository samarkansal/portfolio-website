import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import "./App.css";

import githubIcon from "./assets/images/social-links/github.svg";
import youtubeIcon from "./assets/images/social-links/youtube.svg";
import AttendifyHome from "./assets/images/work/Attendify-home.png";
import carcoolHome from "./assets/images/work/Carcool-home.png";
import duckyHome from "./assets/images/work/Ducky-home.webp";

import portrait from "./assets/images/work/portrait.webp";

import js from "./assets/images/skills/js.webp";
import a11y from "./assets/images/skills/a11y.webp";
import git from "./assets/images/skills/git.webp";
import graphql from "./assets/images/skills/graphql.webp";
import html from "./assets/images/skills/html.webp";
import nextjs from "./assets/images/skills/next-js.webp";
import nodejs from "./assets/images/skills/node-js.webp";
import react from "./assets/images/skills/react.webp";
import ruby from "./assets/images/skills/ruby.webp";
import shell from "./assets/images/skills/shell.webp";
import svelte from "./assets/images/skills/svelte.webp";
import typescript from "./assets/images/skills/typescript.webp";

function App() {
  const [theme, setTheme] = useState("dark");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.classList.add(theme);

      return () => {
        document.body.classList.remove(theme);
      };
    }
  }, [theme]);

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    // It will automatically update the body className due to the useEffect hook
  };

  // Calculate button top margin based on the navbar's open/close state
  // const buttonStyle = {
  //   position: "relative",
  //   top: isOpen ? "10px" : "0", // Button is 10px from the top of the navbar when open
  //   marginTop: isOpen ? "0" : "10px", // Button is 10px from the navbar when closed
  // };

  return (
    <div>
      <header className="header">
        <div className="nav-container">
          <NavigationBar isOpen={isOpen} />
          <button
            className={`ql-btn ${isOpen ? "open" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            Quick Links <span className="arrow">{"▼"}</span>
          </button>
        </div>
        <div className="container">
          <div className="header-textbox">
            <h1 className="h1">
              <div>Hi, I'm Samar Kansal</div>
              <span>A </span>
              <Typewriter
                options={{
                  strings: [
                    "Full-Stack Developer",
                    "Database Manager",
                    "Fast Learner",
                  ],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: "custom-typewriter",
                }}
              />
            </h1>

            <p className="header-text">
              Self-driven, quick starter, passionate programmer with a curious
              mind who enjoys solving complex and challenging real-world
              problems.
            </p>

            <div className="header-btns">
              <a href="#contact" className="btn btn-cta">
                Contact me
              </a>
              <a href="#projects" className="btn btn-secondary">
                See my work
              </a>
            </div>
          </div>
        </div>
        <div className="theme-btn-cont">
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            onChange={toggleTheme}
            checked={theme == "dark"}
          />
          <label htmlFor="checkbox" className="checkbox-label">
            <i className="fas fa-moon"></i>
            <i className="fas fa-sun"></i>
            <span className="ball"></span>
          </label>
        </div>
      </header>
      <main>
        <section className="client" id="about">
          <div className="container">
            <h2 className="h2">About me</h2>
            <div className="about-text-container">
              <p>
                I'm currently pursuing a Master’s in Computer Science at
                Virginia Tech, with an anticipated graduation in December 2024.
                As a current Software Developer with Virginia Tech's Division of
                IT and with prior experience at ServiceNow and AlphaICs, I've
                developed strong skills in JavaScript, React, MySQL and JAVA.
                I'm seeking software engineering intern/co-op positions starting
                May 2024 and open to full-time roles from January 2025.
              </p>
              <div>
                <a
                  href="Samar_Kansal_Resume.pdf"
                  target="_blank"
                  className="btn btn-cta"
                >
                  View CV
                </a>
                <a
                  href="Samar_Kansal_Resume.pdf"
                  download="Samar_Kansal_Resume.pdf"
                  className="btn btn-secondary"
                >
                  Download CV
                </a>
                <strong href="#" className="hire-alert">
                  <span className="indicator"></span>
                  Available for hire
                </strong>
              </div>
            </div>
          </div>
        </section>
        <section className="work" id="projects">
          <div className="container">
            <h2 className="h2">Projects</h2>
            <div className="work-boxes">
              <div className="work-box">
                <div className="work-textbox">
                  <h3 className="h3">Attendify</h3>

                  <p className="work-text">
                    Meeting scheduler and QR based attendance management system
                  </p>

                  <ol className="work-technologies">
                    <li>Vue.js</li>
                    <li>Node</li>
                    <li>MongoDB</li>
                    <li>Express</li>
                    <li>Pinia</li>
                  </ol>

                  <div className="work-links">
                    <div>
                      <a
                        href="https://github.com/samarkansal/attendify"
                        target="_blank"
                        rel="noopener"
                        className="link"
                      >
                        Explore this project
                      </a>
                      <a
                        href="https://github.com/samarkansal/attendify"
                        target="_blank"
                        rel="noopener"
                        title="Source code"
                      >
                        <img src={githubIcon} alt="Attendify" loading="lazy" />
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://www.youtube.com/watch?v=KfypQMR2_yM"
                        target="_blank"
                        rel="noopener"
                        className="link"
                      >
                        View Demo
                      </a>
                      <a
                        href="https://www.youtube.com/watch?v=KfypQMR2_yM"
                        target="_blank"
                        rel="noopener"
                        title="Source code"
                      >
                        <img src={youtubeIcon} alt="Attendify" loading="lazy" />
                      </a>
                    </div>
                  </div>
                </div>

                <picture className="work-img">
                  <img loading="lazy" src={AttendifyHome} alt="Carcool Home" />
                </picture>
              </div>
              <div className="work-box">
                <div className="work-textbox">
                  <h3 className="h3">CarCool</h3>

                  <p className="work-text">
                    A carpooling solution that leverages machine learning to
                    match drivers and riders based on vibe scores, ensuring
                    compatibility through shared interests.
                  </p>
                  <ol className="work-technologies">
                    <li>React</li>
                    <li>FastAPI</li>
                    <li>Google Maps</li>
                    <li>MongoDB Geospatial</li>
                  </ol>
                  <div className="work-links">
                    <div>
                      <a
                        href="https://github.com/samarkansal/app-carcool-client"
                        target="_blank"
                        rel="noopener"
                        className="link"
                      >
                        Explore this project
                      </a>

                      <a
                        href="https://github.com/samarkansal/app-carcool-client"
                        target="_blank"
                        rel="noopener"
                        title="Source code"
                      >
                        <img src={githubIcon} alt="GitHub" loading="lazy" />
                      </a>
                    </div>
                  </div>
                </div>
                <picture className="work-img">
                  <img
                    loading="lazy"
                    src={carcoolHome}
                    alt="portfolio template"
                  />
                </picture>
              </div>
              <div className="work-box">
                <div className="work-textbox">
                  <h3 className="h3">Ducky</h3>

                  <p className="work-text">
                    An advanced AI-driven coding assistant in leveraging
                    fine-tuned large language models, with AutoGen framework to
                    ensure the generation of optimal code solutions.
                  </p>
                  <ol className="work-technologies">
                    <li>Open-source LLMs</li>
                    <li>Autogen</li>
                    <li>Python</li>
                    <li>Streamlit</li>
                  </ol>
                  <div className="work-links">
                    <div>
                      <a
                        href="https://github.com/samarkansal/ducky"
                        target="_blank"
                        rel="noopener"
                        className="link"
                      >
                        Explore this project
                      </a>
                      <a
                        href="https://github.com/samarkansal/ducky"
                        target="_blank"
                        rel="noopener"
                        title="Source code"
                      >
                        <img src={githubIcon} alt="GitHub" loading="lazy" />
                      </a>
                    </div>
                  </div>
                </div>
                <picture className="work-img">
                  <img loading="lazy" src={duckyHome} alt="contribute dev" />
                </picture>
              </div>
            </div>
          </div>
        </section>
        <section className="skills">
          <div className="container">
            <h2 className="h2" id="skills">
              Skills
            </h2>
            <div className="skills-imgs">
              <img
                src={react}
                alt="React"
                className="skills-img"
                loading="lazy"
                title="React"
              />
              <img
                src={svelte}
                alt="Svelte"
                className="skills-img"
                loading="lazy"
                title="Svelte"
              />
              <img
                src={typescript}
                alt="Typescript"
                className="skills-img"
                loading="lazy"
                title="Typescript"
              />
              <img
                src={a11y}
                alt="Accessibility"
                className="skills-img"
                loading="lazy"
                title="Web Accessibility"
              />
              <img
                src={shell}
                alt="Shell"
                className="skills-img"
                loading="lazy"
                title="Shell"
              />
              <img
                src={nextjs}
                alt="NextJS"
                className="skills-img"
                loading="lazy"
                title="NextJS"
              />
              <img
                src={graphql}
                alt="Graph Ql"
                className="skills-img"
                loading="lazy"
                title="Graph QL"
              />
              <img
                src={git}
                alt="Git"
                className="skills-img"
                loading="lazy"
                title="Git"
              />
              <img
                src={html}
                alt="CSS"
                className="skills-img"
                loading="lazy"
                title="CSS"
              />
              <img
                src={js}
                alt="JavaScript"
                className="skills-img"
                loading="lazy"
                title="JavaScript"
              />
            </div>
          </div>
        </section>
        <section className="contact">
          <div className="container">
            <h2 className="h2" id="contact">
              Send Message
            </h2>
            <div className="contact-content">
              <div className="contact-textbox">
                <strong href="#" className="hire-alert">
                  <span className="indicator"></span>
                  Available for hire
                </strong>
                <p className="contact-text">
                  As a software engineer, I construct web interfaces and design
                  systems with a special love for accessibility and the
                  performance. I tend to code things from scratch and enjoy
                  bringing ideas to life.
                </p>
                <p className="contact-text">
                  I'm seeking software engineering intern/co-op positions
                  starting May 2024 and open to full-time roles from January
                  2025.
                </p>
                <img
                  src={portrait}
                  alt="Samar Kansal"
                  className="signatures"
                  loading="lazy"
                />
              </div>
              <form action="#" className="contact-form">
                <div className="form-field">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" id="name" required />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    inputMode="email"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="message">How can I help you?</label>
                  <textarea name="message" id="message" required></textarea>
                </div>
                <button type="submit" className="btn btn-cta">
                  Send
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
