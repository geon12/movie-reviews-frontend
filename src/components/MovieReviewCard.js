function MovieReviewCard({movieReview}) {

    return (
        <div className="card">
            <h5 className="card-title">{movieReview.movie.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{movieReview.rating}</h6>
            <h6 className="card-subtitle mb-2 text-muted">{movieReview.reviewer.name}</h6>
            <h6 className="card-subtitle mb-2 text-muted">{movieReview.reviewer.outlet}</h6>
            <p className="card-text">{movieReview.review}</p>
        </div>
    )
}