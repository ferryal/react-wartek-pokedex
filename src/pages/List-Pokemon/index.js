import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Wrap } from '@chakra-ui/react';
import InfiniteScroll from 'react-infinite-scroll-component';
import 'react-toastify/dist/ReactToastify.css';
import { fetchListPokemon, resetDetailPokemon } from '../../actions/pokemon';
import Card from '../../components/card';
import PokedexIcon from '../../assets/images/pokedex.png';
import styles from './styles.module.scss';

const ListPokemon = () => {
  const card = useSelector((state) => state.listPokemon);
  const dispatch = useDispatch();
  const { pokemon } = card;
  const [hasMore, setHasMore] = useState(true);
  const [start, setStart] = useState(0);
  const [count] = useState(15);
  const [items, setItems] = useState([]);

  useEffect(() => {
    dispatch(fetchListPokemon(start, count));
    dispatch(resetDetailPokemon());
  }, [dispatch]);

  useEffect(() => {
    if (card.listPokemon !== 0 && card.listPokemon.length > 0) {
      const { listPokemon } = card;
      setStart(start + count);
      setTimeout(() => {
        setItems(items.concat(listPokemon));
      }, 2500);
    }
  }, [card.listPokemon]);

  const fetchImages = () => {
    if (items.length >= 964) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      dispatch(fetchListPokemon(start, count));
    }, 2500);
  };

  const renderListPokemon = () => (
    <>
      {
        pokemon.length > 0
          ? (
            <InfiniteScroll
              dataLength={pokemon.length}
              next={fetchImages}
              hasMore={hasMore}
              loader={<img src="/assets/images/spinner.gif" alt="" style={{ width: '20%' }} />}
              height={600}
              style={{
                width: 'auto',
                display: 'flex',
                maxWidth: '100vw',
                margin: '2% auto',
                flexWrap: 'wrap',
                alignItems: 'flex-start',
                textAlign: 'center',
              }}
              endMessage={(
                <p style={{ textAlign: 'center' }}>
                  <b>Yay! You have seen it all</b>
                </p>
              )}
            >
              {
                pokemon !== undefined && pokemon.length > 0
                  ? pokemon.map((data, index) => (
                    <div className={styles.wrapperCard} key={index + 1}>
                      <Link to={`/pokemon/${data.name}`} onClick={() => localStorage.setItem('id', data.id)}>
                        <Card
                          img={data.sprites.other['official-artwork'].front_default}
                          name={data.name.toUpperCase()}
                          types={data.types}
                        />
                      </Link>
                    </div>
                  )) : ''
              }
            </InfiniteScroll>
          ) : '-'
      }
    </>
  );

  return (
    <>
      <div className={styles.navWrapper}>
        <Link to="/"><img src={PokedexIcon} alt="pokedex" /></Link>
      </div>
      <div className={styles.container}>
        <Wrap spacing="30px">
          {renderListPokemon()}
        </Wrap>
      </div>
    </>
  );
};

export default ListPokemon;
