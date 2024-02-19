import { Link } from "react-router-dom";
import Login from "../components/Login"

function Navbar () {

    return(
        <>
        <div className="border-2 border-black p-2 rounded-md bg-blue-700">
            <h1 className="text-3xl font-bold text-white">Questa è la navbar con tutti i link per le varie pagine e un form per il login</h1>
        </div>
            <div className="flex bg-zinc-400 mb-4 border-2 rounded-md border-black p-2">
                <nav className="flex flex-row justify-around">
                    <ul>
                        <li className="hover:text-white">
                            <Link to='/Home'>Home</Link>
                        </li>
                        <li className="hover:text-white">
                            <Link to='/Calcolatrice'>Calcolatrice</Link>
                        </li>
                        <li className="hover:text-white">
                            <Link to='/Nations'>Nazioni</Link>
                        </li>
                    </ul>
                    <Login/>
                </nav>
            </div>
        </>
    )
}

export default Navbar;