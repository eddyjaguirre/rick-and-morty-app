import './style.scss'
import SearchBar from '@/components/SearchBar';

function Header() {
  return (
    <>
      <header>
        <img
          src="src/assets/rnmlogo.png"
          alt="Rick and Morty"
          className='rnm-logo'
        />
        <div className="hide-mobile">
          <SearchBar />
        </div>
      </header>
    </>
  )
}

export default Header;