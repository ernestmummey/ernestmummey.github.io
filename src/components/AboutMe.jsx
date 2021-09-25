import React from 'react';
import '../Style/AboutMe.css';
import aboutMe from '../assets/aboutme.jpeg';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';



const AboutMe = props => {
    return (
        <div className='aboutMe__root' id="aboutMe" >
            <div>
                <h1 className='aboutMe__about'> About Me </h1>
            </div>  
            <div>
                <Avatar className='aboutMe__avatarPic' alt="Picture of myself with the pups" src={aboutMe} />
            </div>
            <div>
                <h3 className='aboutMe__description'>"I have <span className='aboutMe__span'>not</span> failed. I've just <span className='aboutMe__span'>found</span> 10,000 <span className='aboutMe__span'>ways</span> that won't work." <br/>-Thomas Edison</h3> 
            </div>
            <div>
                <Typography className='aboutMe__body' variant="body1" >  
                I am a developer with experience building web applications from scratch across multiple software language stacks. A driven military veteran with strong decision making and leadership skills. Eager to combine burgeoning software knowledge and strong customer focused skills to impact technology teams.
                <br/>
                Outside of coding there are a few hobbies that I enjoy ! These are bodybuilding (I use to compete in the past), fishing and hanging out with friends.  
                </Typography>
            </div>
        </div>
    )
}
export default AboutMe;