import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import NotFound from './components/common/NotFound';
import MoviePage from './components/movies/MoviePage';
import UpcomingPage from './components/movies/UpcomingPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/movie/:id" component={MoviePage} />
    <Route path="/upcoming" component={UpcomingPage} />
    <Route path="*" component={NotFound} />
  </Route>
);