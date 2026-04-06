export interface JobEntry {
  date: string;
  company: string;
  role: string;
  description?: string;
}

export interface EduEntry {
  dates: string;
  institution: string;
  detail: string;
}

export interface WorkEntry {
  dates: string;
  role: string;
}

export interface ProjectEntry {
  dates: string;
  detail: string;
}

export interface CVSection {
  id: string;
  title: string;
  summary: string;
}

export const bio = `Developer and visual thinker with roots in both computer science and film. Drawn to the intersection of code and design — building things that work well and look considered. Currently at Alda Software, where I have grown from junior developer into a cross-functional role spanning frontend development, UX design, and marketing.`;

export const highlights: JobEntry[] = [
  {
    date: "May 2023 – present",
    company: "Alda Software",
    role: "Software Developer & UX Specialist",
    description:
      "Joined Alda as a junior developer and grew into a cross-functional role spanning frontend development, UX design, and marketing. Lead and contribute to the full development lifecycle of Alda's web app, survey tools, and micro-learning courses — from translating creative briefs and user research into UX designs, to implementing responsive interfaces in React, TypeScript, and Next.js. Maintain and optimise back-end services and APIs (Python/Django), and manage hosting infrastructure including SCORM Cloud. Collaborate with third-party design and research agencies on usability testing and UI/UX validation. Also active in the growth and marketing team, producing marketing materials and developing the company website in Framer.",
  },
  {
    date: "December 2023",
    company: "Fróðleiksfúsi",
    role: "Final Project",
    description:
      "Developed the educational game Fróðleiksfúsi for Þekkingarsetur Suðurnesja as a React Native app with headless CMS connection using Apollo GraphQL. The game was taken into use directly after delivery and the project received the highest possible marks.",
  },
];

export const education: EduEntry[] = [
  {
    dates: "2021–2023",
    institution: "Reykjavík University",
    detail: "Computer Science BSc — Graduated with first class honors.",
  },
  {
    dates: "2015–2019",
    institution: "University of Iceland",
    detail: "Film Studies BA — Graduated with first class honors.",
  },
  {
    dates: "2018",
    institution: "Universidad del Salvador",
    detail:
      "Buenos Aires, Argentina — Exchange student. Cultural Studies & Event Management (60 ECTS)",
  },
  {
    dates: "2010–2014",
    institution: "Menntaskólinn í Reykjavík",
    detail: "Science and Biology department",
  },
];

export const skills = [
  "React",
  "React Native",
  "Javascript",
  "Typescript",
  "Next.js",
  "Expo",
  "Python",
  "Java",
  "SQL",
  "Figma",
  "Framer",
];

export const languages = [
  { language: "Icelandic", level: "Native" },
  { language: "English", level: "Native" },
  { language: "Spanish", level: "Fluent" },
];

export const otherProjects: ProjectEntry[] = [
  { dates: "2020", detail: "Social Media course at Hugsmiðjan" },
  {
    dates: "2020",
    detail: "Villa Frida — Production Manager, Fatamorgana student short film",
  },
  {
    dates: "2017–2019",
    detail:
      "Film critic, Engar Stjörnur — University of Iceland Film Studies publication",
  },
];

export const workExperience: WorkEntry[] = [
  { dates: "2023–present", role: "Alda Software — Software Developer & UX Specialist" },
  { dates: "2022–2023", role: "Alda Software — Office Manager & Researcher" },
  { dates: "2022–2023", role: "Tixly — Customer Service Support" },
  { dates: "2017–2022", role: "Grái Kötturinn Café — Chef and waiter" },
  { dates: "2021", role: "Physical Cinema Festival — Outdoor projection coordinator" },
  { dates: "2019–2021", role: "Stockfish Film Festival — Program and events manager" },
  {
    dates: "2020",
    role: "Beautiful Beings (Join Motion Pictures) — Production Coordinator",
  },
  { dates: "2019", role: "Lamb (Go To Sheep) — Runner" },
  { dates: "2019", role: "Loft Hostel — Reception" },
  { dates: "2016–2018", role: "Frogs Hostel, Peru — Bar & Events Manager" },
  { dates: "", role: "Sunflower Hostel, Colombia — Reception" },
  { dates: "", role: "Berlin Hotel, Ecuador — Reception, Bar Manager" },
  { dates: "", role: "Voyage Hostel, Chile — Reception" },
  { dates: "2016", role: "Republik Film Productions — Production Assistant" },
  {
    dates: "2014",
    role: "Anubhuti School, Jalgaon, India — Teaching (Volunteer)",
  },
  { dates: "2012–2017", role: "Hraðlestin — Waiter" },
  { dates: "2009–2014", role: "HB Grandi — Fish processing plant worker" },
];

export const sections: CVSection[] = [
  { id: "bio", title: "About", summary: "Developer & visual thinker" },
  { id: "highlights", title: "Highlights", summary: "Key roles & projects" },
  { id: "education", title: "Education", summary: "CS & Film degrees" },
  { id: "skills", title: "Skills", summary: "Languages & tools" },
  { id: "languages", title: "Languages", summary: "Icelandic, English, Spanish" },
  { id: "projects", title: "Projects & Courses", summary: "Film, media & more" },
  { id: "experience", title: "Work Experience", summary: "Full career history" },
];
