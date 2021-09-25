import React from 'react'
import '../Style/Projects.css'
import mern from '../assets/mern.jpg';
import java from '../assets/Java.png';
import python from '../assets/python.png';
import tjl from '../assets/tjl.png';
import portfolio from '../assets/portfolio.png';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const Projects = (props) =>{

    return (
        <div id="projects">
            <Box className='projects__root' boxShadow={3}>
                <Container className = 'projects__cardContainer'>
                    <Card className='projects__card' >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Stars over a mountain range"
                                height="140"
                                image={tjl}
                                title="TJL Construction"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2" >
                                    TJL Construction
                                </Typography>
                                <Typography className='projects__fontSize' variant="body2" color="#F8F8FF" component="p">
                                    A responsive website that will be used and deployed for a construction company further down the road. The webiste was built with React, Bootstrap, Java backend and a MySQL db. 
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="large" className='projects__button' href="https://github.com/CodingDojoCollab/TJLConst-Master" target="_blank">
                                GitHub
                            </Button>
                        </CardActions>
                    </Card>
                        <Card className='projects__card'>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    image={portfolio}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Portfilio Website
                                    </Typography>
                                    <Typography className='projects__fontSize' variant="body2" color="#F8F8FF" component="p">
                                        This is my portfolio responsive website. This site was built with React and Material UI. I wanted to do something different and continue to improve on reading documents and implement them into new projects.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        <CardActions>
                            <Button size="large" className='projects__button' target="_blank" href="https://ernestmummey.github.io/" >
                                Link
                            </Button>
                            <Button size="large"className='projects__button' target="_blank" href="https://github.com/ernestmummey/ernestmummey.github.io">
                                GitHub
                            </Button>
                        </CardActions>
                    </Card>
                    <Card className='projects__card'>
                        <CardActionArea>
                            <img 
                            src={python} 
                            alt=''
                            className='projects__pythonImg'/> 
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Python Stack
                                </Typography>
                                <Typography className='projects__fontSize' variant="body2" color="#F8F8FF" component="p">
                                    This repository holds several projects using a Python stack including a few Full Stack web applications. 
                                    The stack includes Python, Flask, Bootstrap as well as MySQL db.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="large" className='projects__button' target="_blank" href="https://github.com/ernestmummey/Python-Stack">
                                Github
                            </Button>
                        </CardActions>
                    </Card>
                    <Card className='projects__card'>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image={mern}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    MERN Stack
                                </Typography>
                                <Typography className='projects__fontSize' variant="body2" color="#F8F8FF" component="p">
                                    This repository holds several projects using MERN stack including a few Full Stack web applications. 
                                    The stack includes React, Express, Node.js, as well as MongoDB.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="large" className='projects__button' target="_blank" href="https://github.com/ernestmummey/MERN-Stack">
                                Github
                            </Button>
                        </CardActions>
                    </Card>
                    <Card className='projects__card'>
                        <CardActionArea>
                        <img 
                            src={java} 
                            alt=''
                            className='projects__javaImg'
                        /> 
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Java Stack
                                </Typography>
                                <Typography className='projects__fontSize' variant="body2" color="#F8F8FF" component="p">
                                    This repository holds several projects using a Java stack including a few Full Stack web applications. 
                                    The stack includes Java Spring/Spring Boot, as well as MySQL db. 
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="large" className='projects__button' target="_blank" href="https://github.com/ernestmummey/Java-Stack-">
                                Github
                            </Button>
                        </CardActions>
                    </Card>
                </Container>
            </Box>
        </div>
    )
}

export default Projects;