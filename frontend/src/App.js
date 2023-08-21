import './App.css';
import Home from "../src/components/home/Home.js";
import DashBoard from './components/dashboard/DashBoard';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home prop="home" />}/>
                    <Route path="/dashboard" element={<DashBoard/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
