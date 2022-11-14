import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from '@/views/Welcome';
import Home from '@/views/Home';
import CategoriesWrapper from '@/context/CategoriesWrapper';
import './App.scss';

function App() {
  return (
    <CategoriesWrapper>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<Home/>}
          />
        </Routes>
      </BrowserRouter>
    </CategoriesWrapper>
  )
}

export default App
