import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: '#d8dddf',
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
        margin: "0 auto"
    },

}))
export default function AboutMe(){
    const classes = useStyles();
    
    return (
        <div className = {classes.root}>
            <div>
                <h1> About Me </h1>  
                <h3>Brief</h3> 
            </div>
            <div>
                <Avatar className = {classes.avatarPic} alt="Picture of myself with the pups" src="/assets/aboutme.jpeg" />
            </div>
            <div>
                <Typography variant="body1" >
                        Storage shed, troughs feed bale manure, is garden wheat oats at augers. Bulls at rose garden cucumbers mice sunflower wheat in pig. Chainsaw foal hay hook, herbs at combine harvester, children is mallet. Goat goose hen horse. Pick up truck livestock, pets and storage shed, troughs feed bale manure, is garden wheat oats at augers. Lamb. Storage shed, troughs feed bale manure, is garden wheat oats at augers. Bulls at rose garden cucumbers mice sunflower wheat in pig. Chainsaw foal hay hook, herbs at combine harvester, children is mallet. Goat goose hen horse. Pick up truck livestock, pets and storage shed, troughs feed bale manure, is garden wheat oats at augers. Lamb.
                </Typography>
            </div>
        </div>
    )
}