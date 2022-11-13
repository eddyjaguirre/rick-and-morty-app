import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from '@/views/Welcome';
import Home from '@/views/Home';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Home/>}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
