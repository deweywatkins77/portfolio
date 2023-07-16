import React from "react"
import {Link} from "react-router-dom"


const Navigation = () =>{

    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/portfolio">About Me</Link></li>
                    <li><Link to="/projects">My Projects</Link></li>
                    <li><Link to="/contactme">Contact Me</Link></li>
                    <li><Link to="/resume">Resume</Link></li>
                </ul>
            </nav>
        </div>
    )

}

export default Navigation