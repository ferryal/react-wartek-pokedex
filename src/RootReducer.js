import { combineReducers } from 'redux';
import { reducer as listPokemon } from './reducer/listPokemon';
import { reducer as detailPokemon } from './reducer/detailPokemon';

export default combineReducers({
  listPokemon,
  detailPokemon,
});
