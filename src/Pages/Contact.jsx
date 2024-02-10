import {React,useRef} from 'react'
import emailjs from "@emailjs/browser";
import { FaWhatsapp } from "react-icons/fa";
import { GoMail } from "react-icons/go";

const info = [
    { logo: <GoMail />, text: "abhaypratap41234@gmail.com" },
    { logo: <FaWhatsapp />, text: "+91 8788091946" },
];

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9sv0fnr",
        "template_8m2d82a",
        form.current,
        "jj24Y1fYQ_D7lp8y9"
      )
      .then(
        (result) => {
          console.log(result);
          alert("message sent successfully !");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id='contact' className='w-full flex flex-col py-5 bg-gray-800 mt-6 gap-10'>
        <div className='w-full flex justify-center'>
            <h1 className='text-5xl '>Contact <span className='text-cyan-500'>Me</span></h1>
        </div>
        <div className='flex flex-col lg:flex-row w-full gap-4 px-5'>
          
          
                <div className='w-full flex flex-col gap-4'> 
                    <div
                    className=" flex justify-center items-center w-full"
                    >
                        <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.6107607847966!2d93.93584267524648!3d24.842981477940675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37492785030cfa5d%3A0xa9e85369c96babc0!2sIndian%20Institute%20of%20Information%20Technology%20Manipur!5e0!3m2!1sen!2sin!4v1688284090692!5m2!1sen!2sin"
                        width={700}
                        height={400}
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="location"
                        ></iframe>
                        
                    </div> 
                    <div className='flex md:justify-center flex-wrap md:flex-row gap-3 lg:gap-24'>
                        
                           <div className='flex items-center gap-4'>
                                <a href='mailto:abhaypratap41234@gmil.com' className='bg-cyan-600 px-3 text-3xl py-3 rounded-full'>{info[0].logo}</a>
                                <p className='text-xl'>{info[0].text}</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <a href='tel:+918788091946' className='bg-cyan-600 px-3 text-3xl py-3 rounded-full'>{info[1].logo}</a>
                                <p className='text-xl'>{info[1].text}</p>
                            </div>
                          
                        </div>
              
                </div>
            <form
            className=" flex w-full flex-col gap-4"
            ref={form}
            onSubmit={sendEmail}
            >
            <input
              className="bg-gray-700 outline-none rounded-lg p-3"
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />
            <input
              className="bg-gray-700 outline-none rounded-lg p-3"
              type="email"
              name="user_email"
              placeholder="Your Email Address"
              required
            />
            <textarea
              className="bg-gray-700 outline-none rounded-lg p-3"
              placeholder="Your Message"
              name="message"
              rows={10}
              required
            ></textarea>
            <button className="btn-primary w-fit" type="submit" value="send">
              Send Message
            </button>
          </form>
        </div>
    </section>
  )
}

export default Contact
