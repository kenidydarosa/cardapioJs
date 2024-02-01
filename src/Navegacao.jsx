export function Navegacao(props) {
  return (
    <div className='navegacao'>
      <input
        type='radio'
        name='opcao-linha'
        id='pagina-0'
        defaultChecked
        onClick={() => props.atualizarPaginaSelecionada(0)}
      />
      <label htmlFor='pagina-0'>Pratos Principais</label>
      <input
        type='radio'
        name='opcao-linha'
        id='pagina-1'
        onClick={() => props.atualizarPaginaSelecionada(1)}
      />
      <label htmlFor='pagina-1'>Pratos Principais</label>
      <input
        type='radio'
        name='opcao-linha'
        id='pagina-2'
        onClick={() => props.atualizarPaginaSelecionada(2)}
      />
      <label htmlFor='pagina-2'>Pratos Principais</label>
    </div>
  );
}
