import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ContextConsumer } from './context';

import Login from './components/signUpScreen/login';

function App() {

  const context = useContext(ContextConsumer);
  const {randomFunction} = context;

  return (
    <Router>
      <Switch>
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
