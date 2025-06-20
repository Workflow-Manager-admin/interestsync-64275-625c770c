import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from "react-router-dom";
import "./App.css";
import { theme } from "./theme";

// Feature imports
import Registration from "./features/Registration";
import Interests from "./features/Interests";
import Groups from "./features/Groups";
import Chat from "./features/Chat";

// PUBLIC_INTERFACE
function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="container" style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="logo">
              <span style={{ color: theme.colors.primary }}>★</span>
              InterestSync
            </div>
            <div>
              <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/register">
                Register
              </NavLink>
              <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/interests">
                Interests
              </NavLink>
              <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/groups">
                Groups
              </NavLink>
              <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/chat">
                Chat
              </NavLink>
            </div>
          </div>
        </nav>
        <main className="flex-center" style={{ flex: 1, minHeight: "calc(100vh - 72px)", background: theme.colors.background }}>
          <Routes>
            <Route path="/" element={<Navigate to="/register" replace />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/interests" element={<Interests />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="*" element={<div style={{ padding: 40 }}>Page not found.</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;