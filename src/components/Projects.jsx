import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles(() => ({
    root: {
        minWidth: '1000px',
        backgroundColor: "#121212",
        minHeight: "95vh",
        display: "flex",
        alignItems: "center"
    },
    card: {
        maxWidth: 350,
        marginBottom: "40px",
        backgroundColor: "#2a2a2a",
        color: "#F8F8FF",
        fontFamily: "Nunito",
    },
    cardContainer: {
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
    },
    pythonImg:{
        marginLeft: "27%",
        height: 140
    },
    javaImg:{
        marginLeft: "38%",
        height: 140,
    },
    button:{
        color: "#BB86FC",
    },
}))
export default function Projects(){
    const classes = useStyles();
    return (
        <div id="projects">
            <Box className={classes.root} boxShadow={3}>
                <Container className = {classes.cardContainer}>
                    <Card className={classes.card} >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Stars over a mountain range"
                                height="140"
                                image="/assets/tjl.png"
                                title="TJL Construction"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2" >
                                    TJL Construction
                                </Typography>
                                <Typography variant="body2" color="#F8F8FF" component="p">
                                    A responsive website that will be used and deployed for a construction company further down the road. The webiste was built with React, Bootstrap, Java backend and a MySQL db. 
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="large" className={classes.button} href="https://github.com/CodingDojoCollab/TJLConst-Master">
                                GitHub
                            </Button>
                        </CardActions>
                    </Card>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    image="/assets/portfolio.png"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Portfilio Website
                                    </Typography>
                                    <Typography variant="body2" color="#F8F8FF" component="p">
                                        This is my portfolio responsive website. This site was built with React and Material UI. I wanted to do something different and continue to improve on reading documents and implement them into new projects.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        <CardActions>
                            <Button size="large" className={classes.button} href="https://ernestmummey.github.io/" >
                                Link
                            </Button>
                            <Button size="large"className={classes.button} href="https://github.com/ernestmummey/ernestmummey.github.io">
                                GitHub
                            </Button>
                        </CardActions>
                    </Card>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <img src="/assets/python.png" className={classes.pythonImg}/> 
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Python Stack
                                </Typography>
                                <Typography variant="body2" color="#F8F8FF" component="p">
                                    This repository holds several projects using a Python stack including a few Full Stack web applications. 
                                    The stack includes Python, Flask, Bootstrap as well as MySQL db.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="large" className={classes.button} href="https://github.com/ernestmummey/Python-Stack">
                                Github
                            </Button>
                        </CardActions>
                    </Card>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image="/assets/mern.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    MERN Stack
                                </Typography>
                                <Typography variant="body2" color="#F8F8FF" component="p">
                                    This repository holds several projects using MERN stack including a few Full Stack web applications. 
                                    The stack includes React, Express, Node.js, as well as MongoDB.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="large" className={classes.button} href="https://github.com/ernestmummey/MERN-Stack">
                                Github
                            </Button>
                        </CardActions>
                    </Card>
                    <Card className={classes.card}>
                        <CardActionArea>
                        <img src="/assets/Java.png" className={classes.javaImg}/> 
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Java Stack
                                </Typography>
                                <Typography variant="body2" color="#F8F8FF" component="p">
                                    This repository holds several projects using a Java stack including a few Full Stack web applications. 
                                    The stack includes Java Spring/Spring Boot, as well as MySQL db. 
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="large" className={classes.button} href="https://github.com/ernestmummey/Java-Stack-">
                                Github
                            </Button>
                        </CardActions>
                    </Card>
                </Container>
            </Box>
        </div>
    )
}