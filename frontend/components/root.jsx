import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';
import ItemDetailContainer from './pokemon/item_detail_container';
import { Router, Route, hashHistory } from 'react-router';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={ PokemonIndexContainer }>
        <Route path="pokemon/:id" component={ PokemonDetailContainer }>
          <Route path="items/:id" component={ ItemDetailContainer} />
        </Route>
      </Route>
    </Router>
  </Provider>
);

export default Root;
