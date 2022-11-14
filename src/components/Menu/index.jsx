import './style.scss';
import SearchBar from '@/components/SearchBar';
import { useContext, useState } from 'react';
import categoriesContext from '@/context/categoriesContext';
import { mdiMenu } from '@mdi/js';
import Icon from '@mdi/react';


function Menu() {
  const genderList = [
    {id: '', name: 'All'},
    {id: 'unknown', name: 'Unknown'},
    {id: 'male', name: 'Male'},
    {id: 'female', name: 'Female'},
    {id: 'genderless', name: 'Genderless'},
  ]
  const statusList = [
    {id: '', name: 'All'},
    {id: 'alive', name: 'Alive'},
    {id: 'dead', name: 'Dead'},
    {id: 'unknown', name: 'Unknown'},
  ]

  const {
    selectedGender,
    setSelectedGender,
    // selectedStatus,
    // setSelectedStatus
  } = useContext(categoriesContext);

  const handleGender = (g) => {
    setShow(false);
    setSelectedGender(g);
    localStorage.setItem('selectedGender', g)
  }

  const [show, setShow] = useState(false)

  return(
    <>
      <nav className='menu'>
        <div className='search-bar-container'>
          <SearchBar />
        </div>
        <button
          className='menu-button'
          onClick={() => setShow(!show)}
        >
          <Icon
            size={1.5}
            path={mdiMenu}
          />
        </button>
        <ul className={show ? 'visible' : ''}>
          {
            genderList.map((gender) => {
              return (
                <li
                  key={gender.id}
                  className={gender.id === selectedGender ? 'selected' : ''}
                  onClick={() => handleGender(gender.id)}
                >
                  {gender.name}
                </li>      
              )
            })
          }
        </ul>
      </nav>
    </>
  )
}

export default Menu;