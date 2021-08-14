import ResourceContainer from "./ResourceContainer";

function AddMovieReview({movies, reviewers}) {


    function populateMovies() {
        
    }
    return (
        <div>

            <ResourceContainer movies={movies} populateResource={populateMovies} searchResource={"movies"}/>
        </div>
    )
}

export default AddMovieReview