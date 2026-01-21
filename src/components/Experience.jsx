import { github, gitlab } from "../assets";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experience } from "../constants";
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
      date={experience.date.map((text) => (
        <div>{text}</div>
      ))}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <img
          src={experience.image}
          alt="project_image"
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="flex flex-row justify-between mt-4">
          <h3 className="text-white text-[22px] font-bold">
            {experience.title}
          </h3>
        </div>
      </div>

      <ul className="text-white-100 text-justify text-[18px] pl-4 list-disc tracking-wider">
        {experience.points.map((text, index) => (
          <li key={index} className="mb-1">
            {text}
          </li>
        ))}
      </ul>

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
      {/* <motion.div variants={textVariant()}> */}
      <p className={`${styles.sectionSubText} text-center`}>
        What I have done so far
      </p>
      <h2 className={`${styles.sectionHeadText} text-center`}>
        Work Experience.
      </h2>
      {/* </motion.div> */}

      <div className="mt-20 sm:px-6 md:px-10 lg:px-0  flex flex-col">
        <VerticalTimeline>
          {experience.map((experience, index) => (
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

export default SectionWrapper(Experience, "Experience");
