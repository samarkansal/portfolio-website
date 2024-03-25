import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import "./App.css";

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
              <a href="#work" className="btn btn-secondary">
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
        <section className="work">
          <div className="container">
            <h2 className="h2" id="projects">
              Projects
            </h2>
            <div className="work-boxes">
              <div className="work-box">
                <div className="work-textbox">
                  <h3 className="h3">portfolio template</h3>

                  <p className="work-text">
                    A free to use, minimal and accessible portfolio template for
                    developers.
                  </p>

                  <ol className="work-technologies">
                    <li>React</li>
                    <li>Gatsby</li>
                    <li>SCSS</li>
                    <li>MDX</li>
                  </ol>

                  <div className="work-links">
                    <a
                      href="https://github.com/devsyedmohsin"
                      target="_blank"
                      rel="noopener"
                      className="link"
                    >
                      Explore this project
                    </a>

                    <a
                      href="https://github.com/devsyedmohsin"
                      target="_blank"
                      rel="noopener"
                      title="Source code"
                    >
                      <img
                        src="assets/images/social-links/github.svg"
                        alt="GitHub"
                        loading="lazy"
                      />
                    </a>
                  </div>
                </div>

                <picture className="work-img">
                  <img
                    loading="lazy"
                    src="assets/images/work/portfolio-template.webp"
                    alt="agency elevation"
                  />
                </picture>
              </div>
              <div className="work-box">
                <div className="work-textbox">
                  <h3 className="h3">agencyelevation.com</h3>

                  <p className="work-text">Website for Agency Elevation.</p>
                  <ol className="work-technologies">
                    <li>React</li>
                    <li>Gatsby</li>
                    <li>Material UI</li>
                  </ol>
                  <div className="work-links">
                    <a href="#" target="_blank" rel="noopener" className="link">
                      Explore this project
                    </a>

                    <a
                      href="http://github.com/devsyedmohsin"
                      target="_blank"
                      rel="noopener"
                      title="Source code"
                    >
                      <img
                        src="assets/images/social-links/github.svg"
                        alt="GitHub"
                        loading="lazy"
                      />
                    </a>
                  </div>
                </div>
                <picture className="work-img">
                  <img
                    loading="lazy"
                    src="assets/images/work/agency-elevation.webp"
                    alt="portfolio template"
                  />
                </picture>
              </div>
              <div className="work-box">
                <div className="work-textbox">
                  <h3 className="h3">contribute.dev</h3>

                  <p className="work-text">
                    Website for DevX A dedicated space for developer experience
                  </p>
                  <ol className="work-technologies">
                    <li>Ruby</li>
                    <li>SvelteKit</li>
                    <li>Emotion</li>
                  </ol>
                  <div className="work-links">
                    <a href="#" target="_blank" rel="noopener" className="link">
                      Explore this project
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener"
                      title="Source code"
                    >
                      <img
                        src="assets/images/social-links/github.svg"
                        alt="GitHub"
                        loading="lazy"
                      />
                    </a>
                  </div>
                </div>
                <picture className="work-img">
                  <img
                    loading="lazy"
                    src="assets/images/work/contribute-dev.webp"
                    alt="contribute dev"
                  />
                </picture>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
