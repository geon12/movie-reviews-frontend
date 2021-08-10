import './App.css';
import {useState,useEffect} from "react"
import Home from './components/Home';

function App() {

  const [reviewers,setReviewers] = useState(null)
  const [movies,setMovies] = useState(null)

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/movies`)
      .then(resp => resp.json())
      .then(setMovies)
    fetch(`${process.env.REACT_APP_API_URL}/reviewers`)
      .then(resp => resp.json())
      .then(setReviewers)

  },[])

  return (
    <div>
      {movies && reviewers ? <Home movies={movies} reviewers={reviewers}/> : <div>Page is Loading</div>}
    </div>
  );
}

export default App;
