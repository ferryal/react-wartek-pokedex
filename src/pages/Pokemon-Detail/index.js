import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ArrowBackIcon } from '@chakra-ui/icons';
import CardDetail from '../../components/detailPokemon';
import { fetchPokemonDetail } from '../../actions/pokemon';
import styles from './styles.module.scss';
import 'react-toastify/dist/ReactToastify.css';

const PokemonDetail = (props) => {
  const dispatch = useDispatch();
  const card = useSelector((state) => state.detailPokemon);

  useEffect(() => {
    const getId = localStorage.getItem('id');
    dispatch(fetchPokemonDetail(getId));
  }, [dispatch]);

  const { detail } = card;
  const {
    sprites, types, stats, abilities,
  } = detail;
  let frontDefault = '';
  if (sprites && sprites.other['official-artwork'].front_default !== '') {
    frontDefault = sprites.other['official-artwork'].front_default;
  } else if (sprites && sprites.other['official-artwork'].front_default !== '') {
    frontDefault = sprites.other['official-artwork'].front_default;
  }
  const pokemonName = card && detail ? detail.name : '';

  return (
    <>
      <div className={styles.navWrapper}>
        <Link to="/"><ArrowBackIcon /></Link>
      </div>
      {
        card.detail.name !== ''
          ? (
            <>
              <CardDetail
                img={frontDefault}
                name={pokemonName.toUpperCase()}
                abilities={abilities}
                types={types}
                stats={stats}
                height={detail.height}
                weight={detail.weight}
              />
            </>
          ) : <img src="/assets/images/spinner.gif" alt="" style={{ width: '20%' }} />
      }
    </>
  );
};

export default PokemonDetail;
