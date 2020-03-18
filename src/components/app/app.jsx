import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import MainHeader from '../main-header';
import { HomePage, CartPage } from '../pages';

const App = () => {
  return (
    <main role="main" className="container">
      <Router basename='/'>
        <MainHeader />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/cartpage' component={CartPage}/>
        </Switch>
      </Router>
    </main>
  );
};

export default App;
