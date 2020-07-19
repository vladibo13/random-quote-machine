import React, { useState, useEffect } from "react";
import axios from "axios";
import IconGrid from "./IconGrid";
import Button from "./Button";
import BlockQuote from "./BlockQuote";
import Spinner from "./Spinner";

const Quote = ({ color, changeColor }) => {
  const [quote, setQuote] = useState({});
  const [fetching, setFetching] = useState(false);

  const fetchQuotes = async () => {
    setFetching(true);

    try {
      const quotesURL = "https://type.fit/api/quotes";
      const apiQuotes = await axios.get(quotesURL);
      const randomQuote =
        apiQuotes.data[Math.floor(Math.random() * apiQuotes.data.length)];
      setQuote(randomQuote);
    } catch (e) {
      console.error(e);
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, [color]);

  return (
    <div className="border w-50 bg-white container py-5 shadow-sm rounded">
      {fetching ? <Spinner color={color} /> : <BlockQuote quote={quote} />}
      <hr />
      <div className="d-flex justify-content-between">
        <IconGrid color={color} />
        <Button color={color} changeColor={changeColor} />
      </div>
    </div>
  );
};

export default Quote;
