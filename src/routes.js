import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ListPokemon from './schenes/List-Pokemon';
import PokemonDetail from './schenes/Pokemon-Detail';

const Routes = () => (
  <div>
    <Switch>
      <Route exact path="/" component={ListPokemon} />
      <Route path="/pokemon/:name" component={PokemonDetail} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default Routes;
