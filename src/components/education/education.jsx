import './education.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


function Education() {

    const styles = {
        card: {background: 'blue', color: 'white', borderRadius: 20,},
    }

    return (
        <section className="education-page" id="Education">

            <h1 className="education-title">
                Education
            </h1>
            <div className="education-box">
                <p className="education-paragraph">
                    I am currently pursuing Computer Science BSc at the University of Leeds. Below are the courses I have taken
                </p>
                <div className='education-tags'>
                    <div className='education-tag'>
                        <span class="dot first-class"></span>
                        <p>First Class >70%</p>
                    </div>                    
                    <div className='education-tag'>
                        <span class="dot upper-second-class"></span>
                        <p>Upper Second Class 60-70%</p>
                    </div>
                    <div className='education-tag'>
                        <span class="dot lower-second-class"></span>
                        <p>Lower Second Class 50-60%</p>
                    </div>
                </div>
                <p className="education-paragraph">
                    First Year
                </p>
                <div className="education-courses">
                    <div className='education-course first-class'>
                        Intro to Programming (86%)
                    </div>
                    <div className='education-course first-class'>
                        Intro to Web Technologies (93%)
                    </div>
                    <div className='education-course upper-second-class'>
                        Databases (63%)
                    </div>
                    <div className='education-course first-class'>
                        Computer Architecture (85%)
                    </div>
                    <div className='education-course first-class'>
                        Computer Processors (100%)
                    </div>
                    <div className='education-course first-class'>
                        Fundamental Math Concepts (70%)
                    </div>
                    <div className='education-course first-class'>
                        Intro to Discrete Mathematics(70%)
                    </div>
                    <div className='education-course first-class'>
                        Intro to Discrete Mathematics (86%)
                    </div>
                    <div className='education-course first-class'>
                        Procedural Programming (92%)
                    </div>
                    <div className='education-course first-class'>
                        Object Oriented Programming (93%)
                    </div>
                    <div className='education-course first-class'>
                        Professional Computing (78%)
                    </div>
                    <div className='education-course first-class'>
                        Programming Project (90%)
                    </div>
                </div>
                <p className="education-paragraph">
                    Second Year
                </p>
                <div className="education-courses">
                    <div className='education-course first-class'>
                        Numerical Computation (81%)
                    </div>
                    <div className='education-course upper-second-class'>
                        Data Mining (67%)
                    </div>
                    <div className='education-course first-class'>
                        Operating Systems (82%)
                    </div>
                    <div className='education-course upper-second-class'>
                        Networks (64%)
                    </div>
                    <div className='education-course upper-second-class'>
                        Frml Lang&Finite Automata (68%)
                    </div>
                    <div className='education-course first-class'>
                        Artificial Intelligence (83%)
                    </div>
                    <div className='education-course first-class'>
                        Algorithms I (75%)
                    </div>
                    <div className='education-course first-class'>
                        Algorithms II (74%)
                    </div>
                    <div className='education-course lower-second-class'>
                        User Interfaces (57%)
                    </div>
                    <div className='education-course first-class'>
                        Software Eng Principles (76%)
                    </div>
                    <div className='education-course first-class'>
                        Software Engineering Project (70%)
                    </div>
                    <div className='education-course lower-second-class'>
                        Calculus & Math Analysis (53%)
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;
