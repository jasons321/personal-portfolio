import './project.css';
import jsonData from '../../assets/projects.json';
import { motion } from "framer-motion"

function Project() {

    return (
        <section className="project-page" id="Project">

            <h1 className="project-title">
                Projects
            </h1>
            <div className="project-box">
                <p className="project-paragraph">
                    I have a diverse set of portfolio as I love to experiment with different programming languages. 
                    Below, you will find some personal and academic projects I have done. 
                </p>
                <div className='project-collection'>
                    {jsonData.map((json) => (
                        <motion.div key={json.id}  className="project-card"
                            initial={{
                                borderColor: '#ddd',
                                borderWidth: '2px',
                                borderRadius: "10px",
                                borderStyle: 'solid',
                            }}
 
                            whileHover={{
                                borderColor: ['#4CAF50', '#2196F3', '#FFC107', '#E91E63'],
                                transition: {
                                    duration: 2,
                                    loop: Infinity,
                                    ease: 'linear',
                                    scale: { duration: 0.5 },
                                }, 
                                scale: 1.1
                            }}>
                            <img src={require(`../../assets/${json.imageLink}`)} alt="Project" />
                            <div key={json.name} className="project-text">
                                <div className="tag-collection"> 
                                    {json.tags.map((index, tag) => (
                                        <div key={tag} className="tag">
                                            {index}
                                        </div>
                                    ))}    
                                </div>                  
                                <h2>{json.name}</h2>
                                <p>{json.description}</p>
                                <button className="github-button">
                                    <a href={json.github}>                                    
                                        <i class="devicon-github-original"></i>
                                        Github
                                    </a>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Project;
