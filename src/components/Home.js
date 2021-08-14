import ResourceContainer from "./ResourceContainer";
import TopCardsContainer from "./TopCardsContainer/TopCardsContainer";
import MovieCard from "./MovieCard";
import AddMovieReview from "./AddMovieReview";

function Home({movies,reviewers}) {

    const sortReviewers = (a,b) => b.total_likes - a.total_likes
    const sortMovies = (a,b) => b.average_rating - a.average_rating

    function populateMovies(filteredMovies) {
        return filteredMovies.map((movie) => <MovieCard movie={movie} key={movie.id}/>)
    }
    return (
        <div>
            <h1>Movie Reviews</h1>
            <h2>Top Movies</h2>
            <TopCardsContainer data={movies} isMovie={true} sortData={sortMovies}/>
            <h2>Top Reviewers</h2>
            <TopCardsContainer data={reviewers} isMovie={false} sortData={sortReviewers}/>
            <ResourceContainer resource={movies} populateResource={populateMovies} searchResource={"Movies"}/>
            <AddMovieReview movies={movies} reviewers={reviewers}/>
        </div>
        
    )
}

export default Home


