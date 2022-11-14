import './style.scss'
import Layout from '@/components/Layout';
import CharacterCard from '@/components/CharacterCard';
import FavButton from '@/components/FavButton';
import Modal from '@/components/Modal';
import { useState, useEffect, useContext } from 'react'
import categoriesContext from '@/context/categoriesContext';

function Home() {
  const [characters, setCharacters] = useState([]);
  const [paginationInfo, setPaginationInfo] = useState({});
  const [page, setPage] = useState(Number(localStorage.getItem('page')) || 1);
  const [faved, setFaved] = useState([1, 2]);
  const [selectFaved, setSelectFaved] = useState(false);
  const [character, setCharacter] = useState(null);

  const categories = useContext(categoriesContext)

  useEffect(() => {
    const url = new URL('https://rickandmortyapi.com/api/character');

    const {selectedGender: gender, selectedStatus: status} = categories;
    const params = {
      page,
      gender: gender,
      status: status
    }

    url.search = new URLSearchParams(params).toString();
    
    fetch(url, {
      method: 'GET'
    })
      .then((res) => res.json())
      .then((json) => {
        setPaginationInfo(json.info);
        setCharacters(json.results);
      });
  }, [page, selectFaved, categories])

  const fetchCharacter = (id) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`, {
      method: 'GET'
    })
      .then((res) => res.json())
      .then((json) => {
        setCharacter(json);
      });
  }

  const handlePage = (p) => {
    setPage(p);
    localStorage.setItem('page', p);
  }

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
                handleClick={() => fetchCharacter(character.id)}
              />
            )
          })
         }
      </section>
      <section>
        <button
          disabled={paginationInfo.prev === null}
          onClick={() => handlePage(Number(page) - 1)}
        >prev</button>
        <p>Pagina: {page}</p>
        <button
          disabled={paginationInfo.next === null}
          onClick={() => handlePage(Number(page) + 1)}
        >next</button>
      </section>
      <Modal
        character={character}
        closeModal={() => setCharacter(null)}
      />
    </Layout>
  )
}

export default Home;