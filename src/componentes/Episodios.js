import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../vistas/Navbar';
import './per-epi.css'


const Episodios = () => {
    const [episode, setEpisoode] = useState()
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/episode/${id}`)
            .then(respuesta => respuesta.json())
            .then(data => {
                setEpisoode(data)
            })
    }, [])

    const url = "https://via.placeholder.com/150"

    return (
        <>
        <Navbar />
        {
            episode ?
            <div className='div-padre-mayorDetalle'>
            <div className='div-hijo-img-mayorDetalle'>
                <div>
                    <img className='imagenMayorDetalle' src={url} />
                </div>
                <div>
                    <p className='titular-mayorDetalle'>{episode.name}</p>
                    <ul className='descripcion-mayorDetalle'>
                        <li className='caracteristica'> fecha de lanzamiento :{episode.air_date}</li>
                        <li className='caracteristica'> Episodio: {episode.episode}</li>
                        <li className='caracteristica'> Origen: {episode.created}</li>
                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <p className='footer-mayorDetalle'>Episodios</p>
            </div>
        </div> : null
        }
        </>
    );
}

export default Episodios;
