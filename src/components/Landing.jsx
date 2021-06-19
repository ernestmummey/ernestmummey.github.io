import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container';



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
    heroContainer: {
        margin: "0 auto",
    },
}))
export default function Landing(){
    const classes = useStyles();
    
    return (
        <div>
            <Box className={classes.hero}>
                Under Construction
                    <Button variant="contained" size="large" color="primary">
                        Large
                    </Button>
            </Box>
        </div>
    )
}




