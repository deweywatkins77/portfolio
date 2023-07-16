import React from "react";


const ContactMe = () =>{
    return(
        <div>
            <h2>Contact Me</h2>
            <form>
                <label>Name:</label><br/>
                <input type="text" placeholder="Name"></input>
                <br /><br />
                <label>Email:</label><br />
                <input type="text" placeholder="name@company.com"></input>
                <br /><br />
                <label>Message:</label><br />
                <textarea placeholder="message"></textarea>
                <br /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ContactMe