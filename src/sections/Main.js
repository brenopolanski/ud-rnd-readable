import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../containers/Home';
import Category from '../containers/Category';

/**
 * Main component that handle routes
 */
const Main = () => {
  return (
    <main
      style={{
        fontFamily: "roboto, arial, helvetica, sans-serif"
      }}
    >
      <Switch>
         <Route exact path="/" component={Home} />
         <Route path="/category" component={Category} />
      </Switch>
    </main>
  );
};

export default Main;