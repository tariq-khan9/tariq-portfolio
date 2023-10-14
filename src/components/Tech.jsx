import React from "react";
import { styles } from "../styles";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import { motion } from "framer-motion";
import { fadeIn, textVariant, zoomIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { Tilt } from "react-tilt";

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.pink,
    color: 'rgba(249, 247, 249, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 16,
  },
}));

const Tech = () => {
  return (
    <>
         <motion.div variants={textVariant()} >
        <p className="sm:text-[18px] text-center text-[14px] text-secondary uppercase tracking-wider">what i have used so far!</p>
        <h2 className="text-white text-center font-black md:text-[50px] sm:text-[40px] xs:text-[30px] text-[25px] mb-20">Technologies.</h2>
      </motion.div>

     

        <motion.div
        variants={zoomIn( 0.5, 2)}
        
      >
        <div className='flex flex-row flex-wrap justify-center gap-10'>
        
          {technologies.map((technology) => (
            <div className='w-28 h-28' key={technology.name}>
              <Tilt>
                  <LightTooltip  title={technology.tip} placement="top" arrow>
                  <img width={250} height={250}  src={technology.icon} alt="icon"/>
                  </LightTooltip>
              </Tilt>
            </div>
          ))}
          
        </div>
        </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "");
