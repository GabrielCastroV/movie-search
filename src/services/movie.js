export const searchMovie = async ({ search }) => {

    if (search === '') return

    try {
        const res = await fetch(`https://www.omdbapi.com/?apikey=cb740ae3&s=${search}`);
        const json = await res.json();
        if (!res.ok) {
            throw new Error
        }
        const movies = json.Search;
        // Aqui devuelvo las peliculas con mi propio contrato y no el de la API
        return movies?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            type: movie.Type,
            poster: movie.Poster}))
    } catch (error) {
        throw new Error('Error de Fetching')
    }
}