import { useState } from "react";
import { useEffect } from "react";
import "../css/notfound.css";

export const NotFound = () => {
  const [quote, setQuote] = useState();

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => setQuote(data.content));
  }, []);
  return (
    <div>
      <img
        src="https://img.freepik.com/free-vector/old-paper-scroll-with-wax-seal_1284-34854.jpg?w=740&t=st=1675028887~exp=1675029487~hmac=8d183caba5fbd258d787058723b5cde7307b0f1c8f6184aecec71e122b5eb618"
        alt=""
      />
      <p className="textQuote">{quote}</p>
    </div>
  );
};
