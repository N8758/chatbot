import React, { useState } from "react";
import "./Center.css";

function Center({ activePage }) {
  const [searchTerm, setSearchTerm] = useState("");
  const trendingTopics = ["AI Chatbots", "Gen Z Features", "Interactive Design", "Custom Themes"];
  const faqs = [
    { question: "How do I use this app?", answer: "Simply type in the search bar and explore." },
    { question: "Can I customize themes?", answer: "Yes! Use the settings to select a theme." },
    { question: "Is this app free?", answer: "Yes, it's completely free to use." },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Search for: ${searchTerm}`);
  };

  return (
    <div className="center">
      {activePage === "home" && (
        <>
          <div className="search-section">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search topics or features..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="submit">Search</button>
            </form>
          </div>

          <div className="trending-section">
            <h3>Trending Topics</h3>
            <ul>
              {trendingTopics.map((topic, index) => (
                <li key={index} onClick={() => alert(`You selected: ${topic}`)}>
                  {topic}
                </li>
              ))}
            </ul>
          </div>

          <div className="faq-section">
            <h3>FAQs</h3>
            {faqs.map((faq, index) => (
              <details key={index}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Center;
