import React from 'react';
import './Connection.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaLaptopCode, FaLightbulb } from 'react-icons/fa';

const ConnectWithMe = () => {
  return (
    <div className="connect-container">
      <h2>Connect With Me</h2>
      
      <div className="fancy-intro">
        <FaLaptopCode className="mini-icon" />
        <p className="tagline">Turning ideas into reality with code 💻</p>
        <FaLightbulb className="mini-icon" />
        <p className="motto">Innovating one project at a time 🚀</p>
      </div>

      <div className="icon-links">
        <a href="https://in.linkedin.com/in/sri-sai-charan-899755245" target="_blank" rel="noreferrer">
          <FaLinkedin className="icon linkedin" />
        </a>
        <a href="" target="_blank" rel="noreferrer">
          <FaGithub className="icon github" />
        </a>
        <a href="mailto:srisaicharancse2004@gmail.com">
          <FaEnvelope className="icon email" />
        </a>
      </div>
    </div>
  );
};

export default ConnectWithMe;
