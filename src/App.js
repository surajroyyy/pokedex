import './App.css';
import { getPokemon } from "./api/api";
import React, {useState, useEffect} from "react";
import ListPage from "./components/listPage";
import GridPage from "./components/gridPage"
import DetailPage from "./components/detailPage";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    const [pokemon, setPokemon] = useState([])
    const [listResults, setListResults] = useState([])
    const [gridResults, setGridResults] = useState([])
    // const [loadData, setLoadData] = useState(true)

    useEffect( () => {
        getPokemon(listResults).then(json => {
            setPokemon(json.results)
            setGridResults(json.results)
            // console.log(json.results)
        }).catch(error => {
            console.log(error)
        })
    })

    // pokemon.map( (poke) => (
    //     axios.get(poke.url).then(details => {
    //         poke['id'] = details.data.id
    //         let num = '' + details.data.id
    //         while (num.length < 3) num = '0' + num
    //         poke['number'] = num
    //         poke['sprite'] = details.data.sprites.front_default
    //     }).catch(error => {
    //         console.log(error)
    //     })
    // ))

    return (
        <Router>
            <div>
                <header className="App-header">
                    <h1 id="title">Pokédex</h1>
                    <div className="overlay"/>
                    <img id="banner" alt="pokemon banner" src="pokemon_banner.jpg"/>
                    <div id="nav-links">
                        <Link id="pokeball" to="/mp2/"><img alt="pokeball" src="pokeball.png"/></Link>
                        <Link id="ultraball" to="/mp2/grid"><img alt="ultraball" src="ultraball.png"/></Link>
                    </div>
                </header>
                <Switch>
                    <Route path="/mp2/" exact>
                        <section id="list-body">
                            <ListPage pokemon={pokemon}
                                      setPokemon={setPokemon}
                                      listResults={listResults}
                                      setListResults={setListResults}/>
                        </section>
                    </Route>
                    <Route path="/mp2/grid" exact>
                        <section id="grid-body">
                            <GridPage pokemon={pokemon}
                                      setPokemon={setPokemon}
                                      gridResults={gridResults}
                                      setGridResults={setGridResults}/>
                        </section>
                    </Route>
                    <Route path="/mp2/details/:id" exact>
                        <section id="details-body">
                            <DetailPage pokemon={pokemon}/>
                        </section>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
