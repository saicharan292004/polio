import React from 'react'
import { useState,useEffect } from 'react'
import Header from './pages/Header'
import c from './img/certificate.jpg'
import c1 from './img/certificate1.jpg'
import c2 from './img/certificate2.jpg'
import c3 from './img/certificate3.jpg'
import './Certificate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Certificate() {
  useEffect(() => {
    AOS.init({
      duration: 1000,  
      once: true       
    });
    }, []);
  return (
    <div>
      <Header/>
      <div className="cer_container">
        <div className="cer" data-aos ="zoom-in">
            <img src={c} alt="" />
        </div>
        <div className="cer" data-aos ="zoom-in">
            <img src={c1} alt="" />
        </div>
        <div className="cer" data-aos ="zoom-in">
            <img src={c2} alt="" />
        </div>
        <div className="cer" data-aos ="zoom-in">
            <img src={c3} alt="" />
        </div>
      </div>

    </div>
  )
}

export default Certificate
