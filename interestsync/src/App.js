import React, { useState, useRef, useEffect } from "react";
// InterestSync main app
import "./App.css";
import { theme } from "./theme";
import GroupLogo from "./GroupLogo";

/**
 * Main InterestSync App
 */
function App() {
  // Door labels/colors
  const doorButtons = [
    { label: "Tech Solutions", className: "door-btn-tech" },
    { label: "Sustainable Solutions", className: "door-btn-sustainable" },
    { label: "Travel Solutions", className: "door-btn-travel" },
    { label: "Food & Beverages", className: "door-btn-food" },
    { label: "Services", className: "door-btn-services" },
    { label: "Fitness & Beauty Market", className: "door-btn-fitness" },
    { label: "Elderly Help Solutions", className: "door-btn-elderly" },
  ];

  // State management for both Ideator and Compats modal logic
  const [formOpen, setFormOpen] = useState(false);        // Controls if a modal is open
  const [modalType, setModalType] = useState("ideator");  // "ideator" or "compats"
  const formRef = useRef(null);

  // Ideator form state
  const [contact, setContact] = useState("");
  const [location, setLocation] = useState("");

  // Compats form state
  const [compatsName, setCompatsName] = useState("");
  const [compatsWriteup, setCompatsWriteup] = useState("");
  const [compatsArea, setCompatsArea] = useState("");
  const [compatsContact, setCompatsContact] = useState("");
  const [compatsEmail, setCompatsEmail] = useState("");

  // Close modal on outside click or escape
  useEffect(() => {
    if (!formOpen) return;
    function handleEscape(e) {
      if (e.key === "Escape") setFormOpen(false);
    }
    function handleClick(e) {
      if (formRef.current && !formRef.current.contains(e.target)) {
        setFormOpen(false);
      }
    }
    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClick);
    };
  }, [formOpen]);

  // PUBLIC_INTERFACE
  function handleNavIdeatorClick(e) {
    e.preventDefault();
    setModalType("ideator");
    setFormOpen(true);
  }

  // PUBLIC_INTERFACE
  function handleNavCompatsClick(e) {
    e.preventDefault();
    setModalType("compats");
    setFormOpen(true);
  }

  // PUBLIC_INTERFACE
  function handleFormClose() {
    setFormOpen(false);
  }

  // PUBLIC_INTERFACE
  function handleFormSubmit(e) {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send to backend)
    alert(`Contact: ${contact}\nLocation: ${location}`);
    setContact("");
    setLocation("");
    setFormOpen(false);
  }

  // PUBLIC_INTERFACE
  function handleCompatsSubmit(e) {
    e.preventDefault();
    // Add logic for Compats modal submit — for prototype, just alert
    alert(
      `Name: ${compatsName}\nWriteup: ${compatsWriteup}\nArea of Interest: ${compatsArea}\nContact: ${compatsContact}\nEmail: ${compatsEmail}`
    );
    setCompatsName("");
    setCompatsWriteup("");
    setCompatsArea("");
    setCompatsContact("");
    setCompatsEmail("");
    setFormOpen(false);
  }

  return (
    <div className="app">
      <nav className="navbar">
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="logo">
            <GroupLogo size={36} />
            <span className="logo-text">InterestSync</span>
          </div>
          <div className="nav-links-wrap">
            <a
              href="#ideator"
              className="nav-link"
              tabIndex={0}
              style={{ minWidth: 80, textAlign: "center" }}
              onClick={handleNavIdeatorClick}
            >
              Ideator
            </a>
            <a
              href="#compats"
              className="nav-link"
              tabIndex={0}
              style={{ minWidth: 80, textAlign: "center" }}
              onClick={handleNavCompatsClick}
            >
              Compats
            </a>
          </div>
        </div>
      </nav>
      {/* Ideator Modal Form */}
      {formOpen && (
        <div
          className="modal-overlay"
          style={{
            position: "fixed",
            top: 0, left: 0,
            width: "100vw", height: "100vh",
            background: "rgba(33, 82, 124, 0.15)",
            zIndex: 1200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <div
            ref={formRef}
            className="modal-form"
            style={{
              background: "#fff",
              borderRadius: 14,
              boxShadow: "0 8px 64px rgba(50,98,170,0.22), 0 1.5px 0 #b4cde422 inset",
              padding: "32px 30px 22px",
              minWidth: 320,
              maxWidth: "95vw",
              width: 370,
              outline: "none",
              animation: "fadeIn .24s cubic-bezier(.17,.67,.43,1)",
              position: "relative"
            }}
            tabIndex={-1}
            aria-modal="true"
            aria-label={modalType === "ideator" ? "Ideator Form" : "Compats Form"}
          >
            <div
              style={{
                fontSize: "1.35rem",
                color: "var(--navText)",
                fontWeight: 700,
                letterSpacing: "2px",
                marginBottom: 9
              }}
            >
              {modalType === "ideator" ? "Ideator Form" : "Compats Form"}
            </div>
            {modalType === "ideator"
              ? (
              <form onSubmit={handleFormSubmit}>
                <label
                  htmlFor="ideator-contact"
                  style={{
                    display: "block",
                    fontWeight: 500,
                    marginBottom: 5,
                    marginTop: 12,
                    color: "var(--primary, #4CAF50)",
                    fontSize: "1.04rem"
                  }}
                >
                  Contact
                </label>
                <input
                  id="ideator-contact"
                  type="text"
                  value={contact}
                  onChange={e => setContact(e.target.value)}
                  placeholder="Your contact info"
                  required
                  autoFocus
                  style={{
                    width: "100%",
                    padding: "9px 12px",
                    border: "1.5px solid var(--border-color)",
                    borderRadius: 6,
                    fontSize: "1.08rem",
                    color: "var(--text-color,#222)",
                    marginBottom: 12,
                    background: "#f5f7fa"
                  }}
                />
                <label
                  htmlFor="ideator-location"
                  style={{
                    display: "block",
                    fontWeight: 500,
                    marginBottom: 5,
                    color: "var(--primary, #4CAF50)",
                    fontSize: "1.04rem"
                  }}
                >
                  Location
                </label>
                <input
                  id="ideator-location"
                  type="text"
                  value={location}
                  onChange={e => setLocation(e.target.value)}
                  placeholder="Your location"
                  required
                  style={{
                    width: "100%",
                    padding: "9px 12px",
                    border: "1.5px solid var(--border-color)",
                    borderRadius: 6,
                    fontSize: "1.08rem",
                    color: "var(--text-color,#222)",
                    background: "#f5f7fa",
                    marginBottom: 18
                  }}
                />
                <div style={{ display: "flex", justifyContent: "flex-end", gap: 12 }}>
                  <button
                    type="button"
                    className="btn"
                    style={{
                      backgroundColor: "#f2f6fa",
                      color: "var(--primary, #4CAF50)",
                      border: "1px solid var(--border-color)",
                      borderRadius: 5,
                      fontWeight: 500,
                    }}
                    onClick={handleFormClose}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn"
                    style={{
                      background: "var(--primary,#4CAF50)",
                      color: "#fff",
                      border: "none",
                      borderRadius: 5,
                      fontWeight: 600
                    }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleCompatsSubmit}>
                <label
                  htmlFor="compats-name"
                  style={{
                    display: "block",
                    fontWeight: 500,
                    marginBottom: 5,
                    marginTop: 12,
                    color: "var(--primary, #4CAF50)",
                    fontSize: "1.04rem"
                  }}
                >
                  Name
                </label>
                <input
                  id="compats-name"
                  type="text"
                  value={compatsName}
                  onChange={e => setCompatsName(e.target.value)}
                  placeholder="Your name"
                  required
                  autoFocus
                  style={{
                    width: "100%",
                    padding: "9px 12px",
                    border: "1.5px solid var(--border-color)",
                    borderRadius: 6,
                    fontSize: "1.08rem",
                    color: "var(--text-color,#222)",
                    marginBottom: 12,
                    background: "#f5f7fa"
                  }}
                />
                <label
                  htmlFor="compats-writeup"
                  style={{
                    display: "block",
                    fontWeight: 500,
                    marginBottom: 5,
                    color: "var(--primary, #4CAF50)",
                    fontSize: "1.04rem"
                  }}
                >
                  Writeup
                </label>
                <textarea
                  id="compats-writeup"
                  value={compatsWriteup}
                  onChange={e => setCompatsWriteup(e.target.value)}
                  placeholder="Tell us about yourself or your interests"
                  required
                  rows={3}
                  style={{
                    width: "100%",
                    padding: "9px 12px",
                    border: "1.5px solid var(--border-color)",
                    borderRadius: 6,
                    fontSize: "1.05rem",
                    color: "var(--text-color,#222)",
                    background: "#f5f7fa",
                    marginBottom: 12,
                    resize: "vertical",
                  }}
                />
                <label
                  htmlFor="compats-area"
                  style={{
                    display: "block",
                    fontWeight: 500,
                    marginBottom: 5,
                    color: "var(--primary, #4CAF50)",
                    fontSize: "1.04rem"
                  }}
                >
                  Area of Interest
                </label>
                <input
                  id="compats-area"
                  type="text"
                  value={compatsArea}
                  onChange={e => setCompatsArea(e.target.value)}
                  placeholder="Area of interest (eg. AI, health, travel...)"
                  required
                  style={{
                    width: "100%",
                    padding: "9px 12px",
                    border: "1.5px solid var(--border-color)",
                    borderRadius: 6,
                    fontSize: "1.08rem",
                    color: "var(--text-color,#222)",
                    background: "#f5f7fa",
                    marginBottom: 12,
                  }}
                />
                <label
                  htmlFor="compats-contact"
                  style={{
                    display: "block",
                    fontWeight: 500,
                    marginBottom: 5,
                    color: "var(--primary, #4CAF50)",
                    fontSize: "1.04rem"
                  }}
                >
                  Contact
                </label>
                <input
                  id="compats-contact"
                  type="text"
                  value={compatsContact}
                  onChange={e => setCompatsContact(e.target.value)}
                  placeholder="Your contact info"
                  required
                  style={{
                    width: "100%",
                    padding: "9px 12px",
                    border: "1.5px solid var(--border-color)",
                    borderRadius: 6,
                    fontSize: "1.08rem",
                    color: "var(--text-color,#222)",
                    marginBottom: 12,
                    background: "#f5f7fa"
                  }}
                />
                <label
                  htmlFor="compats-email"
                  style={{
                    display: "block",
                    fontWeight: 500,
                    marginBottom: 5,
                    color: "var(--primary, #4CAF50)",
                    fontSize: "1.04rem"
                  }}
                >
                  Email
                </label>
                <input
                  id="compats-email"
                  type="email"
                  value={compatsEmail}
                  onChange={e => setCompatsEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  style={{
                    width: "100%",
                    padding: "9px 12px",
                    border: "1.5px solid var(--border-color)",
                    borderRadius: 6,
                    fontSize: "1.08rem",
                    color: "var(--text-color,#222)",
                    background: "#f5f7fa",
                    marginBottom: 18
                  }}
                />
                <div style={{ display: "flex", justifyContent: "flex-end", gap: 12 }}>
                  <button
                    type="button"
                    className="btn"
                    style={{
                      backgroundColor: "#f2f6fa",
                      color: "var(--primary, #4CAF50)",
                      border: "1px solid var(--border-color)",
                      borderRadius: 5,
                      fontWeight: 500,
                    }}
                    onClick={handleFormClose}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn"
                    style={{
                      background: "var(--primary,#4CAF50)",
                      color: "#fff",
                      border: "none",
                      borderRadius: 5,
                      fontWeight: 600
                    }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
            <button
              style={{
                position: "absolute",
                right: 13, top: 10,
                background: "none",
                border: "none",
                fontSize: 22,
                color: "#4A97C9",
                cursor: "pointer"
              }}
              onClick={handleFormClose}
              tabIndex={0}
              aria-label="Close Form"
              title="Close"
            >
              ×
            </button>
          </div>
        </div>
      )}
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
