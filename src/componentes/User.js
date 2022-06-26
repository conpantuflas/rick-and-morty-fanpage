import React,{useContext} from 'react';
import { Context } from '../store/appContext';
import "../componentes/userlayout.css"
import { Link } from 'react-router-dom';

const User = () => {
    const {store, actions} = useContext(Context)


    return (
        <div id="contenedor-principal-creacion-de-usuario">

              <h1 id="titular-cracion-de-usuario">Creacion de usuario</h1>

           <form  id="contenedor-creacion-de-usuario"  onSubmit={ actions.handleSubmitLogin }>

                <div id="contenedor-labels">

                <label className="labels" for="nombree">nombre</label>
                <label className="labels"  for="nombre_usuario">nombre usuario</label>
                <label className="labels" for="email">email</label>

                </div>

                <div id="contenedor-inputs" >

                <input className='inputss' name="nombre" type="text" id="nombree" placeholder='Nombre' 
                        onChange={actions.handleChangeLogin}
                    />
                 <input className='inputss' name="nombre_usuario" type="text" id="nombre_usuario" placeholder='Nombre usuario'
                        onChange={actions.handleChangeLogin}
                    />  

                <input className='inputss' name="email" type="text" id="email" placeholder='Email'
                        onChange={actions.handleChangeLogin}
                    />  

                </div>
           </form>
           <button id='boton-craer-usuario' onClick={()=> actions.handleSubmitLogin} > Crear </button>
           <Link to="/">
            <p id="texto-de-omitir">Omitir</p>
           </Link>
        </div>
    );
}



export default User;
