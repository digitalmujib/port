import React from 'react'

const Footer = () => {

const year = new Date().getFullYear;

  return (
    <div className="footer-container" id="contact">    
        <small>©️ {year} By digitalmujib All rights Reserved</small>
    </div>
  )
}

export default Footer