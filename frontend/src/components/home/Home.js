import Welcome from "../welcome/Welcome";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

function Home() {
    return (
        <>
            <Navbar/>
            <Welcome/>
            <Footer/>
        </>
    );
}

export default Home;