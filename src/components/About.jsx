import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import aboutData from '../aboutData';


const About = () => {
  return (
    <> <div id="about"></div>
      <motion.div
        className='about-container'>
        <h1 className='about-header'>I know that <span>Good Development</span> Means <span>Good Business</span> </h1>

        <div className='about-data'>
          {aboutData.map((data, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4, type: "tween" }}
              key={index}
            >
              <img className='about-img' src={data.url} alt={data.title} />
              <h2 className='about-text'>{data.title}</h2>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </>
  )
}

export default About