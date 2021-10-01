import React from 'react';
import '../Style/Header.scss'


const Header = () => {
    return (
        <div className="header__wrapper">
            <div className='header__container'>
                <div className="logo">
                    <p>
                        logo
                    </p>
                </div>
                <ul>
                    <li>About Me</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}


export default Header;