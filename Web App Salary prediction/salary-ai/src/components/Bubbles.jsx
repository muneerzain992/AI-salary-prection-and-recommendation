import React from "react";

function Bubbles() {
  // Generate an array of 40 bubbles with random properties
  const bubbles = Array.from({ length: 40 }).map((_, i) => {
    const size = Math.random() * 60 + 20; // 20px to 80px
    const left = Math.random() * 100; // 0% to 100%
    const duration = Math.random() * 10 + 10; // 10s to 20s
    const delay = Math.random() * 10; // 0s to 10s

    return (
      <div
        key={i}
        className="bubble"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${left}%`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
        }}
      ></div>
    );
  });

  return <div className="bubbles-container">{bubbles}</div>;
}

export default Bubbles;
