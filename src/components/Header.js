import React from 'react';
import Navigation from './Navigation'

const Header = () =>{

    return (
        <div>
            <header>
                <section className="profile">
                <img src="../images/profilesmall.jpg" alt="dewey watkins profile"/>
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