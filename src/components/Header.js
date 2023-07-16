import React from 'react';
import Navigation from './Navigation'
import profileImage from '../images/profilesmall.jpg';
const Header = () =>{

    return (
        <div>
            <header>
                <section className="profile">
                <img src={profileImage} alt="dewey watkins profile"/>
                <h1>
                    Dewey<br />Watkins
                </h1>
                </section>
                <Navigation />
            </header>
        </div>
    )

}

export default Header