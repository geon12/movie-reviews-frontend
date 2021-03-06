import ResourceContainer from "./ResourceContainer";
import TopCardsContainer from "./TopCardsContainer";
import MovieCard from "./MovieCard";
import './styles/Card.css'
import './styles/Home.css'

function Home({movies,reviewers}) {

    const sortReviewers = (a,b) => b.total_likes - a.total_likes
    const sortMovies = (a,b) => b.average_rating - a.average_rating

    function populateMovies(filteredMovies) {
        return filteredMovies.map((movie) => <MovieCard movie={movie} styleName={"record-card"} key={movie.id}/>)
    }
    return (
        <div className="text-center">
            <h1 className="text-uppercase title">Find the Best Movies and Top Reviewers</h1>
            <h2>Top Movies</h2>
            <TopCardsContainer data={movies} isMovie={true} sortData={sortMovies}/>
            <h2>Top Reviewers</h2>
            <TopCardsContainer data={reviewers} isMovie={false} sortData={sortReviewers}/>
            <ResourceContainer resource={movies} populateResource={populateMovies} searchResource={"Movies"}/>
        </div>
        
    )
}

export default Home


