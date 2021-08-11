import { useEffect, useState } from "react";
import { useParams } from "react-router";
import MovieReviewCard from "./MovieReviewCard";

function Reviewer({movies,reviewers,fetchData}) {
    let { id } = useParams();
    const [reviewer,setReviewer] = useState(null)
    useEffect( () => {
        fetch(`${process.env.REACT_APP_API_URL}/reviewers/${id}`)
            .then(resp => resp.json())
            .then(setReviewer)
    },[id])

    function handleDeleteMovieReview(id) {
        fetch(`${process.env.REACT_APP_API_URL}/movie_reviews/${id}`,{method: 'DELETE'})
            .then(resp => resp.json())
            .then(() => {
                // let deletedLikes = 0
                // const updatedMoviewReviews = reviewer.movie_reviews.filter((review) =>{ 
                //     if (review.id === id) deletedLikes = review.likes
                //     return review.id !== id
                // })

                const updatedMoviewReviews = reviewer.movie_reviews.filter((review) => review.id !== id)
                const updatedReviewer = {...reviewer}
                updatedReviewer.movie_reviews = updatedMoviewReviews
                setReviewer(updatedReviewer)
                fetchData()
                // const updatedReviewers = reviewers.map((r) => {
                //     if (r.id === reviewer.id) {
                //         r.total_likes -= deletedLikes
                //         return r
                //     }
                //     return r
                // })
                // setReviewers(updatedReviewers)
            })
            .catch(console.error)
    }
    function populateMovieReviews () {
        return reviewer.movie_reviews.map((review) => 
            <MovieReviewCard 
                movieReview={review} 
                movies={movies} 
                reviewers={reviewers}
                handleDelete={handleDeleteMovieReview}
                key={review.id} 
            />)
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