
import SearchBar from "./SearchBar";
import TopCardsContainer from "./TopCardsContainer/TopCardsContainer";

function Home({movies,reviewers}) {

    const sortReviewers = (a,b) => b.total_likes - a.total_likes
    const sortMovies = (a,b) => b.average_rating - a.average_rating

    function handleSearchSubmit(searchTerm) {
        searchTerm = searchTerm.toLowerCase()
        if (searchTerm) console.log(movies.filter(movie => movie.name.toLowerCase().includes(searchTerm)))
    }

    return (
        <div>
            <h1>Movie Reviews</h1>
            <h2>Top Movies</h2>
            <TopCardsContainer data={movies} isMovie={true} sortData={sortMovies}/>
            <h2>Top Reviewers</h2>
            <TopCardsContainer data={reviewers} isMovie={false} sortData={sortReviewers}/>
            <SearchBar handleSearchSubmit={handleSearchSubmit}/>
        </div>
        
    )
}

export default Home


