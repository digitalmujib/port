import React, { useState } from 'react'
import { motion } from "framer-motion";
import DisplayProjects from "./DisplayProjects";


const Projects = () => {

  const [projectType, setProjectType] = useState("")


  return (
    <div className='project-container' id='projects'>
      <div className='project-head'>
        <h2 className=''>My <span className='projects-word'>Projects</span></h2>

        <div className='project-types-container'>
          <motion.div whileHover={{ scale: [1, 1.07] }}
            transition={{ duration: 0.3 }}
            onClick={() => {
              setProjectType("frontend")
            }}
          >
            Frontend
          </motion.div>

          <motion.div whileHover={{ scale: [1, 1.07] }}
            transition={{ duration: 0.3 }}
            onClick={() => {
              setProjectType("mern")
            }}
          >
            MERN Stack
          </motion.div>

          <motion.div whileHover={{ scale: [1, 1.07] }}
            transition={{ duration: 0.3 }}
            onClick={() => {
              setProjectType("ml")
            }}
          >
            Machine Learning
          </motion.div>
        </div>

      </div>

      <div className='display-projects'>
            <DisplayProjects project={projectType} />
      </div>

    </div>
  )
}

export default Projects