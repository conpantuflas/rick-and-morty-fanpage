import React from 'react';
import "./Navbar.css";
import logo from "../imagenes/list-rick-and-morty-episodes-wikipedia-24.png";
import Favoritos from '../componentes/favoritos';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <div className='div-padre'>
            <Link to="/">
                <img className='logo' src={logo} alt='img'/>
            </Link>
            <div>
              <Favoritos />
            </div>
        </div>
    );
}

export default Navbar;
