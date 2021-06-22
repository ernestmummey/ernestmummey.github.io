import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button'




const useStyles = makeStyles((theme) => ({
    hero: {
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/landingPage.jpg'})`,
        minHeight: "95vh",
        backgroundPosition: "center",
        backgroungRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative", 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "4rem",
    },
    heroContainer: {
        textAlign: "center",
    },
    textContainer: {
        margin: "0 auto",
    },
    button: {
        height: 70,
        width: 300,
        fontSize: "2rem"
    },

}))
export default function Landing(){
    const classes = useStyles();
    
    return (
        <div id={0}>
            <Box className={classes.hero} boxShadow={3}>
                <div className = {classes.heroContainer}>
                    <h1>
                        Under Construction
                    </h1>
                    <h3>
                        Full Stack Engineer
                    </h3>
                    <Button className = {classes.button} variant="contained" size="large" color="primary">
                        Resume
                    </Button>
                </div>
            </Box>
        </div>
    )
}




