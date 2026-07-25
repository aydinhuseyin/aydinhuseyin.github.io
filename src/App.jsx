import "./App.css";

const skills = [
  "Web Application Security",
  "Penetration Testing",
  "Kali Linux",
  "Nmap",
  "Wireshark",
  "Python",
  "JavaScript",
  "C / C++",
  "VMware",
  "VirtualBox",
];

const projects = [
  {
    title: "STABILITEHR",
    subtitle: "Automated Cybersecurity Company Analysis Platform",
    description:
      "A Python-based platform that discovers cybersecurity companies, analyzes their websites, classifies services, collects career and contact information, and generates Excel reports and application email templates.",
    tags: ["Python", "Automation", "OSINT", "Multithreading"],
  },
  {
    title: "Virtual Network Security Lab",
    subtitle: "Network Discovery & Security Analysis",
    description:
      "A hands-on lab environment built with VMware and Kali Linux for network discovery, port scanning, service analysis, traffic inspection and technical documentation.",
    tags: ["Kali Linux", "Nmap", "Wireshark", "VMware"],
  },
  {
    title: "OWASP Juice Shop Security Analysis",
    subtitle: "Web Application Security Testing",
    description:
      "Practical testing of common web application vulnerabilities with documented findings and remediation recommendations.",
    tags: ["OWASP", "Web Security", "Reporting"],
  },
];

const certifications = [
  "Certified Ethical Pentester",
  "Certified Application Security Manager",
  "Wireless Network Penetration Testing",
  "Practical IoT Hacking",
  "Professional English for Cybersecurity",
  "CyberOwl Penetration Testing Training",
  "Boğaziçi University Penetration Testing Training",
];

function App() {
  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <nav className="nav container">
          <a className="brand" href="#top" aria-label="Homepage">
            <img src="/bandana.png" alt="Hüseyin Aydın logo" />
            </a>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#certifications">Certifications</a>
            <a href="#contact">Contact</a>
          </div>

          <a className="nav-cta" href="/Huseyin_Aydin_CV.pdf" target="_blank" rel="noreferrer">
            Resume
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              Open to junior cybersecurity opportunities
            </div>

            <p className="hero-kicker">HELLO, I’M</p>
            <h1>Hüseyin Aydın</h1>
            <h2>
                Offensive Security
                <span className="hero-divider"> / </span>
                 Junior Penetration Tester
            </h2>

            <p className="hero-text">
              Cybersecurity graduate focused on penetration testing, vulnerability
              analysis and network security. I build practical skills through labs,
              security projects and continuous hands-on learning.
            </p>

            <div className="hero-actions">
              <a className="btn primary" href="#projects">
                View my work
              </a>
              <a
                className="btn secondary"
                href="https://github.com/aydinhuseyin"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="btn secondary"
                href="https://www.linkedin.com/in/h%C3%BCseyiinaydinn"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Profile photo">
            <div className="photo-frame">
              <img src="/profile.png" alt="Hüseyin Aydın" />
            </div>
            <div className="floating-card card-one">
              <span>Current focus</span>
              <strong>Red Team & Web Security</strong>
            </div>
            <div className="floating-card card-two">
              <span>Based in</span>
              <strong>Türkiye</strong>
            </div>
          </div>
        </section>

        <section className="section container" id="about">
          <div className="section-heading">
            <span>01</span>
            <h3>About me</h3>
          </div>

          <div className="about-grid">
            <div className="panel about-copy">
              <p>
                I graduated from Istanbul Ticaret University’s Cybersecurity
                program. My goal is to build my career in offensive security as a
                penetration tester and red team specialist.
              </p>
              <p>
                I have practical experience with Kali Linux, Nmap, Wireshark,
                virtualization technologies, network analysis and technical
                reporting. I enjoy understanding how systems fail, reproducing
                vulnerabilities safely and documenting clear remediation steps.
              </p>
            </div>

            <div className="stats-grid">
              <div className="panel stat">
                <strong>2026</strong>
                <span>Cybersecurity graduate</span>
              </div>
              <div className="panel stat">
                <strong>3</strong>
                <span>Highlighted technical projects</span>
              </div>
              <div className="panel stat">
                <strong>7+</strong>
                <span>Security certifications & trainings</span>
              </div>
              <div className="panel stat">
                <strong>Hands-on</strong>
                <span>Lab-driven learning approach</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section container">
          <div className="section-heading">
            <span>02</span>
            <h3>Technical skills</h3>
          </div>

          <div className="skills-wrap">
            {skills.map((skill) => (
              <span className="skill-chip" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="section container" id="projects">
          <div className="section-heading">
            <span>03</span>
            <h3>Featured projects</h3>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="panel project-card" key={project.title}>
                <div className="project-topline">
                  <span>0{index + 1}</span>
                  <span>PROJECT</span>
                </div>
                <h4>{project.title}</h4>
                <h5>{project.subtitle}</h5>
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section container" id="certifications">
          <div className="section-heading">
            <span>04</span>
            <h3>Certifications</h3>
          </div>

          <div className="certificate-list">
            {certifications.map((cert, index) => (
              <div className="panel certificate-item" key={cert}>
                <span className="cert-index">{String(index + 1).padStart(2, "0")}</span>
                <strong>{cert}</strong>
                <span className="cert-year">2025–2026</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section container" id="contact">
          <div className="contact-card">
            <div>
              <span className="contact-label">LET’S CONNECT</span>
              <h3>Ready to contribute, learn and grow.</h3>
              <p>
                I am interested in junior penetration testing, red team and
                application security opportunities.
              </p>
            </div>

            <div className="contact-actions">
              <a className="btn primary" href="mailto:huseyinaydinhd@gmail.com">
                Send an email
              </a>
              <a
                className="btn secondary"
                href="https://medium.com/@huseyinaydinhd"
                target="_blank"
                rel="noreferrer"
              >
                Medium
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <span>© 2026 Hüseyin Aydın</span>
        <span>Built with React</span>
      </footer>
    </div>
  );
}

export default App;
