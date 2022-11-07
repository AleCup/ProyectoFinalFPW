import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Juego from './Juego';
import Inicio from './Inicio';
function Principal(){
    return(
        <>  
        <BrowserRouter>
        <nav>
            <ul>
                <div>
                <li> 

                <div> <Link to ='/Inicio'> Inicio</Link> </div>
                 
                <div> <Link to ='/JuegoReact'> Juego</Link> </div>

                <div> <Link to ='/JuegoPhaser'> Juego</Link> </div>
                 </li> 
                </div>
            </ul>
        </nav>
            <Routes>
                <Route path='Inicio' element= {< Inicio/>} />
                <Route path='JuegoReact' element= {< Juego/>} />
                <Route path='JuegoPhaser' element= {< Juego2/>} />
            </Routes>
        </BrowserRouter>
        </>
    );
}

export default Principal;