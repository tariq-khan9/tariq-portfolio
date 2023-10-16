import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { github, linkedin, gmail, phone, whatsapp } from "../assets";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn, zoomIn } from "../utils/motion";

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
    
    <div className={`mt-12 bg-black-70 rounded-[20px]`}>
     
      <motion.div
        variants={zoomIn( 0.2, 1)}
        className=' bg-black-100 p-8 rounded-2xl'
      >
        <p className="sm:text-[18px] ml-8  text-[14px] text-secondary uppercase tracking-wider">Get in touch</p>
        <h3 className="text-white ml-8 font-black md:text-[45px] sm:text-[35px] xs:text-[25px] text-[20px]">Contact and Social links.</h3>
        <div  className="flex lg:flex-row flex-col">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='bg-tertiary rounded-xl mt-10 p-6 md:ml-8 w-[330px] md:w-[500px] flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white   font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-black-100  py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white   font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-black-100  py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white   font-medium mb-4'>Your Message</span>
            <textarea
              rows={5}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-black-100 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-black-100 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

        <div className="md:ml-9 mt-10 p-6 pt-7 w-[330px]  md:mb-1 rounded-xl md:w-[500px] md:mr-8 bg-tertiary">
          <div className="flex  flex-col ">
            <img className="mr-4" src={linkedin} width={38} height={38} alt="linkedin" />
            <Link to="https://www.linkedin.com/in/tariq-khan-1877a5229/" className="mt-2 ml-2">https://www.linkedin.com/in/tariq-khan-1877a5229</Link>
          </div>

          <div className="flex mt-7  flex-col ">
            <img className="mr-4" src={github} width={43} height={43} alt="github" />
            <Link to="https://github.com/tariq-khan9" className="mt-1 ml-2">https://github.com/tariq-khan9</Link>
          </div>

          <div className="flex mt-8 flex-col ">
            <img className="mr-4" src={gmail} width={40} height={40} alt="gmail" />
            <p className="mt-2 ml-2">tariqkhan.cs9@gmail.com</p>
          </div>

          <div className="flex mt-8 flex-col ">
            <img className="mr-4" src={phone} width={35} height={35} alt="phone" />
            <p className="mt-2 ml-2">+92-314-9698996</p>
          </div>

          <div className="flex mt-7 flex-col ">
            <img className="mr-3" src={whatsapp} width={40} height={40} alt="phone" />
            <p className="mt-2 ml-2">+92-314-9698996</p>
          </div>

          
        </div>
        </div>
      </motion.div>

      
      
      <ToastContainer position='bottom-center' closeOnClick={true} pauseOnHover={false} />
    </div>
 
   
    
    
  );
};

export default SectionWrapper(Contact, "contact");
