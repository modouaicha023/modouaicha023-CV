import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
  YoutubeIcon,
} from "@/components/icons";

export const RESUME_DATA = {
  name: "Modou Aicha Diop",
  initials: "MAD",
  location: "Dakar, Senegal",
  locationLink: "https://www.google.com/maps/place/Dakar",
  about:
    "Software Developer focused on building coll stuff on the web and mobile.",
  summary:
    "I'm a junior software developer with 6 months of experience. I'm currently working at AKASSAA as a Full Stack Developer. I'm passionate about building products that help people and make their lives easier. I'm a fast learner and I'm not afraid of new challenges. I'm always looking for an opportunity where I can learn and grow as a developer.",
  avatarUrl:
    "https://avatars.githubusercontent.com/u/86145486?s=400&u=2956d9402a142c1ac031c34a190dcabf120b11d2&v=4",
  personalWebsiteUrl: "https://modouaicha023.vercel.app",
  contact: {
    email: "modouaichadiop@gmail.com",
    tel: "+221781606189",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/modouaicha023",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/modouaicha023",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/modouaicha023",
        icon: XIcon,
      },
      {
        name: "Youtube",
        url: "https://youtube.com/@modouaicha023",
        icon: YoutubeIcon,
      },
    ],
  },
  education: [
    {
      school: "Polytechnic Higher School, Cheikh Anta Diop University",
      degree: "Higher Diploma of Technology (DTS) in Computer Science",
      start: "2021",
      end: "2023",
    },
    {
      school: "Cheikh Hamidou KANE Digital University",
      degree:
        "Mathematical Modeling, Analysis and Numerical Simulation (MANS) ",
      start: "2020",
      end: "2021",
    },
  ],
  work: [
    {
      company: "AKASSAA",
      link: "https://akassaa.com",
      badges: ["On-site"],
      title: "Full Stack Developer",
      // logo: ParabolLogo,
      start: "01/2024",
      end: "Present",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    },
    {
      company: "Creations Design Studio",
      link: "https://fr.linkedin.com/company/creations-design-studio",
      badges: ["Remote"],
      title: "Full Stack Developer",
      // logo: ClevertechLogo,
      start: "09/2023",
      end: "10/2023",
      description:
        "Development of a Fast Food website with Html, CSS and JavaScript as Frontend and PHP as Backend.",
    },
    {
      company: "FALLATECH",
      link: "https://fallatech.org",
      badges: ["On-site"],
      title: "Frontend Developer",
      // logo: JojoMobileLogo,
      start: "05/2023",
      end: "07/2023",
      description:
        "Development of a henhouse management web application with Html, Css and JavaScript.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "HTML/CSS",
    "PHP",
  ],
  projects: [
    {
      title: "Galsen Coding Challenge",
      techStack: [
        "TypeScript",
        "Next.js",
        "Shadcn UI",
        "MongoDB",
      ],
      description:
        "The goal of this project is to provide a platform for coding challenges and collaboration within the Galsen (Senegal) coding community.",
      // logo: ConsultlyLogo,
      link: {
        label: "galsencodingchallenges.com",
        href: "https://galsen-coding-challenge.vercel.app",
      },
    },
    // {
    //   title: "Monito",
    //   techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
    //   description:
    //     "Browser extension that records everything happening in a web application",
    //   logo: MonitoLogo,
    //   link: {
    //     label: "monito.dev",
    //     href: "https://monito.dev/",
    //   },
    // },
    // {
    //   title: "Jarocki.me",
    //   techStack: ["Side Project", "Next.js", "MDX"],
    //   description:
    //     "My personal website and blog. Built with Next.js and Notion API",
    //   logo: JarockiMeLogo,
    //   link: {
    //     label: "github.com",
    //     href: "https://jarocki.me/",
    //   },
    // },
    // {
    //   title: "Minimal",
    //   techStack: ["Side Project", "Next.js", "Puppeteer"],
    //   description:
    //     "Minimalist calendars, habit trackers and planners generator",
    //   logo: Minimal,
    //   link: {
    //     label: "useminimal.com",
    //     href: "https://useminimal.com/",
    //   },
    // },
    // {
    //   title: "Barepapers",
    //   techStack: ["Side Project", "Next.js", "Puppeteer"],
    //   description:
    //     "Generates beautiful wallpapers using random shapes and gradients",
    //   logo: BarepapersLogo,
    //   link: {
    //     label: "barepapers.com",
    //     href: "https://barepapers.com/",
    //   },
    // },
    // {
    //   title: "Year progress",
    //   techStack: ["Side Project", "TypeScript", "Next.js"],
    //   description: "Tracks current year progress and displays a countdown",
    //   logo: YearProgressLogo,
    //   link: {
    //     label: "getyearprogress.com",
    //     href: "https://getyearprogress.com/",
    //   },
    // },
    // {
    //   title: "Parabol",
    //   techStack: [
    //     "Full Stack Developer",
    //     "TypeScript",
    //     "React",
    //     "Node.js",
    //     "GraphQL",
    //   ],
    //   description:
    //     "The Agile meeting co-pilot that delivers better meetings with less effort",
    //   logo: ParabolLogo,
    //   link: {
    //     label: "github.com",
    //     href: "https://parabol.co/",
    //   },
    // },
    // {
    //   title: "Evercast",
    //   techStack: [
    //     "Lead Frontend Developer",

    //     "TypeScript",
    //     "React",
    //     "Node.js",
    //     "GraphQL",
    //   ],
    //   description:
    //     "Creative collaboration platform that combines video conferencing and HD media streaming",
    //   logo: EvercastLogo,
    //   link: {
    //     label: "evercast.us",
    //     href: "https://www.evercast.us/",
    //   },
    // },
    // {
    //   title: "Mobile Vikings",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application for leading virtual mobile operator in Poland",
    //   logo: MobileVikingsLogo,
    //   link: {
    //     label: "mobilevikings.pl",
    //     href: "https://mobilevikings.pl/",
    //   },
    // },
    // {
    //   title: "Howdy",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Howdy is a place for you to join communities you care about",
    //   logo: Howdy,
    //   link: {
    //     label: "play.google.com",
    //     href: "https://howdy.co/",
    //   },
    // },
    // {
    //   title: "Tastycloud",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application for managing and displaying restaurant menus in kiosk mode",
    //   logo: TastyCloudLogo,
    //   link: {
    //     label: "tastycloud.fr",
    //     href: "https://www.tastycloud.fr/",
    //   },
    // },
    // {
    //   title: "Ambit",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application that helps with sharing your contact details",
    //   logo: AmbitLogo,
    // },
    // {
    //   title: "Bim",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application that helps with booking a table in a restaurants",
    //   logo: BimLogo,
    // },
    // {
    //   title: "Canal Digital GO",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Video streaming mobile application for Canal Digital subscribers",
    //   logo: CDGOLogo,
    // },
  ],
} as const;
