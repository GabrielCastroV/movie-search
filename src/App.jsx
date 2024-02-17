import './App.css'
import { useMovies } from './hooks/useMovies' 
import Movies from './components/Movies.jsx'
import { useCallback, useState } from 'react';
import debounce from 'just-debounce-it';

function App() {
  const [sort, setSort] = useState(false)
  const [search, setSearch] = useState('');
  const { movies, loading, getMovies } = useMovies({ search, sort });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedGetMovies = useCallback(
    debounce(search => {
      getMovies({ search })
    }, 300)
    , [getMovies]
  )

  const handleChange = e => {
    const newSearch = e.target.value;
    setSearch(newSearch);
    debouncedGetMovies(newSearch);
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
      <h1 style={{fontFamily: 'sans-serif'}}>Buscador de peliculas</h1>
      <header style={{display: "flex", justifyContent: "center"}}>
        <form onSubmit={handleSubmit} style={{display: "flex", alignItems: 'center'}}>
          <input onChange={handleChange} placeholder='Avatar, Up, Spiderman...'/>
          <button  type="submit">Buscar</button>
          <div className="checkbox">
            <input id="checkbox1" className="checkbox__input" type="checkbox" onChange={handleSort} checked={sort}/>
            <label htmlFor="checkbox1" className="checkbox__label">
              <span className="checkbox__custom"></span>
              Ordenar
            </label>
          </div>
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
