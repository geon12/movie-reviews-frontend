import { useEffect, useState } from "react";
import { useParams } from "react-router";
import MovieReviewCard from "./MovieReviewCard";

function Reviewer({movies,reviewers}) {
    let { id } = useParams();
    const [reviewer,setReviewer] = useState(null)
    useEffect( () => {
        fetch(`${process.env.REACT_APP_API_URL}/reviewers/${id}`)
            .then(resp => resp.json())
            .then(setReviewer)
    },[id])
    function populateMovieReviews () {
        return reviewer.movie_reviews.map((review) => <MovieReviewCard movieReview={review} movies={movies} reviewers={reviewers} key={review.id} />)
    }
    return (
        <div>
            {reviewer ?
                <div>
                    <h1>{reviewer.name}</h1>
                    <h2>{reviewer.outlet}</h2>
                    {populateMovieReviews()}
                </div> :

                <div>Page is Loading</div>

            }
        </div>
    )
}

export default Reviewer