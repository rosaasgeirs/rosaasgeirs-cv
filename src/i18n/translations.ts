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
    "hero.subtitle": "Software Engineer & UX Specialist",
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
      "Full-stack software engineer and UX specialist who owns work end to end — from problem framing and design through shipped production code. Three years building Alda's micro-learning platform (React/TypeScript/Next.js, Python/Django, AWS), increasingly with AI in the loop. Before tech, coordinated film productions and ran cultural events — building project management instincts and a natural feel for cross-functional collaboration.",

    // Story
    "story.text":
      "A curiosity for the world, art and different cultures lead me to film studies at the University of Iceland. The same motives lead me to travel South America for a few years studying the language, exploring many cultures and ultimately completing part of my degree in Buenos Aires.\n\nBack in Iceland, I started building a career in film and events focusing on production. When cultural events went on hold during the pandemic I enrolled in computer science at Reykjavík University, thinking of it as a practical pivot. But something unexpected happened. I found a creative satisfaction in code which I hadn't experienced before. The problem-solving, the visual design, the experience of building something from nothing and watching people interact with it. What I thought would be purely practical turned out to be a new passion.\n\nI graduated with first class honors and joined Alda Software, where I've grown from a junior developer into a cross-functional role that feels like the meeting point of everything I've done — software development, UX design, and visual storytelling. The winding path turns out to have been the point all along.",

    // Highlights
    "highlights.alda.date": "May 2023 - Present",
    "highlights.alda.desc":
      "Built the micro-learning courses platform from inception — architecture through production, including content production. Over 70 micro-learnings for learners in 50+ countries. Contributed to building an AI training chatbot; use Claude Code in daily development and built AI orchestrators to expand what the team can ship. Implement UX designs from studio partners and create original designs in Figma; build UI components across the full design-to-code workflow. Design and build customer-facing survey reports — data visualizations that make complex results clear and actionable. Drive accessibility practice (WCAG 2.1 AA) across the web app and course content.",
    "highlights.frodleiksfusi.date": "December 2023",
    "highlights.frodleiksfusi.desc":
      "Educational game for Þekkingarsetur Suðurnesja: React Native + headless CMS via Apollo GraphQL. Collaborated with Jökulá UX/UI design studio. Went into production on delivery; received top marks.",

    // Education
    "edu.ru": "Computer Science BSc — Graduated with first class honors.",
    "edu.ui": "Film Studies BA — Graduated with first class honors.",
    "edu.udsal":
      "Buenos Aires, Argentina — Exchange student. Cultural Studies & Event Management (60 ECTS)",
    "edu.mr": "Science and Biology department",

    // Experience
    "work.stockfish.details": "Production and coordination of the film progam and events as well as managing interns and volunteers",
    "work.beautifulbeings.details": "Production coordination and management of PAs, runners and interns",

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
    "hero.subtitle": "Hugbúnaðarfræðingur & UX sérfræðingur",
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
      "[TRANSLATE] Full-stack hugbúnaðarfræðingur og UX sérfræðingur sem á verkefni frá upphafi til enda — frá vandamálsgreiningu og hönnun til tilbúins kóða í framleiðslu. Þrjú ár við uppbyggingu örfræðslukerfis Öldu (React/TypeScript/Next.js, Python/Django, AWS), æ meira með gervigreind í ferlinu. Áður en ég sneri mér að tækni samhæfði ég kvikmyndaframleiðslu og stjórnaði menningarviðburðum — reynsla sem byggði upp sterka verkefnastjórnunarhæfni og tilfinningu fyrir þverfaglegri samvinnu.",

    // Story
    "story.text":
       "Áhugi á umheiminum, listum og menningu leiddi til þess að ég skráði mig í kvikmyndafræði við HÍ eftir menntaskóla. Af sömu ástæðum fór ég að ferðast um Suður-Ameríku í nokkur ár til að kynnast tungumálinu, upplifa menningu og að lokum að klára hluta af gráðunni minni við háskóla í Buenos Aires.\n\nÞegar ég flutti aftur til Íslands hóf ég feril í kvikmyndahátíðum og kvikmyndaframleiðslu. Í miðjum faraldri þegar menningarviðburðir gátu ekki lengur farið fram tók ég ákveðna U-beygju. Ég skráði mig í tölvunarfræði við HR hreinlega til að vera með annan valmöguleika um vinnu á stundum sem þessum. Það kom mér hins vegar á óvart hversu skapandi forritun getur verið. Í framleiðslu og viðburðastjórnun var ég vön að mæta vandamálum og að hugsa í lausnum sem nýtist vel í hugbúnaðarþróun. Í forritun upplifði ég hinsvegar dýpri ánægju við að fá að útbúa lausnina í fallegri og notendavænni hönnun. Praktísk stefnubreyting reyndist vera ný ástríða.\n\nSamhliða náminu hóf ég störf hjá Öldu, nýsköpunarfyrirtæki í hugbúnaðarþróun, og hef þróast í starfi þar síðustu ár og fundið mína sérstöðu þökk sé fjölbreyttri reynslu. Þó að leiðin hafi ekki alltaf verið bein þá voru það krókar hennar sem leiddu mig á réttan stað.",

    // Highlights
    "highlights.alda.date": "Maí 2023 - Núverandi",
    "highlights.alda.desc":
      "[TRANSLATE] Byggði upp örfræðslukerfið frá grunni — arkitektúr til framleiðslu, þ.m.t. efnisframleiðslu. Yfir 70 örfræðslur fyrir nemendur í 50+ löndum. Tók þátt í að byggja gervigreindardrifinn þjálfunarspjallmenni; nota Claude Code í daglegri þróun og byggði AI orchestrators til að auka afköst teymisins. Útfæri UX hönnun frá samstarfsstofum og bý til upprunalega hönnun í Figma; smíða viðmótseiningar í öllu hönnunar-til-kóða ferlinu. Hanna og smíða könnunarskýrslur fyrir viðskiptavini — gagnasjónræn framsetning sem gerir flóknar niðurstöður skýrar og nothæfar. Keyri aðgengisstaðla (WCAG 2.1 AA) í vefforritinu og örfræðslunni.",
    "highlights.frodleiksfusi.date": "Desember 2023",
    "highlights.frodleiksfusi.desc":
      "Fræðsluleikur fyrir Þekkingarsetur Suðurnesja: React Native + headless CMS í gegnum Apollo GraphQL. Unnið í samstarfi við Jökulá UX/UI hönnunarstofu. Tekinn í notkun strax eftir afhendingu; hlaut hæstu einkunn.",

    // Education
    "edu.ru": "Tölvunarfræði BSc — Útskrifaðist með fyrstu einkunn.",
    "edu.ui": "Kvikmyndafræði BA — Útskrifaðist með fyrstu einkunn.",
    "edu.udsal":
      "Buenos Aires, Argentína — Skiptinemi. Menningarfræði og viðburðastjórnun (60 ECTS)",
    "edu.mr": "Náttúrufræðideild",

    // Experience
    "work.stockfish.details": "Skipulag og framleiðsla viðburða og kvikmyndasýninga ásamt því að leiða starfsnema og sjálfboðaliða",
    "work.beautifulbeings.details": "Samhæfing á milli deilda og almenn framleiðsla ásamt því að leiða PAs, runners og starfsnema",

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
