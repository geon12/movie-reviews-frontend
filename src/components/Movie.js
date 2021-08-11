import { useEffect, useState } from "react";
import { useParams } from "react-router";
import MovieReviewCard from "./MovieReviewCard";

function Movie({movies,reviewers,fetchData}) {
    let { id } = useParams();
    const [movie,setMovie] = useState(null)
    useEffect( () => {
        fetch(`${process.env.REACT_APP_API_URL}/movies/${id}`)
            .then(resp => resp.json())
            .then(setMovie)
    },[id])

    function handleDeleteMovieReview(id) {
        fetch(`${process.env.REACT_APP_API_URL}/movie_reviews/${id}`,{method: 'DELETE'})
            .then(resp => resp.json())
            .then(() => {
                
                const updatedMoviewReviews = movie.movie_reviews.filter((review) => review.id !== id)
                const updatedMovie = {...movie}
                updatedMovie.movie_reviews = updatedMoviewReviews
                setMovie(updatedMovie)
                fetchData()
            })
            .catch(console.error)
    }

    function populateMovieReviews () {
        return movie.movie_reviews.map((review) => 
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
           { movie ? <>
                        <h1>title: {movie.name}</h1>
                        <h2>description:</h2>
                        <p>{movie.description}</p>
                        <h3>released: {movie.year}</h3>
                        <h3>director: {movie.director}</h3>
                        <h3>duration(mins): {movie.duration}</h3>
                        <h2>Reviews</h2>
                        <div>
                            {populateMovieReviews()}
                        </div>
                    </>
                    : <div>Page is Loading</div>
           }
        </div>
    )
}

export default Movie