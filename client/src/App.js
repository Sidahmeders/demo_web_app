import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ContextConsumer } from './context';

import Login from './components/signUpScreen/login';
import Regiter from './components/signUpScreen/register';
import Home from './components/homeScreen/home';
import FormOne from './components/formsScreens/one-form';
import FormTwo from './components/formsScreens/two-form';
import FormThree from './components/formsScreens/three-form';

function App() {

  const context = useContext(ContextConsumer);
  const {randomFunction} = context;

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Regiter} />
        <Route path="/home" component={Home} />
        <Route path="/newpatient" component={FormOne} />
        <Route path="/oldpatient" component={FormTwo} />
        <Route path="/comingpatient" component={FormThree} />
      </Switch>
    </Router>
  );
};

export default App;
