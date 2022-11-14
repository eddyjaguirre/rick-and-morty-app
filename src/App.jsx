import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from '@/views/Welcome';
import Home from '@/views/Home';
import CategoriesWrapper from '@/context/CategoriesWrapper';
import SearchWrapper from '@/context/SearchWrapper';
import './App.scss';

function App() {
  return (
    <CategoriesWrapper>
      <SearchWrapper>
        <Home />
        {/* <BrowserRouter>
          <Routes>
            <Route
              path='/'
              element={<Home/>}
            />
          </Routes>
        </BrowserRouter> */}
      </SearchWrapper>
    </CategoriesWrapper>
  )
}

export default App
