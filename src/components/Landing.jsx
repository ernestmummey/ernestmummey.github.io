import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box';



const useStyles = makeStyles((theme) => ({
    hero: {
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/Landing.jpg'})`,
        minHeight: "90vh",
        backgroundPosition: "center",
        backgroungRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative", 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "6rem",
    },
}))
export default function Landing(){
    const classes = useStyles();
    
    return (
        <div>
            <Box className={classes.hero}>
                <Box>Under Construction</Box>
            </Box>
        </div>
    )
}




