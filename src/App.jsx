import './App.css'
import { useMovies } from './hooks/useMovies' 
import Movies from './components/Movies.jsx'
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState('');
  const { movies, getMovies } = useMovies({ search });

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (search === '') return
    getMovies({ search });
  }

  return (
    <>
      <header style={{display: "flex", justifyContent: "center"}}>
        <form onSubmit={handleSubmit} style={{display: "flex"}}>
          <input onChange={handleChange} placeholder='Avatar, Up, Spiderman...'/>
          <button  type="submit">Buscar</button>
        </form>
      </header>
      <main>
        <Movies movies={movies}/>
      </main>
    </>
  )
}

export default App
