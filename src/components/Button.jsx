function Button({value, onClick}) {

return(
        <button className="bg-slate-100 border-2 border-black hover:bg-sky-500"
        //gli passo una onClick personalizzata per poi gestire il valore passato
        onClick={()=>onClick(value)}>{value}
        </button>
        ); 
}

export default Button;