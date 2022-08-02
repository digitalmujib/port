import React, { useState, useEffect } from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import  GitHubIcon from '@mui/icons-material/GitHub'; 
import { images} from "../constants"

const Navbar = () => {

    const [toggle, setToggle] = useState(true);
    const [windowWith, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWindowWidth(window.innerWidth)
        })
    }, [windowWith]);

    const body = document.getElementById("root");

    if (toggle === false) {
        body.addEventListener("click", (e) => {
            if (e.target.className === "menu-icon" || e.target.className === "mobile-links") {

            }
            else {
                setToggle(true)
            }
        })
    }

    return (
        <nav className='nav-bar' >
            <div>
                <img className='brand-logo' src={images.brandLogo} alt='brand-logo-here' />
            </div>

            {windowWith > 750 ? <ul className='nav-links'>
                <li className='nav-li' ><a href='#home'>HOME</a></li>
                <li className='nav-li' ><a href='#about'>ABOUT</a></li>
                <li className='nav-li' ><a href='#projects'>PROJECTS</a></li>
                <li className='nav-li' ><a href='#contact'>CONTACT</a></li>
            </ul>

                :

                <div className = "mobile-container" >

                    <img
                        className="menu-icon" src={toggle === true ? images.menu : images.remove}
                        alt="menu-icon"
                        onClick={() => setToggle(prev => !prev)}
                    />
                    <ul className="mobile-links" id={toggle ? "hide" : ""} >
                        <li ><a href='#home'>HOME</a></li>
                        <li><a href='#about'>ABOUT</a></li>
                        <li><a href='#projects'>PROJECTS</a></li>
                        <li><a href='#contact'>CONTACT</a></li>

                        <div className='social-icons'>
                            <a className='social-links' href='https://www.instagram.com/digitalmujib/' target="blank"><InstagramIcon /></a>
                            <a className='social-links' href='https://linkeidin.com/' target="blank"><LinkedInIcon /></a>
                            <a className='social-links' href='https://facebook.com' target="blank"> <FacebookIcon /></a>
                            <a className='social-links' href='https://whatsapp.com' target="blank"><WhatsAppIcon /></a>
                            <a className='social-links' href='https://github.com/digitalmujib?tab=repositories' target="blank"><GitHubIcon /></a>
                        </div>

                        <img className='menu-ball' src={images.menuImg} alt="menu-balls" />
                    </ul>


                </div>

            }

        </nav>
    )
}

export default Navbar