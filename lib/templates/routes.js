'use strict';

import React from 'react';
import {Route, NotFoundRoute} from 'react-router';

export default (
  <Route name='app' path='/' handler={require('./components/app')}>
    <Route
      name='item'
      path='rule/:id'
      handler={require('./components/item')} />
    <NotFoundRoute
      handler={require('./components/splashPage')} />
  </Route>
);
