import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../pages/Main';
import Details from '../pages/Details';

function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/details/:id" component={Details} />
      </Switch>
    </>
  );
}

export default Routes;
