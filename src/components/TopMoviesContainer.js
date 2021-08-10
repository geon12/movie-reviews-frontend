import {useState} from "react"
import MoveButton from "./MoveButton"
import MovieCard from "./MovieCard"

function TopMoviesContainer({movies}) {

    const [movieStart,setMovieStart] = useState(0)

    function handleMoreMovies() {
        setMovieStart(prevStart => prevStart + 1)
    }

    function topMovies() {
        return movies.sort((a,b) => b.average_rating-a.average_rating).slice(0,10)
        
    }
    return (
        <div>
             {topMovies().slice(movieStart,movieStart + 4).map(movie => <MovieCard key={movie.id} movie={movie}/>)}
             <MoveButton handleMore={handleMoreMovies}/>
        </div>
    )
}

export default TopMoviesContainer