import {Link} from "react-router-dom"

function MovieCard({movie}) {
    return (
        <Link to={`/movies/${movie.id}`}>
            <div>
                <div className="card resource-card">
                    <h5 className="card-title">{movie.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{movie.year}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">{parseFloat(movie.average_rating).toFixed(2)}</h6>
                </div>
            </div>
        </Link>
    )

}

export default MovieCard