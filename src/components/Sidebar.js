import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCog, faPalette, faCommentDots } from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

function Sidebar({ setActivePage }) {
  return (
    <div className="sidebar">
      <button onClick={() => setActivePage("home")}>
        <FontAwesomeIcon icon={faHome} /> Home
      </button>
      <button onClick={() => setActivePage("settings")}>
        <FontAwesomeIcon icon={faCog} /> Settings
      </button>
      <button onClick={() => setActivePage("themes")}>
        <FontAwesomeIcon icon={faPalette} /> Themes
      </button>
      <button onClick={() => setActivePage("feedback")}>
        <FontAwesomeIcon icon={faCommentDots} /> Feedback
      </button>
    </div>
  );
}

export default Sidebar;
