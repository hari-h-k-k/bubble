import "./Welcome.css";
import Logo from "../../assets/images/logo.png";
import Bubbles from "../../assets/images/bubbles.png";
import User from "../../assets/images/user.png";
import Globe from "../../assets/images/globe.png";
import Avatar from "../../assets/images/avatar.png";

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
                    <span className="section-title-text">Expand Your Horizons, Meet New People</span>
                </div>
                <div className="section-content">
                </div>
            </div>


            <div className="welcome-section">
                <div className="section-title">
                    <div className="section-title-bullet" style={{ backgroundColor: "#D9D9D9" }}></div>
                    <span className="section-title-text">Rapid Connections, Limitless Possibilities</span>
                </div>
                <div className="section-content" style={{ backgroundColor: "#D9D9D9", minHeight: "200px", display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                    <div style={{ textAlign: "center" }}>
                        <img src={Globe} style={{ height: "100px", width: "100px" }}></img>
                        <div style={{ fontSize: "25px" }}>0+ Countries</div>
                    </div>

                    <div style={{ textAlign: "center" }}>
                        <img src={Bubbles} style={{ height: "100px", width: "100px" }}></img>
                        <div style={{ fontSize: "25px" }}>0+ Bubbles</div>
                    </div>

                    <div style={{ textAlign: "center" }}>
                        <img src={User} style={{ height: "100px", width: "100px" }}></img>
                        <div style={{ fontSize: "25px" }}>0+ Users</div>
                    </div>
                </div>
            </div>


            <div className="welcome-section">
                <div className="section-title">
                    <div className="section-title-bullet" style={{ backgroundColor: "#D3B99F" }}></div>
                    <span className="section-title-text">Dedicated to Your Delight</span>
                </div>
                <div className="section-content" style={{ backgroundColor: "#D3B99F", minHeight: "400px", display: "flex", alignItems: "center", justifyContent: "space-around" }}>

                    <TestimonialCard/>
                    <TestimonialCard/>
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

function TestimonialCard() {
    return (
        <div style={{ textAlign: "center", width:"450px", border:"solid", paddingBlock:"10px" }}>
            <img src={Avatar} style={{ height: "200px", width: "200px" }}></img>
            <div style={{ fontSize: "25px" }}>“Absolutely the best service I've ever used!
             It's incredibly user-friendly and impressively fast.
              The overall user experience is nothing short of fantastic”</div>
        </div>
    )
}

export default Welcome;