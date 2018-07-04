import React, { Component } from 'react';
import Movie from '../Movies/Movie/Movie';

class Movies extends Component {
  render() {
    const movie = {
      title: 'x',
      subtitle: 'y',
      description: 'test'
    };
    return (
      <div>
        <Movie {...movie} />
      </div>
    );
  }
}

export default Movies;
