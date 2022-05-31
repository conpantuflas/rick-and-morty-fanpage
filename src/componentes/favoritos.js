import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';
import "./favoritos.css"


const Favoritos = () => {

    const { store, actions } = useContext(Context)
    const [mostrarUl, setMostrarUl] = useState("none")

    return (
        <div className='elMandaMasDiv'>
            <div>
                <button className='mostrador'
                onClick={() => {
                    if (mostrarUl === "none") {
                        setMostrarUl("block")
                    } else {
                        setMostrarUl("none")
                    }
                }}> <p className='corazonBoton'>❤️</p> </button>
            </div>
            <ul style={{ display: mostrarUl }}>
                {
                    store.favoritos.length ?
                        store.favoritos.map((nombreFavorito, i) => {
                            return <li className='seleccionadoFavorito' value={nombreFavorito}> {nombreFavorito}
                                <button className='botonEliminar'
                                    onClick={() => {
                                        actions.eliminarFavorito(i)
                                    }}
                                >x</button>
                            </li>
                        })
                        : null
                }
            </ul>
        </div>
    );
}

export default Favoritos;
