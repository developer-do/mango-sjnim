import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Main, Search } from 'pages';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route component={Main} exact path="/" />
        <Route component={Search} exact path="/search" />
      </Switch>
    </div>
  );
};

export default App;
