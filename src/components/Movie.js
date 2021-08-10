function Movie({movie}) {

    return (
        <div>
            <h1>title: {movie.name}</h1>
            <h2>description:</h2>
            <p>{movie.description}</p>
            <h3>released: {movie.year}</h3>
            <h3>director: {movie.director}</h3>
            <h3>duration(mins): {movie.duration}</h3>
        </div>
    )
}

export default Movie