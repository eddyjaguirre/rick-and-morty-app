import './style.scss'
import Button from "@/components/Button"

import { useContext } from 'react';
import categoriesContext from '@/context/categoriesContext';

function NotFound() {
  const {
    setSelectedGender,
    setPage
  } = useContext(categoriesContext);

  const handleFilters = () => {
    setSelectedGender('');
    setPage(1);
    localStorage.setItem('selectedGender', '')
    localStorage.setItem('page', 1);
    window.location.reload(false);
  }

  return (
    <div className="not-found">
      <h4>Uh-oh!</h4>
      <p>Pareces perdido en tu viaje</p>
      <Button
        handleClick={() => handleFilters()}
      >
        Eliminar filtros
      </Button>
    </div>
  )
}

export default NotFound;