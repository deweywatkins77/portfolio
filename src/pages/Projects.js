import React from "react"
import Project from "../components/Project"

const Projects = () =>{
   const links = [
        {
            link: 'https://invmanagement.herokuapp.com/',
            github: 'https://github.com/deweywatkins77/InventoryManagement',
            name: "Inventory Management",
            class: "img-invManagement"
        },
        {
            link: 'https://donatetrader-6968094a5822.herokuapp.com/',
            github: "https://github.com/castarke/donatetrader",
            name: "DonateTrader",
            class: "img-donatetrader"
        },
        {
            link: 'https://github.com/deweywatkins77/autocameraptz',
            github: "https://github.com/deweywatkins77/autocameraptz",
            name: "Automated Camera PTZ",
            class: "img-camera"
        },
        {
            link: 'https://deweywatkins77.github.io/glow-effects/',
            github:"https://github.com/deweywatkins77/glow-effects",
            name: "Glow Effects",
            class: "img-glow"
        },
        {
            link: 'https://blogcms.herokuapp.com/',
            github: 'https://github.com/deweywatkins77/BlogCMS',
            name: "Blog CMS",
            class: "img-blog"
        },
        {
            link: 'https://deweywatkins77.github.io/dailyplanner/',
            github: 'https://github.com/deweywatkins77/dailyplanner',
            name: "Daily Planner",
            class: "img-planner"
        }
    ]
    return(
        <section>
            <h2 id="MyProjects">My Projects</h2>
            <section className="cardcontainer">
                {links.map((element, index)=>{
                    return <Project key={index} link={element} />
                })}
            </section>
        </section>
    )
}

export default Projects

