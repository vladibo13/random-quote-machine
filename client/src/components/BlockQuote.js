import React from "react";

const BlockQuote = ({ quote }) => {
  const { text, author } = quote;

  return (
    <blockquote className="blockquote">
      <p className="mb-0">{text}</p>
      <footer className="blockquote-footer mt-2">
        {author ? author : "Unknown Author"}
      </footer>
    </blockquote>
  );
};

export default BlockQuote;
