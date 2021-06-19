import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Image from 'material-ui-image'
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
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
        marginLeft: "25px",
    },
    hobbiesBox: {
        marginLeft: "25px",
    },
}))
    export default function Header(){
    const classes = useStyles();
    return ( 
        <div>
            <AppBar position ="fixed" className = {classes.appbar}>
                <Toolbar>
                    <Typography className = {classes.header} variant= "h4" color= " primary">
                        <Box className = {classes.box}>
                            Ernest Mummey
                        </Box>
                        <Box className = {classes.headerNav}>
                        <Box>
                            About
                        </Box>
                        <Box className = {classes.projectBox}>
                            Projects
                        </Box>
                        <Box className = {classes.hobbiesBox}>
                            Contact
                        </Box>
                        </Box>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
    }
