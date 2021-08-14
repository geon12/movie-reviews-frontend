import ResourceContainer from "./ResourceContainer";
import MovieCard from "./MovieCard";
import ReviewerCard from "./ReviewerCard"
import RadioOption from "./RadioOption";
import { useState } from "react";

function AddMovieReview({movies, reviewers}) {
    const [movieId,setMovieId] = useState(null)
    const [reviewerId,setReviewerId] = useState(null)

    const movieName = "MovieRadioOptions"
    const reviewerName = "ReviewerRadioOptions"
    function handleRadioChange(event) {
        if (event.target.checked) {
            if (event.target.name === movieName) {
                setMovieId(event.target.value)
            }
            if (event.target.name === reviewerName) {
                setReviewerId(event.target.value)
            }
          
        }
    }

    function populateMovies(filteredMovies) {
        const moviesInput = filteredMovies.map((movie) => 
        <RadioOption 
            resource={movie}
            handleRadioChange={handleRadioChange}
            name={movieName}
            key={movie.id}
        >
            <MovieCard movie={movie} />
        </RadioOption>)

        return (
            <form>
                {moviesInput}
            </form>
        )

    }

    function populateReviewers(filteredReviewers) {
        const reviewersInput = filteredReviewers.map((reviewer) => 
        <RadioOption 
            resource={reviewer}
            handleRadioChange={handleRadioChange}
            name={reviewerName}
            key={reviewer.id}
        >
            <ReviewerCard reviewer={reviewer} />
        </RadioOption>)
        
        return (
            <form>
                {reviewersInput}
            </form>
        )
    }
    return (
        <div>
            <h1>Add Movie Review</h1>
            <ResourceContainer resource={movies} populateResource={populateMovies} searchResource={"Movies"}/>
            <ResourceContainer resource={reviewers} populateResource={populateReviewers} searchResource={"Reviewers"}/>
            
        </div>
    )
}

export default AddMovieReview