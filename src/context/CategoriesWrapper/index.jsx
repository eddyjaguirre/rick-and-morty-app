import categoriesContext from '@/context/categoriesContext';
import { useState, useMemo } from 'react';


function CategoriesWrapper(props) {
  const [selectedGender, setSelectedGender] = useState(
    localStorage.getItem('selectedGender') || 
    ''
  )
  const [selectedStatus, setSelectedStatus] = useState(
    localStorage.getItem('selectedStatus') || 
    ''
  )
  const [page, setPage] = useState(
    Number(localStorage.getItem('page')) || 1
  )
  
  const value = useMemo(() => ({
    selectedGender,
    setSelectedGender,
    selectedStatus,
    setSelectedStatus,
    page,
    setPage
  }), [selectedGender, selectedStatus]);
  return (
    <categoriesContext.Provider value={value}>
      {props.children}
    </categoriesContext.Provider>
  )
}

export default CategoriesWrapper;