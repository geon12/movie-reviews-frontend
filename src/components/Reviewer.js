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

                const updatedMoviewReviews = reviewer.movie_reviews.filter((review) => review.id !== id)
                const updatedReviewer = {...reviewer}
                updatedReviewer.movie_reviews = updatedMoviewReviews
                setReviewer(updatedReviewer)
                fetchData()
            })
            .catch(console.error)
    }

    function handleMovieReviewLike(id,numLikes) {
        numLikes += 1
        const data = {likes: numLikes}
        const configObj = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        fetch(`${process.env.REACT_APP_API_URL}/movie_reviews/${id}`, configObj)
            .then(resp => resp.json())
            .then((resp) => {

                const updatedMoviewReviews = reviewer.movie_reviews.map((review) => {
                    if (review.id === id) return resp
                    return review
                })
                const updatedReviewer = {...reviewer}
                updatedReviewer.movie_reviews = updatedMoviewReviews
                setReviewer(updatedReviewer)
                fetchData()
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
                handleLike={handleMovieReviewLike}
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