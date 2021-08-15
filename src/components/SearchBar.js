import {useState} from "react"
import './styles/SearchBar.css'
function SearchBar({handleSearchSubmit,searchResource}) {

    const [search,setSearch] = useState("")

    function handleChange(event) {
        setSearch(event.target.value)
        
    }

    function handleSubmit(event) {
        event.preventDefault()
        handleSearchSubmit(search)
        setSearch("")
    }

    const placeholder = `Search ${searchResource}`
    const id = `${searchResource}-search`
    return (
        <form onSubmit={handleSubmit} className="m-2 search p-2">
            <label htmlFor={id}>
                <span className="m-2 p-2">Search {searchResource}</span>
            </label>
            <input
                type="text"
                id={id}
                placeholder={placeholder}
                name="title"
                value={search}
                onChange={handleChange} 
            />
            <button type="submit">Search</button>
        </form>
    )

}

export default SearchBar