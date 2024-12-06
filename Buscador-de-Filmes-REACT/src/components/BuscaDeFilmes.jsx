import { useState } from "react";

function BuscaDeFilmes() {

    const [query, setQuery] = useState('');
    const [filmes, setFilmes] = useState([]);
    const [erro, setErro] = useState('');

    const buscarFilmes = async () => {
        try {
            const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=6b1df061`);
            const data = await response.json();
            if (data.Response === 'True') {
                setFilmes(data.Search);
                setErro('');
            } else {
                setFilmes([]);
                setErro(data.Error);
            }
        } catch (error) {
            console.error('Erro ao buscar filmes:', error);
            setErro('Erro ao buscar filmes. Por favor, tente novamente mais tarde.');
        }
    };

    const handleChange = (event) => {
        setQuery(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        buscarFilmes();
    };
    return (
        <div className="caixa">
            <h2>Buscador de filmes</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={query} onChange={handleChange} placeholder="Digite o nome do filme" />
                <button type="submit">Buscar</button>
            </form>
            {erro && <p>{erro}</p>}

            <div className="listadefilmes">
                {filmes.map((filme) => (
                    <div key={filme.imdbID}>
                        <h3>{filme.Title}</h3>
                        <img className="imagemdofilme" src={filme.Poster} alt={filme.Title}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BuscaDeFilmes;