import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';




const useStyles = makeStyles(() => ({
    appbar: {
        background: "none",
        minWidth: '1000px',
    },
    header: {
        display: "flex",
        flex: 1,
        justifyContent: "space-between",
        fontFamily: "Nunito",
        color: "#F8F8FF",
    },
    headerNav: {
        display: "flex",
    },
    logo: {
        color: "#03DAC6",
    },
    projectBox: {
        color: "#F8F8FF",
        textDecoration: "none",
        marginLeft: "25px",
    },
}))


export default function Header(){
    const classes = useStyles();


    return ( 
        <div id="home">
            <AppBar position ="fixed" className = {classes.appbar}>
                <Toolbar>
                    <Typography className={classes.header} variant= "h4" color= " primary">
                        <div>
                            e<span className={classes.logo}>M</span>
                        </div>
                        <div>
                            <a className={classes.projectBox} href="#home"> Home</a>
                            <a className={classes.projectBox} href="#aboutMe"> About</a>
                            <a className={classes.projectBox} href="#projects"> Projects</a>
                            <a className={classes.projectBox} href="#connect"> Connect</a>
                        </div>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

