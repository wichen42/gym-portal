import '../css/framework/local/partials/components/landing.css';
import landing_image from '../assets/profile_dark.jpg';

const Landing = () => {

return (
    <div className="landing">
        {/* TEXT */}
        <div className="landing-text">
            <h1>YOUR ASSIGNMENT IS FITNESS - </h1>
            <h1 id='sub-landing-text'>JOIN THE MOVEMENT</h1>
            <p>PRJCT MVMT is a boutique fitness studio focused on making you feel, look, and MOVE better! Join us now to make fitness part of your everyday lifestyle whether it's one on one training or our small group training, we’ll get you moving.</p>
            <div className="button-container">
                <a className="button" href="https://www.vagaro.com/projectmovementstudio/services" target='_blank'>Join Now</a>
                <span>Learn More</span>
            </div>
        </div>
        {/* IMAGE */}
        <div className="landing-image">
            <img src={landing_image} alt="landing-image" />
        </div>
    </div>
)
}

export default Landing