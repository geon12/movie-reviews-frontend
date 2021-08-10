import {BsFillHeartFill} from "react-icons/bs";

function MovieReviewCard({movieReview,movies,reviewers}) {
    const movie = movies.find((m)=> m.id === movieReview.movie_id)
    const reviewer = reviewers.find((r) => r.id === movieReview.reviewer_id)
    return (

        <div className="card">
            <h5 className="card-title">{movie.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Rating: {movieReview.rating}</h6>
            <h6 className="card-subtitle mb-2 text-muted">by {reviewer.name}</h6>
            <h6 className="card-subtitle mb-2 text-muted">{reviewer.outlet}</h6>
            <p className="card-text">{movieReview.review}</p>
            <button className="btn"><BsFillHeartFill /></button>
            <h6>{movieReview.likes}</h6>
            <button className="btn">Delete</button>
        </div>
    )
}

export default MovieReviewCard