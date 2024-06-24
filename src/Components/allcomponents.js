import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Main from "./main/main";
import UseDarkMode from "../Dark-mode";
import './allcomponents.css'
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Project from "./main/mmain/instances/instanceProjects/project";
import { useState, useEffect } from "react";


const Allcomponents = () => {
  const [theme, toggleTheme] = UseDarkMode()

  let content = (
    <div className='app'
      style={{
        background: theme == 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgb(235, 225, 225)',
        color: theme == 'dark' ? 'white' : 'black'
      }}>

{
  theme == 'dark' ?
    <i onClick={toggleTheme}><a className="fa fa-sun icon2" ></a></i>
    :
    <i onClick={toggleTheme}><a className="fa fa-moon icon1" ></a></i>
}



      <Routes>
        <Route path="/" element={<Main click={toggleTheme}  />} ></Route>
        <Route path="/project" element={<Project />}  ></Route>
      </Routes>
    </div>
  )
  return content
}
export default Allcomponents