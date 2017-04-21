import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import Index from './components/index';
import Roulette from './components/roulette';

// あくまで静的な jsx
const routes = (
    <Switch>
      <Route exact path="/" component={Index}/>
      <Route exact path="/:seed" component={Roulette}/>
      <Redirect from="*" to="/"/>
    </Switch>
);

export default routes;
