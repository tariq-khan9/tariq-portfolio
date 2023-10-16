import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  //template_jjgbh2i
  //service_dhltkb6
  //igFbAEoR_98kX1VMZ
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if(!form.name || !form.email || !form.message){
      toast.warning("All fields are required.", {
        autoClose: 2000
      })
      setLoading(false);
    }
    else{
      emailjs.send(
          
          'service_dhltkb6',
          'template_3msesuw',
          {
            from_name: form.name,
            to_name: "tariq",
            from_email: form.email,
            to_email: "tariqkhan.cs9@gmail.com",
            message: form.message,
          },
          'igFbAEoR_98kX1VMZ'
        )
        .then(
          () => {
            setLoading(false);
            toast.success("Thank you. I will get back to you as soon as possible.", {
              autoClose: 2000
            })
            setForm({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setLoading(false);
            toast.error("Ahh, something went wrong. Please try again.", {
              autoClose: 2000
            })

            
          }
        );
    }
  };

  return (
    <div className="flex flex-row w-full">
    <div
      className={`xl:mt-12  flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className=' bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      
      
      <ToastContainer position='bottom-center' closeOnClick={true} pauseOnHover={false} />
    </div>
 
    <div
      className={`xl:mt-12  flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      {/* <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className=' bg-black-100 p-8 rounded-2xl'
      > */}
        <p className={styles.sectionSubText}>REach me out</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        
      {/* </motion.div> */}

     
      
      
    </div>
    
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
