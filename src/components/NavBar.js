import {NavLink} from 'react-router-dom'
import './styles/NavBar.css'

function NavBar() {
    const activeStyle={
        fontWeight: "bold",
        color: "red",
        backgroundColor: "black"
      }
    
    return (
        <nav className="row navbar mx-1">
            <ul>
                <li>
                    <NavLink exact to='/' activeStyle={activeStyle}>Home</NavLink>
                </li>
                <li>
                    <NavLink exact to='/browse_movies' activeStyle={activeStyle}>Browse Movies</NavLink>
                </li>
                <li>
                    <NavLink exact to='/browse_reviewers' activeStyle={activeStyle}>Browse Reviewers</NavLink>
                </li>
                <li>
                    <NavLink exact to='/add_movie_review' activeStyle={activeStyle}>Add Movie Review</NavLink>
                </li>
                
            </ul>
        </nav>
    )
}

export default NavBar