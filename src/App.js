import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Chat from "./components/Chat";
import Settings from "./components/Settings";
import Center from "./components/Center";
import Particles from "react-tsparticles";
import "./App.css";

function App() {
  const [theme, setTheme] = useState({
    font: "Poppins",
    color: "#4caf50",
    background: "#f0f0f0",
    bubbleSize: "medium",
  });
  const [activePage, setActivePage] = useState("home");

  return (
    <div className="app" style={{ fontFamily: theme.font, backgroundColor: theme.background }}>
      <Sidebar setActivePage={setActivePage} />
      <Header />
      {activePage === "home" && <Chat theme={theme} />}
      {activePage === "settings" && <Settings theme={theme} setTheme={setTheme} />}
      {/* Add placeholder for new sections */}
      {activePage === "themes" && <div className="page-content">Theme Page Coming Soon</div>}
      {activePage === "feedback" && <div className="page-content">Feedback Page Coming Soon</div>}
    </div>
  );
}

export default App;
