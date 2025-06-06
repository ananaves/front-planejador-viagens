import estilo from './cabecalho.module.css'

function Cabecalho() {
  return (
    <header className={estilo.cabecalho}>
      <h3 className={estilo.nome}>Planejador de viagens online</h3>
      <div className={estilo.botoes}>  
      <button className={estilo.butMaps}>Abrir MAPS</button>    
      <button className={estilo.butRoteiros}>Roteiros</button>
      <button className={estilo.butRegistros}>Registros</button>
      <button className={estilo.butPerfil}>Perfil</button>
      </div>

    </header>
  );
};

export default Cabecalho;
