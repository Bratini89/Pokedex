import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProgressBar } from 'react-bootstrap';


const PokedexId = () => {

    const [pokemon, setPokemon] = useState({})

    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setPokemon(res.data))

    }, [])

    console.log(pokemon)
    return (
        <>
            <div className='back_pokedex'>
                <Link to="/pokedex"><button className='back'><i class='bx bx-arrow-back bx-md'></i></button></Link>
            </div>
            <div className='container-id' to="">
                <div className='logo-img-final'>
                    <img src="https://www.nicepng.com/png/detail/1-14636_pokemon-logo-text-png-7-pokemon-gotta-catch.png" alt="logo-final" />
                </div>
                <div className='column-one'>
                    <div className='final-img'>
                        <img className='final_img' src={pokemon.sprites?.other["official-artwork"].front_default} alt="" />
                    </div>
                    <div className=''>
                        <h3 className='left-final'>{pokemon.weight}
                            <div className='weight'>__ Weight __</div>
                        </h3>
                    </div>
                    <br />
                    <div className=''>
                        <h3 className='right-final'>
                            {pokemon.height}
                            <div className='height'>__ Height __</div>
                        </h3>
                    </div>
                    <br />
                    <div>
                        <h1>_______ {pokemon.name} _______</h1>
                    </div>
                    <br /><br />
                    <div className='number-id'>
                        <p><b>#</b> {pokemon.id}</p>
                    </div>
                </div>
                <br /><br />
                <div className='two-colunm-grid'>
                    <div className='column'>
                        <div class="ui segment">
                            <h1>Type</h1>
                        </div>
                        <br />
                        <div className='gra'>
                            <h3>{pokemon.types?.[0]?.type.name}</h3>
                        </div>
                        <br />
                        <div className='poi'>
                            <h3>{pokemon.types?.[1]?.type.name}</h3>
                        </div>
                    </div>
                    <div className='column'>
                        <div class="un segment">
                            <h1>Abilities</h1>
                        </div>
                        <br />
                        <div className='gra'>
                            <h3>{pokemon.abilities?.[0].ability.name}</h3>
                        </div>
                        <br />
                        <div className='poi'>
                            <h3>{pokemon.abilities?.[1].ability.name}</h3>
                        </div>
                    </div>
                </div>
                <br /><br />
                <div className='progressbar'>
                    <div>
                        <h1 className='stats'>Stats Bases</h1>
                    </div>
                    <b>HP</b><ProgressBar striped variant="success" now={40} />
                    <br />
                    <b>Speed</b> <ProgressBar striped variant="info" now={20} />
                    <br />
                    <b>Attack</b><ProgressBar striped variant="warning" now={60} />
                    <br />
                    <b>Defense</b><ProgressBar striped variant="danger" now={80} />  
                    <br /> 
                </div>

                <div className='movements'>
                    <div><h1>Movements</h1></div>
                    <br />
                    <div>
                <div>{pokemon.moves?.[0].move.name}</div>
                <div>{pokemon.moves?.[1].move.name}</div>
                <div>{pokemon.moves?.[2].move.name}</div>
                <div>{pokemon.moves?.[3].move.name}</div>
                <div>{pokemon.moves?.[4].move.name}</div>
                <div>{pokemon.moves?.[5].move.name}</div>
                <div>{pokemon.moves?.[6].move.name}</div>
                <div>{pokemon.moves?.[7].move.name}</div>
                <div>{pokemon.moves?.[8].move.name}</div>
                <div>{pokemon.moves?.[9].move.name}</div>
                <div>{pokemon.moves?.[10].move.name}</div>
                <div>{pokemon.moves?.[11].move.name}</div>
                <div>{pokemon.moves?.[12].move.name}</div>
                <div>{pokemon.moves?.[13].move.name}</div>
                <div>{pokemon.moves?.[14].move.name}</div>
                <div>{pokemon.moves?.[15].move.name}</div>
                <div>{pokemon.moves?.[16].move.name}</div>
                <div>{pokemon.moves?.[17].move.name}</div>
                <div>{pokemon.moves?.[18].move.name}</div>
                <div>{pokemon.moves?.[19].move.name}</div>
                <div>{pokemon.moves?.[20].move.name}</div>
                <div>{pokemon.moves?.[21].move.name}</div>
                <div>{pokemon.moves?.[22].move.name}</div>
                <div>{pokemon.moves?.[23].move.name}</div>
                <div>{pokemon.moves?.[24].move.name}</div>
                <div>{pokemon.moves?.[25].move.name}</div>
                <div>{pokemon.moves?.[26].move.name}</div>
                <div>{pokemon.moves?.[27].move.name}</div>
                <div>{pokemon.moves?.[28].move.name}</div>
                <div>{pokemon.moves?.[29].move.name}</div>
                <div>{pokemon.moves?.[30].move.name}</div>
                <div>{pokemon.moves?.[31].move.name}</div>
                <div>{pokemon.moves?.[32].move.name}</div>
                <div>{pokemon.moves?.[33].move.name}</div>
                <div>{pokemon.moves?.[34].move.name}</div>
                <div>{pokemon.moves?.[35].move.name}</div>
                <div>{pokemon.moves?.[36].move.name}</div>
                <div>{pokemon.moves?.[37].move.name}</div>
                <div>{pokemon.moves?.[38].move.name}</div>
                <div>{pokemon.moves?.[39].move.name}</div>
                <div>{pokemon.moves?.[40].move.name}</div>
                <div>{pokemon.moves?.[41].move.name}</div>
                <div>{pokemon.moves?.[42].move.name}</div>
                <div>{pokemon.moves?.[43].move.name}</div>
                <div>{pokemon.moves?.[44].move.name}</div>
                    </div>
                </div>
            </div>
          
        </>

    );
};

export default PokedexId;