import {
    Link
} from "react-router-dom";

const Card = ({ poke }) => {
    // console.log(poke.name)
    return (
        <Link id="details-link" to={`/mp2/details/${poke.id}`}>
            <div id="pokemon-card-list">
                <img id="poke-list"
                     alt={poke.name}
                     src={poke.sprite}
                />
                <h2>{poke.name}</h2>
                <p>#{poke.number}</p>
            </div>
        </Link>
    )
}

export default Card

