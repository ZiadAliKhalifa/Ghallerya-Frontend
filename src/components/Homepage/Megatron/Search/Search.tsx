import React from 'react'
import "./Search.css"
function Search() {
    return (
        <div className="search" data-testid="search">
            <input placeholder="What are you looking for..." type="text" data-testid="search-input" />
            <i className="fa fa-search icon"></i>
        </div>
    )
}

export default Search
