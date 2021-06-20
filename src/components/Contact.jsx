import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#d8dddf',
        minHeight: '95vh',
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
}))
export default function Contact(){
    const classes = useStyles();
    
    return (
        <div className = {classes.root}>
            <h1>Contact Page</h1>
        </div>
    )
}