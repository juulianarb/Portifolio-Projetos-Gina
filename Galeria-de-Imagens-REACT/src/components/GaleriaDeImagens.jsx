import React, { useState } from 'react';

function GaleriaDeImagens() {
  const [imagens, setImagens] = useState([
    'https://loremflickr.com/150/150?random=1',
    'https://loremflickr.com/150/150?random=2',
    'https://loremflickr.com/150/150?random=3'
  ]);
  const [random, setRandom] = useState(4);

  const adicionarImagem = () => {
    setImagens([...imagens, 'https://loremflickr.com/150/150?random=' + random]);
    setRandom(random + 1); 
  };

  const removerImagem = (index) => {
    setImagens(imagens.filter((_, i) => i !== index));
    };

    return (
        <div className='caixa-galeria'>
          <h2>Galeria de Imagens</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {imagens.map((imagem, index) => (
              <div key={index} style={{ margin: '5px' }}>
                <img src={imagem} alt={`Imagem ${index + 1}`}/>
                <div />
                <button className='btn-removerImagem' onClick={() => removerImagem(index)}><b>Remover</b></button>
              </div>
            ))}
          </div>
          <button className='btn-adicionarImagem' onClick={adicionarImagem} style={{ marginTop: '10px' }}><b>Adicionar Imagem</b></button>
        </div>
      );
    }

export default GaleriaDeImagens;