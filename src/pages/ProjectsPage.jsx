import projectImg from '../images/project-img.jpg'
import noteTakerImg from '../images/note-taker.png'
import terminalGameImg from '../images/terminal-game.png'
import React from 'react';


export function ProjectsPage() {

    return(
        <div id='projectsPage-div'>
            <h2 id='projectsPage-title'>Past Projects</h2>
            
            <div className="project-list">
                
            <div className="project-entry">                   
                    <img src={terminalGameImg} alt='' />
                    <h4 >Terminal Game</h4>
                    <p>A text-based adventure game, coded with Python.</p>
                    <div className="project-entry-buttons">
                        {/* <a href="" target="_blank" rel="noreferrer">
                            <button>Live Site</button>
                        </a> */}
                        <a href="https://github.com/SheaDuffy13/SheaDuffy_T1A3_Terminal-App" target="_blank" rel="noreferrer">
                            <button>Github</button>
                        </a>
                    </div>
                </div>

                <div className="project-entry">                   
                    <img src={projectImg} alt='' />
                    <h4 >API Bookstore Database</h4>
                    <p>Flask, sqlalchemy, marshmallow</p>
                    <div className="project-entry-buttons">
                        {/* <a href="HREF" target="_blank" rel="noreferrer">
                            <button>Live Site</button>
                        </a> */}
                        <a href="https://github.com/SheaDuffy13/SheaDuffy_T2A2_API" target="_blank" rel="noreferrer">
                            <button>Github</button>
                        </a>
                    </div>
                </div>

                <div className="project-entry">                   
                    <img src={noteTakerImg} alt='' />
                    <h4 >Note Taking App</h4>
                    <p>React app focused on using hooks and context</p>
                    <div className="project-entry-buttons">
                        <a href="HREF" target="_blank" rel="noreferrer">
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