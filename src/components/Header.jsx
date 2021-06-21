import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';




const useStyles = makeStyles(() => ({
    appbar: {
        backgroundColor: "#00664d",
    },
    header: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between"
    },
    headerNav: {
        display: "flex",
    },
    projectBox: {
        color: "#FFFFFF",
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
                            Ernest Mummey
                        </div>
                        <div>
                            <a className={classes.projectBox} href="#home"> Home</a>
                            <a className={classes.projectBox} href="#aboutMe"> About</a>
                            <a className={classes.projectBox} href="#projects"> Projects</a>
                            <a className={classes.projectBox} href="#contact"> Contact</a>
                        </div>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

