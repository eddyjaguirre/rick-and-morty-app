import './style.scss'

function SearchBar(props) {
  return (
    <div className='search-bar'>
      <button>
        <img src="src/assets/search-icon.svg" alt="search-icon" />
      </button>
      <input
        type="search"
        name=""
        id=""
        placeholder='Buscar personaje...' 
      />
    </div>
  )
}

export default SearchBar;