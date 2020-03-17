import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainHeader from '../main-header';
import { HomePage, CartPage } from '../pages';

const App = () => {
  return (
    <main role="main" className="container">
      <MainHeader />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/cartpage' component={CartPage}/>
      </Switch>
    </main>
  );
};

export default App;
