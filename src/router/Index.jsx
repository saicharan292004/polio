import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from '../App'
import Cer from '../Certificate';

function Index() {
  return (
    <div>
       <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cer" element={<Cer />} />
     
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Index
