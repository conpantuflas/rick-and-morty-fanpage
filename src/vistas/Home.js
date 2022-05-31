import React from 'react';
import Navbar from './Navbar';
import Carruselpersonajes from '../componentes/carruselPersonajes';
import Carruselepisodios from '../componentes/carruselEpisodios';


const Home = () => {

    return (
        <>
            <Navbar />
            <Carruselpersonajes />
            <Carruselepisodios />
        </>
    );
}

export default Home;
