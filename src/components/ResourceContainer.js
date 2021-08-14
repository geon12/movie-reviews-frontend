import { useState } from "react";
import SearchBar from "./SearchBar";

function ResourceContainer({resource,populateResource,searchResource}) {

    const [filteredResource,setFilteredResource] = useState([])
    function handleSearchSubmit(searchTerm) {
        searchTerm = searchTerm.toLowerCase()
        if (searchTerm) setFilteredResource(resource.filter(record => record.name.toLowerCase().includes(searchTerm)))
    }

    return (
        <div>
            <SearchBar handleSearchSubmit={handleSearchSubmit} searchResource={searchResource}/>
            {populateResource(filteredResource)}
        </div>
    )
}

export default ResourceContainer