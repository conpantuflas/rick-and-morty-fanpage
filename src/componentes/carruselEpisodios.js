import React from 'react';
import CardEpisodios from './CardEpisodios';
import "./Carrusel.css"

import { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';

const Carruselepisodios = () => {
    const {store, actions} = useContext(Context)

    useEffect(() => {
        actions.consumoDeApiEpisode()
    }, [store.episode])

    const url = 'https://via.placeholder.com/150'

    return (
        <div>
            <div className='padre'>
                {
                    store.episode != [] ? store.episode.map((episode, e) => (
                        <CardEpisodios id={episode.id} key={e} name={episode.name} image={url} />
                    )) : null
                }
            </div>
        </div>
    );
}

export default Carruselepisodios;
