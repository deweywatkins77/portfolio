import React from "react";


const ContactMe = () =>{
    return(
        <section>
            <h2>Contact Me</h2>
            <form className="contactForm">
                <label>Name:</label><br/>
                <input type="text" placeholder="Name"></input>
                <br /><br />
                <label>Email:</label><br />
                <input type="text" placeholder="name@company.com"></input>
                <br /><br />
                <label>Message:</label><br />
                <textarea placeholder="message"></textarea>
                <p> </p>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactMe