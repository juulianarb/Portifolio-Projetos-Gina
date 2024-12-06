import { useState } from "react";

function ListaDeTarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  const maxTarefas = 7; 

  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== '') {
      if (tarefas.length < maxTarefas) {
        setTarefas([...tarefas, novaTarefa]);
        setNovaTarefa('');
      } else {
        alert(`Você só pode adicionar até ${maxTarefas} tarefas.`);
      }
    }
  };

  const removerTarefa = (index) => {
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);
    setTarefas(novasTarefas);
  };

  return (
    <div className="caixa">
      <h2>Lista de Tarefas</h2>
      <input
        type="text"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder="Adicione uma nova tarefa"
      />
      <button className="botaoAdicionar" onClick={adicionarTarefa}>Adicionar</button>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>
            {tarefa}{' '}
            <button className="botaoRemover" onClick={() => removerTarefa(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeTarefas;