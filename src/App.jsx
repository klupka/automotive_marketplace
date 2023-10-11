// React router dom
import { Route, Routes } from "react-router-dom";

// Import components.
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Auctions from "./pages/Auctions";
import About from "./pages/About";
import Auction from "./pages/Auction";

function App() {
    // Render components
    // Define all routes below
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Auctions" element={<Auctions />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Auction/*" element={<Auction />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
