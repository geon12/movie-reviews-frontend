import MovieCard from "./MovieCard";

function BrowseMovies({movies}) {
    return (
        <div>
            <h1>Movies</h1>
            {movies.map((movie) => <MovieCard movie={movie} key={movie.id}/>)}
        </div>
    )
}

export default BrowseMovies