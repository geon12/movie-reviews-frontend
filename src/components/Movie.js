import { useEffect, useState } from "react";
import { useParams } from "react-router";

function Movie({populateMovieReviews}) {
    let { id } = useParams();
    const [movie,setMovie] = useState(null)
    useEffect( () => {
        fetch(`${process.env.REACT_APP_API_URL}/movies/${id}`)
            .then(resp => resp.json())
            .then(setMovie)
    },[id])

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
                            {populateMovieReviews(movie,setMovie)}
                        </div>
                    </>
                    : <div>Page is Loading</div>
           }
        </div>
    )
}

export default Movie