import React from "react"

const Project = (props) =>{
    return (
        <section className={`projectcard ${props.link.class}`}  onClick={()=>window.open(props.link.link)}>
            <p className="cardtext">{props.link.name}</p>
        </section>
    )

}

export default Project