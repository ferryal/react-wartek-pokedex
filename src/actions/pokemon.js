import axios from 'axios';
import config from '../config';
import { LISTPOKEMON, POKEMONDETAIL } from './ActionTypes';

function loading() {
  return {
    type: LISTPOKEMON.LOADING,
  };
}

function fetchSuccess(data) {
  return {
    type: LISTPOKEMON.FETCH_SUCCESS,
    payload: { data },
  };
}

function fetchFailed() {
  return {
    type: LISTPOKEMON.FETCH_FAILED,
  };
}

function fetchSuccessDetail(data) {
  return {
    type: POKEMONDETAIL.FETCH_DETAIL_SUCCESS,
    payload: { data },
  };
}

function fetchFailedDetail() {
  return {
    type: POKEMONDETAIL.FETCH_DETAIL_FAILED,
  };
}

function fetchSuccessImage(data) {
  return {
    type: LISTPOKEMON.FETCH_IMAGE_SUCCESS,
    payload: {
      data,
    },
  };
}

function fetchFailedImage(data) {
  return {
    type: LISTPOKEMON.FETCH_IMAGE_FAILED,
    payload: {
      data,
    },
  };
}

export function resetDetailPokemon() {
  return {
    type: POKEMONDETAIL.RESET_DETAIL,
  };
}

export function fetchListPokemon(start, count) {
  return (dispatch) => {
    dispatch(loading());
    axios.get(`${config.apiUrl}/v2/pokemon?offset=${start}&limit=${count}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      if (res.status === 200) {
        const response = res.data;
        dispatch(fetchSuccess(response));
        for (let i = 0; i < response.results.length; i += 1) {
          const data = response.results[i];
          axios.get(`${data.url}`, {
            headers: {
              'Content-Type': 'application/json',
            },
          }).then((resp) => {
            if (resp.status === 200) {
              const list = resp.data;
              dispatch(fetchSuccessImage(list));
            } else {
              dispatch(fetchFailedImage());
            }
          }).catch(() => {
            dispatch(fetchFailedImage());
          });
        }
      } else {
        dispatch(fetchFailed());
      }
    }).catch(() => {
      dispatch(fetchFailed());
    });
  };
}

export function fetchPokemonDetail(id) {
  return (dispatch) => {
    axios.get(`${config.apiUrl}/v2/pokemon/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      if (res.status === 200) {
        const response = res.data;
        dispatch(fetchSuccessDetail(response));
      } else {
        dispatch(fetchFailedDetail());
      }
    }).catch(() => {
      dispatch(fetchFailedDetail());
    });
  };
}
