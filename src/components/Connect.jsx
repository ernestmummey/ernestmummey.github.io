import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(() => ({
    root: {
        minHeight: "25vh",
        backgroundColor: '#121212',
    },
    paper: {
        minHeight: "20vh",
        backgroundColor: '#2a2a2a',
    },
    createdBy: {
        color: '#03DAC6',
    },
}))

export default function AboutMe(){
    const classes = useStyles();
    
    return (
        <div className={classes.root} id="connect" >
            <Paper className={classes.paper}>
            </Paper>
            <div>
                <p className={classes.createdBy}>Created by Ernest Mummey 2021</p>
            </div>
        </div>
    )
}


