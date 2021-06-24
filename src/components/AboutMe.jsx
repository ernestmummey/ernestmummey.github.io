import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';



const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: '#121212',
        minHeight: '95vh',
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: 'column',
    },
    avatarPic: {
        height: 500,
        width: 500,
        margin: "0 auto",
        marginBottom: "50px"
    },
    about: {
        fontFamily: "Nunito",
        fontSize: "4rem",
        color: "#F8F8FF",
    },
    description: {
        fontFamily: "Nunito",
        fontSize: "2rem",
        color: "#F8F8FF",
    },
    body: {
        fontFamily: "Nunito",
        color: "#F8F8FF",
        fontSize: "2rem",
    },
    span: {
        fontStyle: "italic",
        color: "#03DAC6",
    },

}))

export default function AboutMe(){
    const classes = useStyles();
    
    return (
        <div className={classes.root} id="aboutMe" >
            <div>
                <h1 className={classes.about}> About Me </h1>  
                <h3 className={classes.description}>"I have <span className={classes.span}>not</span> failed. I've just <span className={classes.span}>found</span> 10,000 <span className={classes.span}>ways</span> that won't work." <br/>-Thomas Edison</h3> 
            </div>
            <div>
                <Avatar className={classes.avatarPic} alt="Picture of myself with the pups" src="/assets/aboutme.jpeg" />
            </div>
            <div>
                <Typography className={classes.body} variant="body1" >
                Growing up I loved to see how things worked. As a kid I took apart my mother’s appliances to include her toaster and microwave trying to figure out how they operated or if I could repair it. This mentality eventually led me to put together my first vehicle in high school. After serving 5 years in the military, I realized I no longer enjoyed what I was doing, and I knew it was time to change. I then found programming. My curiosity drove me to wanting to understand more, soon I was reading and watching videos about it daily. I quickly realized that I found my passion again.
                <br/>
                Programming allows me to go beyond my imagination, add creativity, and truly let me dive into understanding how everything works. I took a leap of faith and decided to go all in and join Coding Dojo bootcamp. There I was able to work in teams and collaborate with my fellow classmates and be able to help others. This bootcamp taught me 3 full stacks in three months. These stacks include Python, MERN, Java, allowing me to build several projects using different technologies.
                </Typography>
            </div>
        </div>
    )
}