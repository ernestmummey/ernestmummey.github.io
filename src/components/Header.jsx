import React from 'react';
import '../Style/Header.css';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


const Header = (props) => {
    return ( 
        <div id="home">
            <AppBar position ="fixed" className='header__appbar'>
                <Toolbar>
                    <Typography className='header__header' variant= "h4" color= " primary">
                        <div>
                            e<span className='header__logo'>M</span>
                        </div>
                        <div>
                            <a className='header__projectBox' href="#home"> Home</a>
                            <a className='header__projectBox' href="#aboutMe"> About</a>
                            <a className='header__projectBox' href="#projects"> Projects</a>
                            <a className='header__projectBox' href="#connect"> Connect</a>
                        </div>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;

