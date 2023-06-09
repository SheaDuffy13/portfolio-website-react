import projectImg from '../images/leaves.jpg'
import React from 'react';


export function ProjectsPage() {

    return(
        <div id='projectsPage-div'>
            <h2 id='projectsPage-title'>Past Projects</h2>
            
            <div className="project-list">
                
                <div className="project-entry">                   
                    <img src={projectImg} alt='' />
                    <h4 >Note Taking App</h4>
                    <p>Made with React</p>
                    <div className="project-entry-buttons">
                        <a href="https://www.google.com/" target="_blank" rel="noreferrer">
                            <button>Live Site</button>
                        </a>
                        <a href="https://github.com/SheaDuffy13/note-taker" target="_blank" rel="noreferrer">
                            <button>Github</button>
                        </a>
                    </div>
                </div>
                <div className="project-entry">                   
                    <img src={projectImg} alt='' />
                    <h4 >Terminal Game</h4>
                    <p>Coded with Python as a class project</p>
                    <div className="project-entry-buttons">
                        <a href="https://www.google.com/" target="_blank" rel="noreferrer">
                            <button>Live Site</button>
                        </a>
                        <a href="https://github.com/SheaDuffy13/note-taker" target="_blank" rel="noreferrer">
                            <button>Github</button>
                        </a>
                    </div>
                </div>
                <div className="project-entry">                   
                    <img src={projectImg} alt='' />
                    <h4 >API Bookstore Database</h4>
                    <p>Class project</p>
                    <div className="project-entry-buttons">
                        <a href="https://www.google.com/" target="_blank" rel="noreferrer">
                            <button>Live Site</button>
                        </a>
                        <a href="https://github.com/SheaDuffy13/note-taker" target="_blank" rel="noreferrer">
                            <button>Github</button>
                        </a>
                    </div>
                </div>
                <div className="project-entry">                   
                    <img src={projectImg} alt='' />
                    <h4 >Project 4</h4>
                    <p>a brief description of what this project is about and a link to the github/site</p>
                    <div className="project-entry-buttons">
                        <a href="https://www.google.com/" target="_blank" rel="noreferrer">
                            <button>Live Site</button>
                        </a>
                        <a href="https://github.com/SheaDuffy13/note-taker" target="_blank" rel="noreferrer">
                            <button>Github</button>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}