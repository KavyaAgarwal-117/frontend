// 'use client';
// import React, { useState } from "react";
// import { motion } from "motion";
// import {
//   Github,
//   Linkedin,
//   Mail,
//   Instagram,
//   Send,
//   ArrowDown,
//   GraduationCap,
//   Briefcase,
//   Code2,
//   Paintbrush,
//   Braces,
//   Globe,
//   Layers,
//   FileText,
//   LayoutGrid,
//   Smartphone,
//   ExternalLink,
// } from "lucide-react";

// /* ------------------------------------------------------------------ */
// /* Data                                                                */
// /* ------------------------------------------------------------------ */

// const SKILLS = [
//   { name: "HTML", icon: Code2, color: "#FF5C7A" },
//   { name: "CSS", icon: Paintbrush, color: "#12B3A8" },
//   { name: "JavaScript", icon: Braces, color: "#FFC93C" },
//   { name: "WordPress", icon: Globe, color: "#7C6CF0" },
//   { name: "Webflow", icon: Layers, color: "#FF5C7A" },
//   { name: "MS Office", icon: FileText, color: "#12B3A8" },
//   { name: "UI Layout", icon: LayoutGrid, color: "#FFC93C" },
//   { name: "Responsive Design", icon: Smartphone, color: "#7C6CF0" },
// ];

// const PROJECTS = [
//   {
//     title: "WordPress Landing Page",
//     desc: "A conversion-focused landing page built entirely in WordPress — custom sections, fast load times, and a layout that reads well on any screen.",
//     tags: ["WordPress", "Landing Page", "Responsive"],
//     rotate: -2,
//     accent: "#FF5C7A",
//     note: "built in WP!",
//   },
//   {
//     title: "Internify",
//     desc: "An academic web application that helps students discover and track internships — from browsing listings to managing applications in one place.",
//     tags: ["Web App", "Academic Project", "UI/UX"],
//     rotate: 2,
//     accent: "#12B3A8",
//     note: "my fave build",
//   },
// ];

// /* ------------------------------------------------------------------ */
// /* Small building blocks                                              */
// /* ------------------------------------------------------------------ */

// function Scribble({ color = "#FF5C7A", width = 140 }) {
//   return (
//     <svg
//       viewBox="0 0 140 14"
//       width={width}
//       height={(width / 140) * 14}
//       style={{ display: "block", marginTop: 2 }}
//     >
//       <path
//         d="M2 9 C 20 2, 35 12, 52 6 C 70 0, 85 13, 103 6 C 115 2, 125 9, 138 4"
//         fill="none"
//         stroke={color}
//         strokeWidth="4"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// }

// function SectionHeading({ eyebrow, title, color }) {
//   return (
//     <div className="section-head">
//       <span className="eyebrow" style={{ color }}>
//         {eyebrow}
//       </span>
//       <h2 className="heading-xl">{title}</h2>
//       <Scribble color={color} />
//     </div>
//   );
// }

// /* ------------------------------------------------------------------ */
// /* App                                                                 */
// /* ------------------------------------------------------------------ */

// export default function App() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });
//   const [status, setStatus] = useState("idle"); // idle | sending | sent

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setForm((f) => ({ ...f, [name]: value }));
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (!form.name || !form.email || !form.message) return;
//     setStatus("sending");
//     setTimeout(() => {
//       setStatus("sent");
//       setForm({ name: "", email: "", subject: "", message: "" });
//       setTimeout(() => setStatus("idle"), 3200);
//     }, 900);
//   }

//   const fadeUp = {
//     hidden: { opacity: 0, y: 28 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
//   };

//   const stagger = {
//     hidden: {},
//     show: { transition: { staggerChildren: 0.08 } },
//   };

//   return (
//     <div className="page">
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=Caveat:wght@500;600;700&display=swap');

//         * { box-sizing: border-box; }

//         .page {
//           background: #FDFBF7;
//           color: #1B1B2F;
//           font-family: 'Inter', sans-serif;
//           min-height: 100vh;
//           overflow-x: hidden;
//           position: relative;
//         }

//         .heading-xl, .name-xl, .logo-mark { font-family: 'Space Grotesk', sans-serif; }
//         .hand { font-family: 'Caveat', cursive; }

//         /* ---------- layout helpers ---------- */
//         .container { max-width: 1080px; margin: 0 auto; padding: 0 28px; }

//         /* ---------- nav ---------- */
//         .nav {
//           position: sticky;
//           top: 0;
//           z-index: 40;
//           background: rgba(253, 251, 247, 0.85);
//           backdrop-filter: blur(8px);
//           border-bottom: 2px solid #1B1B2F;
//         }
//         .nav-inner {
//           max-width: 1080px;
//           margin: 0 auto;
//           padding: 16px 28px;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//         }
//         .logo-mark { font-weight: 700; font-size: 20px; letter-spacing: -0.02em; }
//         .logo-dot { color: #FF5C7A; }
//         .nav-links { display: flex; gap: 26px; list-style: none; margin: 0; padding: 0; }
//         .nav-links a {
//           font-size: 14px;
//           font-weight: 600;
//           color: #1B1B2F;
//           text-decoration: none;
//           position: relative;
//           padding-bottom: 2px;
//         }
//         .nav-links a:hover { color: #FF5C7A; }
//         @media (max-width: 640px) { .nav-links { display: none; } }

//         /* ---------- hero ---------- */
//         .hero {
//           padding: 90px 0 70px;
//           position: relative;
//         }
//         .hero-grid {
//           display: grid;
//           grid-template-columns: 1.15fr 0.85fr;
//           gap: 48px;
//           align-items: center;
//         }
//         @media (max-width: 860px) {
//           .hero-grid { grid-template-columns: 1fr; }
//           .hero { padding: 60px 0 50px; }
//         }

//         .eyebrow-hand {
//           font-family: 'Caveat', cursive;
//           font-size: 28px;
//           color: #FF5C7A;
//           font-weight: 600;
//           display: inline-block;
//           transform: rotate(-3deg);
//         }

//         .name-xl {
//           font-size: clamp(42px, 7vw, 76px);
//           line-height: 0.98;
//           font-weight: 700;
//           letter-spacing: -0.03em;
//           margin: 6px 0 14px;
//         }
//         .name-xl .accent { color: #FF5C7A; }

//         .role-line {
//           font-size: 18px;
//           font-weight: 600;
//           color: #1B1B2F;
//           margin-bottom: 16px;
//         }
//         .role-line span { color: #12B3A8; }

//         .bio-text {
//           font-size: 16px;
//           line-height: 1.7;
//           color: #4A4A5A;
//           max-width: 480px;
//           margin-bottom: 28px;
//         }

//         .btn-row { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 40px; }
//         .btn {
//           font-family: 'Inter', sans-serif;
//           font-weight: 600;
//           font-size: 14px;
//           padding: 13px 24px;
//           border-radius: 999px;
//           border: 2px solid #1B1B2F;
//           cursor: pointer;
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           text-decoration: none;
//           transition: transform 0.15s ease, box-shadow 0.15s ease;
//         }
//         .btn-primary { background: #1B1B2F; color: #FDFBF7; }
//         .btn-primary:hover { transform: translate(-2px, -2px); box-shadow: 4px 4px 0 #FF5C7A; }
//         .btn-outline { background: transparent; color: #1B1B2F; }
//         .btn-outline:hover { transform: translate(-2px, -2px); box-shadow: 4px 4px 0 #FFC93C; }

//         .stats-strip {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 14px;
//           max-width: 520px;
//         }
//         @media (max-width: 480px) { .stats-strip { grid-template-columns: 1fr; } }
//         .stat-card {
//           border: 2px solid #1B1B2F;
//           border-radius: 16px;
//           padding: 14px 16px;
//           background: #FFFFFF;
//         }
//         .stat-icon { color: #FF5C7A; margin-bottom: 6px; }
//         .stat-value { font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 20px; }
//         .stat-label { font-size: 12px; color: #6B6B7B; font-weight: 500; }

//         /* ---------- hero avatar ---------- */
//         .avatar-wrap {
//           position: relative;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           height: 380px;
//         }
//         .blob {
//           position: absolute;
//           width: 300px;
//           height: 300px;
//           border-radius: 45% 55% 60% 40% / 50% 45% 55% 50%;
//           background: linear-gradient(135deg, #FFC93C, #FF5C7A 60%, #7C6CF0);
//           opacity: 0.9;
//         }
//         .avatar-card {
//           position: relative;
//           width: 240px;
//           height: 300px;
//           background: #1B1B2F;
//           border-radius: 24px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           border: 3px solid #1B1B2F;
//           box-shadow: 10px 10px 0 rgba(27,27,47,0.15);
//         }
//         .avatar-initials {
//           font-family: 'Space Grotesk', sans-serif;
//           font-size: 72px;
//           font-weight: 700;
//           color: #FDFBF7;
//         }
//         .avatar-tag {
//           position: absolute;
//           bottom: -18px;
//           right: -18px;
//           background: #FFC93C;
//           border: 2px solid #1B1B2F;
//           border-radius: 999px;
//           padding: 8px 16px;
//           font-family: 'Caveat', cursive;
//           font-size: 20px;
//           font-weight: 700;
//           transform: rotate(6deg);
//         }
//         .avatar-dot {
//           position: absolute;
//           top: -12px;
//           left: -6px;
//           width: 22px;
//           height: 22px;
//           border-radius: 50%;
//           background: #12B3A8;
//           border: 3px solid #FDFBF7;
//         }

//         .scroll-cue {
//           position: absolute;
//           bottom: -20px;
//           left: 28px;
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           font-size: 13px;
//           color: #6B6B7B;
//           font-weight: 600;
//         }

//         /* ---------- sections generic ---------- */
//         .section { padding: 90px 0; position: relative; }
//         .section-alt { background: #FFF8EE; }
//         .section-head { margin-bottom: 48px; }
//         .eyebrow {
//           font-family: 'Caveat', cursive;
//           font-size: 24px;
//           font-weight: 700;
//         }
//         .heading-xl-section {
//           font-size: clamp(30px, 4.5vw, 46px);
//           font-weight: 700;
//           letter-spacing: -0.02em;
//           margin: 2px 0 4px;
//         }
//         .heading-xl { font-size: clamp(30px, 4.5vw, 46px); font-weight: 700; letter-spacing: -0.02em; margin: 2px 0 4px; }

//         /* ---------- skills ---------- */
//         .skills-grid {
//           display: grid;
//           grid-template-columns: repeat(4, 1fr);
//           gap: 18px;
//         }
//         @media (max-width: 760px) { .skills-grid { grid-template-columns: repeat(2, 1fr); } }

//         .skill-chip {
//           background: #FFFFFF;
//           border: 2px solid #1B1B2F;
//           border-radius: 18px;
//           padding: 22px 18px;
//           display: flex;
//           flex-direction: column;
//           gap: 12px;
//           cursor: default;
//         }
//         .skill-icon-wrap {
//           width: 44px;
//           height: 44px;
//           border-radius: 12px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }
//         .skill-name { font-weight: 600; font-size: 15px; }

//         /* ---------- projects ---------- */
//         .projects-grid {
//           display: grid;
//           grid-template-columns: repeat(2, 1fr);
//           gap: 32px;
//         }
//         @media (max-width: 760px) { .projects-grid { grid-template-columns: 1fr; } }

//         .project-card {
//           background: #FFFFFF;
//           border: 2px solid #1B1B2F;
//           border-radius: 22px;
//           padding: 32px;
//           position: relative;
//         }
//         .project-tape {
//           position: absolute;
//           top: -14px;
//           left: 28px;
//           font-family: 'Caveat', cursive;
//           font-size: 19px;
//           font-weight: 700;
//           color: #1B1B2F;
//           background: #FFC93C;
//           padding: 4px 14px;
//           border: 2px solid #1B1B2F;
//           border-radius: 6px;
//         }
//         .project-title {
//           font-family: 'Space Grotesk', sans-serif;
//           font-size: 24px;
//           font-weight: 700;
//           margin: 14px 0 10px;
//         }
//         .project-desc { font-size: 15px; line-height: 1.65; color: #4A4A5A; margin-bottom: 18px; }
//         .project-tags { display: flex; flex-wrap: wrap; gap: 8px; }
//         .project-tag {
//           font-size: 12px;
//           font-weight: 600;
//           padding: 5px 12px;
//           border-radius: 999px;
//           border: 1.5px solid #1B1B2F;
//         }

//         /* ---------- contact ---------- */
//         .contact-grid {
//           display: grid;
//           grid-template-columns: 0.9fr 1.1fr;
//           gap: 48px;
//         }
//         @media (max-width: 820px) { .contact-grid { grid-template-columns: 1fr; } }

//         .contact-side-title { font-size: 20px; font-weight: 700; margin-bottom: 10px; font-family: 'Space Grotesk', sans-serif; }
//         .contact-side-text { color: #4A4A5A; font-size: 15px; line-height: 1.7; margin-bottom: 28px; max-width: 380px; }

//         .social-row { display: flex; gap: 12px; flex-wrap: wrap; }
//         .social-icon {
//           width: 48px;
//           height: 48px;
//           border-radius: 14px;
//           border: 2px solid #1B1B2F;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           color: #1B1B2F;
//           background: #FFFFFF;
//           transition: transform 0.15s ease, background 0.15s ease, color 0.15s ease;
//           text-decoration: none;
//         }
//         .social-icon:hover { background: #1B1B2F; color: #FDFBF7; transform: translateY(-3px) rotate(-4deg); }

//         .form-card {
//           background: #FFFFFF;
//           border: 2px solid #1B1B2F;
//           border-radius: 24px;
//           padding: 32px;
//         }
//         .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
//         @media (max-width: 480px) { .form-row { grid-template-columns: 1fr; } }
//         .field-label { font-size: 13px; font-weight: 600; margin-bottom: 6px; display: block; }
//         .field-input, .field-textarea {
//           width: 100%;
//           border: 2px solid #1B1B2F;
//           border-radius: 12px;
//           padding: 12px 14px;
//           font-family: 'Inter', sans-serif;
//           font-size: 14px;
//           background: #FDFBF7;
//           outline: none;
//           transition: box-shadow 0.15s ease;
//         }
//         .field-input:focus, .field-textarea:focus { box-shadow: 3px 3px 0 #FFC93C; }
//         .field-textarea { resize: vertical; min-height: 110px; }
//         .field-group { margin-bottom: 16px; }

//         .send-btn {
//           font-family: 'Inter', sans-serif;
//           font-weight: 700;
//           font-size: 15px;
//           padding: 14px 26px;
//           border-radius: 999px;
//           border: 2px solid #1B1B2F;
//           background: #FF5C7A;
//           color: #1B1B2F;
//           cursor: pointer;
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           transition: transform 0.15s ease, box-shadow 0.15s ease;
//         }
//         .send-btn:hover { transform: translate(-2px, -2px); box-shadow: 4px 4px 0 #1B1B2F; }
//         .send-btn:disabled { opacity: 0.6; cursor: default; }

//         .status-msg { margin-top: 14px; font-size: 14px; font-weight: 600; color: #12B3A8; }

//         /* ---------- footer ---------- */
//         .footer {
//           border-top: 2px solid #1B1B2F;
//           padding: 36px 0;
//           background: #1B1B2F;
//           color: #FDFBF7;
//         }
//         .footer-inner {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           flex-wrap: wrap;
//           gap: 12px;
//         }
//         .footer-hand {
//           font-family: 'Caveat', cursive;
//           font-size: 20px;
//           color: #FFC93C;
//         }
//         .footer-small { font-size: 13px; color: #A8A8B8; }
//       `}</style>

//       {/* ---------------- NAV ---------------- */}
//       <nav className="nav">
//         <div className="nav-inner">
//           <span className="logo-mark">
//             kavya<span className="logo-dot">.</span>
//           </span>
//           <ul className="nav-links">
//             <li>
//               <a href="#skills">Skills</a>
//             </li>
//             <li>
//               <a href="#projects">Projects</a>
//             </li>
//             <li>
//               <a href="#contact">Contact</a>
//             </li>
//           </ul>
//         </div>
//       </nav>

//       {/* ---------------- HERO ---------------- */}
//       <header className="hero">
//         <div className="container">
//           <div className="hero-grid">
//             <motion.div initial="hidden" animate="show" variants={stagger}>
//               <motion.span variants={fadeUp} className="eyebrow-hand">
//                 hey there, i'm
//               </motion.span>
//               <motion.h1 variants={fadeUp} className="name-xl">
//                 Kavya <span className="accent">Agarwal</span>
//               </motion.h1>
//               <motion.p variants={fadeUp} className="role-line">
//                 3rd-year BCA student · building things for the <span>web</span>
//               </motion.p>
//               <motion.p variants={fadeUp} className="bio-text">
//                 I like turning ideas into clean, usable interfaces. Alongside my
//                 degree, I worked as a Software Intern at Vecmocon Technologies
//                 Pvt. Ltd., where I got hands-on with real product work — and
//                 I've been building small web projects on the side ever since.
//               </motion.p>
//               <motion.div variants={fadeUp} className="btn-row">
//                 <a href="#projects" className="btn btn-primary">
//                   See my work <ArrowDown size={16} />
//                 </a>
//                 <a href="#contact" className="btn btn-outline">
//                   Get in touch
//                 </a>
//               </motion.div>

//               <motion.div variants={fadeUp} className="stats-strip">
//                 <div className="stat-card">
//                   <GraduationCap size={20} className="stat-icon" />
//                   <div className="stat-value">78%</div>
//                   <div className="stat-label">10th Grade</div>
//                 </div>
//                 <div className="stat-card">
//                   <GraduationCap size={20} className="stat-icon" />
//                   <div className="stat-value">62%</div>
//                   <div className="stat-label">12th Grade</div>
//                 </div>
//                 <div className="stat-card">
//                   <Briefcase size={20} className="stat-icon" />
//                   <div className="stat-value">Vecmocon</div>
//                   <div className="stat-label">Software Intern</div>
//                 </div>
//               </motion.div>
//             </motion.div>

//             <motion.div
//               className="avatar-wrap"
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.7, ease: "easeOut" }}
//             >
//               <motion.div
//                 className="blob"
//                 animate={{
//                   borderRadius: [
//                     "45% 55% 60% 40% / 50% 45% 55% 50%",
//                     "55% 45% 40% 60% / 45% 55% 45% 55%",
//                     "45% 55% 60% 40% / 50% 45% 55% 50%",
//                   ],
//                 }}
//                 transition={{
//                   duration: 8,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//               />
//               <div className="avatar-card">
//                 <div className="avatar-dot" />
//                 <span className="avatar-initials">KA</span>
//                 <motion.div
//                   className="avatar-tag"
//                   animate={{ rotate: [6, -2, 6] }}
//                   transition={{
//                     duration: 4,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                 >
//                   that's me!
//                 </motion.div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </header>

//       {/* ---------------- SKILLS ---------------- */}
//       <section className="section section-alt" id="skills">
//         <div className="container">
//           <SectionHeading
//             eyebrow="what i work with"
//             title="Skills"
//             color="#12B3A8"
//           />
//           <motion.div
//             className="skills-grid"
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.2 }}
//             variants={stagger}
//           >
//             {SKILLS.map((s) => {
//               const Icon = s.icon;
//               return (
//                 <motion.div
//                   key={s.name}
//                   className="skill-chip"
//                   variants={fadeUp}
//                   whileHover={{
//                     y: -6,
//                     rotate: -1.5,
//                     boxShadow: `5px 5px 0 ${s.color}`,
//                   }}
//                   transition={{ type: "spring", stiffness: 300, damping: 18 }}
//                 >
//                   <div
//                     className="skill-icon-wrap"
//                     style={{ background: `${s.color}22` }}
//                   >
//                     <Icon size={22} color={s.color} />
//                   </div>
//                   <span className="skill-name">{s.name}</span>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </div>
//       </section>

//       {/* ---------------- PROJECTS ---------------- */}
//       <section className="section" id="projects">
//         <div className="container">
//           <SectionHeading
//             eyebrow="things i've built"
//             title="Projects"
//             color="#FF5C7A"
//           />
//           <div className="projects-grid">
//             {PROJECTS.map((p) => (
//               <motion.div
//                 key={p.title}
//                 className="project-card"
//                 initial={{ opacity: 0, y: 30, rotate: 0 }}
//                 whileInView={{ opacity: 1, y: 0, rotate: p.rotate }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 whileHover={{ rotate: 0, y: -6 }}
//                 transition={{ duration: 0.5, ease: "easeOut" }}
//               >
//                 <span className="project-tape">{p.note}</span>
//                 <h3 className="project-title">{p.title}</h3>
//                 <p className="project-desc">{p.desc}</p>
//                 <div className="project-tags">
//                   {p.tags.map((t) => (
//                     <span
//                       key={t}
//                       className="project-tag"
//                       style={{
//                         background: `${p.accent}18`,
//                         borderColor: p.accent,
//                       }}
//                     >
//                       {t}
//                     </span>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ---------------- CONTACT ---------------- */}
//       <section className="section section-alt" id="contact">
//         <div className="container">
//           <SectionHeading
//             eyebrow="let's talk"
//             title="Contact"
//             color="#7C6CF0"
//           />
//           <div className="contact-grid">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.6 }}
//             >
//               <h3 className="contact-side-title">Say hello 👋</h3>
//               <p className="contact-side-text">
//                 Have a project in mind, an opportunity, or just want to chat
//                 about design and code? My inbox is open — drop a message and
//                 I'll get back to you soon.
//               </p>
//               <div className="social-row">
//                 <a
//                   className="social-icon"
//                   href="https://linkedin.com"
//                   target="_blank"
//                   rel="noreferrer"
//                   aria-label="LinkedIn"
//                 >
//                   <Linkedin size={20} />
//                 </a>
//                 <a
//                   className="social-icon"
//                   href="https://github.com"
//                   target="_blank"
//                   rel="noreferrer"
//                   aria-label="GitHub"
//                 >
//                   <Github size={20} />
//                 </a>
//                 <a
//                   className="social-icon"
//                   href="mailto:kavya.agarwal@example.com"
//                   aria-label="Email"
//                 >
//                   <Mail size={20} />
//                 </a>
//                 <a
//                   className="social-icon"
//                   href="https://instagram.com"
//                   target="_blank"
//                   rel="noreferrer"
//                   aria-label="Instagram"
//                 >
//                   <Instagram size={20} />
//                 </a>
//               </div>
//             </motion.div>

//             <motion.div
//               className="form-card"
//               initial={{ opacity: 0, x: 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.6 }}
//             >
//               <form onSubmit={handleSubmit}>
//                 <div className="form-row">
//                   <div className="field-group">
//                     <label className="field-label" htmlFor="name">
//                       Name
//                     </label>
//                     <input
//                       id="name"
//                       name="name"
//                       className="field-input"
//                       placeholder="Your name"
//                       value={form.name}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="field-group">
//                     <label className="field-label" htmlFor="email">
//                       Email
//                     </label>
//                     <input
//                       id="email"
//                       name="email"
//                       type="email"
//                       className="field-input"
//                       placeholder="you@email.com"
//                       value={form.email}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                 </div>
//                 <div className="field-group">
//                   <label className="field-label" htmlFor="subject">
//                     Subject
//                   </label>
//                   <input
//                     id="subject"
//                     name="subject"
//                     className="field-input"
//                     placeholder="What's this about?"
//                     value={form.subject}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div className="field-group">
//                   <label className="field-label" htmlFor="message">
//                     Message
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     className="field-textarea"
//                     placeholder="Tell me a bit more..."
//                     value={form.message}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="send-btn"
//                   disabled={status === "sending"}
//                 >
//                   {status === "sending" ? "Sending..." : "Send Message"}{" "}
//                   <Send size={16} />
//                 </button>
//                 {status === "sent" && (
//                   <div className="status-msg">
//                     Thanks! Your message has been noted. ✓
//                   </div>
//                 )}
//               </form>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* ---------------- FOOTER ---------------- */}
//       <footer className="footer">
//         <div className="container footer-inner">
//           <span className="footer-hand">made with ✎ &amp; ☕ by Kavya</span>
//           <span className="footer-small">
//             © {new Date().getFullYear()} Kavya Agarwal. All rights reserved.
//           </span>
//         </div>
//       </footer>
//     </div>
//   );
// }

import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page