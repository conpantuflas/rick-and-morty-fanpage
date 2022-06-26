import React,{useContext} from 'react';
import "./Navbar.css";
import logo from "../imagenes/list-rick-and-morty-episodes-wikipedia-24.png";
import Favoritos from '../componentes/favoritos';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';



const Navbar = () => {
    const {store, actions} = useContext( Context )

    return(
        <div className='div-padre'>
            <Link to="/">
                <img className='logo' src={logo} alt='img'/>
            </Link>
            <div id="contenedor-favoritos-usuario">
                <div>  <Favoritos /> </div>
                <div>
                    <h1> Hola {store.user.nombre}</h1>
                    <Link to="/user"> <button id="boton-inicio-de-session" >Iniciar session</button> </Link> 
                </div>
            </div>
        </div>
    );
}

export default Navbar;
