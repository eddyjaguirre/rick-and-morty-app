import './style.scss'
import searchContext from '@/context/searchContext';
import { useContext, useState } from 'react';

function SearchBar() {
  const {
    setSearch
  } = useContext(searchContext);

  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    setSearch(searchTerm);
  }

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  }

  return (
    <div className='search-bar'>
      <button
        onClick={() => handleSearch()}
      >
        <img src="src/assets/search-icon.svg" alt="search-icon" />
      </button>
      <input
        type="text"
        name=""
        id=""
        placeholder='Buscar personaje...'
        value={searchTerm}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
      />
    </div>
  )
}

export default SearchBar;