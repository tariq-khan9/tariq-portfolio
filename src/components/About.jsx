import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[180px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[200px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-14 h-14 object-contain'
        />

        <h3 className='text-white text-[16px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-justify text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I've accumulated more than three years of experience as a fullstack web developer. My proficiency extends to <span className="text-gray-300">React.js</span>  and <span className="text-gray-300">Next.js</span> for front-end development, where I've employed <span className="text-gray-300">TailwindCSS</span>, <span className="text-gray-300">Bootstrap</span>, and <span className="text-gray-300">Material UI</span> to craft user interfaces. On the back end, my preferred tools are Next.js and <span className="text-gray-300">Laravel</span>. In earlier roles, I've successfully delivered projects leveraging Microsoft <span className="text-gray-300">.NET</span> technologies and <span className="text-gray-300">My SQL</span>. 
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};



export default SectionWrapper(About, "about");

