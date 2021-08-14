import ResourceContainer from "./ResourceContainer";
import MovieCard from "./MovieCard";
import ReviewerCard from "./ReviewerCard"
import RadioOption from "./RadioOption";
import { useState } from "react";
import MovieReviewForm from "./MovieReviewForm";
import NewMovieReviewCard from "./NewMovieReviewCard"

function AddMovieReview({movies, reviewers,fetchData}) {
    const [movieId,setMovieId] = useState(null)
    const [reviewerId,setReviewerId] = useState(null)

    //const [searchToggle,setSearchToggle] = useState(null)
    const [newReview, setNewReview] = useState(null)

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
            <h2>Choose Movie</h2>
            <ResourceContainer resource={movies} populateResource={populateMovies} searchResource={"Movies"}/>
            <h2>Choose Reviewer</h2>
            <ResourceContainer resource={reviewers} populateResource={populateReviewers} searchResource={"Reviewers"}/>
            {movieId && reviewerId ? 
                <MovieReviewForm 
                    movieId={movieId} 
                    reviewerId={reviewerId} 
                    setMovieId={setMovieId} 
                    setReviewerId={setReviewerId}
                    setNewReview={setNewReview}
                    fetchData={fetchData}
                /> 
                : null
            }
            {newReview ? <NewMovieReviewCard 
                            movieReview={newReview}
                            movies={movies}
                            reviewers={reviewers}
                            setNewReview={setNewReview}
                            fetchData={fetchData}
                        /> 
                            : null}
        </div>
    )
}

export default AddMovieReview