import React from 'react';
import '../Style/Landing.css';
import resume from '../assets/resume.pdf';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button'


const Landing = props => {
    return (
        <div id="home">
            <Box className='landing__image'>
                <div className='landing__heroContainer'>
                    <h1>
                        Ernest <span className='landing__logo'>M</span>ummey
                    </h1>
                    <h3>
                        Full Stack Engineer
                    </h3>
                    <Button className='landing__button' href={resume} target='_blank' variant="contained" size="large" >
                        Resume
                    </Button>
                </div>
            </Box>
        </div>
    )
}

export default Landing;


