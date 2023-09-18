import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// React router dom
import { BrowserRouter } from "react-router-dom";

// Import stylesheets
import "./assets/Navbar.css";
import "./assets/General.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
