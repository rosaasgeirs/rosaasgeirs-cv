export type Locale = "en" | "is";

const 
translations = {
  en: {
    // Nav
    "nav.about": "About",
    "nav.highlights": "Highlights",
    "nav.education": "Education",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    "nav.download": "Download CV",

    // Hero
    "hero.subtitle": "Developer & Visual Thinker",
    "hero.location": "Reykjavík, Iceland",

    // Section headings
    "section.bio": "Bio",
    "section.highlights": "Highlights",
    "section.education": "Education",
    "section.skills": "Skills & Languages",
    "section.spokenLanguages": "Spoken Languages",
    "section.experience": "Work Experience",
    "section.projects": "Other Projects & Courses",

    // Bio
    "bio.text":
      "Developer and visual thinker with roots in both computer science and film. Drawn to the intersection of code and design — building things that work well and look considered. Comfortable across the stack, with a particular focus on frontend and the craft of what users actually see and experience. Adaptable and collaborative, with a passion for learning and evolving alongside the technology.",

    // Story
    "story.text":
      "A curiosity for the world, art and different cultures lead me to film studies at the University of Iceland. The same motives lead me to travel South America for a few years studying the language, exploring many cultures and ultimately completing part of my degree in Buenos Aires.\n\nBack in Iceland, I started building a career in film and events focusing on production. When cultural events went on hold during the pandemic I enrolled in computer science at Reykjavík University, thinking of it as a practical pivot. But something unexpected happened. I found a creative satisfaction in code which I hadn't experienced before. The problem-solving, the visual design, the experience of building something from nothing and watching people interact with it. What I thought would be purely practical turned out to be a new passion.\n\nI graduated with first class honors and joined Alda Software, where I've grown from a junior developer into a cross-functional role that feels like the meeting point of everything I've done — software development, UX design, and visual storytelling. The winding path turns out to have been the point all along.",

    // Highlights
    "highlights.alda.date": "May 2023 - Present",
    "highlights.alda.desc":
      "Full-stack developer on Alda's core product — a web app, survey tool and suite of micro-learning courses. React, TypeScript and Next.js on the frontend; Python/Django API and AWS infrastructure on the backend. Beyond engineering, I've been involved in shaping the micro-learning content from creative brief through to implementation, collaborated with external agencies on UX research and usability testing, and contributed to the company's growth and marketing work including the Framer website and brand-consistent design assets across digital formats. Knowledge of accessibility best practices is important to me which we at Alda ensure in all micro-learning content.",
    "highlights.frodleiksfusi.date": "December 2023",
    "highlights.frodleiksfusi.desc":
      "Developed the educational game Fróðleiksfúsi for Þekkingarsetur Suðurnesja as a React Native app with headless CMS connection using Apollo GraphQL. The game was taken into use directly after delivery and the project received the highest possible marks.",

    // Education
    "edu.ru": "Computer Science BSc — Graduated with first class honors.",
    "edu.ui": "Film Studies BA — Graduated with first class honors.",
    "edu.udsal":
      "Buenos Aires, Argentina — Exchange student. Cultural Studies & Event Management (60 ECTS)",
    "edu.mr": "Science and Biology department",

    // Skills category labels
    "skills.frontend": "Frontend",
    "skills.languages": "Languages",
    "skills.design": "Design",

    // Language levels
    "lang.native": "Native",
    "lang.fluent": "Fluent",

    // Footer
    "footer.name": "Rósa Ásgeirsdóttir",
  },
  is: {
    // Nav
    "nav.about": "Um mig",
    "nav.highlights": "Það helsta",
    "nav.education": "Menntun",
    "nav.skills": "Kunnátta",
    "nav.experience": "Starfsreynsla",
    "nav.contact": "Hafa samband",
    "nav.download": "Sækja ferilskrá",

    // Hero
    "hero.subtitle": "Forritari og sjónrænn hugsuður",
    "hero.location": "Reykjavík, Ísland",

    // Section headings
    "section.bio": "Um mig",
    "section.highlights": "Það helsta",
    "section.education": "Menntun",
    "section.skills": "Forritunarmál og hæfni",
    "section.spokenLanguages": "Tungumál",
    "section.experience": "Starfsreynsla",
    "section.projects": "Önnur verkefni og námskeið",

    // Bio
    "bio.text":
      "Tölvunarfræðingur með bakgrunn í kvikmyndafræði. Ég heillast af listrænum eiginleikum forritunar og hef gaman af að smíða hluti sem virka vel og líta vel út. Ég nýt mín við framendavinnu jafnt sem bakenda, en hef sérstaka ánægju af því að nostra við það sem notendur sjá og upplifa. Ég hef gaman af samvinnu og af því að læra og þróast í takt við tæknina.",

    // Story
    "story.text":
       "Áhugi á umheiminum, listum og menningu leiddi til þess að ég skráði mig í kvikmyndafræði við HÍ eftir menntaskóla. Af sömu ástæðum fór ég að ferðast um Suður-Ameríku í nokkur ár til að kynnast tungumálinu, upplifa menningu og að lokum að klára hluta af gráðunni minni við háskóla í Buenos Aires.\n\nÞegar ég flutti aftur til Íslands hóf ég feril í kvikmyndahátíðum og kvikmyndaframleiðslu. Í miðjum faraldri þegar menningarviðburðir gátu ekki lengur farið fram tók ég ákveðna U-beygju. Ég skráði mig í tölvunarfræði við HR hreinlega til að vera með annan valmöguleika um vinnu á stundum sem þessum. Það kom mér hins vegar á óvart hversu skapandi forritun getur verið. Í framleiðslu og viðburðastjórnun var ég vön að mæta vandamálum og að hugsa í lausnum sem nýtist vel í hugbúnaðarþróun. Í forritun upplifði ég hinsvegar dýpri ánægju við að fá að útbúa lausnina í fallegri og notendavænni hönnun. Praktísk stefnubreyting reyndist vera ný ástríða.\n\nSamhliða náminu hóf ég störf hjá Öldu, nýsköpunarfyrirtæki í hugbúnaðarþróun, og hef þróast í starfi þar síðustu ár og fundið mína sérstöðu þökk sé fjölbreyttri reynslu. Þó að leiðin hafi ekki alltaf verið bein þá voru það krókar hennar sem leiddu mig á réttan stað.",

    // Highlights
    "highlights.alda.date": "Maí 2023 - Núverandi",
    "highlights.alda.desc":
      "Full-stack forritari í öllum helstu lausnum Öldu — vefforrit, könnunartól og örfræðslur. React, TypeScript og Next.js í framenda; Python/Django API og AWS í bakenda. Fyrir utan hugbúnaðarþróun hef ég tekið þátt í mótun og framleiðslu örfræðslunnar frá hugmynd að lokavöru, unnið með utanaðkomandi hönnunarstofum og UX ráðgjöfum, og lagt af mörkum í sölu og markaðsefni fyrirtækisins, þar á meðal Framer vefsíðu og ýmis verkefni í stafrænni hönnun. Þekking á aðgengisstöðlum er mér mikilvæg en við hjá Öldu tryggjum aðgengi í allri örfræðslunni.",
    "highlights.frodleiksfusi.date": "Desember 2023",
    "highlights.frodleiksfusi.desc":
      "Þróaði fræðsluleikinn Fróðleiksfúsi fyrir Þekkingarsetur Suðurnesja sem React Native app með headless CMS tengingu í gegnum Apollo GraphQL. Leikurinn var tekinn í notkun strax eftir afhendingu og verkefnið hlaut hæstu einkunn.",

    // Education
    "edu.ru": "Tölvunarfræði BSc — Útskrifaðist með fyrstu einkunn.",
    "edu.ui": "Kvikmyndafræði BA — Útskrifaðist með fyrstu einkunn.",
    "edu.udsal":
      "Buenos Aires, Argentína — Skiptinemi. Menningarfræði og viðburðastjórnun (60 ECTS)",
    "edu.mr": "Náttúrufræðideild",

    // Skills category labels
    "skills.frontend": "Framendi",
    "skills.languages": "Forritunarmál",
    "skills.design": "Hönnun",

    // Language levels
    "lang.native": "Móðurmál",
    "lang.fluent": "Reiprennandi",

    // Footer
    "footer.name": "Rósa Ásgeirsdóttir",
  },
} as const;

export type TranslationKey = keyof (typeof translations)["en"];

export default translations;
