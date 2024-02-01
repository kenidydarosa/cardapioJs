import { useState } from 'react';
import Hashtaurante from './assets/hashtaurante.webp';
import { Navegacao } from './Navegacao.jsx';
import './App.css';
import { ItemCardapio } from './ItemCardapio.jsx';
import { pratosPrincipais, sobremesas, bebidas } from './cardapio.js';

export function App() {
  const paginasMenu = [pratosPrincipais, sobremesas, bebidas]
  const [paginaSeleciona, atualizarPaginaSelecionada] = useState(0)
  return (
    <>
      <img src={Hashtaurante} alt='' className='capa' />
      <Navegacao atualizarPaginaSelecionada={atualizarPaginaSelecionada} />
      <div className='menu'>
        {paginasMenu[paginaSeleciona].map((item) => (
          <ItemCardapio
            nome={item.nome}
            descricao={item.descricao}
            preco={item.preco}
            imagem={item.imagem}
          />
        ))}
      </div>
    </>
  );
}
