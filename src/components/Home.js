
import TopMoviesContainer from "./TopMoviesContainer";

function Home({movies,reviewers}) {
    return (
        <div>
            <h1>Movie Reviews</h1>
            
            <TopMoviesContainer movies={movies}/>
        </div>
        
    )
}

export default Home


