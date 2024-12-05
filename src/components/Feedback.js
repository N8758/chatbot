import React, { useState } from "react";
import "./Feedback.css";

function Feedback() {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    alert("Thank you for your feedback!");
    setFeedback("");
  };

  return (
    <div className="feedback">
      <h2>We value your feedback!</h2>
      <textarea
        placeholder="Type your feedback here..."
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      ></textarea>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Feedback;
