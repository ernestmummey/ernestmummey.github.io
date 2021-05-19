import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  appbar: {
      backgroundColor: "#00664d"
  },
  hero: {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1619484830529-b06123fbdbd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80")`,
      height: "1000px",
      backgroundPosition: "center",
      backgroungRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "relative", 
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      fontSize: "6rem",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
        <AppBar position ="fixed" className = {classes.appbar}>
                <Toolbar>
                    <Typography variant= "h4" color= " primary">
                        Ernest Mummey
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box className={classes.hero}>
                <Box>Under Construction</Box>
            </Box>
    </div>
  );
}

export default App;
