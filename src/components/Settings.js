import React from "react";
import "./Settings.css";

function Settings({ theme, setTheme }) {
  const updateTheme = (key, value) => {
    setTheme({ ...theme, [key]: value });
  };

  return (
    <div className="settings">
      <label>Font: </label>
      <select value={theme.font} onChange={(e) => updateTheme("font", e.target.value)}>
        <option value="Poppins">Poppins</option>
        <option value="Arial">Arial</option>
        <option value="Roboto">Roboto</option>
      </select>

      <label>Bubble Size: </label>
      <select value={theme.bubbleSize} onChange={(e) => updateTheme("bubbleSize", e.target.value)}>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>

      <label>Bubble Color: </label>
      <input
        type="color"
        value={theme.color}
        onChange={(e) => updateTheme("color", e.target.value)}
      />

      <label>Background Color: </label>
      <input
        type="color"
        value={theme.background}
        onChange={(e) => updateTheme("background", e.target.value)}
      />
    </div>
  );
}

export default Settings;
