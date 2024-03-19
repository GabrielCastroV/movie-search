/* eslint-disable react/prop-types */
import defaultImg from '../img/default-movie.jpg'

function ListOfMovies ({ movies }) {
    const moviesTypes =(type) => {
        if (type === 'movie') return '#9d174d'
        if (type === 'series') return '#0c4a6e'
        if (type === 'game') return '#16a34a'
    }
    return (
        <ul>
            {
                movies.map(movie => (
                    <li key={movie.id} style={{position: 'relative'}} >
                        <h3 style={{ textAlign: 'center' }}>{movie.title}</h3>
                        <div className='type' style={{backgroundColor: moviesTypes(movie.type)}}>{movie.type}</div>
                        <p>{movie.year}</p>
                        <img src={(movie.poster !== 'N/A') ? movie.poster : defaultImg} alt={movie.title}/>
                    </li>
                ))
            }
        </ul>
    )
}

function NoMoviesResults () {
    return (
        <p style={{textAlign: 'center'}}>No se encontraron peliculas para esta busqueda</p>
    )
}

export default function Movies ({ movies }) {   
    const hasMovies = movies?.length > 0;
    return (
        hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResults/>
    )
}