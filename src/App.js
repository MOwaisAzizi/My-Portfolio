import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Components/main/main";
import Project from "./Components/main/mmain/instances/instanceProjects/project";
import UseDarkMode from "./Dark-mode";


const App = () => {
    // rgb(235, 225, 225) #121212 2b3035
    const [theme, toggleTheme] = UseDarkMode()
    const [showIcon,setShowIcon] = useState(true) 
    
    let content = (
        <div className='app'
            style={{
                background: theme == 'dark' ? '#121212' : 'rgb(235, 225, 225)',
                color: theme == 'dark' ? 'white' : 'black'
            }}>
            {
                showIcon ?
                theme == 'dark' ?
                    <i onClick={toggleTheme}><a className="fa fa-sun icon2" ></a></i>

                    :
                    <i onClick={toggleTheme}><a className="fa fa-moon icon1" ></a></i>
                    :null
            }

            <Router>
                <Routes>
                    <Route path="/" element={<Main theme={theme} />}></Route>
                    <Route path="/project" element={<Project theme = {theme}/>}   ></Route>
                </Routes>
            </Router>
        </div>

    )

    return (
        content
    )
}
export default App
