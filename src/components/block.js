import {Link} from "react-router-dom";

const Block = ({ poke }) => {
    return (
        <Link id="details-link" to={`/mp2/details/${poke.id}`}>
            <div id="pokemon-card-grid">
                {/*<p>{poke.number}</p>*/}
                <img id="poke-grid"
                     alt={poke.name}
                     src={poke.sprite}/>
            </div>
        </Link>
    )
}

export default Block