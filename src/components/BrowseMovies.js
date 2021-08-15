import MovieCard from "./MovieCard";

function BrowseMovies({movies}) {
    return (
        <div>
            <h1>Explore Movies</h1>
            {movies.map((movie) => <MovieCard movie={movie} key={movie.id} styleName={"record-card"}/>)}
        </div>
    )
}

export default BrowseMovies