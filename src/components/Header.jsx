import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';



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
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return ( 
        <div>
            <AppBar position ="fixed" className = {classes.appbar}>
                <Toolbar>
                    <Typography className={classes.header} variant= "h4" color= " primary">
                        <Typography className = {classes.box}>
                            Ernest Mummey
                        </Typography>
                        <div>
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
