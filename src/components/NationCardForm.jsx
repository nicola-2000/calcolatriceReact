import { useState } from "react";

function NationCardForm({addNation}) {
/* const [nationName, setNationName] = useState('')
const [nationImgURL, setNationImgURL] = useState('')
const [nationDescription, setNationDescription] = useState('') */

const [formData, setFormData] = useState([{
    id: '',
    name: '',
    imgURL: '',
    description: '',
}])

//funzione per permettere di modificare l'input del form e aggiornare lo stato contenente i dati
//poi questi dati verranno passati allo stato nations per renderizzarle a schermo
const handleInputChange = (event) =>{
    const {name, value} = event.target;
    const inputValue = value;
    setFormData({...formData, [name]: inputValue})
}

const handleClick = (event) => {
    event.preventDefault();
    const nazione = {
        id: formData.id,
        name: formData.name,
        imgURL: formData.imgURL,
        description: formData.description,
    };
    addNation(nazione);
}

return(
    <>
        <form className="flex flex-col border-2 border-black rounded-md p-3 bg-amber-600 w-fit" onSubmit={handleClick}>
            <label className="self-start">Nome nazione: </label>
            {/*input per il nome della nazione*/}
            <input 
                className="w-fit"
                type="text"
                value={formData.name || ''}
                name="name"
                placeholder="Nome nazione" 
                /* onChange={(e) => setNationName(e.target.value)} */
                onChange={handleInputChange}
            />

<label className="self-start">ID nazione: </label>
            {/*input per l'id della nazione*/}
            <input 
                className="w-fit"
                type="number"
                value={formData.id || ''}
                name="id"
                placeholder="ID nazione (> 0)" 
                /* onChange={(e) => setNationName(e.target.value)} */
                onChange={handleInputChange}
            />

            <label className="self-start">Immagine bandiera nazione: </label>
            {/*input per la bandiera della nazione*/}
            <input 
                className="w-fit"
                type="textarea"
                value={formData.imgURL || ''}
                name="imgURL"
                placeholder="URL immagine"
                /* onChange={(e) => setNationImgURL(e.target.value)} */
                onChange={handleInputChange}
                />
            
            <label className="self-start">Descrizione nazione: </label>
            {/*input per la descrizione della nazione*/}
            <input 
                className="w-fit"
                type="text"
                value={formData.description || ''}
                name="description"
                placeholder="Descrizione"
                /* onChange={(e) => setNationDescription(e.target.value)} */
                onChange={handleInputChange}
                />
                <button 
                onClick={handleClick}
                type="submit"
                className="border-2 border-black rounded-md mt-1 bg-zinc-500"
                >Submit
                </button>
        </form>
        </>
);

}

export default NationCardForm;