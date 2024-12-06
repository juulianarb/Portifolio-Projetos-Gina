import { useState } from "react"

function Contador() {
    const [contador, setContador] = useState(0);

    const incrementar = () => {
        setContador(contador + 1);
    };

    const decrementar = () => {
        setContador(contador - 1);
    };

    
    return (
        <div className="caixa-contador">
        <h2>Contador</h2>
        <p>Valor :{contador}</p>
        <button onClick={incrementar}><b>Incrementar</b></button>
        <button onClick={decrementar}><b>Decrementar</b></button>
        </div>
    )
}

export default Contador