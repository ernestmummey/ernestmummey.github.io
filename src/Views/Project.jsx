import React from 'react';
import '../Style/project.scss'


const Project = () => {
    return (
        <div className="project__container">
            <div className="project__wrapper">
                <div id='projectOne' className="project__box"></div>
                <div id='projectTwo' className="project__box"></div>
                <div id='projectThree' className="project__box"></div>
                <div id='projectFour' className="project__box"></div>
            </div>
        </div>
    )
};

export default Project;

// background: linear-gradient(
//     90deg,rgba(28,29,37,.05) 0,
//     rgba(28,29,37,.05) 1px,
//     transparent 1px,
//     transparent calc(50% - 1px),
//     rgba(28,29,37,.05) calc(50% - 1px),
//     rgba(28,29,37,.05) 50%,
//     transparent 50%,
//     transparent calc(100% - 1px),
//     rgba(28,29,37,.05) calc(100% - 1px),
//     rgba(28,29,37,.05) 100%);