import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'material-ui-image'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

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
  aboutContainer: {
    paddingTop: theme.spacing(3),
  },
  image: {
    
    height: '200',
    width: '200'
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
            <Container className={classes.aboutContainer}>
              <Typography variant="h2">About Me</Typography>
              <img className = {classes.image} src="https://dummyimage.com/300x300/000/fff&text=Placeholder"/>
              <Typography variant="body1" >
                Storage shed, troughs feed bale manure, is garden wheat oats at augers. Bulls at rose garden cucumbers mice sunflower wheat in pig. Chainsaw foal hay hook, herbs at combine harvester, children is mallet. Goat goose hen horse. Pick up truck livestock, pets and storage shed, troughs feed bale manure, is garden wheat oats at augers. Lamb. Storage shed, troughs feed bale manure, is garden wheat oats at augers. Bulls at rose garden cucumbers mice sunflower wheat in pig. Chainsaw foal hay hook, herbs at combine harvester, children is mallet. Goat goose hen horse. Pick up truck livestock, pets and storage shed, troughs feed bale manure, is garden wheat oats at augers. Lamb.
              </Typography>
            </Container>
    </div>
  );
}

export default App;
