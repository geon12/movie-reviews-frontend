import ResourceContainer from "./ResourceContainer";
import MovieCard from "./MovieCard";
import ReviewerCard from "./ReviewerCard"
import RadioOption from "./RadioOption";
import { useState } from "react";
import MovieReviewForm from "./MovieReviewForm";
import NewMovieReviewCard from "./NewMovieReviewCard"
import './styles/AddMovieReview.css'

function AddMovieReview({movies, reviewers,fetchData}) {
    const [movieId,setMovieId] = useState(null)
    const [reviewerId,setReviewerId] = useState(null)

    const [checkedMovie,setCheckedMovie] = useState(null)
    const [checkedReviewer,setCheckedReviewer] = useState(null)
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
            checked={checkedMovie}
            setChecked={setCheckedMovie}
            name={movieName}
            key={movie.id}
        >
            <MovieCard movie={movie} styleName={"search-card"}/>
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
            checked={checkedReviewer}
            setChecked={setCheckedReviewer}
            name={reviewerName}
            key={reviewer.id}
        >
            <ReviewerCard reviewer={reviewer} styleName={"search-card"}/>
        </RadioOption>)
        
        return (
            <form>
                {reviewersInput}
            </form>
        )
    }
    return (
        <div className="text-center">
            
            <div className="d-flex justify-content-center row">
                <div className="col-4">
                <h2>Choose a Movie</h2>
                <ResourceContainer resource={movies} populateResource={populateMovies} searchResource={"Movies"}/>
                </div>
                <div className="col-4">
                <h2>Choose a Reviewer</h2>
                <ResourceContainer resource={reviewers} populateResource={populateReviewers} searchResource={"Reviewers"}/>
                </div>
            </div>
            {movieId && reviewerId ? 
                <MovieReviewForm 
                    movieId={movieId} 
                    reviewerId={reviewerId} 
                    setMovieId={setMovieId} 
                    setReviewerId={setReviewerId}
                    setNewReview={setNewReview}
                    fetchData={fetchData}
                    setCheckedMovie={setCheckedMovie}
                    setCheckedReviewer={setCheckedReviewer}
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