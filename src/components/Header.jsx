import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import Typewriter from 'react-typewriter-animate';
import "react-typewriter-animate/dist/Typewriter.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import { images } from "../constants";


const Header = () => {

  return (
    <> <div id='home'>

      <div className='social-container'>
        <a className='social-links' href='https://www.instagram.com/digitalmujib/' target="blank"><InstagramIcon /></a>
        <a className='social-links' href='https://linkeidin.com/' target="blank"><LinkedInIcon /></a>
        <a className='social-links' href='https://facebook.com' target="blank"> <FacebookIcon /></a>
        <a className='social-links' href='https://whatsapp.com' target="blank"><WhatsAppIcon /></a>
        <a className='social-links' href='https://github.com/digitalmujib?tab=repositories' target="blank"><GitHubIcon /></a>
      </div>
      <div className='header-container' >


        <div className='illustration'>
          <img className="illustration-img" src={images.headerIllustration} alt="header-illustration" />
          <div className='greet-container'>

            <motion.div
              animate={{ x: [-100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="motion-div"
            >
              <div className='header-greet'>👋 Hello There! I am<span className='name'>Mujib Shaikh</span></div>
            </motion.div>

            <motion.div
              animate={{ x: [-100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.5, delay: 1 }}
              className='motion-div second'
            >
              <div className='profession'>Freelance <div className='profession-name'>
                <Typewriter
                  loop={true}
                  dataToRotate={[
                    [
                      { spanClass: "proff", type: "word", text: "" },

                    ],
                    [
                      { spanClass: "proff", type: "word", text: "Web-developer!" },

                    ],
                    [
                      { spanClass: "proff", type: "word", text: "Programmer" }
                    ],
                    [
                      { spanClass: "proff", type: "word", text: "Data Science" }
                    ],
                    [
                      { spanClass: "proff", type: "word", text: "Machine Learning" }
                    ],

                  ]

                  }
                />
              </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              <motion.div
                whileHover={{ scale: [1, 1.06] }}
                transition={{ duration: 0.1 }}
                className="resume-button"><a href='#'>Download Resume</a></motion.div>
            </motion.div>
          </div>
        </div>

      </div>
    </div>

    </>
  )
}

export default Header