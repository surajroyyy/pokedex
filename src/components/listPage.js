import Card from "./card"
import SearchBar from "./searchBar";
import React from "react";
import PropTypes from 'prop-types';

const ListPage = ({pokemon, setPokemon, listResults, setListResults}) => {
    const results = listResults.map((poke) => <Card key={poke.name} poke={poke}/>)
    const content = (results?.length ? results : <img id="none-found"
                                                          alt="Enter a valid pokemon!"
                                                          src="trainer.png"/>)
    const onFilterList = (e) => {
        if (!e.target.value) return setListResults(pokemon)

        let results = listResults.slice(0)
        if (e.target.value === "clear") {
            let radio = document.getElementsByName("list-filter")
            for (let i = 0; i < radio.length; i++) radio[i].checked = false
            let search = document.getElementById("search-bar")
            search.value = ""
            results = pokemon.slice(0)
        } else if (e.target.value === "atoz") {
            results = results.sort((p1, p2) => p1.name.localeCompare(p2.name))
        } else if (e.target.value === "ztoa") {
            results = results.sort((p1, p2) => p2.name.localeCompare(p1.name))
        } else if (e.target.value === "inc") {
            results = results.sort((p1, p2) => p1.id > p2.id ? 1 : -1)
        } else if (e.target.value === "dec") {
            results = results.sort((p1, p2) => p2.id > p1.id ? 1 : -1)
        }

        setListResults(results)
    }

    return (
        <div id="search-list-view">
            <SearchBar listResults={listResults}
                       setListResults={setListResults}
                       pokemon={pokemon}
                       setPokemon={setPokemon}/>
            <div id="list-radios" onChange={onFilterList}>
                <input type="radio" value="clear" name="list-filter"/>Clear
                <input type="radio" value="atoz" name="list-filter"/> A to Z
                <input type="radio" value="ztoa" name="list-filter"/> Z to A
                <input type="radio" value="inc" name="list-filter"/> Increasing
                <input type="radio" value="dec" name="list-filter"/> Decreasing
            </div>
            <div>{content}</div>
        </div>
    )
}

ListPage.propTypes = {
    pokemon: PropTypes.array,
    listResults: PropTypes.array
}

export default ListPage