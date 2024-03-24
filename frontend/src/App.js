import React from 'react';
import { Route , Routes } from 'react-router-dom';

// run this command first : 
// npm install react-router-dom

import IndexPage from './components/IndexPage';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';

function App() {
  return (
    
      <div className="App">
      <Routes>
        <Route path="/" element={<IndexPage/>} />
        <Route path="/signup" element={<SignupForm/>} />
        <Route path="/login" element={<LoginForm/>} />
      </Routes>
      </div>
    
  );
}

export default App;