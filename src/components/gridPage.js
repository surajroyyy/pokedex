import Block from "./block"
import React from "react";
import PropTypes from "prop-types";

const GridPage = ({pokemon, setPokemon, gridResults, setGridResults}) => {
    const result = gridResults.map((poke) => <Block key={poke.name} poke={poke}/>)
    const content = (result?.length ? result : <img id="none-found"
                                                     alt="Enter a valid pokemon!"
                                                     src="trainer.png"/>)
    const onFilterGrid = (e) => {
        if (!e.target.value) return setGridResults(pokemon)

        let results = pokemon.slice(0)
        if (e.target.value === "clear") {
            let radio = document.getElementsByName("grid-filter")
            for (let i = 0; i < radio.length; i++) radio[i].checked = false
        } else if (e.target.value === "g1") {
            results = results.filter(poke => poke.id >= 1 && poke.id <= 151)
        } else if (e.target.value === "g2") {
            results = results.filter(poke => poke.id >= 152 && poke.id <= 251)
        } else if (e.target.value === "g3") {
            results = results.filter(poke => poke.id >= 252 && poke.id <= 386)
        } else if (e.target.value === "g4") {
            results = results.filter(poke => poke.id >= 387 && poke.id <= 493)
        } else if (e.target.value === "g5") {
            results = results.filter(poke => poke.id >= 494 && poke.id <= 649)
        } else if (e.target.value === "g6") {
            results = results.filter(poke => poke.id >= 650 && poke.id <= 722)
        }

        setGridResults(results)
    }

    return (
        <div id="search-grid-view">
            <div id="grid-radios" onChange={onFilterGrid}>
                <input type="radio" value="clear" name="grid-filter"/>Clear
                <input type="radio" value="g1" name="grid-filter"/> Gen 1
                <input type="radio" value="g2" name="grid-filter"/> Gen 2
                <input type="radio" value="g3" name="grid-filter"/> Gen 3
                <input type="radio" value="g4" name="grid-filter"/> Gen 4
                <input type="radio" value="g5" name="grid-filter"/> Gen 5
                <input type="radio" value="g6" name="grid-filter"/> Gen 6
            </div>
            <div>{content}</div>
        </div>
    )
}

GridPage.propTypes = {
    pokemon: PropTypes.array,
    gridResults: PropTypes.array
}

export default GridPage