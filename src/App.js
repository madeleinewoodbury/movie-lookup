import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MovieState from './context/movie/MovieState';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Movie from './components/movies/Movie';
import './App.css';

const App = () => {
  return (
    <MovieState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/movie/:id" component={Movie} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </MovieState>
  );
};

export default App;
