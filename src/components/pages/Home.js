import React, { Fragment } from 'react';
import Search from '../movies/Search';
import Movies from '../movies/Movies';

const Home = () => {
  return (
    <Fragment>
      <h1 className="my-1">Need to lookup a movie?</h1>
      <Search />
      <Movies />
    </Fragment>
  );
};

export default Home;
