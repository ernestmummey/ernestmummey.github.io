import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header';
import Landing from './components/Landing';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Connect from './components/Connect';
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
      <Projects/>
      <Connect/>
    </div>
  );
}

export default App;
