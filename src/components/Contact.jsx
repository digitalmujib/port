import React from 'react'
import { images } from "../constants";


const Contact = () => {

    return (
        <div className='contact-container' id="contact">
            <div className='contact-details'>
                <h1>Get in touch with me!</h1>

                <p><strong>Email:</strong> mujib.freelance@gmail.com</p>
                <p><strong>Phone:</strong> Phone: +91 9921688776</p>

                <form  action="mailto:mujib.freelance@gmail.com">
                    <button className='resume-button contact'>Contact Me</button>
                </form>

            </div>


            <div className='contact-img'>
                <img src={images.contact} alt='contact-img' />

            </div>
        </div>

    )
}

export default Contact