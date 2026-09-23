import { useEffect, useState } from "react";
import portfolioData from "./portfolioData";

const Icon = ({ children, size = 18, strokeWidth = 1.8 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const ArrowUpRight = ({ size = 16 }) => (
  <Icon size={size}>
    <path d="M7 17 17 7" />
    <path d="M7 7h10v10" />
  </Icon>
);

const ArrowRight = ({ size = 16 }) => (
  <Icon size={size}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </Icon>
);

const MailIcon = ({ size = 18 }) => (
  <Icon size={size}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </Icon>
);

const PhoneIcon = ({ size = 18 }) => (
  <Icon size={size}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
  </Icon>
);

const GithubIcon = ({ size = 18 }) => (
  <Icon size={size} strokeWidth={1.6}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.2-.35 6.5-1.6 6.5-7A5.4 5.4 0 0 0 19 3.77 5 5 0 0 0 18.91.5S17.73.15 15 2a13.4 13.4 0 0 0-6 0C6.27.15 5.09.5 5.09.5A5 5 0 0 0 5 3.77a5.4 5.4 0 0 0-1.5 3.73c0 5.4 3.3 6.65 6.5 7A4.8 4.8 0 0 0 9 18v4" />
    <path d="M9 18c-4.5 2-5-2-7-2" />
  </Icon>
);

const LinkedinIcon = ({ size = 18 }) => (
  <Icon size={size}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </Icon>
);

const MenuIcon = ({ size = 20 }) => (
  <Icon size={size}>
    <path d="M4 6h16" />
    <path d="M4 12h16" />
    <path d="M4 18h16" />
  </Icon>
);

const CloseIcon = ({ size = 20 }) => (
  <Icon size={size}>
    <path d="m6 6 12 12" />
    <path d="m18 6-12 12" />
  </Icon>
);

const CheckIcon = ({ size = 22 }) => (
  <Icon size={size} strokeWidth={2}>
    <path d="m5 12 4 4L19 6" />
  </Icon>
);

const GraduationIcon = ({ size = 20 }) => (
  <Icon size={size}>
    <path d="M22 10 12 5 2 10l10 5 10-5Z" />
    <path d="M6 12.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-3.5" />
    <path d="M22 10v6" />
  </Icon>
);

const CertificateIcon = ({ size = 18 }) => (
  <Icon size={size}>
    <circle cx="12" cy="8" r="5" />
    <path d="m9 13-1 8 4-2 4 2-1-8" />
  </Icon>
);

const BriefcaseIcon = ({ size = 18 }) => (
  <Icon size={size}>
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <path d="M3 12h18" />
  </Icon>
);

const DatabaseIcon = ({ size = 18 }) => (
  <Icon size={size}>
    <ellipse cx="12" cy="5" rx="8" ry="3" />
    <path d="M4 5v7c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
    <path d="M4 12v7c0 1.66 3.58 3 8 3s8-1.34 8-3v-7" />
  </Icon>
);

const SparklesIcon = ({ size = 18 }) => (
  <Icon size={size}>
    <path d="m12 3-1.2 4.3L7 8.5l3.8 1.2L12 14l1.2-4.3L17 8.5l-3.8-1.2L12 3Z" />
    <path d="m19 14-.7 2.3L16 17l2.3.7L19 20l.7-2.3L22 17l-2.3-.7L19 14Z" />
    <path d="m5 15-.6 2L2 18l2.4 1L5 21l.6-2L8 18l-2.4-1L5 15Z" />
  </Icon>
);

function App() {
  const { personal, summary, focusAreas, skills, projects, education, certifications, additionalSkills, languages } =
    portfolioData;

  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [scrollProgress, setScrollProgress] = useState(0);

  const [formStatus, setFormStatus] = useState("");
  const [formSending, setFormSending] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const navigation = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Certs", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      setScrollProgress(
        documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0
      );

      const sections = [
        "about",
        "skills",
        "education",
        "projects",
        "certifications",
        "contact",
      ];

      let current = "about";

      for (const id of sections) {
        const element = document.getElementById(id);

        if (element) {
          const top = element.getBoundingClientRect().top;

          if (top <= 180) {
            current = id;
          }
        }
      }

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.08,
      }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href) => {
    setMobileMenu(false);

    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    if (!name || !email || !message) {
      setFormStatus("Please complete the required fields.");
      return;
    }

    setFormSending(true);
    setFormStatus("");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/palakondavishnu42@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            subject: subject || "Portfolio enquiry",
            message,

            _subject: `Portfolio enquiry from ${name}`,
            _template: "table",
            _captcha: "false",
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Message could not be sent.");
      }

      setFormSubmitted(true);
      setFormStatus("Your message has been sent successfully.");
      form.reset();
    } catch (error) {
      setFormStatus(
        "Something went wrong while sending the message. Please use the email address shown on this page."
      );
    } finally {
      setFormSending(false);
    }
  };

  const resetForm = () => {
    setFormSubmitted(false);
    setFormStatus("");
  };

  return (
    <div className="app">
      {/* =====================================================
          SCROLL PROGRESS
      ====================================================== */}

      <div
        className="scroll-progress"
        style={{
          width: `${scrollProgress}%`,
        }}
      />

      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <header className="navbar">
        <div className="container navbar-inner">
          <a
            href="#top"
            className="brand"
            onClick={(event) => {
              event.preventDefault();
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
              setMobileMenu(false);
            }}
            aria-label="Vishnu Palakonda home"
          >
            V.
          </a>

          <nav className={`nav-links ${mobileMenu ? "open" : ""}`}>
            {navigation.map((item) => {
              const id = item.href.replace("#", "");

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`nav-link ${
                    activeSection === id ? "active" : ""
                  }`}
                  onClick={(event) => {
                    event.preventDefault();
                    scrollToSection(item.href);
                  }}
                >
                  {item.label}
                </a>
              );
            })}

            <a
              href="#contact"
              className="nav-hire"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("#contact");
              }}
            >
              Hire Me
              <ArrowUpRight size={14} />
            </a>
          </nav>

          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenu((value) => !value)}
            aria-label="Toggle navigation"
            aria-expanded={mobileMenu}
          >
            {mobileMenu ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>

      {/* =====================================================
          HERO
      ====================================================== */}

      <main id="top">
        <section className="hero">
          <div className="hero-glow" />
          <div className="grid-overlay" />

          <div className="ambient-light orange ambient-one" />
          <div className="ambient-light orange ambient-two" />
          <div className="ambient-light yellow ambient-three" />

          <div className="glow-line one" />
          <div className="glow-line two" />

          <div className="glow-dot one" />
          <div className="glow-dot two" />

          <div className="container hero-inner">
            <div className="hero-badge reveal">
              <span className="hero-badge-dot" />
              OPEN TO OPPORTUNITIES
            </div>

            <h1 className="hero-title reveal">
              Hi, I&apos;m{" "}
              <span className="gradient">
                {personal.name}
              </span>
            </h1>

            <p className="hero-subtitle reveal">
              <strong>Aspiring Data Scientist &amp; Analyst</strong>
              <br />
              Building data-driven solutions with Python, SQL, statistics,
              machine learning, and analytical thinking.
            </p>

            <div className="hero-actions reveal">
              <a
                href="#projects"
                className="btn btn-primary"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection("#projects");
                }}
              >
                View Projects
                <ArrowRight size={16} />
              </a>

              <a
                href="#contact"
                className="btn btn-secondary"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection("#contact");
                }}
              >
                Hire Me
                <ArrowUpRight size={16} />
              </a>

              <a
                href="/vishnu-portfolio/Vishnu-Palakonda-Resume.pdf"
                className="btn btn-secondary"
                target="_blank"
                rel="noreferrer"
              >
                Resume
                <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="hero-socials reveal">
              <a
                href={personal.github}
                className="social-link"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <GithubIcon />
              </a>

              <a
                href={personal.linkedin}
                className="social-link"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>

              <a
                href={`mailto:${personal.email}`}
                className="social-link"
                aria-label="Email"
              >
                <MailIcon />
              </a>
            </div>

            <div className="hero-bottom reveal">
              <div className="hero-stat">
                <div className="hero-stat-value">Python</div>
                <div className="hero-stat-label">
                  Primary Language
                </div>
              </div>

              <div className="hero-stat">
                <div className="hero-stat-value">SQL</div>
                <div className="hero-stat-label">
                  Data &amp; Database
                </div>
              </div>

              <div className="hero-stat">
                <div className="hero-stat-value">
                  Statistics
                </div>
                <div className="hero-stat-label">
                  Analytical Foundation
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            ABOUT
        ====================================================== */}

        <section id="about" className="section section-dark">
          <div className="ambient-light orange ambient-two" />

          <div className="container">
            <div className="about-grid">
              <div className="profile-card reveal">
                <div className="profile-orbit" />

                <div className="profile-letter">V.</div>
              </div>

              <div>
                <div className="section-heading reveal">
                  <div className="section-eyebrow">
                    About Me
                  </div>

                  <h2 className="section-title">
                    Turning data into{" "}
                    <span className="gradient">
                      useful insight.
                    </span>
                  </h2>
                </div>

                <p className="about-copy reveal">
                  {summary}
                </p>

                <p className="about-copy reveal">
                  My current direction combines statistical thinking,
                  data analysis, database technologies, and machine
                  learning to build practical data-driven applications.
                  I focus on understanding the data first and then
                  translating the analysis into useful conclusions.
                </p>

                <div className="about-highlights reveal">
                  <div className="highlight-card">
                    <div className="highlight-title">
                      Data Analysis
                    </div>

                    <div className="highlight-description">
                      Cleaning, exploring, interpreting, and
                      communicating meaningful patterns from data.
                    </div>
                  </div>

                  <div className="highlight-card">
                    <div className="highlight-title">
                      Statistical Thinking
                    </div>

                    <div className="highlight-description">
                      Hypothesis testing, confidence intervals,
                      correlation analysis, and anomaly detection.
                    </div>
                  </div>

                  <div className="highlight-card">
                    <div className="highlight-title">
                      Database Skills
                    </div>

                    <div className="highlight-description">
                      SQL and PostgreSQL for structured data,
                      querying, analysis, and database workflows.
                    </div>
                  </div>

                  <div className="highlight-card">
                    <div className="highlight-title">
                      Machine Learning
                    </div>

                    <div className="highlight-description">
                      Developing practical knowledge in predictive
                      modeling and machine-learning workflows.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SKILLS
        ====================================================== */}

        <section id="skills" className="section section-soft">
          <div className="ambient-light orange ambient-one" />

          <div className="container">
            <div className="section-heading reveal">
              <div className="section-eyebrow">
                Technical Skills
              </div>

              <h2 className="section-title">
                Tools I use to{" "}
                <span className="gradient">
                  solve problems.
                </span>
              </h2>

              <p className="section-description">
                A growing technical toolkit focused on programming,
                data analysis, databases, statistics, visualization,
                machine learning, and practical development.
              </p>
            </div>

            <div className="skills-grid">
              {Object.entries(skills).map(
                ([category, items], index) => (
                  <div
                    className="skill-card reveal"
                    key={category}
                    style={{
                      transitionDelay: `${index * 60}ms`,
                    }}
                  >
                    <h3 className="skill-card-title">
                      {category
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, (char) =>
                          char.toUpperCase()
                        )}
                    </h3>

                    <div className="skill-tags">
                      {items.map((skill) => (
                        <span
                          className="skill-tag"
                          key={skill}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>

            <div className="profile-grid" style={{ marginTop: 18 }}>
              <div className="info-panel reveal">
                <div className="info-panel-title">
                  Core Focus Areas
                </div>

                <div className="info-list">
                  {focusAreas.map((item) => (
                    <span
                      className="info-pill"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="info-panel reveal">
                <div className="info-panel-title">
                  Professional Strengths
                </div>

                <div className="info-list">
                  {additionalSkills.map((item) => (
                    <span
                      className="info-pill"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            EDUCATION
        ====================================================== */}

        <section id="education" className="section section-dark">
          <div className="ambient-light orange ambient-one" />
          <div className="ambient-light yellow ambient-three" />

          <div className="container">
            <div className="section-heading reveal">
              <div className="section-eyebrow">
                Education
              </div>

              <h2 className="section-title">
                Academic{" "}
                <span className="gradient">
                  Journey.
                </span>
              </h2>

              <p className="section-description">
                My academic background combines information
                technology, quantitative subjects, programming,
                databases, statistics, and analytical problem solving.
              </p>
            </div>

            <div className="timeline">
              {education.map((item, index) => (
                <div
                  className="timeline-item reveal"
                  key={`${item.institution}-${index}`}
                >
                  <div className="timeline-marker">
                    <GraduationIcon size={20} />
                  </div>

                  <div className="timeline-card">
                    <div className="timeline-period">
                      {item.period}
                    </div>

                    <h3 className="timeline-degree">
                      {item.degree}
                    </h3>

                    <div className="timeline-institution">
                      {item.institution}
                    </div>

                    <div className="timeline-location">
                      {item.location}
                    </div>

                    <p className="education-description">
                      {index === 0 &&
                        "Currently pursuing a B.Tech in Information Technology with an academic focus that supports my development in programming, databases, SQL, statistics, data structures, and data science. This foundation complements my practical work with Python and data analysis."}

                      {index === 1 &&
                        "Completed the Mathematics, Physics, and Chemistry stream with a strong quantitative foundation. The curriculum developed mathematical reasoning, analytical thinking, scientific understanding, and structured problem-solving skills."}

                      {index === 2 &&
                        "Completed secondary school education in English Medium, building the foundational academic knowledge and learning discipline that supported my progression into higher education and information technology."}
                    </p>

                    <div className="timeline-result">
                      {item.result}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            PROJECTS
        ====================================================== */}

        <section id="projects" className="section section-soft">
          <div className="ambient-light orange ambient-two" />

          <div className="container">
            <div className="section-heading reveal">
              <div className="section-eyebrow">
                Selected Projects
              </div>

              <h2 className="section-title">
                Built with{" "}
                <span className="gradient">
                  data in mind.
                </span>
              </h2>

              <p className="section-description">
                Practical projects demonstrating statistical analysis,
                data processing, SQL, visualization, machine learning,
                and analytical problem solving.
              </p>
            </div>

            <div className="projects-list">
              {projects.map((project, index) => (
                <article
                  className="project-card reveal"
                  key={project.id}
                >
                  <div className="project-number">
                    {project.number || `0${index + 1}`}
                  </div>

                  <div className="project-content">
                    <div className="project-category">
                      {project.category}
                    </div>

                    <h3 className="project-title">
                      {project.title}
                    </h3>

                    <div className="project-subtitle">
                      {project.subtitle}
                    </div>

                    <p className="project-description">
                      {project.id === "statguard" &&
                        "A statistics-focused data analysis platform built around transaction data. It combines descriptive statistics, hypothesis testing, confidence intervals, correlation analysis, and anomaly detection to identify unusual transaction and revenue patterns."}

                      {project.id === "salary-intelligence" &&
                        "An employee salary analytics application focused on understanding salary distributions and employee-level salary patterns. The project uses Python-based data processing, visualization, and machine-learning techniques for predictive analysis."}

                      {project.id === "employee-database" &&
                        "An HR analytics solution built using SQL, PostgreSQL, and Power BI to analyze employee, salary, performance, attendance, hiring, and departmental information. The dashboard provides analytical views of payroll, workforce patterns, salary distribution, and hiring trends."}

                      {![
                        "statguard",
                        "salary-intelligence",
                        "employee-database",
                      ].includes(project.id) &&
                        project.description}
                    </p>

                    <div className="project-tech">
                      {project.technologies.map((technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      ))}
                    </div>

                    {project.analysis?.length > 0 && (
                      <div className="project-analysis">
                        {project.analysis.map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </div>
                    )}
                  </div>

                  {project.metrics?.length > 0 && (
                    <div className="project-metrics">
                      {project.metrics.map((metric) => (
                        <div
                          className="metric-box"
                          key={metric.label}
                        >
                          <div className="metric-value">
                            {metric.value}
                          </div>

                          <div className="metric-label">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            CERTIFICATIONS
        ====================================================== */}

        <section
          id="certifications"
          className="section section-dark"
        >
          <div className="ambient-light orange ambient-one" />

          <div className="container">
            <div className="section-heading reveal">
              <div className="section-eyebrow">
                Certifications
              </div>

              <h2 className="section-title">
                Continuous{" "}
                <span className="gradient">
                  learning.
                </span>
              </h2>

              <p className="section-description">
                Certifications and job simulations supporting my
                development across data science, data analysis,
                databases, and practical analytical work.
              </p>
            </div>

            <div className="cert-grid">
              {certifications.map((cert, index) => (
                <article
                  className="cert-card reveal"
                  key={`${cert.title}-${index}`}
                >
                  <div className="cert-icon">
                    <CertificateIcon />
                  </div>

                  <h3 className="cert-title">
                    {cert.title}
                  </h3>

                  <div className="cert-org">
                    {cert.organization}
                  </div>

                  <div className="cert-date">
                    {cert.date}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            PROFILE
        ====================================================== */}

        <section className="section section-soft">
          <div className="container">
            <div className="section-heading reveal">
              <div className="section-eyebrow">
                Professional Profile
              </div>

              <h2 className="section-title">
                Focused on{" "}
                <span className="gradient">
                  practical growth.
                </span>
              </h2>

              <p className="section-description">
                I am building a strong foundation for a career in
                data science and data analytics through projects,
                technical learning, and continuous problem solving.
              </p>
            </div>

            <div className="profile-grid">
              <div className="info-panel reveal">
                <div className="cert-icon">
                  <SparklesIcon />
                </div>

                <div className="info-panel-title">
                  Career Direction
                </div>

                <p
                  className="about-copy"
                  style={{ marginTop: 15 }}
                >
                  Seeking opportunities to apply Python, SQL,
                  statistics, data analysis, and machine learning
                  concepts to real-world data problems while
                  continuing to develop as a Data Scientist or
                  Data Analyst.
                </p>
              </div>

              <div className="info-panel reveal">
                <div className="cert-icon">
                  <BriefcaseIcon />
                </div>

                <div className="info-panel-title">
                  Languages
                </div>

                <div className="info-list">
                  {languages.map((language) => (
                    <span
                      className="info-pill"
                      key={language}
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTACT
        ====================================================== */}

        <section
          id="contact"
          className="section contact-section section-dark"
        >
          <div className="ambient-light orange ambient-one" />
          <div className="ambient-light orange ambient-two" />

          <div className="grid-overlay" />

          <div className="container">
            <div className="contact-grid">
              <div>
                <div className="section-heading reveal">
                  <div className="section-eyebrow">
                    Contact
                  </div>

                  <h2 className="section-title">
                    Let&apos;s build something{" "}
                    <span className="gradient">
                      meaningful.
                    </span>
                  </h2>
                </div>

                <p className="contact-copy reveal">
                  If you have an opportunity, project, internship,
                  collaboration, or data-related problem to discuss,
                  feel free to get in touch. Send a message directly
                  through the form and I&apos;ll receive the enquiry
                  by email.
                </p>

                <div className="contact-details">
                  <a
                    href={`mailto:${personal.email}`}
                    className="contact-detail reveal"
                  >
                    <span className="contact-icon">
                      <MailIcon size={16} />
                    </span>

                    <span>{personal.email}</span>
                  </a>

                  <a
                    href={`tel:${personal.phone}`}
                    className="contact-detail reveal"
                  >
                    <span className="contact-icon">
                      <PhoneIcon size={16} />
                    </span>

                    <span>{personal.phone}</span>
                  </a>

                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-detail reveal"
                  >
                    <span className="contact-icon">
                      <GithubIcon size={16} />
                    </span>

                    <span>github.com/vishnupalakonda</span>
                  </a>

                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-detail reveal"
                  >
                    <span className="contact-icon">
                      <LinkedinIcon size={16} />
                    </span>

                    <span>
                      linkedin.com/in/palakondavishnu42
                    </span>
                  </a>
                </div>
              </div>

              <div className="contact-form reveal">
                {formSubmitted ? (
                  <div className="form-success">
                    <div className="form-success-icon">
                      <CheckIcon />
                    </div>

                    <h3 className="form-success-title">
                      Message sent successfully
                    </h3>

                    <p className="form-success-text">
                      Thank you for reaching out. Your message has
                      been submitted successfully and will be
                      delivered to my email.
                    </p>

                    <button
                      type="button"
                      className="btn btn-secondary"
                      style={{ marginTop: 22 }}
                      onClick={resetForm}
                    >
                      Send Another Message
                      <ArrowRight size={15} />
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="form-grid">
                      <div className="form-field">
                        <label
                          className="form-label"
                          htmlFor="name"
                        >
                          Name *
                        </label>

                        <input
                          id="name"
                          name="name"
                          className="form-input"
                          type="text"
                          placeholder="Your name"
                          required
                        />
                      </div>

                      <div className="form-field">
                        <label
                          className="form-label"
                          htmlFor="email"
                        >
                          Email *
                        </label>

                        <input
                          id="email"
                          name="email"
                          className="form-input"
                          type="email"
                          placeholder="your@email.com"
                          required
                        />
                      </div>

                      <div className="form-field full">
                        <label
                          className="form-label"
                          htmlFor="subject"
                        >
                          Subject
                        </label>

                        <input
                          id="subject"
                          name="subject"
                          className="form-input"
                          type="text"
                          placeholder="What would you like to discuss?"
                        />
                      </div>

                      <div className="form-field full">
                        <label
                          className="form-label"
                          htmlFor="message"
                        >
                          Message *
                        </label>

                        <textarea
                          id="message"
                          name="message"
                          className="form-textarea"
                          placeholder="Tell me about the opportunity or project..."
                          required
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary form-submit"
                      disabled={formSending}
                    >
                      {formSending
                        ? "Sending..."
                        : "Send Message"}

                      {!formSending && (
                        <ArrowUpRight size={16} />
                      )}
                    </button>

                    {formStatus && (
                      <div
                        className="form-status"
                        aria-live="polite"
                      >
                        {formStatus}
                      </div>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-copy">
            © {new Date().getFullYear()}{" "}
            <span className="footer-brand">
              Vishnu Palakonda
            </span>
            . All rights reserved.
          </div>

          <div className="footer-links">
            <a
              href={personal.github}
              className="footer-link"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href={personal.linkedin}
              className="footer-link"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href={`mailto:${personal.email}`}
              className="footer-link"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
