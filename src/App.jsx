// React router dom
import { Route, Routes } from "react-router-dom";

// Import components.
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Auctions from "./pages/Auctions";
import About from "./pages/About";

function App() {
    // Render components
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Auctions" element={<Auctions />} />
                    <Route path="/About" element={<About />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
