import { Github, Instagram } from 'lucide-react';

// SKILLS
import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNextjs from '/public/images/logos/icon-nextjs.svg';
import LogoPython from '/public/images/logos/logo-python.png';
import LogoR from '/public/images/logos/logo-r.png';
import LogoSQL from '/public/images/logos/logo-sql.png';
import LogoSass from '/public/images/logos/icon-sass.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoOllama from '/public/images/logos/icon-ollama.png';
import LogoLMStudio from '/public/images/logos/icon-lm-studio.jpg';
import LogoComfyUI from '/public/images/logos/icon-comfyUI.webp';
import LogoGit from '/public/images/logos/icon-git.svg';

// EXPERIENCE
import LogoJuvare from '/public/images/logos/logo-juvare.png';
import LogoJuvareDark from '/public/images/logos/logo-juvare-dark.svg';
import LogoThe3rdEye from '/public/images/logos/logo-the3rdeye.png';
import LogoDanMarinoFoundation from '/public/images/logos/logo-danmarino.png';
import LogoCardoneEnterprises from '/public/images/logos/logo-cardone-enterprises.png';

// PROJECTS
import ProjectSpaceX from '/public/images/logos/logo-spacex.svg';

// TESTIMONIALS
// import AvatarKrisztian from '/public/images/avatar-krisztian.png';
// import AvatarEugen from '/public/images/avatar-eugen.png';
// import AvatarDummy from '/public/images/avatar-dummy.svg';

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  // TestimonialDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/luisvivart',
  INSTAGRAM: 'https://instagram.com/luisvivart',
};

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Projects',
    href: '#projects',
  },
  // {
  //   label: 'Testimonials',
  //   href: '#testimonials',
  // },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/luisvivart',
  },
  {
    icon: Instagram,
    url: 'https://instagram.com/luisvivart',
  }
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'Python',
    logo: LogoPython,
    url: 'https://www.python.org/',
  },
  {
    label: 'R',
    logo: LogoR,
    url: 'https://www.r-project.org/',
  },
  {
    label: 'SQL',
    logo: LogoSQL,
    url: '',
  },
  {
    label: 'Ollama',
    logo: LogoOllama,
    url: 'https://ollama.com/',
  },
  {
    label: 'LM Studio',
    logo: LogoLMStudio,
    url: 'https://lmstudio.ai/',
  },
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Typescript',
    logo: LogoTypescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'Next.js',
    logo: LogoNextjs,
    url: 'https://nextjs.org/',
  },
  {
    label: 'Sass/Scss',
    logo: LogoSass,
    url: 'https://sass-lang.com/',
  },
  {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
  {
    label: 'ComfyUI',
    logo: LogoComfyUI,
    url: 'https://www.comfy.org/',
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoJuvare,
    darkModeLogo: LogoJuvareDark,
    logoAlt: 'Juvare logo',
    position: 'Software Engineer, Front End',
    startDate: new Date(2022, 8),
    currentlyWorkHere: true,
    summary: [
      'Handle relational and non-relational databases in SQL Server data.',
      'Leverage company fine-tuned LLMs to improve performance and decision-making processes.',
      'Develop web apps and interfaces for federal agencies to handle their databases.',
      'Collaborate with data teams to structure and query large datasets for optimized reporting.',
      'Integrate rest APIs to optimize data exchange between internal and client systems.'
    ],
  },
  {
    logo: LogoThe3rdEye,
    // darkModeLogo: LogoThe3rdEyeLight,
    logoAlt: 'The 3rd Eye logo',
    position: 'Front End Engineer',
    startDate: new Date(2021, 10),
    endDate: new Date(2022, 12),
    summary: [
      'Developed web apps to enhance marketing and visibility for clients in the healthcare industry.',
      'Optimized performance, reducing page load times by 23%.',
      'Conducted cross-browser testing to ensure compatibility and accessibility.'
    ],
  },
  {
    logo: LogoDanMarinoFoundation,
    // darkModeLogo: LogoDanMarinoFoundationLight,
    logoAlt: 'Dan Marino Foundation logo',
    position: 'Front End Developer',
    startDate: new Date(2020, 8),
    endDate: new Date(2021, 9),
    summary: [
      'Deployed a secure donations portal with data validation, improving transaction efficiency by 78%.',
      'Leveraged web analytics tools to track user behavior and optimize retention on the main website by 24%.'
    ],
  },
  {
    logo: LogoCardoneEnterprises,
    logoAlt: 'Cardone Enterprises logo',
    position: 'UI/UX Developer',
    startDate: new Date(2020, 8),
    endDate: new Date(2018, 8),
    summary: [
      'Deployed secure donations portals with data validation, improving transaction efficiency by 78%.',
      'Leveraged web analytics tools to track user behavior and optimize retention on the main website by 24%.'
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'SpaceX Mission Outcome Analysis and Prediction',
    // subtitle: 'IBM - Applied Data Science Capstone Project',
    description: 
      'Analyzed SpaceX launch data to determine key factors influencing mission success rates. Preprocessed raw data to prepare for analysis. Conducted exploratory data analysis (EDA) to uncover insights about launch trends, success rates by location, and payload impacts. Designed and implemented machine learning models to predict launch success probabilities. Developed an interactive dashboard for analysis visualization. Applied clustering technique to categorize launch sites based on performance metrics and business potential.',
    url: 'https://github.com/luisvivart/SpaceX-Mission-Success-Analysis',
    previewImage: ProjectSpaceX,
    technologies: [
      'Python',
      'Pandas',
      'Numpy',
      'Web Scraping',
      'Exploratory Data Analysis',
      'Sci-Kit Learn',
      'SQL',
      'Machine Learning',
      'Data Visualization',
    ],
  },
];

// export const TESTIMONIALS: TestimonialDetails[] = [
//   {
//     personName: 'Krisztian Gyuris',
//     personAvatar: AvatarKrisztian,
//     title: 'Founder - inboxgenie.io',
//     testimonial:
//       'Job well done! I am really impressed. He is very very good at what he does:) I would recommend Luis and will rehire in the future for Frontend development.',
//   },
//   {
//     personName: 'Eugen Esanu',
//     personAvatar: AvatarEugen,
//     title: 'Founder - shosho.design',
//     testimonial:
//       'Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.',
//   },
//   {
//     personName: 'Joe Matkin',
//     personAvatar: AvatarDummy,
//     title: 'Freelancer',
//     testimonial:
//       'Luis was extremely easy and pleasant to work with and he truly cares about the project being a success. Luis has a high level of knowledge and was able to work on my MERN stack application without any issues.',
//   },
// ];
