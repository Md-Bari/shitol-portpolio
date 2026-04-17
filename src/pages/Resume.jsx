import React from "react";
import resumePdf from "../assets/resume.pdf";

const resumeDownloadPath = resumePdf;

const sectionTitleClass =
  "mb-4 border-b border-cyan-400/30 pb-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300";

const cardClass =
  "rounded-3xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm";

const researchItems = [
  {
    title:
      "Comparative Analysis of Deep CNNs, Transfer Learning, and Ensemble Architecture for Monkeypox Detection",
    description:
      "Accepted for publishing in Atlantis Press (Springer Nature). Developed and evaluated multiple deep learning architectures to improve diagnostic accuracy for monkeypox detection using medical image datasets.",
  },
  {
    title:
      "A Comprehensive Melanoma Cancer Detection System Using Deep Learning and Ensemble Models",
    description:
      "Accepted in ICCIT 2025 General Conference. Designed an ensemble-based melanoma detection system integrating transfer learning models to improve classification performance on dermoscopic datasets.",
  },
  {
    title: "DSNet: Lightweight CNN for Breast Cancer Classification",
    description:
      "Designed a customized lightweight convolutional neural network optimized for classification of histopathological breast cancer images with reduced computational cost.",
  },
  {
    title:
      "Leveraging E-commerce Business Data Analytics for Strategic Decision-Making",
    description:
      "Developed analytical pipelines to process e-commerce datasets and generate insights for improving business strategy and operational efficiency.",
  },
  {
    title: "Impact of Artificial Intelligence to Enhance Study Outcomes",
    description:
      "Conducted research on applying machine learning techniques to analyze student learning patterns and improve academic performance prediction.",
  },
  {
    title: "IoT-Based Insect Attack Environment Detection System",
    description:
      "Developed an IoT-enabled monitoring system integrated with machine learning models to detect environmental conditions favorable to insect attacks.",
  },
];

const skillGroups = [
  {
    label: "Programming",
    items: ["Python", "C", "C++", "SQL", "PHP", "JavaScript"],
  },
  {
    label: "AI & Machine Learning",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Model Optimization",
    ],
  },
  {
    label: "AI Engineering",
    items: [
      "Python",
      "FastAPI",
      "RESTful API",
      "Flask",
      "Local LLM",
      "AI Automation",
      "n8n",
      "AI Agent Development",
      "OpenAI",
      "Local LLM Integration",
      "Prompt Engineering",
      "RAG Systems",
    ],
  },
  {
    label: "Web Development",
    items: ["Laravel", "HTML", "CSS", "JavaScript"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "VS Code", "Anaconda", "Kaggle", "Google Colab"],
  },
  {
    label: "Soft Skills",
    items: ["Problem Solving", "Adaptability", "Time Management", "Leadership"],
  },
];

const projectGroups = [
  {
    title: "AI / Machine Learning Projects",
    items: [
      "AI Chatbot using OpenAI API and FastAPI",
      "RAG-based Document Question Answering System",
      "Medical Image Classification using CNN",
      "AI Resume Analyzer using NLP",
    ],
  },
  {
    title: "AI Agent & Backend Systems",
    items: [
      "Multi-Agent Task Automation System using Python and LLM APIs",
      "REST API for ML Model Deployment using FastAPI",
      "Local LLM-powered Offline Assistant",
    ],
  },
  {
    title: "Data Engineering Projects",
    items: [
      "E-commerce Data Pipeline (ETL using Python & SQL)",
      "Sales Forecasting using Time Series Analysis",
      "Data Dashboard using Python Visualization Tools",
    ],
  },
  {
    title: "Web Development Projects",
    items: [
      "Tour and Travel Management System (Laravel)",
      "Bus Ticket Booking System (Laravel)",
      "Super Shop Management System (PHP, SQL)",
      "E-commerce Application (Flutter)",
    ],
  },
];

const achievements = [
  "1st Runner-up - DIU Growing Star 2022",
  "Participated in DIU Takeoff Programming Contest",
  "Participated in Unlock the Algorithm Programming Contest",
  "Participated in Prompt Battle 2024",
  "Completed Hard & Soft Skills Course - GoEdu",
  "Completed Know Thyself Course - GoEdu",
];

const volunteerItems = [
  {
    title: "Bangladesh National Cadet Corps (BNCC)",
    description:
      "Served as Cadet Sergeant and Cadet Corporal, participating in national training programs, leadership development, discipline training, and community service activities.",
  },
  {
    title: "Event Volunteer - Daffodil International University",
    description:
      "Assisted in organizing university-level technical and cultural events, managing logistics, coordinating participants, and supporting event execution.",
  },
  {
    title: "Programming and Technical Community Volunteer",
    description:
      "Participated in coding events, workshops, and knowledge-sharing sessions under DIU Computer and Programming Club (CPC).",
  },
  {
    title: "Academic Support and Peer Mentorship",
    description:
      "Provided technical support and guidance to fellow students in programming, machine learning, and academic project development.",
  },
];

const references = [
  {
    name: "Amir Sohel",
    role: "Assistant Professor",
    organization:
      "Department of Computer Science and Engineering, Daffodil International University",
    email: "amir.cse@diu.edu.bd",
    phone: "+880 1688 752572",
  },
  {
    name: "Radoanul Arifen",
    role: "Senior Software Engineer",
    organization: "Betopia Limited",
    email: "arifen.cse@gmail.com",
    phone: "+880 01632-665398",
  },
];

const Resume = () => {
  return (
    <div className="min-h-screen px-4 py-24 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-slate-950/85 shadow-[0_30px_120px_rgba(8,145,178,0.18)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.2),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.18),transparent_28%)]" />

          <div className="relative p-6 sm:p-10 lg:p-12">
            <header className="mb-8 rounded-[1.75rem] border border-cyan-300/20 bg-white/[0.04] p-6 sm:p-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <p className="mb-3 text-sm uppercase tracking-[0.45em] text-cyan-300">
                    Resume
                  </p>
                  <h1 className="text-3xl font-black uppercase tracking-[0.18em] text-white sm:text-5xl">
                    Md Rofiqul Bari
                  </h1>
                  <p className="mt-2 text-lg font-medium text-slate-200 sm:text-xl">
                    Data Engineer | Machine Learning & AI Developer | Full Stack
                    Developer
                  </p>
                  <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                    Passionate Computer Science professional with strong
                    expertise in Artificial Intelligence, Machine Learning, and
                    Data Engineering. Experienced in developing intelligent
                    systems, deploying ML models through APIs, and building
                    real-world data pipelines focused on scalable AI-driven
                    solutions.
                  </p>
                </div>

                <div className="grid gap-3 text-sm text-slate-200 sm:grid-cols-2 lg:grid-cols-1">
                  <a
                    href={resumeDownloadPath}
                    download="md-rofiqul-bari-resume.pdf"
                    className="rounded-2xl border border-cyan-300/30 bg-cyan-500/10 px-4 py-3 font-medium text-cyan-100 transition hover:border-cyan-200/60 hover:bg-cyan-500/20"
                  >
                    Download Resume PDF
                  </a>
                  <a
                    href="mailto:rofiqulbari01@gmail.com"
                    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 transition hover:border-cyan-300/40 hover:text-cyan-200"
                  >
                    rofiqulbari01@gmail.com
                  </a>
                  <a
                    href="tel:+8801738887851"
                    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 transition hover:border-cyan-300/40 hover:text-cyan-200"
                  >
                    +880 1738 887851
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rofiqul-bari-shitol-414965274/"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 transition hover:border-cyan-300/40 hover:text-cyan-200"
                  >
                    LinkedIn Profile
                  </a>
                  <a
                    href="https://github.com/Md-Bari"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 transition hover:border-cyan-300/40 hover:text-cyan-200"
                  >
                    GitHub Portfolio
                  </a>
                </div>
              </div>
            </header>

            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <section className="space-y-6">
                <div className={cardClass}>
                  <h2 className={sectionTitleClass}>Work Experience</h2>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        Trainee Technology Specialist (AI Developer)
                      </h3>
                      <p className="text-sm text-cyan-200">
                        Betopia Limited, Dhaka, Bangladesh
                      </p>
                    </div>
                    <p className="text-sm font-medium text-slate-300">
                      Feb 2026 - Present
                    </p>
                  </div>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300 sm:text-[15px]">
                    <li>
                      Developing AI-powered applications and intelligent systems.
                    </li>
                    <li>
                      Building machine learning models and deploying them via
                      APIs.
                    </li>
                    <li>
                      Designing AI agents using Python, FastAPI, and LLM APIs.
                    </li>
                    <li>
                      Working with real-world datasets and data preprocessing
                      pipelines.
                    </li>
                  </ul>
                </div>

                <div className={cardClass}>
                  <h2 className={sectionTitleClass}>Research Experience</h2>
                  <div className="space-y-4">
                    {researchItems.map((item) => (
                      <article
                        key={item.title}
                        className="rounded-2xl border border-white/8 bg-black/20 p-4"
                      >
                        <h3 className="text-base font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-slate-300">
                          {item.description}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>

                <div className={cardClass}>
                  <h2 className={sectionTitleClass}>Projects</h2>
                  <div className="grid gap-4 xl:grid-cols-2">
                    {projectGroups.map((group) => (
                      <div
                        key={group.title}
                        className="rounded-2xl border border-white/8 bg-black/20 p-4"
                      >
                        <h3 className="text-base font-semibold text-white">
                          {group.title}
                        </h3>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-300">
                          {group.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={cardClass}>
                  <h2 className={sectionTitleClass}>Volunteer Activities</h2>
                  <div className="space-y-4">
                    {volunteerItems.map((item) => (
                      <article
                        key={item.title}
                        className="rounded-2xl border border-white/8 bg-black/20 p-4"
                      >
                        <h3 className="text-base font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-slate-300">
                          {item.description}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
              </section>

              <aside className="space-y-6">
                <div className={cardClass}>
                  <h2 className={sectionTitleClass}>Education</h2>
                  <div className="space-y-5 text-sm text-slate-300">
                    <div>
                      <h3 className="text-base font-semibold text-white">
                        B.Sc. in Computer Science & Engineering
                      </h3>
                      <p>Daffodil International University</p>
                      <p>2022 - 2025</p>
                      <p className="text-cyan-200">CGPA: 3.87</p>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white">
                        HSC
                      </h3>
                      <p>Engineering University School & College, BUET</p>
                      <p>2020</p>
                      <p className="text-cyan-200">GPA: 5.00/5.00</p>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white">
                        SSC
                      </h3>
                      <p>Bir Shrestha Munshi Abdur Rouf Public College</p>
                      <p>2018</p>
                      <p className="text-cyan-200">GPA: 5.00/5.00</p>
                    </div>
                  </div>
                </div>

                <div className={cardClass}>
                  <h2 className={sectionTitleClass}>Technical Skills</h2>
                  <div className="space-y-4">
                    {skillGroups.map((group) => (
                      <div key={group.label}>
                        <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-white">
                          {group.label}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {group.items.map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-100"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={cardClass}>
                  <h2 className={sectionTitleClass}>Achievements</h2>
                  <ul className="space-y-3 text-sm leading-7 text-slate-300">
                    {achievements.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className={cardClass}>
                  <h2 className={sectionTitleClass}>References</h2>
                  <div className="space-y-4">
                    {references.map((reference) => (
                      <article
                        key={reference.email}
                        className="rounded-2xl border border-white/8 bg-black/20 p-4 text-sm text-slate-300"
                      >
                        <h3 className="text-base font-semibold text-white">
                          {reference.name}
                        </h3>
                        <p className="mt-1">{reference.role}</p>
                        <p className="mt-1 leading-6">{reference.organization}</p>
                        <a
                          href={`mailto:${reference.email}`}
                          className="mt-3 block text-cyan-200 transition hover:text-cyan-100"
                        >
                          {reference.email}
                        </a>
                        <a
                          href={`tel:${reference.phone.replace(/\s+/g, "")}`}
                          className="mt-1 block text-cyan-200 transition hover:text-cyan-100"
                        >
                          {reference.phone}
                        </a>
                      </article>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
