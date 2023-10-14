import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const EducationCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Education = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>MORE ABOUT ME</p>
          <h2 className="text-white font-black md:text-[45px] sm:text-[40px] xs:text-[30px] text-[25px]">Education and Interests.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
          <motion.div
              variants={fadeIn("", "spring", 0.5, 0.75)}
              className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
            >
              <p className='text-gray-300 font-black text-[35px]'>Education.</p>

              <div className='mt-6'>
                <p className='text-white tracking-wider text-[20px]'>Masters in Computer Science</p>

                <div className='mt-3 flex justify-between items-center gap-1'>
                  <div className='flex-1 flex flex-col'>
                    <p className='text-gray-400 font-medium text-[16px]'>
                      City University of Science and Technology <span className="text-[14px]">(2022)</span> .
                    </p>
                   
                  </div>

                
                </div>
              </div>
          </motion.div>

          <motion.div
              variants={fadeIn("", "spring", 0.5, 0.75)}
              className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
            >
              <p className='text-gray-300 font-black text-[35px]'>Interests.</p>

              <div className='mt-6'>
                <div className="flex flex-row mb-3">
                    <div className='w-4 mt-[6px] mr-3 h-4 rounded-full bg-[#915EFF]' />
                    <p className='text-white tracking-wider text-[20px]'>Coding</p>
                </div>

                <div className="flex flex-row mb-3">
                    <div className='w-4 mt-[6px] mr-3 h-4 rounded-full bg-[#915EFF]' />
                    <p className='text-white tracking-wider text-[20px]'>Travel</p>
                </div>

                <div className="flex flex-row">
                    <div className='w-4 mt-[6px] mr-3 h-4 rounded-full bg-[#915EFF]' />
                    <p className='text-white tracking-wider text-[20px]'>Hiking</p>
                </div>


               

                
                
              </div>
          </motion.div>

          <motion.div
              variants={fadeIn("", "spring", 0.5, 0.75)}
              className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
            >
              <p className='text-gray-300 font-black text-[35px]'>Goals.</p>

              <p className="mt-6 text-justify">
              My passion is to excel as a versatile Web developer, specializing in creating innovative, efficient web applications for exceptional user experiences.
              </p>

               

                
                
              
          </motion.div>

      </div>
    </div>
  );
};

export default SectionWrapper(Education, "");
