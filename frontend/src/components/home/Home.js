import Welcome from "../welcome/Welcome";
import Navbar from "../navbar/Navbar";
function Home() {
  return (
    <div style={{ overflow: 'hidden' }}>
        <Navbar/>
        <Welcome/>
        {/* <Footer/> */}
    </div>
  );
}

export default Home;