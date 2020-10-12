import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Ladding from '../pages/Ladding';
import OrphanagesMap from '../pages/OrphanagesMap';

export default function Routes() {
  return (
      <Switch>
        <Route exact path="/" component={Ladding} />
        <Route exact path="/orfanatos" component={OrphanagesMap} />
      </Switch>
  )
}