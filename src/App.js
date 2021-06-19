import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header';
import Landing from './components/Landing';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { CssBaseline } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({}));

function App() {
  const classes = useStyles();
  return (
    <div className = {classes.root}>
      <CssBaseline/>
      <Header/>
      <Landing/>
      <AboutMe/>
      {/* <Projects/>
      <Contact/> */}
    </div>
  );
}

export default App;
