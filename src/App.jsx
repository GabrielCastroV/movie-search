import './App.css'
import { useMovies } from './hooks/useMovies' 
import Movies from './components/Movies.jsx'
import { useState } from 'react';

function App() {
  const [sort, setSort] = useState(false)
  const [search, setSearch] = useState('');
  const { movies, loading, getMovies } = useMovies({ search, sort });

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (search === '') return
    getMovies({ search });
  }

  const handleSort = () => {
    setSort(!sort);
  }

  return (
    <>
      <header style={{display: "flex", justifyContent: "center"}}>
        <form onSubmit={handleSubmit} style={{display: "flex"}}>
          <input onChange={handleChange} placeholder='Avatar, Up, Spiderman...'/>
          <button  type="submit">Buscar</button>
          <input type="checkbox" onChange={handleSort} checked={sort} />
        </form>
      </header>
      <main>
        {
          loading ? <p style={{textAlign: 'center'}}>Cargando...</p> : <Movies movies={movies}/>
        }
      </main>
    </>
  )
}

export default App
