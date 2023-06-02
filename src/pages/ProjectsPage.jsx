import projectImg from '../images/project-img.jpg'

export function ProjectsPage() {

    return(
        <div>
            <h1>Projects Page</h1>
            <div className="project-list">
                <div className="project-entry">
                    <h4>Project 1</h4>
                    <img src={projectImg} width={500} />
                    <p>a brief description of what this project is about and a link to the active website</p>
                </div>
                <div className="project-entry">
                    <h4>Project 2</h4>
                    <img src={projectImg} />
                    <p>a brief description of what this project is about and a link to the active website</p>
                </div>
            </div>
        </div>
    )
}