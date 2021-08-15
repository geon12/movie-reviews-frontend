import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./styles/Movie.css"

function Movie({populateMovieReviews}) {
    let { id } = useParams();
    const [movie,setMovie] = useState(null)
    useEffect( () => {
        fetch(`${process.env.REACT_APP_API_URL}/movies/${id}`)
            .then(resp => resp.json())
            .then(setMovie)
    },[id])

    return (
        <div className="text-center">
           { movie ? <>
                        <h1>{movie.name}</h1>
                        
                        <p className="description">{movie.description}</p>
                        <h4>released: {movie.year}</h4>
                        <h4>director: {movie.director}</h4>
                        <h4>duration(mins): {movie.duration}</h4>
                        <h2 className="m-3">Reviews</h2>
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