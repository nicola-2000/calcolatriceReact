import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './pages/Navbar'
import Home from "./pages/Home";
import Calcolatrice from "./pages/Calcolatrice";
import Nations from './pages/Nations'

function App(){

    return(
/*      così per metterli tutti insieme in una pagina, se la pagina è sufficientemente lunga, con l'id cliccando negli elementi
        desiderati, vai all'elemento desiderato*/
        <BrowserRouter>
            {/*così facendo, la navbar rimane sempre nella pagina anche dopo aver cliccato un link. Utile per navigare
               tra le pagine velocemente, avendo la navbar sempre presente*/}
            <Routes>
                <Route index element={<Navbar/>}/>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/Calcolatrice" element={<Calcolatrice/>}/>
                <Route path="/Nations" element={<Nations/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;