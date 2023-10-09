import axios from "axios"

export const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon'
})

export const getPokemon = async () => {
    const response = await api.get('?limit=905')
    response.data.results.map((poke) => (
        axios.get(poke.url).then(details => {
            poke['id'] = details.data.id
            let num = '' + details.data.id
            while (num.length < 3) num = '0' + num
            poke['number'] = num
            poke['sprite'] = details.data.sprites.front_default
        }).catch(error => {
            console.log(error)
        })
    ))
    return response.data
}