import React from "react";

const Resume = () =>{
    return (
        <section>
            <div className="resumeHeader">
                <h2>Resume</h2>
                <a href="https://raw.githubusercontent.com/deweywatkins77/resume/main/Resume.pdf">Download</a>
            </div>
            <div className="resumeContainer">
                <div className="resumePart">
                    <h3>Awards</h3>
                    <ul>
                        <li>Employee of the Year</li>
                        <li>Georgia Institute of Technoloy Process Improvement Award</li>
                    </ul>
                </div>
                <div className="resumePart">
                    <h3>Programming Languages</h3>
                    <ul>
                        <li>Javascript</li>
                        <li>Python</li>
                        <li>ASP Classic</li>
                        <li>Scripting Languages</li>
                    </ul>
                </div>
                <div className="resumePart">
                    <h3>Software Skills</h3>
                    <ul>
                        <li>SQL</li>
                        <li>MongoDB</li>
                        <li>Express</li>
                        <li>React</li>
                        <li>Node</li>
                        <li>GitHub</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Resume