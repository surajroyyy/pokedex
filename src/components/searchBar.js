import React from 'react'
import PropTypes from "prop-types";

function SearchBar({pokemon, setPokemon, listResults, setListResults}) {
    const onSearch = (e) => {
        if (!e.target.value) return setListResults(pokemon)

        let results = pokemon.slice(0)
        results = results.filter(poke => poke.name.includes(e.target.value) )
        setListResults(results)
    }

    return (
        <div className="search">
            <div className="input">
                <input id="search-bar" type="text" placeholder="Enter any pokemon!" onChange={onSearch}/>
            </div>
        </div>
    )
}

SearchBar.propTypes = {
    pokemon: PropTypes.array,
    listResults: PropTypes.array
}

export default SearchBar