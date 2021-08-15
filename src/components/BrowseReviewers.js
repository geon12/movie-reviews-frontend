import ReviewerCard from "./ReviewerCard";

function BrowseReviewers({reviewers}) {
    return(   <div>
            <h1>Explore Reviewers</h1>
            {reviewers.map((reviewer) => <ReviewerCard reviewer={reviewer} key={reviewer.id}/>)}
        </div>
    )
}

export default BrowseReviewers