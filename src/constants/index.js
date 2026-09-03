import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  nextjs,
  reactjs,
  clerk,
  bootstrap,
  material,
  next,
  mysql,
  framer,
  green,
  simple,
  graphql,
  strapi,
  insights,
  typescript,
  gisto,
  astro,
  sts,
  upwork,
  upworklogo,
  allen,
  postgres,
} from "../assets";

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
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "React & Next.js Specialist",
    icon: mobile,
  },
  {
    title: "Frontend Engineer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

// Overview / About text — matches the CV summary exactly.
// Full-stack developer with two years of professional experience delivering
// production web applications in Next.js, React and Astro for international
// clients. Experienced in WordPress to Astro migrations, REST and GraphQL API
// integration, SEO-focused frontend architecture, and containerised deployment
// with Docker. MSc in Computer Science.

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
    tip: "JavaScript is a versatile, high-level programming language used for adding interactivity and dynamic behavior to websites.",
  },
  {
    name: "TypeScript",
    icon: typescript,
    tip: "TypeScript is a superset of JavaScript that adds static types, enhancing code quality, and making development more predictable and scalable.",
  },
  {
    name: "React JS",
    icon: reactjs,
    tip: "React.js is an open-source JavaScript library for building front-end, known for its component-based architecture and efficiency.",
  },
  {
    name: "Next JS",
    icon: nextjs,
    tip: "Next.js is a popular open-source React framework for building server-rendered web applications with a focus on performance and developer experience.",
  },
  {
    name: "Astro",
    icon: astro,
    tip: "Astro is a modern web framework optimized for SEO, enabling fast, content-rich sites by shipping zero JavaScript by default and supporting React and other frameworks for dynamic components.",
  },
  {
    name: "GraphQL",
    icon: graphql,
    tip: "GraphQL is an API query language that lets clients request only the data they need, optimizing data fetching.",
  },
  {
    name: "Strapi",
    icon: strapi,
    tip: "Strapi is an open-source headless CMS that lets developers easily manage and deliver content via customizable APIs.",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    tip: "Tailwind CSS is a utility-first CSS framework that simplifies and speeds up web development by providing a set of pre-designed, highly customizable classes for styling HTML elements.",
  },
  {
    name: "Redux Toolkit",
    icon: redux,
    tip: "Redux Toolkit is an official package that simplifies the use of Redux for state management in JavaScript applications, providing a set of best practices and utility functions.",
  },
  {
    name: "Node JS",
    icon: nodejs,
    tip: "Node.js is an open-source JavaScript runtime environment that allows server-side and network applications to be built with JavaScript.",
  },
  {
    name: "PostgreSQL",
    icon: postgres,
    tip: "PostgreSQL is a powerful, open-source relational database system known for its reliability, performance, and advanced support for complex queries and data integrity.",
  },
  {
    name: "MongoDB",
    icon: mongodb,
    tip: "MongoDB is a NoSQL database that stores data in a flexible, JSON-like format and is known for its scalability and ease of use.",
  },
  {
    name: "MySQL",
    icon: mysql,
    tip: "MySQL is an open-source relational database management system used for storing and managing structured data.",
  },
  {
    name: "Git",
    icon: git,
    tip: "Git is a distributed version control system used for tracking changes in source code, used here across both GitHub and client GitLab workflows.",
  },
  {
    name: "Material UI",
    icon: material,
    tip: "Material-UI is a popular React UI framework that provides pre-designed components based on Google's Material Design guidelines for creating aesthetically pleasing web applications.",
  },
  {
    name: "Clerk",
    icon: clerk,
    tip: "Clerk Authentication is a user authentication and identity management service that simplifies building secure and customizable authentication workflows for web and mobile applications.",
  },
  {
    name: "NextAuth",
    icon: next,
    tip: "Next-Auth is a popular open-source authentication library for Next.js applications, providing features for user authentication and session management.",
  },
  {
    name: "Framer Motion",
    icon: framer,
    tip: "Framer Motion is a JavaScript animation library for creating fluid and interactive web animations.",
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
    tip: "Bootstrap is a popular open-source front-end framework that simplifies web development by providing pre-designed components and responsive design features.",
  },
  // TODO: add icons for Docker, Nginx, Redis and Express and list them here.
  // These back the DevOps line on the CV and are currently missing entirely.
];

const experience = [
  {
    title: "Freelance Full Stack Web Developer",
    image: upwork,
    icon: upworklogo,
    iconBg: "#EAE7E7",
    date: ["Upwork, Guru | Remote", "Mar 2024 – Present"],
    points: [
      "Migrated six legacy WordPress sites to Astro for a Canadian digital agency, working directly in the client's GitLab alongside their in-house team.",
      "Rebuilt page templates as reusable Astro components, reconstructing content structure from exported theme files and the live site where no clean data export was available.",
      "Preserved existing URL structures and SEO metadata through cutover to protect search rankings, delivering fully responsive layouts across all projects.",
      "Built and debugged React and Next.js applications for clients in Europe and the US.",
    ],
  },
  {
    title: "Next.js Developer (Remote)",
    image: allen,
    icon: nextjs,
    iconBg: "#242323",
    date: ["Void Zero Technologies, Islamabad", "Mar 2025 – Oct 2025"],
    points: [
      "Developed pixel-perfect, responsive user interfaces using Next.js, React, and Tailwind CSS based on Figma designs.",
      "Implemented Redux-based state management to improve application scalability and performance.",
      "Built and integrated REST APIs for frontend and backend communication.",
      "Collaborated with cross-functional remote teams to deliver features for a large-scale real estate and mortgage platform.",
      "Conducted code reviews and mentored junior developers, improving overall code quality and team efficiency.",
      "Contributed to a production platform managing real estate listings, property management, mortgages, and insurance.",
    ],
  },
];

const projects = [
  {
    title: "STS-Maintenance",
    image: sts,
    // Client project delivered for SMLogic Services (Canada).
    // Repo is private to the client — never link it publicly.
    clientWork: true,
    liveLink: "https://stsmaintenance.com",
    gitlink: null,
    icon: astro,
    iconBg: "#EAE7E7",
    date: "Astro | React.JS | TailwindCSS",
    points:
      "Client project delivered for a Canadian digital agency. A legacy WordPress site rebuilt as an Astro application, with content structure reconstructed from the original theme files. Astro was chosen to optimise SEO and page performance, with React integrated for dynamic components.",
  },
  {
    title: "Read-Insights",
    image: insights,
    liveLink: null, // TODO: deploy and add the URL — this is the strongest unlinked project
    gitlink: "https://github.com/tariq-khan9/react-insights",
    icon: strapi,
    iconBg: "#242323",
    date: "React.JS | GraphQL | Strapi | PostgreSQL | TailwindCSS",
    points:
      "A blog platform built on React.js, GraphQL and Strapi 5 with PostgreSQL. Authors create, manage and delete rich text posts through the headless CMS, while visitors browse by category, author or recency.",
  },
  {
    title: "Gistoscope",
    image: gisto,
    liveLink: "https://forum.gistlogger.press",
    gitlink: "https://github.com/tariq-khan9/gistoscope",
    icon: graphql,
    iconBg: "#242323",
    date: "React.JS | GraphQL | Apollo Server | PostgreSQL",
    points:
      "An online discussion forum (in progress) where users browse, create, critique and edit posts, and open threads anchored to specific passages of other users' writing.",
  },
  {
    title: "Simplest-Math",
    image: simple,
    liveLink: "https://simplestmath.com",
    gitlink: "https://github.com/tariq-khan9/simple-math",
    icon: reactjs,
    iconBg: "#242323",
    date: "React.JS | Express.JS | PostgreSQL | TailwindCSS",
    points:
      "An online platform for maths practice and learning, offering generated practice sheets across arithmetic, fractions, algebra and geometry with selectable difficulty levels.",
  },
  {
    title: "Green-Messengers",
    image: green,
    liveLink: "https://green-messengers.vercel.app",
    gitlink: "https://github.com/tariq-khan9/green-messengers",
    icon: nextjs,
    iconBg: "#EAE7E7",
    date: "Next.JS | MongoDB | Clerk Auth | TailwindCSS",
    points:
      "A blog-style publishing platform with registration and login handled through Clerk authentication. Users explore posts by subject and search for content or authors.",
  },
  // Removed from the public grid — early-stage work that weakens the set:
  //   Daily Soldouts (MERN + Chart.js)
  //   T-Stores (Laravel + React + Material UI)
  //   Tariq Portfolio (this site — showcased by being here, not by being listed)
  // Repos still exist on GitHub if anyone asks.
];

export { services, technologies, projects, experience };
