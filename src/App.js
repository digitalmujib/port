import React from 'react'
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact"
import Footer from './components/Footer';
import "./styles.css";



const App = () => {
    return (
        <div className='app'>

            <Navbar />
            <Header />
            <Projects />
            <About />
            <Contact />
            <Footer />
        </div>
    )
}

export default App;