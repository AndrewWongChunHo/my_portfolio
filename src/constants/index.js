import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  ebsl,
  vuejs,
  java,
  python,
  photoshop,
  illustrator,
  premierepro,
  aftereffects,
  threedsmax,
  php,
  django,
  sql,
  blender,
  swift,
  swiftui,
  flutter,
  pokemon,
  asus,
  art,
  cathayJunior,
  arInspector,
} from "../assets/icons";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "UI/UX Designer",
  },
  {
    title: "Front-end Programming",
  },
  {
    title: "Graphic & Motion Design",
  },
  {
    title: "Documentation",
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "vuejs",
    icon: vuejs,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "flutter",
    icon: flutter,
  },
  {
    name: "swift",
    icon: swift,
  },
  {
    name: "swiftui",
    icon: swiftui,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "photoshop",
    icon: photoshop,
  },
  {
    name: "illustrator",
    icon: illustrator,
  },
];

const experiences = [
  {
    title: "UI/UX Programmer",
    company_name: "E-business Solutions Limited",
    icon: ebsl,
    iconBg: "#383E56",
    date: "Aug 2022 - Present",
    points: [
      "Engaging in front-end development.",
      "Designing mobile apps, websites, and dashboards.",
      "Testing high-fidelity design prototypes for usability.",
      "Creating training videos and presentation materials",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Pokemon Website",
    description:
      "A Pokémon-themed website centered around Gengar, designed to engage users through interactive elements such as parallax design and other engaging features.",
    tags: [
      {
        name: "Vanilla JS",
        color: "blue-text-gradient",
      },
      {
        name: "Parallax Design",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: pokemon,
    source_code_link:
      "https://www.figma.com/file/zKq9DG4cDUwFvgRwWsZaEO/UI.UX?type=design&node-id=0%3A1&mode=design&t=QnXTMjgqRoeUvWiR-1",
  },
  {
    name: "ASUS Website",
    description:
      "It is a website themed around ASUS, designed to showcase its products with a variety of interactive elements to enhance the appeal of the products.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "Vanilla JS",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: asus,
    source_code_link: "https://github.com/",
  },
  {
    name: "Art-themed Project",
    description:
      "It is an art-themed website that introduces various forms of art, enhanced with GSAP animations to create a more interactive experience.",
    tags: [
      {
        name: "GSAP",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Vanilla JS",
        color: "pink-text-gradient",
      },
    ],
    image: art,
    source_code_link: "https://github.com/",
  },
];

const awards = [
  {
    name: "Cathay Hackathon Final Round",
    description:
      "It is an innovative app targeted at juniors, developed for the Cathay Pacific team during the Cathay Hackathon 2022",
    tags: [
      {
        name: "Swift UI",
        color: "blue-text-gradient",
      },
      {
        name: "Figma",
        color: "green-text-gradient",
      },
    ],
    image: cathayJunior,
    source_code_link:
      "https://www.figma.com/file/zKq9DG4cDUwFvgRwWsZaEO/UI.UX?type=design&node-id=0%3A1&mode=design&t=QnXTMjgqRoeUvWiR-1",
  },
  {
    name: "AR Inspector",
    description:
      "It is an augmented reality mobile app project that contributed to our team winning the bronze award at The 3rd Greater Bay Area 5G Application and Innovation Challenge (Student Group).",
    tags: [
      {
        name: "Swift",
        color: "blue-text-gradient",
      },
      {
        name: "AR Kit",
        color: "green-text-gradient",
      },
      {
        name: "3D Modeling",
        color: "pink-text-gradient",
      },
    ],
    image: arInspector,
    source_code_link: "https://github.com/",
  },
];

const designProjects = [
  {
    name: "Wearther",
    description:
      "It is a responsive website created for the app, aiming to assist users in choosing suitable attire each day by utilizing recorded weather data to avoid wearing unsuitable clothing for the current conditions.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
    ],
    image: pokemon,
    source_code_link:
      "https://www.figma.com/file/zKq9DG4cDUwFvgRwWsZaEO/UI.UX?type=design&node-id=0%3A1&mode=design&t=QnXTMjgqRoeUvWiR-1",
  },
  {
    name: "ASUS Website",
    description:
      "It is a website themed around ASUS, designed to showcase its products with a variety of interactive elements to enhance the appeal of the products.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "Vanilla JS",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: asus,
    source_code_link: "https://github.com/",
  },
  {
    name: "Art-themed Project",
    description:
      "It is an art-themed website that introduces various forms of art, enhanced with GSAP animations to create a more interactive experience.",
    tags: [
      {
        name: "GSAP",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Vanilla JS",
        color: "pink-text-gradient",
      },
    ],
    image: art,
    source_code_link: "https://github.com/",
  },
];

const appProjects = [
  {
    name: "Pokemon Website",
    description:
      "A Pokémon-themed website centered around Gengar, designed to engage users through interactive elements such as parallax design and other engaging features.",
    tags: [
      {
        name: "Vanilla JS",
        color: "blue-text-gradient",
      },
      {
        name: "Parallax Design",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: pokemon,
    source_code_link:
      "https://www.figma.com/file/zKq9DG4cDUwFvgRwWsZaEO/UI.UX?type=design&node-id=0%3A1&mode=design&t=QnXTMjgqRoeUvWiR-1",
  },
  {
    name: "ASUS Website",
    description:
      "It is a website themed around ASUS, designed to showcase its products with a variety of interactive elements to enhance the appeal of the products.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "Vanilla JS",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: asus,
    source_code_link: "https://github.com/",
  },
  {
    name: "Art-themed Project",
    description:
      "It is an art-themed website that introduces various forms of art, enhanced with GSAP animations to create a more interactive experience.",
    tags: [
      {
        name: "GSAP",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Vanilla JS",
        color: "pink-text-gradient",
      },
    ],
    image: art,
    source_code_link: "https://github.com/",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  awards,
  appProjects,
  designProjects,
};
