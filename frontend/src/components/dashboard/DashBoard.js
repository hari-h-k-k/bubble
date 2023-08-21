import "./DashBoard.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
function DashBoard() {
  return (
    <div>
      <Navbar />

      <div className="dashboard">
        <div className="dashboard-title">
          Find Your Bubble
        </div>
        <div className="searchbar">
          Location
        </div>
        <button className="create-button">
          Create your bubble
        </button>

        <div className="section-content" style={{ backgroundColor: "#D3B99F", minHeight: "400px", display: "flex", alignItems: "center", justifyContent: "space-around" }}>

          <BubbleCard />
          <BubbleCard />
        </div>

        <div className="manual"></div>
      </div>
      <Footer />

    </div>
  );
}

export default DashBoard;

function BubbleCard() {
  return (
      <div style={{ textAlign: "center", width:"450px", border:"solid", padding:"10px", borderRadius:"5%" }}>
          
          <div style={{ fontSize: "25px", marginBottom:"20px" }}>“Absolutely the best service I've ever used!
           It's incredibly user-friendly and impressively fast.
            The overall user experience is nothing short of fantastic”</div>
      </div>
  )
}