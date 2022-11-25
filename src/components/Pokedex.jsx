import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';
import { Link } from 'react-router-dom';

const Pokedex = () => {

    const userName = useSelector(state => state.name)
    const [pokemons, setPokemons] = useState([])
    const [pokemonName, setPokemonName] = useState("")
    const [pokemonType, setPokemonType] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon/")
            .then(res => setPokemons(res.data.results))

        axios.get("https://pokeapi.co/api/v2/type/")
            .then(res => setPokemonType(res.data.results))

    }, [])

    console.log(pokemonType)

    const searchPokemon = () => {
        navigate(`/pokedex/${pokemonName.toLowerCase()}`)
    }

    const filterType = (e) => {
        const url = e.target.value
        axios.get(url)
            .then(res => setPokemons(res.data.pokemon))

    }

    console.log(pokemons)

    const [page, setPage] = useState(1)
    const pokemonsPerPage = 5
    const lastIndex = page * pokemonsPerPage
    const firstIndex = lastIndex - pokemonsPerPage
    const pokemonPaginated = pokemons.slice(firstIndex, lastIndex)

    return (
        <>
            <div className='back_pokedex'>
                <Link to="/"><button className='back'><i class='bx bx-arrow-back bx-md'></i></button></Link>
            </div>
            <div className='logo'>
                <img className='logo1' src="https://www.nicepng.com/png/detail/1-14696_pokemon-logo-pokemon-ball-coloring-page.png" alt="logo" />
            </div>
            <div>
                <h2 className='title'>Pokedex!</h2>
                <p className='title pokedex'>Welcome <b>{userName}</b>!, now you can select and find your favorite
                    Pokemon.
                </p>
                <div>
                    <div className='inpu'>
                        <input
                            type="text"
                            placeholder='Search pokemon'
                            value={pokemonName}
                            onChange={e => setPokemonName(e.target.value)}
                        />{" "}
                        <button className='search' onClick={searchPokemon}>Search</button>
                    </div><hr />
                    <div className='selectt'>
                        <select onChange={filterType} name="" id="">
                            <option>All Pokemons</option>
                            {pokemonType.map(pokemon => (

                                <option
                                    value={pokemon.url}
                                    key={pokemon.name}
                                >
                                    {pokemon.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <br />
                <div className='pages'>
                    <button className='next' onClick={() => setPage(page - 1)}>Prev Page</button>
                    <button className='next' onClick={() => setPage(page + 1)}>Next Page</button>{" "}

                </div>
                <div className='pokerow'>

                    {pokemonPaginated.map(pokemon => (
                        <div className='col-sm-2 col-sm-3'>
                            <PokemonCard
                                url={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                                key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                            />
                        </div>
                    ))}

                </div>

            </div>
        </>
    );
};

export default Pokedex;