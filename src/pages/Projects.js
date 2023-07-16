import React from "react"
import Project from "../components/Project"

const Projects = () =>{
   const links = [
        {
            link: 'https://github.com/deweywatkins77/InventoryManagement',
            name: "Inventory Management",
            class: "img-invManagement"
        },
        {
            link: 'https://donatetrader-6968094a5822.herokuapp.com/',
            name: "DonateTrader",
            class: "img-portfolio"
        },
        {
            link: 'https://github.com/deweywatkins77/autocameraptz',
            name: "Automated Camera PTZ",
            class: "img-camera"
        },
        {
            link: 'https://deweywatkins77.github.io/glow-effects/',
            name: "Glow Effects",
            class: "img-glow"
        },
        {
            link: 'https://github.com/deweywatkins77/primecalculator',
            name: "Calculate Prime Numbers",
            class: "img-primes"
        }
    ]
    return(
        <div>
            <h2 id="MyProjects">My Projects</h2>
            <section className="cardcontainer">
                {links.map((element, index)=>{
                    return <Project key={index} link={element} />
                })}
            </section>
        </div>
    )
}

export default Projects

