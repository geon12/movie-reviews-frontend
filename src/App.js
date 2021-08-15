import './App.css';
import {useState,useEffect} from "react"
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Movie from './components/Movie';
import Reviewer from './components/Reviewer'
import MovieReviewCard from './components/MovieReviewCard'
import AddMovieReview from "./components/AddMovieReview";
import BrowseMovies from "./components/BrowseMovies"
import BrowseReviewers from "./components/BrowseReviewers"
import NavBar from "./components/NavBar"
import PageIsLoading from "./components/PageIsLoading"

function App() {

  const [reviewers,setReviewers] = useState(null)
  const [movies,setMovies] = useState(null)

  const fetchReviewersAndMovies = () => {
    fetch(`${process.env.REACT_APP_API_URL}/movies`)
      .then(resp => resp.json())
      .then(setMovies)
    fetch(`${process.env.REACT_APP_API_URL}/reviewers`)
      .then(resp => resp.json())
      .then(setReviewers)

  }

  useEffect(fetchReviewersAndMovies,[])


  function handleDeleteMovieReview(id,data,setData) {
    fetch(`${process.env.REACT_APP_API_URL}/movie_reviews/${id}`,{method: 'DELETE'})
        .then(resp => resp.json())
        .then(() => {

            const updatedMoviewReviews = data.movie_reviews.filter((review) => review.id !== id)
            const updatedData = {...data}
            updatedData.movie_reviews = updatedMoviewReviews
            setData(updatedData)
            fetchReviewersAndMovies()
        })
        .catch(console.error)
  }

  function handleMovieReviewLike(id,numLikes,data,setData) {
      numLikes += 1
      const likeData = {likes: numLikes}
      const configObj = {
          method: 'PATCH',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(likeData)
      }

      fetch(`${process.env.REACT_APP_API_URL}/movie_reviews/${id}`, configObj)
          .then(resp => resp.json())
          .then((resp) => {

              const updatedMoviewReviews = data.movie_reviews.map((review) => {
                  if (review.id === id) return resp
                  return review
              })
              const updatedData = {...data}
              updatedData.movie_reviews = updatedMoviewReviews
              setData(updatedData)
              fetchReviewersAndMovies()
          })
          .catch(console.error)
  }
  function populateMovieReviews (data,setData) {
      return data.movie_reviews.map((review) => 
          <MovieReviewCard 
              movieReview={review} 
              movies={movies} 
              reviewers={reviewers}
              handleDelete={handleDeleteMovieReview}
              handleLike={handleMovieReviewLike}
              data={data}
              setData={setData}
              key={review.id} 
          />)
  }

  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            {movies && reviewers ? <Home movies={movies} reviewers={reviewers}/> : <PageIsLoading />}
          </Route>
          <Route exact path='/movies/:id'>
            {movies && reviewers ? 
              <Movie populateMovieReviews={populateMovieReviews}/> 
              : <PageIsLoading />}
          </Route>
          <Route exact path='/reviewers/:id'>
              {movies && reviewers ? 
                <Reviewer populateMovieReviews={populateMovieReviews}/> 
                : <PageIsLoading />}
          </Route>
          <Route exact path='/add_movie_review'>
            {movies && reviewers ? 
              <AddMovieReview movies={movies} reviewers={reviewers} fetchData={fetchReviewersAndMovies}/>
              : <PageIsLoading />}
          </Route>
          <Route exact path='/browse_movies'>
            {movies ? <BrowseMovies movies={movies}/> : <PageIsLoading />}
          </Route>
          <Route exact path='/browse_reviewers'>
            {reviewers ? <BrowseReviewers reviewers={reviewers}/> : <PageIsLoading />}
          </Route>
          <Route path="*">
              <div className="display-4 text-center m-4">404 Page Not Found</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
