import React from 'react';

const Header = () =>{

    return (
        <div>
            <header>
                <section className="profile">
                <img src='../assets/images/profilesmall.jpg' alt="dewey watkin profile"/>
                <h1>
                    Dewey<br />Watkins
                </h1>
                </section>
                <nav>
                    <ul>
                        <li><a href="#AboutMe">About Me</a></li>
                        <li><a href="#MyProjects">My Projects</a></li>
                        <li><a href="#ContactMe">Contact Me</a></li>
                        <li><a href="https://github.com/deweywatkins77/resume">Resume</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )

}

export default Header