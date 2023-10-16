import React from "react";
import { github } from "../assets";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { Link } from "react-router-dom";

const ExperienceCard = ({ experience }) => {
  return (
    
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >

      <div >
        <img
            src={experience.image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />
          <div className="flex flex-row justify-between mt-4">
           <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
           <Link to={experience.gitlink}>
             <img width={40} height={40} src={github} alt="thjis"/>
           </Link>
        </div>
        <p
          className='text-secondary text-[16px] text-justify font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <p className="text-white-100 text-justify  text-xs pl-1 tracking-wider">{experience.points}</p>

      {/* <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100  text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul> */}
    </VerticalTimelineElement>
  
  );
};



const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
