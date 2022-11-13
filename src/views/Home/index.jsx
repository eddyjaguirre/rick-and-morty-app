import './style.scss'
import Layout from '@/components/Layout';
import CharacterCard from '@/components/CharacterCard';
import FavButton from '@/components/FavButton';
import { useState, useEffect } from 'react'
function Home() {
  const [characters, setCharacters] = useState([]);
  const [paginationInfo, setPaginationInfo] = useState({});
  const [page, setPage] = useState(1);
  const [faved, setFaved] = useState([1, 2]);
  const [selectFaved, setSelectFaved] = useState(false);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`, {
      method: 'GET'
    })
      .then((res) => res.json())
      .then((json) => {
        setPaginationInfo(json.info);
        setCharacters(json.results);
      });
  }, [page, selectFaved])

  return (
    <Layout>
      <section className='home-faved'>
        <span>Mostrar favoritos:</span>
        <FavButton
          faved={selectFaved}
          handleClick={() => setSelectFaved(!selectFaved)}
        />
      </section>
      <section className="home-container">
         {
          characters.map(character => {
            return(
              <CharacterCard
                key={character.id}
                character={character}
                faved={faved.includes(character.id)}
              />
            )
          })
         }
      </section>
      <button
        disabled={paginationInfo.prev === null}
        onClick={() => setPage(page - 1)}
      >prev</button>
      <button
        disabled={paginationInfo.next === null}
        onClick={() => setPage(page + 1)}
      >next</button>
    </Layout>
  )
}

export default Home;