import React from "react"
import {Link} from "react-router-dom"


const Navigation = () =>{

    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">About Me</Link></li>
                    <li><Link to="/projects">My Projects</Link></li>
                    <li><Link to="/contactme">Contact Me</Link></li>
                    <li><a href="https://github.com/deweywatkins77/resume">Resume</a></li>
                </ul>
            </nav>
        </div>
    )

}

export default Navigation