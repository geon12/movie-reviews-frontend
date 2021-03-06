import { useEffect, useState } from "react";
import { useParams } from "react-router";
import PageIsLoading from "./PageIsLoading";


function Reviewer({populateMovieReviews}) {
    let { id } = useParams();
    const [reviewer,setReviewer] = useState(null)
    
    useEffect( () => {
        fetch(`${process.env.REACT_APP_API_URL}/reviewers/${id}`)
            .then(resp => resp.json())
            .then(setReviewer)
    },[id])

    
    return (
        <div className="text-center">
            {reviewer ?
                <div>
                    <h1>{reviewer.name}</h1>
                    <h2>{reviewer.outlet}</h2>
                    {populateMovieReviews(reviewer,setReviewer)}
                </div> :

                <PageIsLoading />

            }
        </div>
    )
}

export default Reviewer