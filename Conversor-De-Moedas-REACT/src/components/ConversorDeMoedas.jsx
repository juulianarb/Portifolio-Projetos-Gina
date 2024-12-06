import { useEffect, useState } from "react"

function ConversorDeMoedas() {
    const [moedas, setMoedas] = useState([]);
    const [deMoeda, setDeMoeda] = useState('USD');
    const [paraMoeda, setParaMoeda] = useState('EUR');
    const [quantidade, setQuantidade] = useState(1);
    const [resultado, setResultado] = useState(0);

    useEffect(() => {
        fetch('https://api.exchangeratesapi.io/v1/latest?access_key=2a160f95cde9e69bb962845e5ac4b249&format=1')
            .then(response => response.json())
            .then(data => {
                setMoedas([...Object.keys(data.rates)]);
            })
            .catch(error => console.error('Erro ao buscar moedas:', error));
    }, []);

    const converterMoedas = () => {
        fetch(`https://api.exchangeratesapi.io/v1/latest?access_key=2a160f95cde9e69bb962845e5ac4b249&format=1base=${deMoeda}&symbols=${paraMoeda}`)
            .then(response => response.json())
            .then(data => {
                const taxaDeCambio = data.rates[paraMoeda];
                setResultado(quantidade * taxaDeCambio);
            })
            .catch(error => console.error('Erro ao converter moeda:', error));
    };

    return (
        <div className="caixa">
            <h2>Conversor de Moedas</h2>
            <div>
                <label>De: </label>
                <select value={deMoeda} onChange={(e) => setDeMoeda(e.target.value)}>
                    {moedas.map(moeda => (
                        <option key={moeda} value={moeda}>{moeda}</option>
                    ))}
                </select>
                <input type="number" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} />
            </div>
            <div>
                <label>Para: </label>
                <select value={paraMoeda} onChange={(e) => setParaMoeda(e.target.value)}>
                    {moedas.map(moeda => (
                        <option key={moeda} value={moeda}>{moeda}</option>
                    ))}
                </select>
                <button onClick={converterMoedas}>Converter</button>
            </div>
            <div>
                <h3>Resultado:</h3>
                <p>{resultado}</p>
            </div>
        </div>
    )
}

export default ConversorDeMoedas