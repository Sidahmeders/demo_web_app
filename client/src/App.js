import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ContextConsumer } from './context';

import Login from './components/signUpScreen/login';
import Regiter from './components/signUpScreen/register';
import Home from './components/homeScreen/home';

function App() {

  const context = useContext(ContextConsumer);
  const {randomFunction} = context;

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Regiter} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
