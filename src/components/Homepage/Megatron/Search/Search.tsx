import React from 'react'
import "./Search.css"
function Search() {
    return (
        <div className="search">
            <input placeholder="What are you looking for..." type="text" />
            <i className="fa fa-search icon"></i>
        </div>
    )
}

export default Search
