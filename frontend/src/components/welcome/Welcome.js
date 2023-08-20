import "./Welcome.css";
import Logo from "../../assets/images/logo.png";
function Welcome() {
    return (
        <div className="welcome">
        <div className="hero">
            <img src={Logo} className="hero-logo"></img>
            <HeroBox/>
        </div>

        {/* <div>
            aaaaaaaaaaaaaaaaaaaasssssssssssssssssdddddddddddd
        </div> */}
        
        </div>
    );
  }
  

function HeroBox(){
return(
    <>
    <div className="hero-box">
        <span style={{ fontSize: '38px'}}>
            "Roommates are there for more than just splitting the rent.
            They're there for the random, unexpected
            moments that make life unforgettable.” 
            </span>
            <span style={{ fontSize: '38px',color:'#210203'  }}> - Bubble </span>
    </div>
    
    </>
)
}

export default Welcome;