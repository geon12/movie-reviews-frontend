import {BsFillHeartFill} from "react-icons/bs";
import "./styles/Card.css"

function MovieReviewCard({movieReview,movies,reviewers,handleDelete,handleLike,data,setData}) {
    const movie = movies.find((m)=> m.id === movieReview.movie_id)
    const reviewer = reviewers.find((r) => r.id === movieReview.reviewer_id)

    function onLike() {
        handleLike(movieReview.id,movieReview.likes,data,setData)
    }
    function onDelete() {
        handleDelete(movieReview.id,data,setData) 
    }
    
    return (

        <div className="card row m-2 text-center p-2 border border-dark">
            <h5 className="card-title">{movie.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Rating: {movieReview.rating}</h6>
            <h6 className="card-subtitle mb-2 text-muted">by {reviewer.name}</h6>
            <h6 className="card-subtitle mb-2 text-muted">{reviewer.outlet}</h6>
            <p className="card-text">{movieReview.review}</p>
            <div>
                <span>
                    <button className="btn" onClick={onLike}><BsFillHeartFill size={22}/></button>
                    {movieReview.likes}
                </span>
            </div>
            <button className="btn" onClick={onDelete}>Delete</button>
        </div>
    )
}

export default MovieReviewCard