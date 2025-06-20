import React from "react";
import "./App.css";
import { theme } from "./theme";

// PUBLIC_INTERFACE
function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container" style={{ display: "flex", justifyContent: "flex-start" }}>
          <div className="logo">
            <span className="logo-symbol" style={{ color: theme.colors.accent }}>★</span>
            InterestSync
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
        {/* Main content can go here */}
      </main>
    </div>
  );
}

export default App;