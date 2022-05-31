import React from 'react';
import "./Carrusel.css"
import CardPersonajes from './CardPersonajes';
import { useContext,useEffect } from 'react';
import { Context } from '../store/appContext';

const Carruselpersonajes = () => {

    const {store, actions} = useContext(Context)

    useEffect(()=>{
        actions.consumoDeApiCharacter()
     },[store.characters])

    return (
        <div>
            <div className='padre'>
                {
                    store.characters != [] ? store.characters.map((personaje, i) => (
                        <CardPersonajes id={personaje.id} key={i} name={personaje.name} image={personaje.image} />
                    )) : null
                }
            </div>
        </div>
    );
}

export default Carruselpersonajes;
