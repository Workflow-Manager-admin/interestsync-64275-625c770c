import React from "react";
import "./App.css";
import { theme } from "./theme";
import GroupLogo from "./GroupLogo";

// PUBLIC_INTERFACE
function App() {
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
        {/* Main content can go here */}
      </main>
    </div>
  );
}

export default App;