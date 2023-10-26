import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// React router dom
import { BrowserRouter } from "react-router-dom";

// Import stylesheets
import "./assets/css/Navbar.css";
import "./assets/css/General.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter basename="/automotive_marketplace">
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
