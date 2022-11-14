import searchContext from '@/context/searchContext';
import { useState, useMemo } from 'react';


function CategoriesWrapper(props) {
  const [search, setSearch] = useState('');
  
  const value = useMemo(() => ({
    search,
    setSearch
  }), [search]);
  return (
    <searchContext.Provider value={value}>
      {props.children}
    </searchContext.Provider>
  )
}

export default CategoriesWrapper;