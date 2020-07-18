import React, { useState, useEffect } from "react";
import axios from "axios";
import { Twitter, GitHub } from "react-feather";

const Quote = ({ color, changeColor }) => {
  const [quote, setQuote] = useState({});
  const fetchQuotes = async () => {
    const quotesURL = "https://type.fit/api/quotes";
    const apiQuotes = await axios.get(quotesURL);
    const randomQuote =
      apiQuotes.data[Math.floor(Math.random() * apiQuotes.data.length)];
    console.log(randomQuote);
    setQuote(randomQuote);
  };
  useEffect(() => {
    fetchQuotes();
  }, [color]);
  return (
    <div className="border w-50 bg-white container py-3">
      <blockquote className="blockquote">
        <p className="mb-0">{quote.text}</p>
        <footer className="blockquote-footer">{quote.author}</footer>
      </blockquote>
      <hr />
      <div className="d-flex justify-content-between">
        <div>
          <a href="http://twitter.com/intent/tweet">
            <Twitter color={color} size={48} />
          </a>

          <GitHub color={color} size={48} />
        </div>

        <button
          className="btn  btn-lg text-white"
          style={{ backgroundColor: color }}
          onClick={() => changeColor()}
        >
          Click
        </button>
      </div>
    </div>
  );
};

export default Quote;
