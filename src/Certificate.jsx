import React from 'react'
import Header from './pages/Header'
import c from './img/certificate.jpg'
import './Certificate.css';
function Certificate() {
  return (
    <div>
      <Header/>
      <div className="cer_container">
        <div className="cer">
            <img src={c} alt="" />
        </div>
        <div className="cer">
            <img src={c} alt="" />
        </div>
        <div className="cer">
            <img src={c} alt="" />
        </div>
        <div className="cer">
            <img src={c} alt="" />
        </div>
      </div>

    </div>
  )
}

export default Certificate
