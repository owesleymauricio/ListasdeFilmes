import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Home from './pages/Home'
import Movie from './pages/Movie';
import Search from './pages/Search';

import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}> {/*o primeiro element, e como se fosse definido o elemento pai*/}
          <Route path='/ListaDeFilmes' element={<Home />} />
          <Route path='movie/:id' element={<Movie />} />
          <Route path='/search' element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
