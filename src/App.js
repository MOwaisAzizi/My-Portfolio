import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Allcomponents from "./Components/allcomponents";

const App = () => {
    return (
        <div className="app">
            <Router>
                <Allcomponents />
            </Router>
        </div>
    )
}
export default App
