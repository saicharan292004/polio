import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './pages/Header'
import Footer from './pages/Footer'
import sai from './img/sai.jpg'
import Connection from './pages/Connection'
import cloud from './img/cloud1.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {
  const [count, setCount] = useState(0)
useEffect(() => {
  AOS.init({
    duration: 1000,  
    once: true       
  });
}, []);
  return (
    <>
     <div>
      <Header/>
      <div className="about-container">
        <div className="about" data-aos="fade-up">
          <h1>Hi, I’m <span className="highlight">Sri Sai Charan</span> 👋</h1>
  <p>
    I’m a passionate <strong>Cloud Computing Enthusiast</strong> ☁️ who thrives on building scalable, secure, and efficient cloud-native solutions.  
  </p>
  <p>
    I love working with platforms like <strong>AWS</strong>, <strong>Azure</strong>, 
    and I’m constantly exploring the future of the cloud — from <em>serverless</em> to <em>edge computing</em>.
  </p>
  <p>
    My mission? <em>To simplify the cloud, one solution at a time.</em> 
  </p>
  <button> Resume</button>
        </div>
        <div className="about-img" data-aos="fade-down">
          <img src={sai} alt="" />
        </div>
      </div>
      <center><h1 id="skill">Skills I Have</h1></center>
      <div className="skill-container">
        <div className="skill" data-aos="fade-down">
          <img src="https://i.pinimg.com/736x/da/a1/7b/daa17b58c629a99d80ef620582b10c1c.jpg" alt="" />
        </div>
         <div className="skill" data-aos="fade-down">
          <img src="https://i.pinimg.com/1200x/dd/99/82/dd998262059a861de47be6fd30dc0f01.jpg" alt="" />
        </div>
        <div className="skill" data-aos="fade-down">
          <img src="https://i.pinimg.com/736x/09/3f/6e/093f6ed3ff0b96f50686bd538383ad9c.jpg" alt="" />
        </div>
        <div className="skill" data-aos="fade-down">
          <img src="https://i.pinimg.com/736x/c7/b8/11/c7b8113247fecd83bd9b5ed5bd3f34d5.jpg" alt="" />
        </div>

      </div>
      
      <div className="contact-container">
        <div className="contact-card" data-aos="zoom-in">
          <Connection/>
        </div>
        <div className="contact" data-aos="zoom-in">
          <form action="">
            <p>Email:</p>
            <input type="email" />
            <p>name:</p>
            <input type="text" />
            <br /><p>Message</p>
            <textarea name="" id=""></textarea>
            <br />
            <button>Submit</button>
          </form>
        </div>
      </div>
      <Footer/>
     </div>
    </>
  )
}

export default App
