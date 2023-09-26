"use client";
import VideoThumb from '@/public/images/hero-image.png';
import ModalVideo from '@/components/modal-video';


import React,{useEffect,useState} from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import SubmitBtn from "./SubmitBtn";
import toast from "react-hot-toast";




function Contact() {

    return (
        <motion.section
          
            id="contact"
            className="text-center mb-20 scroll-mt-28 w-[min(100%,38rem)] sm:mb-28"
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
            viewport={{
                once: true,
            }}
        >
            <SectionHeading>Let's Make a Free Demo</SectionHeading>

            <p className="text-gray-700 -mt-6 dark:text-white/80">
                I'm currently looking for opportunities.{" "}
                <p>
                    Contact me directly at{" "}
                    <a
                        className="underline"
                        href="mailto:travis05leow@gmail.com"
                    >
                        travis05leow@gmail.com
                    </a>{" "}
                    or through this form.
                </p>
            </p>

            <form
                action={async (formData) => {
                   

                 

                    toast.success("Message sent successfully!");
                }}
                className="flex flex-col mt-10 dark:text-black/80"
            >
                <input
                    type="email"
                    name="senderEmail"
                    className="h-14 px-4 rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                    placeholder="Your Email"
                    required
                    maxLength={500}
                />
                <textarea
                    name="message"
                    className="h-52 my-3 rounded-lg border-black/10 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                    placeholder="Your Message"
                    required
                    maxLength={500}
                />
                <SubmitBtn />
            </form>
        </motion.section>
    );
}



export default function Hero() {
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <section className="relative py-12 md:py-16">
      {/* Illustration behind hero content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-5xl font-bold leading-tighter tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-purple-400" data-aos="zoom-y-out">Start automatizing your workload with</h1>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"><span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">AI ChatBots</span></h1>
            <div className="max-w-3xl mx-auto ">
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                {/* Add any additional content here */}
              </div>
            </div>
          </div>

          <div className="relative flex flex-col-reverse md:flex-row mb-8" data-aos="zoom-y-out" data-aos-delay="450">
            {/* Image Container */}
            <div
              className="md:w-1/2 md:pl-4 mt-4 md:mt-0"
              style={{
                backgroundImage: 'url(/images/mainbg.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                minHeight: '50vh',
                minWidth: '80vh',
                marginRight: '20px', // Add margin to create space
              }}
            >
              {/* Your background image */}
            </div>

            {/* Contact Form Container */}
            <div className="md:w-1/2 md:pl-4 mt-4 md:mt-0 flex justify-center items-center">
            
            <Contact/>
            
            </div>
          </div>
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>
      </div>
    </section>
  );
}


