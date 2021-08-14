import {useState} from "react"

function MovieReviewForm({reviewerId,movieId, setReviewerId,setMovieId,setNewReview,fetchData,setCheckedMovie,setCheckedReviewer}) {
    const initialState =  {
        review: "",
        rating: 1,
        likes: 0,
        movie_id: movieId,
        reviewer_id: reviewerId
    }

    const [formData, setFormData] = useState(initialState)

    function handleChange(event) {
        const name = event.target.name
        let value = event.target.value

        setFormData({
            ...formData,
            [name]: value
        })
    }

    function postMovieReview() {
        
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }
        
        fetch(`${process.env.REACT_APP_API_URL}/movie_reviews`, configObj)
            .then(resp => resp.json())
            .then( (resp) => {
                
                setNewReview(resp)
                setFormData(initialState)
                setReviewerId(null)
                setMovieId(null)
                setCheckedMovie(null)
                setCheckedReviewer(null)
                
                fetchData()
            })
            .catch(console.error)
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (movieId && reviewerId) {
            
            postMovieReview()
            
        }
    }
    
    return (
 
        <form onSubmit={handleSubmit}>
            <div className="form-group my-2 mx-4">
                <input 
                    type="text" 
                    className="form-control" 
                    name="review" 
                    placeholder="Review..." 
                    value={formData.review} 
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group my-2 mx-4">
                <input 
                    type="number" 
                    name="rating" 
                    min="1" 
                    max="10"
                    value={formData.rating}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className="btn my-1 mx-5">Add Movie Review</button>
        </form>

    )
}

export default MovieReviewForm