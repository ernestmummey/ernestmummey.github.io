import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header';
import Landing from './components/Landing';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button'
import { CssBaseline } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({


  aboutContainer: {
    paddingTop: theme.spacing(3),
  },
  image: {
    
    height: '200',
    width: '200'
  },
  root: {
    maxWidth: 345,
  },
  cardContainer: {
    display: "flex",
    justifyContent: "space-evenly",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <CssBaseline/>
      <Header/>
      <Landing/>
            <Container className={classes.aboutContainer}>
              <Typography variant="h2">About Me</Typography>
              <img className = {classes.image} src="https://dummyimage.com/300x300/000/fff&text=Placeholder"/>
              <Typography variant="body1" >
                Storage shed, troughs feed bale manure, is garden wheat oats at augers. Bulls at rose garden cucumbers mice sunflower wheat in pig. Chainsaw foal hay hook, herbs at combine harvester, children is mallet. Goat goose hen horse. Pick up truck livestock, pets and storage shed, troughs feed bale manure, is garden wheat oats at augers. Lamb. Storage shed, troughs feed bale manure, is garden wheat oats at augers. Bulls at rose garden cucumbers mice sunflower wheat in pig. Chainsaw foal hay hook, herbs at combine harvester, children is mallet. Goat goose hen horse. Pick up truck livestock, pets and storage shed, troughs feed bale manure, is garden wheat oats at augers. Lamb.
              </Typography>
            </Container>
            <Container className = {classes.cardContainer}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Container>
    </div>
  );
}

export default App;
