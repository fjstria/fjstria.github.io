import '../../index.css';
import './Works.css';
import projects from './projects.json';
import { getLocalURL } from '../../helpers/urlHelper';;

export default function Works() {
    return (
        <section id='works'>
            <h2 className='title'>Works.</h2>
            <div className='works-container'>
                {
                    projects.map((project, id) => {
                        return (
                            
                            <a key={id} href={project.link} target='_blank' rel='noopener noreferrer' className='project-card'>
                                <img src={getLocalURL(project.icon)} alt={`${project.name} icon`}></img>
                                <h3 className='subtitle'>{project.name}</h3>
                                <p>{project.description}</p>
                            </a>
                
                        );
                    })
                }
            </div>
        </section>
    );
}