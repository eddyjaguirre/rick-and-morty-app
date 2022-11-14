import './style.scss';
import SearchBar from '@/components/SearchBar';
import { useContext } from 'react';
import categoriesContext from '@/context/categoriesContext';

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
    setSelectedGender(g);
    localStorage.setItem('selectedGender', g)
  }

  return(
    <>
      <nav className='menu'>
        <div className='search-bar-container'>
          <SearchBar />
        </div>
        <ul>
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