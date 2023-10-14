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
      title: "Green-Messengers",
      company_name: "",
      icon: nextjs,
      iconBg: "#EAE7E7",
      date: "Next.JS | TailwindCSS | MongoDB | Clerk-Auth ",
      points: [
        "The app functions primarily as a web-based platform with a blog-like interface, allowing users to register and log in through Clerk authentication.",
        "Visitors can view posts related to a particular subject, such as green-world and are also able to search for posts by their content or author.",
        "The app is deployed on Vercel. Feel free to access it at the following link: ",
        "https://green-messengers.vercel.app ",
        
      ],
    },
    {
      title: "Daily Soldouts",
      company_name: "",
      icon: reactjs ,
      iconBg: "#242323",
      date: "MERN Stack | Chart.js",
      points: [
        "Daily Soldouts is a  web application meticulously crafted using the powerful MERN (MongoDB, Express.js, React, Node.js) stack.",
        "It simplifies the task of recording and managing daily sold-out products with user-friendly interfaces. Also provides user registeration and authentication.",
        " Effortlessly monitor  monthly sold-out product trends with visually appealing and easy-to-understand graphs. The application transforms complex data into clear, actionable insights.",
        
      ],
    },
    {
      title: "T-Stores",
      //company_name: "Shopify",
      icon: laravel,
      iconBg: "#EAE7E7",
      date: "Laravel | React.js | Material UI",
      points: [
        "T-Store is an online product showcase that brings an array of options to your fingertips, making it a one-stop destination for discovering, exploring, and acquiring an extensive assortment of products.",
        "Seamlessly integrating ReactJS and Material UI for the frontend, and powered by the robust Laravel backend.",
        "Includes a robust admin panel that provides comprehensive control over the application, allowing for efficient management.",
        
      ],
    },
    
  ];
  
 
  
 
  
  export { services, technologies, experiences };