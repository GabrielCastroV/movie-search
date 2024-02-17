import { useState } from "react";
import { searchMovie } from "../services/movie";

export function useMovies ({ search }) {
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
       const newMovies = await searchMovie({ search })
       setMovies(newMovies)
    }
    return { movies, getMovies }
}