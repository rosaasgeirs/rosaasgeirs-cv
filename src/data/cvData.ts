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

export const bio = `Developer and visual thinker with roots in both computer science and film. Drawn to the intersection of code and design — building things that work well and look considered. Comfortable across the stack, with a particular focus on frontend and the craft of what users actually see and experience.`;

export const highlights: JobEntry[] = [
  {
    date: "May 2023 – present",
    company: "Alda Software",
    role: "Software Developer & UX Specialist",
    description:
      "Full-stack developer on Alda's core product — a web app, survey tool and suite of micro-learning courses. Work across the stack daily: React, TypeScript and Next.js on the frontend; Python/Django API and AWS infrastructure on the backend. Beyond engineering, I've been involved in shaping the micro-learning content from creative brief through to implementation, collaborated with external agencies on UX research and usability testing, and contributed to the company's growth and marketing work including the Framer website and brand-consistent design assets across digital formats.",
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

export interface SkillCategory {
  label: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    label: "Frontend",
    items: ["React", "React Native", "Next.js", "Expo"],
  },
  {
    label: "Languages",
    items: ["Typescript", "Python", "Javascript", "Java", "SQL"],
  },
  {
    label: "Design",
    items: ["Figma", "Framer, Canva", "GNU Image Manipulation Program (GIMP)"],
  },
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
  { dates: "2024–present", role: "Alda Software — Software Developer & UX Specialist" },
  { dates: "2023–2024", role: "Alda Software — Junior Software Developer & UX Specialist" },
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
