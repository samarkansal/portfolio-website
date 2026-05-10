import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import { FaAws } from "react-icons/fa";
import "./App.css";

import githubIcon from "./assets/images/social-links/github.svg";
import phoneIcon from "./assets/images/social-links/phone.png";
import emailIcon from "./assets/images/social-links/email.png";
import linkedinIcon from "./assets/images/social-links/linkedin.svg";
import youtubeIcon from "./assets/images/social-links/youtube.svg";
import AttendifyHome from "./assets/images/work/Attendify-home.png";
import carcoolHome from "./assets/images/work/Carcool-home.png";
import duckyHome from "./assets/images/work/Ducky-home.webp";
import avatar from "./assets/images/work/avatar.png";
import servicenowLogo from "./assets/images/companies/servicenow.svg";
import vtLogo from "./assets/images/companies/vt.jpg";
import alphaicsLogo from "./assets/images/companies/alphaics.avif";

function App() {
  const [theme, setTheme] = useState("dark");
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "0px 0px -55% 0px", threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div>
      <header className="header">
        <div className="nav-container">
          <NavigationBar isOpen={isOpen} activeSection={activeSection} />
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
              <div>Hi, I&apos;m Samar Kansal</div>
              <Typewriter
                options={{
                  strings: [
                    "A Software Development Engineer",
                    "A Distributed Systems Engineer",
                    "A Problem Solver",
                  ],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: "custom-typewriter",
                }}
              />
            </h1>

            <p className="header-text">
              Software engineer with 4+ years designing and shipping backend
              systems that handle millions of daily requests across distributed,
              production environments. Enjoys the hard problems in scale,
              reliability, and real-time data.
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
            checked={theme === "dark"}
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
            <p className="section-eyebrow">Who I am</p>
            <h2 className="h2">About me</h2>
            <div className="about-text-container">
              <div className="about-text-side">
                <p className="p-avt-text">
                  I&apos;ve designed real-time WebSocket pub/sub systems serving
                  millions of concurrent connections, built serverless ML
                  orchestration pipelines processing 50k+ daily requests at p99
                  under 3s, and architected data infrastructure handling
                  hundreds of billions of records.
                  <br />
                  <br />
                  4+ years across Amazon, ServiceNow, and Virginia Tech.
                  Currently an SDE at Amazon building backend systems for a
                  managed event API service.
                  <br />
                  <br />
                  M.Eng. Computer Science, Virginia Tech · AWS Certified
                  Solutions Architect &amp; Developer
                </p>
                <div className="about-btns">
                  <a
                    href="Samar_Kansal_Resume.pdf"
                    target="_blank"
                    className="btn btn-cta"
                  >
                    View Resume
                  </a>
                  <a
                    href="Samar_Kansal_Resume.pdf"
                    download="Samar_Kansal_Resume.pdf"
                    className="btn btn-secondary"
                  >
                    Download
                  </a>
                </div>
              </div>
              <div className="about-avatar-side">
                <img src={avatar} className="avatar-img" alt="Samar Kansal" />
              </div>
            </div>
          </div>
        </section>
        <section className="experience" id="experience">
          <div className="container">
            <p className="section-eyebrow">Where I&apos;ve worked</p>
            <h2 className="h2">Experience</h2>
            <div className="experience-timeline">
              <div className="exp-item">
                <div className="exp-header">
                  <div className="company-badge badge-amazon">
                    <FaAws />
                  </div>
                  <div className="exp-header-main">
                    <div className="exp-title-block">
                      <h3 className="h3 exp-role">
                        Software Development Engineer
                      </h3>
                      <span className="exp-company">
                        Amazon · Washington, D.C.
                      </span>
                    </div>
                    <span className="exp-date">
                      <span className="current-dot" /> May 2025 – Present
                    </span>
                  </div>
                </div>
                <ul className="exp-bullets">
                  <li>
                    Built Java microservices and real-time pub/sub
                    infrastructure for AWS AppSync, a managed GraphQL/Event API
                    handling millions of concurrent WebSocket connections across
                    34 regions on EC2, SQS, DynamoDB, and NLB/ALB in a
                    fault-isolated multi-cell architecture.
                  </li>
                  <li>
                    Designed and built a serverless Execution Service from
                    scratch processing 50k+ daily pipeline/ML orchestration
                    requests with p99 latency under 3s at 99.9% uptime, serving
                    12 teams.
                  </li>
                  <li>
                    Engineered core components of CMOF, a centralized ML
                    platform for 20+ models, cutting production time by 60% and
                    deployment cycles from 2 weeks to 2 days through automated
                    IaC and CI/CD pipelines.
                  </li>
                  <li>
                    Architected a high-throughput data pipeline orchestrating
                    800B+ record datasets, migrating legacy Redshift queries
                    into a centralized feature store with automated validation
                    and monitoring.
                  </li>
                  <li>
                    Built a Python SDK that automates ML image builds and
                    artifact packaging, letting engineers hot-deploy local code
                    from notebooks directly to cloud for rapid prototyping.
                  </li>
                </ul>
              </div>

              <div className="exp-item">
                <div className="exp-header">
                  <div className="company-badge badge-servicenow">
                    <img src={servicenowLogo} alt="ServiceNow" />
                  </div>
                  <div className="exp-header-main">
                    <div className="exp-title-block">
                      <h3 className="h3 exp-role">Software Engineer 1–2</h3>
                      <span className="exp-company">
                        ServiceNow · Hyderabad, India
                      </span>
                    </div>
                    <span className="exp-date">Aug 2020 – Dec 2022</span>
                  </div>
                </div>
                <ul className="exp-bullets">
                  <li>
                    Architected REST and GraphQL APIs powering the Service
                    Operations Workspace for ITSM/ITOM use cases, serving 5M+
                    users with 2M+ daily transactions at sub-millisecond MySQL
                    latency.
                  </li>
                  <li>
                    Built a multi-channel communication platform for on-call and
                    incident management, integrating Twilio, Zoom, and Microsoft
                    Teams to automate 10K+ daily alerts with 99.9% uptime.
                  </li>
                  <li>
                    Developed a DevOps/SRE management app using React, GraphQL,
                    and MySQL with backend integrations for AWS and Azure to
                    automate alerts and incident creation based on user-defined
                    rules.
                  </li>
                </ul>
              </div>

              <div className="exp-item">
                <div className="exp-header">
                  <div className="company-badge badge-servicenow">
                    <img src={servicenowLogo} alt="ServiceNow" />
                  </div>
                  <div className="exp-header-main">
                    <div className="exp-title-block">
                      <h3 className="h3 exp-role">Software Developer Intern</h3>
                      <span className="exp-company">
                        ServiceNow · Hyderabad, India
                      </span>
                    </div>
                    <span className="exp-date">Jul 2019 – Dec 2019</span>
                  </div>
                </div>
                <ul className="exp-bullets">
                  <li>
                    Enhanced ITSM apps for 15K+ enterprises using JavaScript,
                    GlideRecord, jQuery, and GlideAjax, improving query
                    performance by 25%.
                  </li>
                  <li>
                    Built a React calendar component adopted by 30+ teams;
                    achieved 85% test coverage via Selenium and Jenkins CI/CD.
                  </li>
                </ul>
              </div>

              <div className="exp-item">
                <div className="exp-header">
                  <div className="company-badge badge-vt">
                    <img src={vtLogo} alt="Virginia Tech" />
                  </div>
                  <div className="exp-header-main">
                    <div className="exp-title-block">
                      <h3 className="h3 exp-role">Software Developer</h3>
                      <span className="exp-company">
                        Virginia Tech: Division of IT · Blacksburg, VA
                      </span>
                    </div>
                    <span className="exp-date">Jan 2023 – Apr 2025</span>
                  </div>
                </div>
                <ul className="exp-bullets">
                  <li>
                    Built and deployed a Spring Boot + React equipment-loaning
                    platform for 50K+ students, containerized with Docker and
                    orchestrated on Kubernetes.
                  </li>
                  <li>
                    Migrated 500K+ users from Gmail to Outlook, building secure
                    GraphQL + Angular components integrated with Microsoft Azure
                    APIs via OAuth 2.0.
                  </li>
                </ul>
              </div>

              <div className="exp-item">
                <div className="exp-header">
                  <div className="company-badge badge-alphaics">
                    <img src={alphaicsLogo} alt="AlphaICs" />
                  </div>
                  <div className="exp-header-main">
                    <div className="exp-title-block">
                      <h3 className="h3 exp-role">Software Developer Intern</h3>
                      <span className="exp-company">
                        AlphaICs · Bangalore, India
                      </span>
                    </div>
                    <span className="exp-date">May 2019 – Jun 2019</span>
                  </div>
                </div>
                <ul className="exp-bullets">
                  <li>
                    Created custom ML operations for TensorFlow in C++,
                    achieving 30% faster inference on edge devices.
                  </li>
                  <li>
                    Implemented parallel programming techniques using OpenMP and
                    CUDA, reducing computation by 3x for Molecular Dynamics
                    simulations.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="work" id="projects">
          <div className="container">
            <p className="section-eyebrow">What I&apos;ve built</p>
            <h2 className="h2">Projects</h2>
            <div className="work-boxes">
              <div className="work-box">
                <div className="work-textbox">
                  <h3 className="h3">Attendify</h3>

                  <p className="work-text">
                    Full-stack attendance platform with a Vue.js SPA frontend
                    and a Node/Express REST backend backed by MongoDB. QR code
                    generation is server-side and session-scoped; Pinia manages
                    client state across meeting scheduling and real-time
                    check-in flows without page reloads.
                  </p>

                  <ol className="work-technologies">
                    <li>Vue.js</li>
                    <li>Node / Express</li>
                    <li>MongoDB</li>
                    <li>Pinia</li>
                    <li>REST API</li>
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
                  <img
                    loading="lazy"
                    src={AttendifyHome}
                    alt="Attendify Home"
                  />
                </picture>
              </div>
              <div className="work-box">
                <div className="work-textbox">
                  <h3 className="h3">CarCool</h3>

                  <p className="work-text">
                    Event-driven carpooling platform built on a microservices
                    architecture. Kafka handles real-time ride notifications
                    between decoupled services; MongoDB geospatial queries power
                    sub-second driver matching; a FastAPI ML service scores
                    driver-rider compatibility from profile signals.
                  </p>
                  <ol className="work-technologies">
                    <li>Kafka</li>
                    <li>FastAPI</li>
                    <li>MongoDB Geospatial</li>
                    <li>React</li>
                    <li>Google Maps</li>
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
                    <div>
                      <a
                        href="https://youtu.be/xfHWfBd7NY4"
                        target="_blank"
                        rel="noopener"
                        className="link"
                      >
                        View Demo
                      </a>
                      <a
                        href="https://youtu.be/xfHWfBd7NY4"
                        target="_blank"
                        rel="noopener"
                        title="Source code"
                      >
                        <img src={youtubeIcon} alt="YouTube" loading="lazy" />
                      </a>
                    </div>
                  </div>
                </div>
                <picture className="work-img">
                  <img loading="lazy" src={carcoolHome} alt="CarCool Home" />
                </picture>
              </div>
              <div className="work-box">
                <div className="work-textbox">
                  <h3 className="h3">Ducky</h3>

                  <p className="work-text">
                    Multi-agent code generation system orchestrated with
                    AutoGen. A planner agent decomposes problems into subtasks,
                    dispatches them to fine-tuned open-source LLMs, and a critic
                    agent validates and merges outputs before returning a final
                    solution — reducing hallucination through structured
                    inter-agent critique.
                  </p>
                  <ol className="work-technologies">
                    <li>AutoGen</li>
                    <li>Open-source LLMs</li>
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
                  <img loading="lazy" src={duckyHome} alt="Ducky" />
                </picture>
              </div>
            </div>
          </div>
        </section>
        <section className="skills" id="skills">
          <div className="container">
            <p className="section-eyebrow">What I work with</p>
            <h2 className="h2">Skills</h2>
            <div className="skills-categories">
              <div className="skill-category">
                <h4 className="skill-category-title">Languages</h4>
                <div className="skill-tags">
                  {[
                    "Java",
                    "Python",
                    "JavaScript / TypeScript",
                    "SQL",
                    "C / C++",
                    "Kotlin",
                  ].map((s) => (
                    <span className="skill-tag" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h4 className="skill-category-title">Backend & APIs</h4>
                <div className="skill-tags">
                  {[
                    "Spring Boot",
                    "Node.js",
                    "REST",
                    "GraphQL",
                    "gRPC",
                    "WebSockets",
                    "Microservices",
                    "Serverless",
                    "FastAPI",
                    "Event-driven Architecture",
                  ].map((s) => (
                    <span className="skill-tag" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h4 className="skill-category-title">Cloud & Infrastructure</h4>
                <div className="skill-tags">
                  {[
                    "AWS (Certified)",
                    "Lambda",
                    "DynamoDB",
                    "SQS / SNS",
                    "Step Functions",
                    "SageMaker",
                    "Kinesis",
                    "Pub/Sub Architecture",
                    "Serverless",
                    "Multi-region Deployment",
                  ].map((s) => (
                    <span className="skill-tag" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h4 className="skill-category-title">Data & Messaging</h4>
                <div className="skill-tags">
                  {[
                    "Kafka",
                    "PySpark",
                    "Databricks",
                    "Redis",
                    "MySQL",
                    "PostgreSQL",
                    "MongoDB",
                    "Redshift",
                  ].map((s) => (
                    <span className="skill-tag" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h4 className="skill-category-title">DevOps & AI/ML</h4>
                <div className="skill-tags">
                  {[
                    "Docker",
                    "Kubernetes",
                    "CI/CD",
                    "Terraform",
                    "IaC",
                    "Canary Deployments",
                    "MLOps",
                    "LLM Integration",
                    "Autogen",
                  ].map((s) => (
                    <span className="skill-tag" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="education" id="education">
          <div className="container">
            <p className="section-eyebrow">Where I studied</p>
            <h2 className="h2">Education</h2>
            <div className="edu-grid">
              <div className="edu-item">
                <div className="company-badge badge-vt">VT</div>
                <div className="edu-info">
                  <span className="edu-degree">M.Eng. Computer Science</span>
                  <span className="edu-school">
                    Virginia Tech · Blacksburg, VA
                  </span>
                </div>
                <span className="edu-year">2024</span>
              </div>
              <div className="edu-item">
                <div className="company-badge badge-bits">BITS</div>
                <div className="edu-info">
                  <span className="edu-degree">
                    B.E. Electronics &amp; Communication
                  </span>
                  <span className="edu-school">
                    BITS Pilani · Hyderabad, India
                  </span>
                </div>
                <span className="edu-year">2020</span>
              </div>
            </div>
          </div>
        </section>
        <section className="contact">
          <div className="container">
            <p className="section-eyebrow">Get in touch</p>
            <h2 className="h2" id="contact">
              Let&apos;s Connect
            </h2>
            <div className="contact-content">
              <div className="contact-textbox">
                <p className="contact-text">
                  Software engineer specializing in distributed backend systems,
                  real-time data pipelines, and cloud-native architecture on
                  AWS.
                </p>
                <p className="contact-text">
                  Feel free to reach out — always happy to connect with
                  engineers and builders.
                </p>
              </div>
              <div className="connect-box">
                <a target="_blank" rel="noopener" title="Source code">
                  <img src={phoneIcon} alt="SK" loading="lazy" />
                  +1(826)202-0059
                </a>
                <a
                  href="mailto:samar.kansal24@gmail.com"
                  rel="noopener"
                  title="Email"
                >
                  <img src={emailIcon} alt="SK" loading="lazy" />
                  samar.kansal24@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/samar-kansal-015951150/"
                  target="_blank"
                  rel="noopener"
                  title="Source code"
                >
                  <img src={linkedinIcon} alt="SK" loading="lazy" />
                  linkedin.com/samarkansal
                </a>
                <a
                  href="https://github.com/samarkansal/"
                  target="_blank"
                  rel="noopener"
                  title="Source code"
                >
                  <img src={githubIcon} alt="SK" loading="lazy" />
                  github.com/samarkansal
                </a>
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
