import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CopyrightIcon from '@material-ui/icons/Copyright';


const useStyles = makeStyles(() => ({
    root: {
        minWidth: '1000px',
        minHeight: "25vh",
        backgroundColor: '#121212',
    },
    paper: {
        display:"flex",
        minWidth: '1000px',
        flexDirection: 'column',
        margin: "0 auto",
        minHeight: "20vh",
        backgroundColor: '#2a2a2a',
    },
    connect: {
        color: "#03DAC6",
        fontFamily: "Nunito",
        margin: "0 auto",
        marginBottom: "35px"
    },
    iconBox: {
        display: "flex",
        width: "50%",
        justifyContent: "space-between",
        alignItem: "center",
        margin: "0 auto",
    },
    iconButton: {
        height: 100,
        width: 100,
        color: "#F8F8FF"
    },
    iconCopy: {
        height:10,
        width: 10,
    },
    createdBy: {
        display: "flex",
        justifyContent: "flex-end",
        color: '#03DAC6',
        width: "98%"
    },
}))

export default function AboutMe(){
    const classes = useStyles();
    
    return (
        <div className={classes.root} id="connect" >
            <Paper className={classes.paper}>
                <h1 className={classes.connect}>Let's Connect</h1>
                <div className={classes.iconBox}>
                    <IconButton href="mailto:ernest.j.mummey@gmail.com">
                        <EmailIcon className={classes.iconButton}/>
                    </IconButton>
                    <IconButton href="https://github.com/ernestmummey">
                        <GitHubIcon className={classes.iconButton} />
                    </IconButton>
                    <IconButton href="https://www.linkedin.com/in/ernest-mummey/">
                        <LinkedInIcon className={classes.iconButton}/>
                    </IconButton>
                </div>
            </Paper>
            <div>
                <p className={classes.createdBy}>Created by: <CopyrightIcon className={classes.iconCopy}/> 2021 Ernest Mummey </p>
            </div>
        </div>
    )
}


