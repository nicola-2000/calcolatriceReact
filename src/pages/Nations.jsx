import NationCard from "../components/NationCard";
import NationCardForm from "../components/NationCardForm";
import Navbar from "./Navbar";
import { useState } from "react";



function Nations() {

    const [nations, setNations] = useState([{
        id: '0',
        name: 'Svizzera',
        imgURL: 'https://plus.unsplash.com/premium_photo-1675875488015-0ce54ed63552?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Svizzerissima',
    }]);

    //funzione da passare come prop al componente NationCardForm
    const addNation = (nation) =>{
        setNations([...nations, nation])
    }

    return(
        <>
        <Navbar/>
        <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-white border-2 border-black rounded-md mb-1 p-2">Nations page</h1>
            <p className="flex border-2 border-black rounded-md mb-1">Pagina delle nazioni: niente, semplicemente per avere qualcos'altro da linkare, tutto qui.
               Ora aggiungerò delle card con magari un form per aggiungere, rimuovere e modificare nazioni
            </p>
            <NationCardForm addNation={addNation}/>

            <div className="grid grid-cols-3">
                {nations.map((nation, index) => (
                    <div className="m-2">
                        <NationCard
                        key={index}
                        value={nation}
                        name={nation.name}
                        imgURL={nation.imgURL}
                        description={nation.description}
                        id={nation.id}>
                        </NationCard>
                    </div>
                ))} 
            </div>
        </div>
        </>
    )
}

export default Nations;