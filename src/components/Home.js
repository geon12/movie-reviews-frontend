
import TopCardsContainer from "./TopCardsContainer";

function Home({movies,reviewers}) {

    const sortReviewers = (a,b) => b.total_likes - a.total_likes
    const sortMovies = (a,b) => b.average_rating - a.average_rating

    return (
        <div>
            <h1>Movie Reviews</h1>
            <TopCardsContainer data={movies} isMovie={true} sortData={sortMovies}/>
            <TopCardsContainer data={reviewers} isMovie={false} sortData={sortReviewers}/>
        </div>
        
    )
}

export default Home


