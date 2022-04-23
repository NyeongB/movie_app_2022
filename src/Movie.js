import React from "react";
import PropTypes from "prop-types";

function Movie({ title, year, summary, poster, genres }) {
  return (
    <div class="movie__data">
      <img src={poster} alt={title} title={title}></img>
      <h3 class="movie__title">{title}</h3>
      <h5 class="movie__year">{year}</h5>
      <p class="movie__summary">{summary}</p>
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
