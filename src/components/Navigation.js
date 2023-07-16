import React from "react"
import {Link} from "react-router-dom"


const Navigation = () =>{

    return (
            <nav>
                <ul>
                    <li><Link to="/portfolio">About Me</Link></li>
                    <li><Link to="/portfolio/projects">My Projects</Link></li>
                    <li><Link to="/portfolio/contactme">Contact Me</Link></li>
                    <li><Link to="/portfolio/resume">Resume</Link></li>
                </ul>
            </nav>
    )

}

export default Navigation