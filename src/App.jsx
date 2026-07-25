import "./App.css";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/aydinhuseyin" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/h%C3%BCseyiinaydinn",
  },
  { label: "Medium", href: "https://medium.com/@huseyinaydinhd" },
];

const skills = [
  "Web Application Security",
  "Penetration Testing",
  "Offensive Security",
  "Kali Linux",
  "Nmap",
  "Wireshark",
  "Python",
  "JavaScript",
  "VMware",
  "Technical Reporting",
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

const timeline = [
  {
    year: "2024",
    title: "Cybersecurity Student",
    text: "Started formal cybersecurity education at Istanbul Ticaret University.",
  },
  {
    year: "2025",
    title: "IT & Digital Forensics Experience",
    text: "Built practical experience through Radisson Blu IT operations and digital forensics work.",
  },
  {
    year: "2026",
    title: "Cybersecurity Graduate",
    text: "Graduated and focused career development on penetration testing and red team operations.",
  },
];

function App() {
  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <div className="container nav">
          <a
            className="brand"
            href="#top"
            aria-label="Hüseyin Aydın homepage"
          >
            <span className="brand-mark">
              H<span>A</span>
            </span>
            <span className="brand-name">Hüseyin Aydın</span>
          </a>

          <nav className="nav-links" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#project">Project</a>
            <a href="#experience">Experience</a>
            <a href="#certifications">Certifications</a>
          </nav>

          <a
            className="resume-link"
            href="/Huseyin_Aydin_CV.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
      </header>

      <main>
        <section className="hero container">
          <div className="hero-copy">
            <div className="availability">
              <span />
              Open to junior cybersecurity opportunities
            </div>

            <p className="overline">OFFENSIVE SECURITY</p>

            <h1>
              Hüseyin
              <br />
              Aydın
            </h1>

            <h2>Offensive Security | Junior Penetration Tester</h2>

            <p className="hero-text">
              Cybersecurity graduate focused on penetration testing,
              vulnerability analysis and red team fundamentals. I turn hands-on
              labs and technical projects into clear, repeatable security work.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#project">
                View featured project
              </a>

              {socialLinks.slice(0, 2).map((link) => (
                <a
                  className="button button-secondary"
                  href={link.href}
                  key={link.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="focus-row" aria-label="Areas of focus">
              <span>Web Security</span>
              <span>Red Team</span>
              <span>Network Security</span>
              <span>Automation</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="photo-card">
              <div className="photo-topbar">
                <span>PROFILE_01</span>
                <span>ISTANBUL / TÜRKİYE</span>
              </div>
              <img src="/profile.png" alt="Hüseyin Aydın" />
            </div>

            <div className="floating-note note-top">
              <small>CURRENT FOCUS</small>
              <strong>Red Team & Web Security</strong>
            </div>

            <div className="floating-note note-bottom">
              <small>STATUS</small>
              <strong>Open to work</strong>
            </div>
          </div>
        </section>

        <section className="section container" id="about">
          <div className="section-index">01 / ABOUT</div>

          <div className="about-layout">
            <h3>
              I approach cybersecurity through practice, documentation and
              continuous improvement.
            </h3>

            <div className="about-copy">
              <p>
                I graduated from Istanbul Ticaret University’s Cybersecurity
                program. My long-term goal is to grow into a penetration tester
                and red team specialist with strong fundamentals in web, network
                and application security.
              </p>

              <p>
                I work with Kali Linux, Nmap, Wireshark, virtualization
                technologies and Python automation. I enjoy tracing how a system
                behaves, identifying attack paths and presenting findings in a
                clear, useful format.
              </p>
            </div>
          </div>

          <div className="skill-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{skill}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="section container" id="project">
          <div className="section-index">02 / FEATURED PROJECT</div>

          <article className="featured-project">
            <div className="project-content">
              <div className="project-label">FLAGSHIP PROJECT</div>
              <h3>STABILITEHR</h3>
              <h4>Automated Cybersecurity Company Analysis Platform</h4>

              <p>
                STABILITEHR discovers cybersecurity companies, analyzes their
                websites, classifies services such as Pentest, Red Team, SOC,
                DFIR and GRC, and collects application-relevant information
                including contact details, careers pages and LinkedIn profiles.
              </p>

              <p>
                The project generates structured Excel reports and reusable email
                templates through a modular Python architecture with
                multithreading support.
              </p>

              <div className="tech-list">
                <span>Python</span>
                <span>Automation</span>
                <span>OSINT</span>
                <span>Multithreading</span>
                <span>Excel Reporting</span>
              </div>

              <a
                className="button button-primary"
                href="https://github.com/aydinhuseyin"
                target="_blank"
                rel="noreferrer"
              >
                Explore on GitHub
              </a>
            </div>

            <div
              className="project-terminal"
              aria-label="STABILITEHR project preview"
            >
              <div className="terminal-bar">
                <span />
                <span />
                <span />
              </div>

              <pre>{`$ python main.py

[+] Discovery started
[+] 48 cybersecurity companies found
[+] Services classified
[+] Career pages extracted
[+] Contact data normalized
[+] Excel report generated

output/stabilitehr_results.xlsx`}</pre>
            </div>
          </article>
        </section>

        <section className="section container" id="experience">
          <div className="section-index">03 / EXPERIENCE</div>

          <div className="timeline">
            {timeline.map((item) => (
              <article
                className="timeline-item"
                key={`${item.year}-${item.title}`}
              >
                <div className="timeline-year">{item.year}</div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section container" id="certifications">
          <div className="section-index">04 / CERTIFICATIONS</div>

          <div className="certificate-grid">
            {certifications.map((certificate, index) => (
              <article className="certificate-card" key={certificate}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{certificate}</h3>
                <p>Cybersecurity training & certification</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section container" id="contact">
          <div>
            <div className="section-index">05 / CONTACT</div>
            <h2>Let’s build something secure.</h2>
            <p>
              I am interested in junior penetration testing, red team and
              application security opportunities.
            </p>
          </div>

          <div className="contact-actions">
            <a
              className="button button-primary"
              href="mailto:huseyinaydinhd@gmail.com"
            >
              Send an email
            </a>

            {socialLinks.map((link) => (
              <a
                className="button button-secondary"
                href={link.href}
                key={link.label}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer container">
        <span>© 2026 Hüseyin Aydın</span>
        <span>Offensive Security Portfolio</span>
      </footer>
    </div>
  );
}

export default App;
