import React from "react";
import PropTypes from "prop-types";

function Movie({ title, year, summary, poster, genres }) {
  return (
    <div className="movie__data">
      <img src={poster} alt={title} title={title}></img>
      <h3 className="movie__title">{title}</h3>
      <h5 className="movie__year">{year}</h5>
      <ul className="movie__genres">
        {genres.map((genre) => {
          return <li className="movie__genre">{genre}</li>;
        })}
      </ul>
      <p className="movie__summary">{summary}</p>
    </div>
  );
}

Movie.prototype = {
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
