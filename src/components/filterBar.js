import React from 'react'
import axios from "axios";

function Dropdown({pokemon, setPokemon, searchResults, setSearchResults}) {

    const onSearch = (e) => {
        if (!e.target.value) return setSearchResults(pokemon)

        const results = pokemon.filter(poke => poke.name.includes(e.target.value) )
        setSearchResults(results)
        // console.log(results)
    }

    return (
        <div className="search">
            <div className="input">
                <input type="text" placeholder="Enter any pokemon!" onChange={onSearch}/>
            </div>
            <div className="results"/>
        </div>
    )
}

export default Dropdown