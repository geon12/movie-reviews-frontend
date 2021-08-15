import ReviewerCard from "./ReviewerCard";

function BrowseReviewers({reviewers}) {
    return(   
        <div className="text-center">
            <h1>Explore Reviewers</h1>
            {reviewers.map((reviewer) => <ReviewerCard reviewer={reviewer} styleName={"record-card"} key={reviewer.id}/>)}
        </div>
    )
}

export default BrowseReviewers