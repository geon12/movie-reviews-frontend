
import TopCardsContainer from "./TopCardsContainer";

function Home({movies,reviewers}) {
    return (
        <div>
            <h1>Movie Reviews</h1>
            <TopCardsContainer data={movies} isMovie={true} />
            <TopCardsContainer data={reviewers} isMovie={false} />
        </div>
        
    )
}

export default Home


