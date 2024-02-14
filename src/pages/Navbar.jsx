import { Link } from "react-router-dom";

function Navbar () {

    return(
        <>
        <div className="border-2 border-black p-2 rounded-md bg-blue-700">
            <h1 className="text-3xl font-bold text-white">Questa è la navbar con tutti i link per le varie pagine</h1>
        </div>
            <div className="flex flex-col justify-center bg-zinc-400 mb-4 border-2 rounded-md border-black">
                <nav>
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
                </nav>
            </div>
        </>
    )
}

export default Navbar;