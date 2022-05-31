import React,{ useEffect, useState }  from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../vistas/Navbar';
import './per-epi.css'

const Personajes = () => {
    const [character, setCharacter] = useState()
    const { id } = useParams()

    useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(respuesta => respuesta.json())
        .then(data => {
            setCharacter(data)
        })
    },[])

    return (
        <>
        <Navbar />
        {   
            character ? 
            <div className='div-padre-mayorDetalle'>
                <div className='div-hijo-img-mayorDetalle'>
                    <div>
                        <img className='imagenMayorDetalle' src={character.image}/>
                    </div>
                    <div>
                        <p className='titular-mayorDetalle'>{character.name}</p>
                        <ul className='descripcion-mayorDetalle'> 
                            <li className='caracteristica' >Estado: {character.status}</li>
                            <li className='caracteristica' > Especie: {character.species}</li>
                            <li className='caracteristica' > Origen: {character.origin.name}</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <hr/>
                    <p className='footer-mayorDetalle'>Personajes</p>
                </div>
            </div>
        : null
        }
        </>
    );
}

export default Personajes;
