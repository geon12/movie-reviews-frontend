function MovieCard({movie}) {
    return (
        <div>
            <div className="card">
                <h5 className="card-title">{movie.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{movie.year}</h6>
                <h6 className="card-subtitle mb-2 text-muted">{movie.average_rating}</h6>
            </div>
        </div>
    )

}

export default MovieCard