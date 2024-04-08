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
                movies?.map(movie => (
                    <li key={movie.id} style={{position: 'relative'}} >
                        <h3 style={{ textAlign: 'center' }}>{movie.title}</h3>
                        <div className='type' style={{backgroundColor: moviesTypes(movie.type)}}>{movie.type}</div>
                        <p>{movie.year}</p>
                        <img src={movie.poster !== 'N/A' ? movie.poster : defaultImg} alt={movie.title}/>
                    </li>
                ))
            }
        </ul>
    )
}

function NoMoviesResults ({ trend }) {
    return (<>
    <p style={{textAlign: 'center', margin: '0 0 90px 0'}}>Introduce el nombre de una pelicula válida</p>
    <h3 style={{textAlign: 'center', marginBottom: '40px'}}>TRENDING MOVIES 🔥</h3>
    <ul>
        {
            trend?.map(
                trendie => (
                    <li key={trendie.id}>
                        <h3 style={{ textAlign: 'center' }}>{trendie.title}</h3>
                        <p>{trendie.vote_average.toFixed(1)}/10 ⭐</p>
                        <img src={trendie.poster_path !== 'N/A' ? `https://image.tmdb.org/t/p/w500${trendie.poster_path}` : defaultImg} alt={trendie.title}/>
                    </li>
                )
            )
        }
    </ul>
    </>
    )
}

export default function Movies ({ movies, trend }) {   
    const hasMovies = movies?.length > 0;
    return (
        hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResults trend={trend}/>
    )
}