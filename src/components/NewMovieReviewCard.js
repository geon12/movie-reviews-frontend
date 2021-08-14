import {BsFillHeartFill} from "react-icons/bs";

function NewMovieReviewCard({movieReview,movies,reviewers,setNewReview,fetchData}) {
    const movie = movies.find((m)=> m.id === movieReview.movie_id)
    const reviewer = reviewers.find((r) => r.id === movieReview.reviewer_id)

    function onLike() {
        let numLikes = movieReview.likes
        numLikes += 1
        const likeData = {likes: numLikes}
        const configObj = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(likeData)
        }

        fetch(`${process.env.REACT_APP_API_URL}/movie_reviews/${movieReview.id}`, configObj)
            .then(resp => resp.json())
            .then((resp) => {
                setNewReview(resp)
                fetchData()
            })
            .catch(console.error)
    }
    function onDelete() {
        fetch(`${process.env.REACT_APP_API_URL}/movie_reviews/${movieReview.id}`,{method: 'DELETE'})
        .then(resp => resp.json())
        .then(() => {

            setNewReview(null)
            fetchData()
        })
        .catch(console.error)
    }
    
    return (

        <div className="card">
            <h5 className="card-title">{movie.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Rating: {movieReview.rating}</h6>
            <h6 className="card-subtitle mb-2 text-muted">by {reviewer.name}</h6>
            <h6 className="card-subtitle mb-2 text-muted">{reviewer.outlet}</h6>
            <p className="card-text">{movieReview.review}</p>
            <div>
                <button className="btn" onClick={onLike}><BsFillHeartFill /></button>
                <span>{movieReview.likes}</span>
            </div>
            <button className="btn" onClick={onDelete}>Delete</button>
        </div>
    )
}

export default NewMovieReviewCard