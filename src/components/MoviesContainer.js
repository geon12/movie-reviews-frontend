import { useState } from "react";
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";

function MoviesContainer({movies}) {

    const [filteredMovies,setFilteredMovies] = useState([])
    function handleSearchSubmit(searchTerm) {
        searchTerm = searchTerm.toLowerCase()
        if (searchTerm) setFilteredMovies(movies.filter(movie => movie.name.toLowerCase().includes(searchTerm)))
    }

    function populateMovies() {
        return filteredMovies.map((movie) => <MovieCard movie={movie} key={movie.id}/>)
    }

    return (
        <div>
            <SearchBar handleSearchSubmit={handleSearchSubmit}/>
            {populateMovies()}
        </div>
    )
}

export default MoviesContainer