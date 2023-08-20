import "./Welcome.css";
import Logo from "../../assets/images/logo.png";
function Welcome() {
    return (
        <>
            <div className="hero">
                <img src={Logo} className="hero-logo"></img>
                <HeroBox />

                <button className="join-button" >
                    Join
                </button>
            </div>

            <div className="welcome-section">
                <div className="section-title">
                    <div className="section-title-bullet"></div>
                    <span className="section-title-text">Section 1...............</span>
                </div>
                <div>
                    Content
                </div>
            </div>

        </>
    );
}


function HeroBox() {
    return (
        <>
            <div className="hero-box">
                <span style={{ fontSize: '38px' }}>
                    "Roommates are there for more than just splitting the rent.
                    They're there for the random, unexpected
                    moments that make life unforgettable.”
                </span>
                <span style={{ fontSize: '38px', color: '#210203' }}> - Bubble </span>
            </div>

        </>
    )
}

export default Welcome;