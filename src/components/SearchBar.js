function SearchBar() {
    return (
        <form>
            <label htmlFor="movie-search">
                <span>Search Movies</span>
            </label>
            <input
                type="text"
                id="movie-search"
                placeholder="Search movies"
                name="title" 
            />
            <button type="submit">Search</button>
        </form>
    )

}

export default SearchBar