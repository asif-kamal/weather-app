import React from 'react';

const SearchBar = (props) => {
    return (
        <form>
            <label>
            Get Weather by City
            <input type="text" name="city" />
            
        </label>
        <input type="submit" value="Submit" />

        </form>
    )
}

export default SearchBar;