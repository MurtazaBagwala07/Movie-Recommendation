import React, { useState } from "react";
import "./styles.css";

var color = "#38A169";

const movieDB = {
  action: [
    { name: "Black Panther (2018)", rating: "9/10" },
    { name: "Deadpool (2016)", rating: "9.5/10" },
    { name: "Dunkirk (2017)", rating: "8.5/10" }
  ],

  scifi: [
    {
      name: "Inception (2010)",
      rating: "9.5/10"
    },
    {
      name: "Interstellar (2014)",
      rating: "9.5/10"
    },
    {
      name: "The Prestige (2006)",
      rating: "9/10"
    }
  ],
  horror: [
    {
      name: "Conjuring (2013)",
      rating: "8.5/10"
    },
    {
      name: "Sinister (2012)",
      rating: "7.5/10"
    },
    {
      name: "Dead Silence (2007)",
      rating: "8/10"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("scifi");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>
        📽 ️Movie <span style={{ color: color }}>Recommendation</span>
      </h1>
      <h4>Checkout my favourite movies.Select a genre to get started.</h4>
      <div>
        {Object.keys(movieDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              padding: "0.5rem 1.5rem",
              margin: "0.5rem 1.5rem",
              border: "3px solid #38A169",
              borderRadius: "0.5rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {movieDB[selectedGenre].map((movie) => (
            <li
              key={movie.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "40%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {movie.name} </div>
              <div style={{ fontSize: "smaller" }}> {movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer">
        <ul className="list">
          <li className="ft">
            <a target="_blank" href="https://www.linkedin.com">
              Linked in
            </a>
          </li>
          <li className="ft">
            <a target="_blank" href="https://twitter.com">
              Twitter
            </a>
          </li>
          <li className="ft">
            <a target="_blank" href="https://github.com">
              Github
            </a>
          </li>
          <li className="ft">
            <a target="_blank" href="www.google.com">
              Portfolio
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
