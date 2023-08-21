import "./Footer.css"
import Logo from "../../assets/images/logo.png";
import Mail from "../../assets/images/mail-icon.png";
import Insta from "../../assets/images/insta-icon.png";
import LinkedIn from "../../assets/images/linkedin-icon.png";
function Footer() {
  return (
    <div className="footer" style={{ display: "flex" }}>
      <div style={{ display: "flex", flex: "1", justifyContent: "center" }}>
        <img src={Logo} className="footer-logo"></img>
      </div>

      <div style={{ color: "#fff", flex: "1" }}>
        <h2>Partner with us</h2>
        <h2>Contact</h2>
        <h2>Careers</h2>

      </div>

      <div style={{ flex: "1" }}>
        <div style={{ display: "flex", justifyContent: "space-around", widows:"100%", marginBottom:"30px" }}>
        
          <img src={Mail} style={{ height: "30px", width: "30px" }}></img>
          <img src={Insta} style={{ height: "30px", width: "30px" }}></img>
          <img src={LinkedIn} style={{ height: "30px", width: "30px" }}></img>

        </div>

        <div style={{ color: "#fff", textAlignLast:"center"}}>
          <h3>5th Floor, MC Tower</h3>
          <h3>Near Geetha Theatre</h3>
          <h3>Kulapully, Kerala, India</h3>
        </div>

      </div>
    </div>
  );
}

export default Footer;