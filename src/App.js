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

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            {movies && reviewers ? <Home movies={movies} reviewers={reviewers}/> : <div>Page is Loading</div>}
          </Route>
          <Route path='/movies/:id'>
            {movies && reviewers ? <Movie movies={movies} reviewers={reviewers} fetchData={fetchReviewersAndMovies}/> : <div>Page is Loading</div>}
          </Route>
          <Route path='/reviewers/:id'>
              {movies && reviewers ? <Reviewer movies={movies} reviewers={reviewers} fetchData={fetchReviewersAndMovies}/> : <div>Page is Loading</div>}
          </Route>
          <Route path="*">
              404 Page Not Found
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
