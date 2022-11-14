import './style.scss';
import { useEffect, useState } from 'react';
import Icon from '@mdi/react';
import { mdiInformation, mdiClose } from '@mdi/js';
import CharacterCard from '@/components/CharacterCard';

function Modal(props) {
  const character = props.character;
  const [episodes, setEpisodes] = useState([])
  const [characters, setCharacters] = useState([])

  const fetchCharacter = (id) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`, {
      method: 'GET'
    })
      .then((res) => res.json())
      .then((json) => {
        setCharacter(json);
      });
  };

  useEffect(() => {
    if (props.character) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => document.body.style.overflow = 'unset';
  }, [[props.open]])

  useEffect(() => {
    if (character) {
      const characterEpisodes = character.episode
      .map((ep) => {
          return ep.split('/').pop();
        })
        // .slice(0, 8)
        .join(',');
      fetch(`https://rickandmortyapi.com/api/episode/[${characterEpisodes}]`, {
        method: 'GET'
      })
        .then((res) => res.json())
        .then((json) => {
          setEpisodes(json);
        });
    }
  }, [character]);

  useEffect(() => {
    const interestingChars = [1, 2]
    fetch(
      `https://rickandmortyapi.com/api/character/[${interestingChars.join(',')}]`,
      {
        method: 'GET'
      }
    )
      .then((res) => res.json())
      .then((json) => {
        setCharacters(json);
      });
  }, []);

  return (
    <>
      {
        character &&
        <>
          <div className="modal_static">
          </div>
          <div
            className="modal_overlay"
          >
            <div className="modal_content">
              <section className="modal_header">
                <div className="modal_header__close-btn">
                  <button
                    onClick={props.closeModal}
                  >
                    <Icon
                      size={1}
                      path={mdiClose}
                    />
                  </button>
                </div>
                <div className="modal_header__image">
                  <img src={character.image} alt="" />
                </div>
              </section>
              <section className="modal_name">
                <h4 className={`modal_name__status ${character.status.toLowerCase()}`}>
                  {character.status.toUpperCase()}
                </h4>
                <h2 className="modal_name__title">{character.name}</h2>
                <h3 className="modal_name__species">{character.species.toUpperCase()}</h3>
              </section>
              <section className="modal_info">
                <h5 className="modal_info__title">
                  Información
                </h5>
                <div className="modal_info__container">
                  <div className="modal_info__card">
                    <div className="modal_info__card-title">
                      <Icon
                        size={1}
                        path={mdiInformation}
                      />
                      <h6>Gender:</h6>
                    </div>
                    <p>{character.gender}</p>
                  </div>
                  <div className="modal_info__card">
                    <div className="modal_info__card-title">
                      <Icon
                        size={1}
                        path={mdiInformation}
                      />
                      <h6>Origin:</h6>
                    </div>
                    <p>{character.origin.name}</p>
                  </div>
                  <div className="modal_info__card">
                    <div className="modal_info__card-title">
                      <Icon
                        size={1}
                        path={mdiInformation}
                      />
                      <h6>Type:</h6>
                    </div>
                    <p>{character.type || 'Unknown'}</p>
                  </div>
                </div>
              </section>
              <section className="modal_info">
                <h5 className="modal_info__title">
                  Episodios
                </h5>
                <div className="modal_info__container grid-4">
                  {
                    episodes && 
                    episodes.length > 0 && 
                    episodes.map(ep => {
                      return (
                        <div
                          className="modal_info__episode-card"
                          key={ep.id}
                        >
                          <div className="modal_info__card-title">
                            <h6>{ep.name}</h6>
                          </div>
                          <p>{ep.episode}</p>
                          <span className="modal_info__episode-card_date">
                            {ep.air_date.toUpperCase()}
                          </span>
                        </div>
                      )
                    })
                  }
                </div>
              </section>
              <section className="modal_info">
                <h5 className="modal_info__title">
                  Personajes interesantes:
                </h5>
                <div className="modal_info__container grid-4">
                  {
                    characters.map(character => {
                      return(
                        <CharacterCard
                          key={character.id}
                          character={character}
                          faved={[].includes(character.id)}
                          handleClick={() => fetchCharacter(character.id)}
                        />
                      )
                    })
                  }
                </div>
              </section>
            </div>
          </div>
        </>
      }
    </>
  )
};

export default Modal;