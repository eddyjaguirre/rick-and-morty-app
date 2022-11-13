import './style.scss'
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function Layout(props) {
  return (
    <>
      <Header />
      <section className='container'>
        {props.children}
      </section>
      <Footer />
    </>
  )
}

export default Layout;