import React from 'react'
import './linkicon.css'
import { Container, Nav, Navbar } from "react-bootstrap";

const Linkicon = (props) => {
  return (
    <li className='nav-icon'>
     <a href={props.iconlink}> <i > {props.children}</i></a>
    </li>
  )
}

export default Linkicon
