import { useEffect, useState } from "react";
import { useParams } from "react-router";


function Reviewer({populateMovieReviews}) {
    let { id } = useParams();
    const [reviewer,setReviewer] = useState(null)
    useEffect( () => {
        fetch(`${process.env.REACT_APP_API_URL}/reviewers/${id}`)
            .then(resp => resp.json())
            .then(setReviewer)
    },[id])

    
    return (
        <div>
            {reviewer ?
                <div>
                    <h1>{reviewer.name}</h1>
                    <h2>{reviewer.outlet}</h2>
                    {populateMovieReviews(reviewer,setReviewer)}
                </div> :

                <div>Page is Loading</div>

            }
        </div>
    )
}

export default Reviewer