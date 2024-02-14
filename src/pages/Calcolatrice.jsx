import { useState } from 'react'
import '../Calcolatrice.css'
import Button from '../components/Button'
import Navbar from './Navbar'

function Calcolatrice() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')

  //handleInput per aggiornare l'input inserito dall'utente, esegue una concatenazione
  const handleInput = (value) =>{
    setInput(input + value);
  }

  //handleClear per ripulire l'input e il risultato
  const handleClearAll = () =>{
    setInput('');
    setResult('');
  }
  //handler per cancellare l'ultima cifra dall'input
  const handleClearLast = () =>{
    let number = input;
    let numStr = number.toString();
    const newInput = numStr.replace(numStr[numStr.length-1], '');
    setInput(newInput);
  }

  //handleResult per eseguire la valutazione dell'espressione
  const handleResult = () =>{
    try{
      setResult(eval(input));
    } catch(error){
      setResult('Errore');
    }
  }

  //handler per gestire il quadrato di un numero
  const handleSquare = () => {
      setResult(Math.pow(input, 2));
  }
    //handler per gestire il cubo di un numero
    const handleCube = () => {
        setResult(Math.pow(input, 3));
    }

    const handleSquareRoot = () =>{
      setResult(Math.sqrt(input));
    }
  //array contentente i valori dei vari bottoni
  const bottoni = ['1','2','3','4',
  '5','6','7','8',
  '9','0','cancAll', 'cancLast','+',
  '-','*','/','.','=','^2', '^3', 'sqrt'];

  return (
    <>
      <Navbar/>
      <header className='bg-slate-700 text-white text-3xl font-extrabold mt-4 rounded-md'>
        <h1>Calcolatrice con React</h1>
      </header>
      <div className='flex flex-col gap-3 p-4 border-zinc-700 border-2 rounded-md h-auto w-auto'>
        <input 
        placeholder='Input utente'
        className='border-2 border-zinc-500'
        type="text" 
        value={input}
        readOnly />

        <input
        placeholder='Risultato finale'
        className='border-2 border-zinc-500'
        type="text" 
        readOnly 
        value={result} />

          <div className='grid grid-cols-4 gap-3 border-slate-900'>
            {bottoni.map((bottone, index) => (
              <Button 
              key={index} 
              value={bottone}
              //operatore ternario per scegliere se bisogna valutare l'input, cancellarlo oppure gestirlo per aggiungere altri valori
              onClick={bottone === '=' ? handleResult : bottone === 'cancAll' ? handleClearAll : bottone === 'cancLast' ? handleClearLast : bottone === '^2' ? handleSquare : bottone === '^3' ? handleCube : bottone === 'sqrt' ? handleSquareRoot : handleInput}></Button>
            ))}
          </div>
      </div>
    </>
  )
}

export default Calcolatrice;
