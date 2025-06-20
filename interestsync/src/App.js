import React from "react";
import "./App.css";
import { theme } from "./theme";
import GroupLogo from "./GroupLogo";

// PUBLIC_INTERFACE
function App() {
  // Define doors with label and unique color class
  const doorButtons = [
    { label: "Tech Solutions", className: "door-btn-tech" },
    { label: "Sustainable Solutions", className: "door-btn-sustainable" },
    { label: "Travel Solutions", className: "door-btn-travel" },
    { label: "Food & Beverages", className: "door-btn-food" },
    { label: "Services", className: "door-btn-services" },
    { label: "Fitness & Beauty Market", className: "door-btn-fitness" },
    { label: "Elderly Help Solutions", className: "door-btn-elderly" },
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
          {doorButtons.map(({ label, className }) => (
            <button className={`door-btn ${className}`} key={label} tabIndex={0}>
              <span className="door-label">{label}</span>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
