/* eslint-disable react/prop-types */
function ListOfMovies ({ movies }) {
    return (
        <ul>
            {
                movies.map(movie => (
                    <li key={movie.id}>
                        <h3 style={{ textAlign: 'center' }}>{movie.title}</h3>
                        <p>{movie.year}</p>
                        <img src={movie.poster} alt={movie.title}/>
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