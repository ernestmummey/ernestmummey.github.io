import React from 'react';
import '../Style/Header.scss'


const Header = () => {
    return (
        <div>
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
    )
}


export default Header;