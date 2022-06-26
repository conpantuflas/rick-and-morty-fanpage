import './App.css';
import Home from './vistas/Home';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import injectContext from "./store/appContext"
import Personajes from './componentes/Personajes';
import Episodios from "./componentes/Episodios";
import User from './componentes/User';


function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={  <Home /> }/>
            <Route path='/detallesPersonajes/:id' element={  <Personajes /> }/>
            <Route path='/detallesEpisodios/:id' element={  <Episodios /> }/>
            <Route path='/user' element={  <User /> }/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default injectContext(App);
