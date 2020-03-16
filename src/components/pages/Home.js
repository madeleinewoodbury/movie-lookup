import React, { Fragment } from 'react';
import Search from '../movies/Search';

const Home = () => {
  return (
    <Fragment>
      <h1 className="my-1">Need to lookup a movie?</h1>
      <Search />
    </Fragment>
  );
};

export default Home;
