import React,{useContext} from 'react';
import "./tarjeta.css";
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const CardPersonajes = ({name, image, id}) => {
    const {store, actions} = useContext(Context)
    return (
        <div id='padreTarjeta'>
            <img id="imagen"
                src={image}
                alt={name}
            />

            <h2 id="nombre">
                {name}
            </h2>

            <div id='botonesContenedor'>
                <Link id="botonLeer" to={`/detallesPersonajes/${id}`}>Leer más</Link>

                <button id="botonFavorito"
                onClick={()=>{
                    actions.añadirFavorito(name)
                    actions.noRepetidos()
                }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart" viewBox="0 0 24 24" stroke-width="1.5" stroke="#8eff00" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
                </button>

            </div>
        </div>
    );
}

export default CardPersonajes;
