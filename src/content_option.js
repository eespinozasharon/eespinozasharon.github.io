const logotext = "SHARON";
const meta = {
    title: "Sharon Espinoza",
    description: "Sharon Espinoza, economist and researcher working on impact evaluation and development economics in Lima, Peru.",
};

const introdata = {
    title: "I’m Sharon Espinoza",
    description: "Research Associate at Innovations for Poverty Action (IPA) Peru. I work on impact evaluation, field experiments and applied econometrics in Latin America.",
    your_img_url: "/photos/portada.jpg",
};

// CV for the download button on Home. Put the PDF in /public with this name.
const cvFile = "/CV_Sharon_Espinoza_E.pdf";

const dataabout = {
    title: "A bit about myself",
    aboutme: "I am an economist from the Pontificia Universidad Católica del Perú (PUCP). Since 2022 I have worked at IPA Peru on randomized controlled trials in Peru, Paraguay, Ecuador, the Dominican Republic, Belize and Honduras, leading field teams of up to 48 people, designing studies and instruments, and running causal analysis with PIs from Yale, MIT, UC Berkeley, the World Bank and the IDB. Between 2025 and 2026 I was a Data Analysis Consultant for the Wyss Academy for Nature on an RCT with artisanal gold miners in Madre de Dios, and taught Applied Econometrics with Stata at PUCP.",
};

const worktimeline = [{
        jobtitle: "Research Associate",
        where: "Innovations for Poverty Action (IPA) Peru",
        date: "2022 – Present",
    },
    {
        jobtitle: "Data Analysis Consultant",
        where: "Wyss Academy for Nature",
        date: "2025 – 2026",
    },
    {
        jobtitle: "Part-Time Lecturer, Applied Econometrics with Stata",
        where: "PUCP",
        date: "2025 – 2026",
    },
    {
        jobtitle: "Research Assistant",
        where: "PUCP",
        date: "2020 – 2021",
    },
];

const skills = [{
        name: "Statistical software",
        items: "Python, Stata, R",
    },
    {
        name: "Programming & tools",
        items: "LaTeX, SurveyCTO, Power BI, MS Office, Git",
    },
    {
        name: "Methods",
        items: "RCTs, causal inference, power calculations & sampling, record linkage, NLP",
    },
    {
        name: "AI-assisted workflows",
        items: "LLM coding agents (Claude Code) for auditing, debugging and replicating Stata, R and Python pipelines",
    },
    {
        name: "Languages",
        items: "Spanish (native), English (fluent)",
    },
];

const services = [{
        title: "Impact evaluation",
        description: "Power calculations, sampling and instrument design, and causal analysis of experiments: treatment effects, heterogeneity and multiple-hypothesis corrections.",
    },
    {
        title: "Field operations",
        description: "Leading data collection with large teams across regions, monitoring and audits, and tracking strategies to keep attrition low.",
    },
    {
        title: "Reproducible research",
        description: "Auditing and rebuilding analysis pipelines so results regenerate identically, with help from AI coding agents.",
    },
];

// Research projects. Each one gets its own page at /projects/<slug>.
// `cover`: main photo; `gallery`: list of { img, caption }. Photos go in /public/photos.
// `links`: list of { label, url } (paper, IPA study page, report...).
const projects = [{
        slug: "gold-mining",
        title: "Narratives and Technology Adoption in Artisanal Gold Mining",
        place: "Madre de Dios, Peru",
        date: "2025 – 2026",
        org: "Wyss Academy for Nature · University of Bern",
        pis: "Kai Gehring, Fernando Fernandez, Arne Weiss",
        role: [
            "Connected the needs of the PIs, the partner organization and the survey developers; revised the survey and supported an additional field round in person, building trust with community leaders.",
            "Cleaned and merged survey data across treatment arms and rounds, and built outcome indicators, including a narrative-based self-perception measure.",
            "Replicated the pre-analysis plan for the multi-arm RCT (treatment effects, balance and heterogeneity) and iterated with the PIs on early results.",
            "Delivered a draft report with regression tables and coefficient plots, and followed up on IRB amendments to close the project.",
        ],
        cover: "",
        gallery: [],
        links: [],
    },
    {
        slug: "volar",
        title: "VOLAR: Smartphone Apps for Early Childhood Development",
        place: "Peru",
        date: "2024 – Present",
        org: "IPA Peru",
        pis: "Orazio Attanasio, Matthew Bird, Pablo Lavado",
        role: [
            "Led midline data collection across six regions with a field team of 48 people.",
            "Built a record linkage pipeline with fuzzy matching to consolidate a longitudinal panel.",
            "Applied NLP to WhatsApp messages sent to caregivers to build indicators of responsiveness and app interaction.",
            "Used AI coding agents to audit the multi-round Stata and Python pipeline, reproducing 269 of 269 report table cells.",
        ],
        cover: "",
        gallery: [],
        links: [],
    },
    {
        slug: "doodle-learning",
        title: "Doodle Learning Evaluation",
        place: "Belize",
        date: "2025",
        org: "IPA · Inter-American Development Bank",
        pis: "Emma Näslund-Hadley, Juan Agramonte",
        role: [
            "Supported endline data collection of an RCT on technology-based learning in ~200 schools and 2,000 children.",
        ],
        cover: "",
        gallery: [],
        links: [],
    },
    {
        slug: "mangroves",
        title: "Play for the Mangroves",
        place: "Dominican Republic",
        date: "2023 – 2024",
        org: "IPA",
        pis: "Jennifer Alix-Garcia, Christopher Knittel",
        role: [
            "Led endline data collection across 28 sports clubs, training and supervising enumerators on site (5% attrition).",
            "Designed a willingness-to-pay tool for mangrove-produced honey.",
        ],
        cover: "",
        gallery: [],
        links: [],
    },
    {
        slug: "migration-labor",
        title: "Migration and Labor Markets: Firm Hiring Practices",
        place: "Quito & Guayaquil, Ecuador",
        date: "2023",
        org: "IPA · Inter-American Development Bank",
        pis: "Cynthia Van Der Werf",
        role: [
            "Designed a stratified sampling strategy across four economic sectors to study barriers to migrant hiring.",
        ],
        cover: "",
        gallery: [],
        links: [],
    },
    {
        slug: "microfinance-plus",
        title: "Microfinance Plus",
        place: "Paraguay",
        date: "2023",
        org: "IPA",
        pis: "Nathan Fiala, Lise Masselus",
        role: [
            "Led a six-month endline field operation with 25 people and ~3,000 observations.",
            "Programmed the survey in Spanish and Guaraní.",
        ],
        cover: "",
        gallery: [],
        links: [],
    },
    {
        slug: "safer-municipalities",
        title: "Safer Municipalities in Honduras",
        place: "Honduras",
        date: "2022",
        org: "IPA · World Bank",
        pis: "Laura Chioda, Marcus Holmlund, Benjamin Feigenberg",
        role: [
            "Data analyst embedded with the World Bank team, supporting quality control and econometric processing for a youth employment program.",
        ],
        cover: "",
        gallery: [],
        links: [],
    },
];

// Photography. Put the image files in /public/photos and list them here.
const photos = [
    // { img: "/photos/example.jpg", caption: "Puerto Maldonado, Peru · 2025" },
];

// Links shown at the bottom of the Photography page (leave url empty to hide).
const photoLinks = [
    { label: "More of my photos on VSCO", url: "" },
];

// Volunteering. `current: true` shows an invitation to join.
const volunteering = [{
        title: "Board of Directors",
        org: "EconThaki",
        date: "2025 – Present",
        current: true,
        description: "Academic programs increasing diversity in Latin American economics academia.",
        links: [],
    },
    {
        title: "Director for Economics",
        org: "Voces Violeta",
        date: "2022 – 2023",
        current: false,
        description: "Social organization preventing gender-based violence through psychological support and education.",
        links: [],
    },
];

const contactConfig = {
    YOUR_EMAIL: "espinoza.s@pucp.edu.pe",
    description: "Feel free to reach out about research collaborations, impact evaluation projects or teaching.",
};

const socialprofils = {
    linkedin: "https://www.linkedin.com/in/sharonespinoza20",
};
export {
    meta,
    dataabout,
    worktimeline,
    skills,
    services,
    introdata,
    projects,
    photos,
    photoLinks,
    volunteering,
    contactConfig,
    socialprofils,
    logotext,
    cvFile,
};
