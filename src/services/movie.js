export const searchMovie = async ({ search  }) => {

    if (search === '') return

    try {
        const res = await fetch(`https://www.omdbapi.com/?apikey=cb740ae3&s=${search}`);
        const json = await res.json();
        const movies = json.Search;
        return movies?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster}))
    } catch (error) {
        throw new Error('Error de Fetching')
    }
}