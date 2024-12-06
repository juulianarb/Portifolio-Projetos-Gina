import React, { useState } from 'react';

function ListaDeContatos() {
  const [contatos, setContatos] = useState([]);
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');

  const adicionarContato = () => {
    if (nome && telefone) {
      setContatos([...contatos, { nome, telefone }]);
      setNome('');
      setTelefone('');
    }
  };

  const removerContato = (index) => {
    setContatos(contatos.filter((_, i) => i !== index));
  };

  return (
    <div className='caixa-contatos'>
      <h2>Lista de Contatos</h2>
      <div className='inputs'>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome Completo"
        />
        <input
          className='telefone-input'
          type="number"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          placeholder="Telefone (DDD)xxxxx-xxxx"
        />
        <button className='btn-adicionar' onClick={adicionarContato}><b>Adicionar Contato</b></button>
      </div>
      <ul>
        {contatos.map((contato, index) => (
          <li key={index}>
            <strong>{contato.nome}:</strong> {contato.telefone}{' '}
            <button className='btn-remover' onClick={() => removerContato(index)}><b>Remover</b></button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeContatos;
