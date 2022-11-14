import './style.scss'
import { useState, useEffect } from 'react'
import FavButton from '@/components/FavButton';

function CharacterCard(props) {
  const character = props.character;
  const [episode, setEpisode] = useState(null)
  useEffect(() => {
    // console.log(character.episode[0])
    fetch(character.episode[0], {
      method: 'GET'
    })
      .then((res) => res.json())
      .then((json) => {
        setEpisode(json);
      });
  }, [])

  return (
    <div
      className='character-card'
      onClick={props.handleClick}
    >
      <div className='character-card_image'>
        <img src={character.image} alt={character.name} />
        {/* <div className="character-card_fav-button">
          <FavButton
            faved={props.faved}
          />
        </div> */}
      </div>
      <div className='character-card_details'>
        <section>
          <p
            className={`character-card_status ${character.status.toLowerCase()}`}
          >{character.status} - {character.species}</p>
          <h4 className='character-card_name'>{character.name}</h4>
        </section>
        <section>
          <p className='character-card_title'>Last known location:</p>
          <p className='character-card_info'>{character.location.name}</p>
        </section>
        <section>
          <p className='character-card_title'>First seen in:</p>
          <p className='character-card_info'>{episode && episode.name}</p>
        </section>
      </div>
    </div>
  )
}

export default CharacterCard;