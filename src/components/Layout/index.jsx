import './style.scss'
import Header from '@/components/Header';
import Menu from '@/components/Menu';
import Footer from '@/components/Footer';
import {useState, useEffect} from 'react';

function Layout(props) {
  const [character, setCharacter] = useState(null);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/1`, {
      method: 'GET'
    })
      .then((res) => res.json())
      .then((json) => {
        setCharacter(json);
      });
  }, [])
  return (
    <>
      <Header />
      <Menu />
      <section className='container'>
        {props.children}
      </section>
      <Footer />
    </>
  )
}

export default Layout;