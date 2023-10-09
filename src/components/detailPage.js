import axios from "axios";
import {Link, useParams} from "react-router-dom";
import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';

const DetailPage = ({pokemon}) => {
    let {id} = useParams()
    const initialValue = [
        {
            name: "No Pokemon Found",
            sprites: {front_default: "https://img.pokemondb.net/artwork/large/201.jpg"},
            height: "??? m",
            weight: "??? kg"
        }
    ]
    const [info, setInfo] = useState(initialValue)
    const [load, setLoad] = useState(true)
    const [number, setNumber] = useState()

    useEffect(() => {
        let url = "https://pokeapi.co/api/v2/pokemon/" + id
        axios.get(url).then(details => {
            details.data.weight = details.data.weight / 10 + "kg"
            details.data.height = details.data.height / 10 + "m"
            let num = '' + details.data.id
            while (num.length < 3) num = '0' + num
            setNumber(num)
            setInfo(details.data)
            setLoad(false)
        }).catch ((error) => {
            console.log(error)
        })
    }, [])

    if (!load) {
        let prev = info.id - 1;
        let next = info.id + 1;

        if (next > 905) next = 1
        if (prev < 1) prev = 905

        const types = info.types.map(type => <li>{type.type.name}</li>)

        return (
            <div id="detail-view">
                <Link id="prev" to={`/mp2/details/${prev}`}>Prev</Link>
                <div id="details-card">
                    <h3>{info.name} <span id="title-num">#{number}</span></h3>
                    <ul id="types-list">{types}</ul>
                    <img alt={info.name} src={info.sprites.front_default}/>
                    <p>Height: {info.height}</p>
                    <p>Weight: {info.weight}</p>
                </div>
                <Link id="next" to={`/mp2/details/${next}`}>Next</Link>
            </div>

        )
    }
}

DetailPage.propTypes = {
    pokemon: PropTypes.array
}

export default DetailPage