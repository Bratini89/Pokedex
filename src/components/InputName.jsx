import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeName } from '../store/slices/name.slice';

const InputName = () => {

    const [userName, setUserName] = useState("")

    const navigate = useNavigate()
    const dispatch = useDispatch()


    const enterName = () => {
        dispatch(changeName(userName))
        navigate("/pokedex")

    }



    return (
        <>
        <div className='pokeball'>
        
            <img src="https://www.nicepng.com/png/detail/21-218732_pokemon-ball-png.png" alt="pokeball" />
          
        </div>
        <div className='start container'>     
            <div className='img-begin'>
                <img src="https://www.nicepng.com/png/detail/1-14696_pokemon-logo-pokemon-ball-coloring-page.png" alt="" />
                <br /><br /><br />
                <h2 className='title'>Hello Pokedex!</h2>
                <img src="https://www.nicepng.com/png/detail/353-3536708_pokemon-fire-red-leaf-green-trainer-by-syker.png" alt="Pokemon" />
            </div>
            <p className='title'>Please give me your name to begin</p>
            <form action="">
            <input placeholder='What is your name?' type="text"
             onChange={e => setUserName(e.target.value)}
             value={userName}/>
             <br />
            <button onClick={enterName}>Enter</button>
            </form>
        </div>
        </>
    );
};

export default InputName;