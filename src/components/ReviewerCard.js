import {Link} from "react-router-dom"

function ReviewerCard({reviewer,styleName}) {

    
    return (
        <Link to={`/reviewers/${reviewer.id}`}>
            <div className={`card shadow-sm border-dark ${styleName}`}>
                <h5 className="card-title">{reviewer.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{reviewer.outlet}</h6>
                <h6 className="card-subtitle mb-2 text-muted">Total Likes: {reviewer.total_likes}</h6>
            </div>
        </Link>
    )

}

export default ReviewerCard 