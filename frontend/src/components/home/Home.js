import Welcome from "../welcome/Welcome";
import Navbar from "../navbar/Navbar";
function Home() {
  return (
    <div>
        <Navbar/>
        <Welcome/>
        {/* <Footer/> */}
    </div>
  );
}

export default Home;