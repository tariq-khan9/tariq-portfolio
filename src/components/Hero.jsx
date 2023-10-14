
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn, slideIn, zoomIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";


const Hero = () => {
  return (
    <div className="pt-2 mb-36 md:mb-8  w-full flex flex-col md:flex-row space-x-20">
        <motion.div
            variants={fadeIn("right", "type", 0.5, 2)}
            
          >
          <div
            className={` pt-10 pr-20   flex flex-row items-start gap-5`}
          >
              <div className='flex flex-col justify-center items-center mt-5'>
                <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
                <div className='w-1 sm:h-80 h-40 violet-gradient' />
              </div>

              <div>
                <h1 className={`${styles.heroHeadText} text-white`}>
                  Hi, I'm <span className='text-[#915EFF]'>Tariq</span>
                </h1>
                <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                I develop innovative and visually   <br className='sm:block hidden' />
                appealing web applications
                </p>
              </div>
          </div>
          </motion.div>
          <Tilt>
            <div className="pr-0 mr-0">
            <motion.div
              variants={fadeIn("left", "type", 1, 2)}
              
            >
              <img className="w-[600px]"  src="./laptop.png" alt="tariq"/>
              </motion.div>
            </div>
          </Tilt>
          
         

    
    </div>

   

  );
};

export default SectionWrapper( Hero, "hero");
