import React from 'react';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';

const Root = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default Root;
