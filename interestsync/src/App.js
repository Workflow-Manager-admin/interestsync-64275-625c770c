import React from "react";
import "./App.css";
import { theme } from "./theme";
import GroupLogo from "./GroupLogo";

// PUBLIC_INTERFACE
function App() {
  const doorButtons = [
    "Tech Solutions",
    "Sustainable Solutions",
    "Travel Solutions",
    "Food & Beverages",
    "Services",
    "Fitness & Beauty Market",
    "Elderly Help Solutions",
  ];

  return (
    <div className="app">
      <nav className="navbar">
        <div className="container" style={{ display: "flex", justifyContent: "flex-start" }}>
          <div className="logo">
            <GroupLogo size={36} />
            <span className="logo-text">InterestSync</span>
          </div>
        </div>
      </nav>
      <main
        className="flex-center"
        style={{
          flex: 1,
          minHeight: "calc(100vh - 72px)",
          background: theme.colors.background,
        }}
      >
        <div className="door-buttons-container">
          {doorButtons.map((label, idx) => (
            <button className="door-btn" key={label}>
              <span className="door-label">{label}</span>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;