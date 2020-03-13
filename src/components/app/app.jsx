import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage, CartPage } from '../pages';

const App = () => {
  return (
    <main role="main" className="container">
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/cartpage' component={CartPage}/>
      </Switch>
    </main>
  );
};

export default App;
