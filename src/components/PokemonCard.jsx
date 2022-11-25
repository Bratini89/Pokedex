import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const PokemonCard = ({ url }) => {

    const [pokemons, setPokemons] = useState({})

    useEffect(() => {
        axios.get(url)
            .then(res => setPokemons(res.data))

    }, [])

    console.log(pokemons)
    return (
        <Link  to={`/pokedex/${pokemons.id}`}>
            
            <div className="card">
                <div>
                <h2>{pokemons.name}</h2>
                </div>
                <div>
                <span>
                    Type: {pokemons.types?.[0]?.type.name},{" "}
                    {pokemons.types?.[1]?.type.name}
                </span>
                </div><br />
                <div>
                <ul>
                    <li>Hp: {pokemons.stats?.[0].base_stat} </li>
                    <li>Attack:  {pokemons.stats?.[1].base_stat} </li>
                    <li> Defense: {pokemons.stats?.[2].base_stat}   </li>
                    <li>Speed: {pokemons.stats?.[3].base_stat}</li>
                </ul>
                </div>
                <div className='img'>
                    <img src={pokemons.sprites?.other.dream_world.front_default} alt="pokemons" />
                </div>
            </div>
            

        </Link>
    );
};

export default PokemonCard;