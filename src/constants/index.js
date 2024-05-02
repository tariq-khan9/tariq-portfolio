import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    github,
    laravel,
    nextjs,
    reactjs,
    mern,
    clerk,
    threejs,
    bootstrap,
    material,
    next,
    net,
    c,
    mysql,
    sqlserver,
    framer,
    green,
    mern2,
    tstore,
    tariq2,
    simple


    
    
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React.js Next.js  Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: creator,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
      tip: "HTML5 is the latest version of the Hypertext Markup Language, used for structuring and presenting content on the web.",
    },
    {
      name: "CSS 3",
      icon: css,
      tip: "CSS3 is the latest version of Cascading Style Sheets, a technology used for styling the presentation of web pages.",
    },
    {
      name: "JavaScript",
      icon: javascript,
      tip: "JavaScript is a versatile, high-level programming language used for adding interactivity and dynamic behavior to websites.",
    },
    {
      name: "React JS",
      icon: reactjs,
      tip: "React.js is an open-source JavaScript library for building front-end, known for its component-based architecture and efficiency.",
    },
    {
      name: "next js",
      icon: nextjs,
      tip: "Next.js is a popular open-source React framework for building server-rendered web applications with a focus on performance and developer experience.",
    },
    {
      name: "laravel",
      icon: laravel,
      tip: "Laravel is a widely-used open-source PHP web application framework known for its elegant syntax and tools for building modern web applications.",
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
      name: "MongoDB",
      icon: mongodb,
      tip: "MongoDB is a NoSQL database that stores data in a flexible, JSON-like format and is known for its scalability and ease of use.",
    },
    
    
    {
      name: "bootstrap",
      icon: bootstrap,
      tip: "Bootstrap is a popular open-source front-end framework that simplifies web development by providing pre-designed components and responsive design features.",
    },
    {
      name: "material",
      icon: material,
      tip: "Material-UI is a popular React UI framework that provides pre-designed components based on Google's Material Design guidelines for creating aesthetically pleasing web applications.",
    },
    {
      name: "clerk",
      icon: clerk,
      tip: "Clerk Authentication is a user authentication and identity management service that simplifies building secure and customizable authentication workflows for web and mobile applications.",
    },
    {
      name: "framer",
      icon: framer,
      tip: "Framer Motion is a JavaScript animation library for creating fluid and interactive web animations.",
    },
    
    {
      name: "next auth",
      icon: next,
      tip: "Next-Auth is a popular open-source authentication library for Next.js applications, providing features for user authentication and session management.",
    },
    {
      name: "git",
      icon: git,
      tip: "Git is a distributed version control system used for tracking changes in source code during software development.",
    },
    {
      name: "net",
      icon: net,
      tip: "The .NET Framework is a software framework developed by Microsoft for building Windows applications and web services.",
    },
    {
      name: "my sql",
      icon: mysql,
      tip: "MySQL is an open-source relational database management system used for storing and managing structured data.",
    },
    {
      name: "sql server",
      icon: sqlserver,
      tip: "SQL Server is a relational database management system developed by Microsoft for storing, managing, and retrieving structured data.",
    },
    

   
  ];
  
  const experiences = [
    {
      title: "Simplest-Math",
      image: simple,
      gitlink: "https://github.com/tariq-khan9/simple-math",
      icon: reactjs,
      iconBg: "#EAE7E7",
      date: "React.JS | TailwindCSS | Express.JS | Postgres ",
      points: "SimplestMath is an online platform designed for math practice and learning. It offers practice sheets covering key math topics such as arithmetic, fractions, algebra, and geometry. While still in progress, you can explore the application at https://simplestmath.com/."
      
    },
    {
      title: "Green-Messengers",
      image: green,
      gitlink: "https://github.com/tariq-khan9/green-messengers",
      icon: nextjs,
      iconBg: "#EAE7E7",
      date: "Next.JS | TailwindCSS | MongoDB | Clerk-Auth ",
      points: "This web-based platform with a blog-like interface enables user registration and login via Clerk authentication. Users can explore posts related to specific subjects and search for content or authors. The app is hosted on Vercel and accessible at https://green-messengers.vercel.app."
        
      
    },
    {
      title: "Daily Soldouts",
      image: mern2,
      gitlink: "https://github.com/tariq-khan9/mern-soldout-app",
      icon: reactjs ,
      iconBg: "#242323",
      date: "MERN Stack | Chart.js",
      points: "Daily Soldouts is a MERN-based web application for managing daily sold-out products with user registration, authentication, and visualizing monthly trends through clear graphs, simplifying data analysis for efficient decision-making."
    },
    {
      title: "T-Stores",
      gitlink: "https://github.com/tariq-khan9/tstore-ui",
      image: tstore,
      icon: laravel,
      iconBg: "#EAE7E7",
      date: "Laravel | React.js | Material UI",
      points: "T-Store is an online product showcase where users can  explore a diverse array of items. Its user-friendly interface, powered by ReactJS and Material UI, provided with robust functionality of its Laravel backend. Furthermore, the app includes an admin panel, facilitating effective application management."
    },
    {
      title: "Tariq Portfolio",
      image: tariq2,
      gitlink: "https://github.com/tariq-khan9/tariq-portfolio",
      icon: reactjs ,
      iconBg: "#242323",
      date: "React.JS | TailwindCSS | Framer-motion | Material UI",
      points: "My portfolio website is a visually elegant platform highlighting my educational background, skillset, and professional experience. Constructed with React.js and enhanced by Tailwind CSS, it offers striking user interfaces. Framer Motion adds fluid and interactive web animations to create an engaging user experience."
    },
    
  ];

 
  
 
  
 
  
  export { services, technologies, experiences };