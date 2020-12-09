import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Main } from 'pages';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route component={Main} />
      </Switch>
    </div>
  );
};

export default App;
