import React, { useState } from "react";

const CodeBlock = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
      })
      .catch((err) => {
        console.error("Erreur lors de la copie: ", err);
      });
  };

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#f5f5f5",
        padding: "15px",
        borderRadius: "8px",
        fontFamily: "monospace",
        fontSize: "14px",
        color: "#333",
        whiteSpace: "pre-wrap",
        lineHeight: "1.5",
        border: "1px solid #ddd",
      }}
    >
      <pre style={{ margin: 0 }}>{code}</pre>
      <button
        onClick={handleCopy}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          padding: "5px 10px",
          fontSize: "12px",
          cursor: "pointer",
          backgroundColor: copied ? "#c8e6c9" : "#e0e0e0",
          border: "none",
          borderRadius: "5px",
          transition: "background-color 0.3s",
        }}
      >
        {copied ? "Copié!" : "Copier le code"}
      </button>
    </div>
  );
};

export default CodeBlock;
