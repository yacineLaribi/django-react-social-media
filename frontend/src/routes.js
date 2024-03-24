import React from 'react';

// run this command first : 
// npm install react-router-dom

import { Route } from 'react-router-dom';
import IndexPage from './components/IndexPage';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';

function Routes() {
  return (
    <Routes>
      <Route strict path="/" component={IndexPage} />
      <Route path="/signup" component={SignupForm} />
      <Route path="/login" component={LoginForm} />
    </Routes>
  );
}

export default Routes ;