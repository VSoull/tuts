import React from 'react';
import PropTypes from 'prop-types';

const Movie = props => {
  const { title, releaseDate, details } = props;
  return (
    <div>
      <img src="" alt="movie image" />
      <div>
        <p>{title}</p>
        <p>{releaseDate}</p>
        <p>{details}</p>
        <button>More Info</button>
      </div>
    </div>
  );
};

Movie.propTypes = {
  title: PropTypes.string,
  releaseDate: PropTypes.string,
  details: PropTypes.string
};

export default Movie;
