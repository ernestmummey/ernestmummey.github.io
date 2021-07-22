import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';



const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 'none',
        minWidth: '1000px',
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
                Hello! I'm Ernest, a full stack engineer
                </Typography>
            </div>
        </div>
    )
}