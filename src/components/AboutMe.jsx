import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    aboutContainer: {
        paddingTop: theme.spacing(3),
        },
        image: {
        
        height: '200',
        width: '200'
        },
}))
export default function AboutMe(){
    const classes = useStyles();
    
    return (
        <div>
            <Container className={classes.aboutContainer}>
                <Typography variant="h2">About Me</Typography>
                <img className = {classes.image} src="https://dummyimage.com/300x300/000/fff&text=Placeholder"/>
                <Typography variant="body1" >
                    Storage shed, troughs feed bale manure, is garden wheat oats at augers. Bulls at rose garden cucumbers mice sunflower wheat in pig. Chainsaw foal hay hook, herbs at combine harvester, children is mallet. Goat goose hen horse. Pick up truck livestock, pets and storage shed, troughs feed bale manure, is garden wheat oats at augers. Lamb. Storage shed, troughs feed bale manure, is garden wheat oats at augers. Bulls at rose garden cucumbers mice sunflower wheat in pig. Chainsaw foal hay hook, herbs at combine harvester, children is mallet. Goat goose hen horse. Pick up truck livestock, pets and storage shed, troughs feed bale manure, is garden wheat oats at augers. Lamb.
                </Typography>
            </Container>
        </div>
    )
}