import './style.scss'
import Layout from '@/components/Layout';
import CharacterCard from '@/components/CharacterCard';
import FavButton from '@/components/FavButton';
import Modal from '@/components/Modal';
import { useState, useEffect, useContext, useRef } from 'react'
import categoriesContext from '@/context/categoriesContext';
import searchContext from '@/context/searchContext';
import Icon from '@mdi/react';
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';

function Home() {
  const [characters, setCharacters] = useState([]);
  const [paginationInfo, setPaginationInfo] = useState({});
  const [page, setPage] = useState(Number(localStorage.getItem('page')) || 1);
  const [faved, setFaved] = useState([1, 2]);
  const [selectFaved, setSelectFaved] = useState(false);
  const [character, setCharacter] = useState(null);

  const categories = useContext(categoriesContext)
  const searchCtx = useContext(searchContext)

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

  useEffect(() => {
    const url = new URL('https://rickandmortyapi.com/api/character');
    
    const { search } = searchCtx; 
    
    const params = {
      name: search
    }

    url.search = new URLSearchParams(params).toString();
    
    fetch(url, {
      method: 'GET'
    })
      .then((res) => res.json())
      .then((json) => {
        // setPaginationInfo(json.info);
        setCharacters(json.results);
      });
  }, [searchCtx])

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
    containerRef.current.scrollIntoView({behavior: 'smooth'});
  }

  const containerRef = useRef(null)

  return (
    <Layout>
      {/* <section className='home-faved'>
        <span>Mostrar favoritos:</span>
        <FavButton
          faved={selectFaved}
          handleClick={() => setSelectFaved(!selectFaved)}
        />
      </section> */}
      <section className="home-container" ref={containerRef}>
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
      <section className='home-pagination'>
        <button
          disabled={paginationInfo.prev === null}
          onClick={() => handlePage(Number(page) - 1)}
        >
          <Icon size={2} path={mdiChevronLeft}/>
        </button>
        <p>Página {page}</p>
        <button
          disabled={paginationInfo.next === null}
          onClick={() => handlePage(Number(page) + 1)}
        >
          <Icon size={2} path={mdiChevronRight}/>
        </button>
      </section>
      <Modal
        character={character}
        closeModal={() => setCharacter(null)}
      />
    </Layout>
  )
}

export default Home;