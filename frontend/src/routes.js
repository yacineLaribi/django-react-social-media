import React from 'react';
import { Route, Switch } from 'react-router-dom';
import IndexPage from './components/IndexPage';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={IndexPage} />
      <Route path="/signup" component={SignupForm} />
      <Route path="/login" component={LoginForm} />
    </Switch>
  );
}

export default Routes;