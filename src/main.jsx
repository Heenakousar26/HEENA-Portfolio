import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowUpRight, Menu, X, Github, Linkedin, Mail, Phone, Code2, Database, Globe, Terminal, Layers3, GraduationCap, BriefcaseBusiness, Award, FileText, CheckCircle2 } from 'lucide-react';
import './styles.css';

const profile = {
  name: 'Kolimi Heena Kousar',
  email: 'heenakousar12354@gmail.com',
  phone: '9100592541',
  github: '', // Add exact profile URL before publishing.
  linkedin: '', // Add exact profile URL before publishing.
  resume: '/HeenaKousar_Resume.pdf',
  matcherDemo: 'https://resume-job-matcher-qciy.onrender.com/',
  matcherRepo: 'https://github.com/ShareefShaik1234/resume-job-matcher'
};

const skills = [
  { title: 'Programming languages', icon: Code2, items: ['Java', 'JavaScript', 'Python', 'SQL'] },
  { title: 'Backend development', icon: Layers3, items: ['Spring Boot', 'Spring Data JPA', 'JDBC', 'REST APIs'] },
  { title: 'Frontend development', icon: Globe, items: ['React.js', 'HTML5', 'CSS3'] },
  { title: 'Databases & tools', icon: Database, items: ['MySQL', 'Git', 'GitHub', 'Postman', 'Jira', 'VS Code', 'IntelliJ IDEA'] },
  { title: 'Core concepts', icon: Terminal, items: ['OOP', 'CRUD operations', 'API testing', 'Debugging', 'Data Structures & Algorithms'] }
];

const projects = [
  { number: '01', category: 'PYTHON · STREAMLIT', title: 'Resume Job Matcher', desc: 'A resume-to-job-description matching tool that extracts PDF text, compares skills, identifies missing skills, and presents results in a Streamlit dashboard.', tags: ['Python', 'PDF text extraction', 'Streamlit'], demo: profile.matcherDemo, repo: profile.matcherRepo, visual: 'matcher', highlight: '90% matching accuracy reported in resume' },
  { number: '02', category: 'FULL STACK · BOOKING', title: 'Online Booking System', desc: 'A Java Spring Boot booking application with five modules, MySQL integration, user authentication, and admin management.', tags: ['Java', 'Spring Boot', 'MySQL'], demo: '', repo: '', visual: 'booking' },
  { number: '03', category: 'BACKEND · REST API', title: 'E-Commerce Backend System', desc: 'Backend services built with Java, Spring Boot, and MySQL, featuring REST APIs, product search, duplicate validation, exception handling, and Postman testing.', tags: ['Spring Boot', 'Spring Data JPA', 'MySQL'], demo: '', repo: '', visual: 'commerce' }
];

const experience = [
  { date: 'MAY 2026 — JUL 2026', title: 'Java Full Stack — Academic Internship', org: 'Ethnotech Academy', mode: 'Internship', bullets: ['Developed a Social Media Management System using Java, Spring Boot, and MySQL.', 'Implemented CRUD operations and REST APIs using Spring Data JPA.', 'Integrated frontend and backend services.'] },
  { date: 'MAY 2026 — JUN 2026', title: 'ServiceNow Virtual Intern', org: 'ServiceNow University / SmartBridge (AICTE)', mode: 'Virtual', bullets: ['Completed hands-on ServiceNow labs covering ITSM tasks, Flow Designer, and workflow automation.', 'Practiced ATF, report creation, and platform administration.', 'Prepared for the ServiceNow CSA certification.'] }
];

const education = [
  { years: '2023 — MAY 2027', degree: 'B.Tech, Computer Science & Engineering', school: 'Madanapalle Institute of Technology & Science, Madanapalle, AP', result: 'CGPA 9.04' },
  { years: '2021 — 2023', degree: 'Intermediate', school: 'J.C.N.R.M Junior College, Tadipatri, AP', result: '96.7%' },
  { years: '2020 — 2021', degree: 'SSC', school: 'Sri Vani High School, Tadipatri, AP', result: '100%' }
];

const certifications = [
  'Microsoft Azure AI Fundamentals',
  'OCI 2025 Certified Generative AI Professional',
  'Java Basics — HackerRank',
  'Microsoft Certified SQL AI Developer Associate',
  'Advanced Data Structures using Java — RAMPeX',
  'Agentic AI Certified Foundations Associate',
  'JavaScript Essentials 1 — Cisco Networking Academy',
  'Oracle Java Foundations'
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const nav = [['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Experience', '#experience'], ['Contact', '#contact']];
  return <div className="shell">
    <div className="topline"><span>PORTFOLIO / 2026</span><span><i className="status-dot"/> CSE UNDERGRADUATE · CLASS OF 2027</span></div>
    <header className="nav-wrap">
      <a className="wordmark" href="#home" onClick={closeMenu}><span className="mark">H.</span><span>HEENA KOUSAR <small>/ DEVELOPER</small></span></a>
      <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>{nav.map(([n,h]) => <a key={n} href={h} onClick={closeMenu}>{n}</a>)}<a className="resume-link" href={profile.resume} download>Resume <ArrowUpRight size={15}/></a></nav>
    </header>
    <main>
      <section id="home" className="hero wrap">
        <div className="hero-copy">
          <p className="eyebrow"><span/> JAVA FULL STACK · SOFTWARE DEVELOPMENT</p>
          <h1>Turning ideas<br/>into <em>useful apps.</em></h1>
          <p className="hero-lede">I’m {profile.name}, a Computer Science and Engineering undergraduate graduating in May 2027.</p>
          <p className="hero-sub">I build web applications with Java, Spring Boot, React, and MySQL, with practical experience in frontend development, backend integration, database operations, and API testing.</p>
          <div className="hero-actions"><a className="button primary" href="#projects">Explore projects <ArrowDownRight size={17}/></a><a className="button secondary" href={profile.resume} download><FileText size={16}/> Download resume</a></div>
          <div className="social-row"><a href={`mailto:${profile.email}`}><Mail size={16}/> Email <ArrowUpRight size={13}/></a><span className="social-note">Madanapalle, Andhra Pradesh</span></div>
        </div>
        <div className="hero-art" aria-label="Decorative software development illustration">
          <div className="grid-bg"/><div className="orbit orbit-one"/><div className="orbit orbit-two"/>
          <div className="code-card"><div className="card-top"><i/><i/><i/><small>developer.java</small></div><div className="code-lines"><p><b>01</b> <span className="purple">public class</span> <span className="green">Developer</span> {'{'}</p><p><b>02</b> &nbsp; <span className="purple">String</span> focus = <span className="yellow">"full stack"</span>;</p><p><b>03</b> &nbsp; <span className="purple">String</span> stack = <span className="yellow">"Java + Web"</span>;</p><p><b>04</b> &nbsp; <span className="purple">boolean</span> learning = <span className="green">true</span>;</p><p><b>05</b> {'}'}</p></div><div className="card-bottom"><i/> LEARN · BUILD · IMPROVE</div></div>
          <div className="chip chip-top"><Code2 size={16}/> Java / Spring Boot</div><div className="chip chip-bottom"><Database size={16}/> Data-driven apps</div><div className="art-caption">PRACTICAL PROJECTS. CONTINUOUS LEARNING.</div>
        </div>
        <a href="#about" className="scroll-cue"><span/> SCROLL TO EXPLORE <ArrowDownRight size={14}/></a>
      </section>

      <section id="about" className="wrap section">
        <div className="section-label"><span>01</span> ABOUT</div>
        <div className="about-grid"><h2>Thoughtful code.<br/><em>Practical solutions.</em></h2><div className="body-copy"><p>I’m a final-year Computer Science and Engineering undergraduate with hands-on experience building and deploying web applications. My project work covers frontend development, backend integration, database operations, and application debugging.</p><p>I enjoy learning modern full-stack technologies, testing application workflows, and building reliable, user-focused applications. I’m eager to contribute to product development while continuing to grow as a software developer.</p><div className="stats"><div><strong>9.04</strong><span>B.Tech CGPA</span></div><div><strong>140+</strong><span>LeetCode problems</span></div><div><strong>3</strong><span>Featured projects</span></div></div></div></div>
      </section>

      <section id="skills" className="wrap section">
        <div className="section-heading"><div><div className="section-label"><span>02</span> TOOLKIT</div><h2>Technologies I <em>use.</em></h2></div><p>A practical foundation across web development, APIs, data, and software testing.</p></div>
        <div className="skills-grid">{skills.map((s,i) => {const Icon=s.icon;return <article className="skill-card" key={s.title}><div className="skill-head"><span className="skill-icon"><Icon size={19}/></span><small>0{i+1}</small></div><h3>{s.title}</h3><div className="tags">{s.items.map(t=><span key={t}>{t}</span>)}</div></article>})}</div>
      </section>

      <section id="projects" className="wrap section">
        <div className="section-heading"><div><div className="section-label"><span>03</span> SELECTED WORK</div><h2>Projects with <em>purpose.</em></h2></div><p>Applications built to practice real workflows, integration, and problem-solving.</p></div>
        <div className="project-list">{projects.map(p=><article className="project-card" key={p.number}>
          <div className={`project-visual ${p.visual}`}>
            {p.visual==='matcher'&&<div className="mini-window"><div className="mini-top"><i/><i/><i/><span>resume_match.py</span></div><div className="mini-doc"><div className="doc-icon"><FileText size={24}/></div><div><b>Resume analysis</b><small>Compare skills with job needs</small></div></div><div className="match-bar"><span>SKILL MATCHING</span><div><i/></div></div><div className="mini-pills"><i>Java</i><i>Spring Boot</i><i>SQL</i></div></div>}
            {p.visual==='booking'&&<div className="booking-ui"><div className="booking-head"><span>BOOK / IT</span><span>✳</span></div><div className="booking-title">Your next<br/><em>reservation.</em></div><div className="booking-options"><span>01&nbsp; Movie</span><span>02&nbsp; Travel</span><span>03&nbsp; Stay</span></div></div>}
            {p.visual==='commerce'&&<div className="commerce-ui"><div className="commerce-orbit"><div className="commerce-core"><Layers3 size={32}/></div><span className="node a">API</span><span className="node b">DB</span><span className="node c">REST</span></div><div className="commerce-caption">SERVICE LAYER <b>→</b> DATA LAYER</div></div>}
            <span className="visual-index">PROJECT / {p.number}</span>
          </div>
          <div className="project-info"><div className="project-meta"><span>{p.number} / 03</span><span>{p.category}</span></div><h3>{p.title}</h3><p>{p.desc}</p>{p.highlight&&<div className="highlight-note">{p.highlight}</div>}<div className="tags project-tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div><div className="project-links">{p.demo&&<a href={p.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={15}/></a>}{p.repo&&<a href={p.repo} target="_blank" rel="noreferrer">GitHub repo <ArrowUpRight size={15}/></a>}{!p.demo&&!p.repo&&<span>Repository / demo link to be added</span>}</div></div>
        </article>)}</div>
      </section>

      <section id="experience" className="wrap section">
        <div className="section-heading"><div><div className="section-label"><span>04</span> EXPERIENCE</div><h2>Learning by <em>doing.</em></h2></div><p>Internship experience spanning full-stack application development and ServiceNow platform workflows.</p></div>
        <div className="experience-grid"><aside className="experience-aside"><BriefcaseBusiness size={25}/><p>Internship experience</p><span>HANDS-ON LEARNING</span></aside><div className="timeline">{experience.map((e,i)=><article className="timeline-item" key={e.org}><div className="timeline-marker">0{i+1}</div><div className="timeline-meta"><span>{e.date}</span><i>{e.mode}</i></div><h3>{e.title}</h3><p className="company">{e.org}</p><ul>{e.bullets.map(b=><li key={b}>{b}</li>)}</ul></article>)}</div></div>
      </section>

      <section id="education" className="wrap section">
        <div className="section-heading"><div><div className="section-label"><span>05</span> EDUCATION</div><h2>The foundation <em>behind it.</em></h2></div><p>Academic grounding in computer science with a strong record of achievement.</p></div>
        <div className="education-list">{education.map(e=><article className="education-item" key={e.school}><div className="edu-icon"><GraduationCap size={20}/></div><div><span className="mono">{e.years}</span><h3>{e.degree}</h3><p>{e.school}</p></div><strong>{e.result}</strong></article>)}</div>
      </section>

      <section className="wrap section">
        <div className="section-heading"><div><div className="section-label"><span>06</span> CONTINUOUS LEARNING</div><h2>Credentials & <em>milestones.</em></h2></div><p>Certifications and achievements listed in my resume.</p></div>
        <div className="cert-grid"><div className="cert-list">{certifications.map((c,i)=><div className="cert-row" key={c}><span>{String(i+1).padStart(2,'0')}</span><b>{c}</b><CheckCircle2 size={16}/></div>)}</div><aside className="achievement"><Award size={28}/><span className="mono">CODING PRACTICE</span><strong>140+</strong><h3>LeetCode problems solved</h3><p>Regular practice in algorithmic problem-solving and data structures.</p><div className="achievement-rule"/></aside></div>
      </section>

      <section id="contact" className="wrap section contact-section">
        <div className="contact-panel"><div className="contact-deco">LET’S BUILD<br/>SOMETHING<br/><em>USEFUL.</em></div><div className="contact-content"><div className="section-label"><span>07</span> CONTACT</div><h2>Have an opportunity<br/>to discuss?</h2><p>I’m interested in opportunities to contribute to product development, collaborate with teams, and keep growing my full-stack skills.</p><a className="button primary" href={`mailto:${profile.email}?subject=${encodeURIComponent('Professional opportunity')}`}>Get in touch <ArrowUpRight size={17}/></a><div className="contact-details"><a href={`mailto:${profile.email}`}><Mail size={16}/>{profile.email}</a><a href={`tel:${profile.phone}`}><Phone size={16}/>{profile.phone}</a>{profile.github&&<a href={profile.github} target="_blank" rel="noreferrer"><Github size={16}/>GitHub profile <ArrowUpRight size={13}/></a>}{profile.linkedin&&<a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/>LinkedIn <ArrowUpRight size={13}/></a>}</div></div></div>
      </section>
    </main>
    <footer className="wrap footer"><a className="wordmark" href="#home"><span className="mark">H.</span><span>KOLIMI HEENA KOUSAR</span></a><span>DESIGNED WITH INTENTION · BUILT WITH REACT</span><a href="#home">BACK TO TOP <ArrowUpRight size={14}/></a></footer>
  </div>;
}
createRoot(document.getElementById('root')).render(<App />);
