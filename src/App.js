import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Components/main/main";
import Project from "./Components/main/mmain/instances/instanceProjects/project";
import UseDarkMode from "./Dark-mode";



const App = () => {

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

            <Router>
                <Routes>
                    <Route path="/" element={<Main theme={theme} />}></Route>
                    <Route path="/project" element={<Project />}  ></Route>
                </Routes>
            </Router>
        </div>

    )

    return (
        content
    )
}
export default App
