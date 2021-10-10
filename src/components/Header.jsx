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
                    <div className="list">
                        <ul>
                            <li>About</li>
                            <li>Projects</li>
                            <li>Contact</li>
                        </ul> 
                    </div>
            </div>
        </div>
    )
}


export default Header;
