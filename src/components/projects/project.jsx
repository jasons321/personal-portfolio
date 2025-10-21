import './project.css';
import jsonData from '../../assets/projects.json';
import { motion } from "framer-motion"

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import ReactFlipCard from 'reactjs-flip-card'


function Project() {

    const styles = {
        card: {background: 'blue', color: 'white', borderRadius: 20,},
    }

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
                <Swiper
                    breakpoints={{
                        // when window width is >= 640px
                        300: {
                            slidesPerView: 1,
                            spaceBetween: 5
                        },
                        // when window width is >= 640px
                        800: {
                            slidesPerView: 2,
                            spaceBetween: 5,
                            centerInsufficientSlides: true

                          },
                        1300: {
                        slidesPerView: 3,
                        spaceBetween: 10

                        },
                        // when window width is >= 768px
                        1600: {
                          slidesPerView: 4,
                          spaceBetween: 20

                        },
                      }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {jsonData.map((json) => (
                        <SwiperSlide>
                            <div key={json.id}  className="project-card">
                                <ReactFlipCard
                                    frontComponent= 
                                    {
                                        <div className='project-card-inner'>
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
                                            
                                            </div> 
                                        </div> 

                                }
                                    backComponent=
                                    {
                                        <div className='project-card-inner'>
                                            <p>{json.description}</p>
                                            <button className="github-button">
                                                <a href={json.github}>                                    
                                                    <i class="devicon-github-original"></i>
                                                    Github
                                                </a>
                                            </button>
                                        </div> 
                                    }
                                />
                            </div> 
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default Project;
