import React from 'react'
import { FormInputHooks } from '../hooks/FormInputHooks';
import { makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#d8dddf',
        minHeight: '95vh',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    heading: {
        marginBottom: "150px",
        fontSize: "3rem"
    },
    form: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    inputField: {
        width: 900,
        backgroundColor: "#fafafa",
        marginBottom: "20px",
        textAlign: "center",
        fontSize: "1rem"
    },
    button: {
        height: 50,
        width: 150,
        fontSize: "1rem"
    },
}))
export default function Contact(){
    const classes = useStyles();
    const [input, handleInputChange] = FormInputHooks();


    return (
        <div className = {classes.root}>
            <h1 className={classes.heading}>Contact Page</h1>
            <form className={classes.form} noValidate autoComplete="off">
                
                <TextField 
                    className ={classes.inputField}
                    id="outlined-multiline-flexible"  
                    name="FullName"
                    onChange = {handleInputChange} 
                    label="Full Name" 
                    multiline 
                    variant="outlined" 
                />
                
                <TextField
                    className ={classes.inputField}
                    id="outlined-multiline-flexible" 
                    name="email" 
                    onChange = {handleInputChange}
                    label="Email Address" 
                    multiline 
                    variant="outlined" 
                />
                <TextField 
                    className ={classes.inputField}
                    id="outlined-multiline-static"  
                    name="message" 
                    onChange = {handleInputChange}
                    label="Message" 
                    multiline 
                    rows={10} 
                    variant="outlined"  
                />
                <Button className = {classes.button} variant="contained" size="large" color="primary">
                    Submit
                </Button>
            </form>
        </div>
    )
}