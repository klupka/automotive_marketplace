import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Import stylesheets
import "./assets/Navbar.css";
import "./assets/General.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
