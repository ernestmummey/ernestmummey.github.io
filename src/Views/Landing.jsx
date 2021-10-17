import React from 'react';
import Header from '../components/Header';
import '../Style/Landing.scss';



const Landing = (props) => {
    return (
        <div className="wrapper"> 
            <Header/>       
            <div className ='container'>
                <div className="introduction">
                        <h1>Ernest <span>M</span>ummey</h1>
                        <div>
                            <h6>Full Stack Engineer</h6>
                        </div>
                </div>
            </div>
        </div> 
    )
}

export default Landing;


