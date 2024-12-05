import React from "react";
import "./Themes.css";

function Themes({ setTheme }) {
  const themes = [
    { name: "Light", background: "#ffffff", color: "#4caf50", font: "Poppins" },
    { name: "Dark", background: "#121212", color: "#bb86fc", font: "Roboto" },
    { name: "Cyberpunk", background: "#0f0f3d", color: "#ff00ff", font: "Orbitron" },
  ];

  const applyTheme = (theme) => {
    setTheme({
      font: theme.font,
      color: theme.color,
      background: theme.background,
      bubbleSize: "medium",
    });
  };

  return (
    <div className="themes">
      {themes.map((theme) => (
        <div
          key={theme.name}
          className="theme-card"
          style={{ backgroundColor: theme.background, color: theme.color }}
          onClick={() => applyTheme(theme)}
        >
          <h3>{theme.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default Themes;
