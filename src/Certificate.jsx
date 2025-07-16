import React from 'react'
import { useState,useEffect } from 'react'
import Header from './pages/Header'
import c from './img/certificate.jpg'
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
            <img src={c} alt="" />
        </div>
        <div className="cer" data-aos ="zoom-in">
            <img src={c} alt="" />
        </div>
        <div className="cer" data-aos ="zoom-in">
            <img src={c} alt="" />
        </div>
      </div>

    </div>
  )
}

export default Certificate
