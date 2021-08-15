import {Link} from "react-router-dom"
import './styles/ResourceCard.css'

function ReviewerCard({reviewer}) {

    
    return (
        <Link to={`/reviewers/${reviewer.id}`}>
            <div className="card resource-card">
                <h5 className="card-title">{reviewer.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{reviewer.outlet}</h6>
                <h6 className="card-subtitle mb-2 text-muted">Total Likes: {reviewer.total_likes}</h6>
            </div>
        </Link>
    )

}

export default ReviewerCard 