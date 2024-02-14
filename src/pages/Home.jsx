import Navbar from './Navbar'

function Home() {

    return(
        <>
            <Navbar/>
            <div className="flex flex-col justify-center border-2 border-zinc-700 p-2 w-full rounded-md">
                <h2 className="text-3xl text-white font-semibold">Infos</h2>
                <p>Questo è il mio primo progetto su React. Provo a fare una Home con una calcolatrice in una pagina a parte,
                    poi magari aggiungo pagine e le unisco con il routing!
                    Qui probabilmente ci sarà soltanto questo paragrafo, deve solamente essere la pagina Home di tutta l'applicazione
                </p>
            </div>
        </>
    )
}

export default Home;