import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MovieList from './MovieList'
import registerServiceWorker from './registerServiceWorker';

const movies = [
  {title:"Sharknado", director:"Anthony C. Ferrante"},
  {title:"Titanic", director: "James Cameron"},
  {title:"Jurassic Park", director: "Steven Spielberg"}
];

ReactDOM.render( <MovieList movies={movies} />, document.getElementById('root'));
registerServiceWorker();
