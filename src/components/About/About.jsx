// @import url("../NavBar/NavBar.css");
import './About.css';
import '../Button/Button';
import Button from '../Button/Button';

const About = () => {
    return (
        <div className='about-text'>
        <h1>We are a Sydney based <span>fund manager</span> who specialise in the <span>acquisition</span>, <span>management</span> and <span>value add</span> to commercial office buildings within the Sydney City Fringe, CBD & Eastern suburbs.</h1>
        <Button>ABOUT APRIL GROUP</Button>
        </div>
    )
}

export default About;