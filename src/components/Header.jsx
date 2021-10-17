import React from 'react';
import '../Style/Header.scss'


const Header = () => {
    return (
        <div className="header__wrapper">
            <div className='header__container'>
                    <div className="logo">
                        <p>
                            e<span>M</span>
                        </p>
                    </div>
                    <div className="list">
                        <ul>
                            <li>Projects</li>
                            <li>Contact</li>
                            <li>About</li>
                        </ul> 
                    </div>
            </div>
        </div>
    )
}


export default Header;
