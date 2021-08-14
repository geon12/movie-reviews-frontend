import {useState} from "react"
function SearchBar({handleSearchSubmit}) {

    const [search,setSearch] = useState("")

    function handleChange(event) {
        setSearch(event.target.value)
        
    }

    function handleSubmit(event) {
        event.preventDefault()
        handleSearchSubmit(search)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="movie-search">
                <span>Search Movies</span>
            </label>
            <input
                type="text"
                id="movie-search"
                placeholder="Search movies"
                name="title"
                value={search}
                onChange={handleChange} 
            />
            <button type="submit">Search</button>
        </form>
    )

}

export default SearchBar