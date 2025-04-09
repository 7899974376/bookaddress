import React from "react"
import { Routes, Route } from "react-router-dom";
import MNavbar from "./component/MNavbar"
import Herosec from "./component/Navbarpages/Herosec";
import About from "./component/Navbarpages/About";
import Singup from "./component/Navbarpages/Singup";
import Login from "./component/Navbarpages/Login";
import Homepage from "./component/Home/homepage";


import Homenavbar from "./component/Home/Homenavbar";
import Add from "./component/Home/Add";
import View from "./component/Home/View";





function App() {

  return (
   <div>
   
    <Routes>
        <Route path="/" element={<div> <MNavbar /><Herosec /></div>} />  // routes path and name of the Routes 
        <Route path="/about" element={<div> <MNavbar /><About /></div>} />
        <Route path="/register" element={<div> <MNavbar /><Singup /></div>} />
        <Route path="/login" element={<div> <MNavbar /><Login /></div>} />


        <Route path="/home" element={<div> <Homenavbar /><Homepage /></div>} />
        <Route path="/home" element={<div> <Homenavbar /><Homepage /></div>} />

        <Route path="/add" element={<div> <Homenavbar /><Add /></div>} />
        <Route path="/view" element={<div> <Homenavbar /><View /></div>} />
        

      </Routes>

  
    
   </div>
  )
}

export default App
