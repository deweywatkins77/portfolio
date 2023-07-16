import React, {useState} from "react";

const ContactMe = () =>{
    const [errorMessage, setErrorMessage] = useState("  ");

    const clearError = () =>{
        setErrorMessage(" ");
    }

    const lostFocus = (event) => {
        event.preventDefault()
        const regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        let inputName = event.target.name
        let inputValue = event.target.value
        if (inputName === "name"){
            if (inputValue === "" ){
                setErrorMessage("Name is required");
            }
        }else if (inputName === "email"){
            if (inputValue === "" || !inputValue.match(regex) ){
                setErrorMessage("Valid Email is required");
            }
        }else if(inputName === "message"){
            if (inputValue === "" ){
                setErrorMessage("Message is required");
            }
        }else{
            setErrorMessage("")
        }
    }

    return(
        <section>
            <h2>Contact Me</h2>
            <form className="contactForm">
                <label>Name:</label><br/>
                <input type="text" name="name" required onChange={clearError} onMouseLeave={(event)=>lostFocus(event)}/>
                <br /><br />
                <label>Email:</label><br />
                <input type="email" name="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" onChange={clearError} onMouseLeave={(event)=>lostFocus(event)}/>
                <br /><br />
                <label>Message:</label><br />
                <textarea name="message" required onChange={clearError} onMouseLeave={(event)=>lostFocus(event)}></textarea>
                <div style={{width:"40%", height:"20px"}}>
                    <p id="errorMessage" style={{color: "red",fontSize: "12px", margin:"0px", padding:"0px", textAlign:"left"}}> {errorMessage}</p>
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactMe