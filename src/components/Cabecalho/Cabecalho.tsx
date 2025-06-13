import estilo from './cabecalho.module.css'
import { type JSX } from 'react';
// import AuthRequest from '../../fetch/AuthRequest';
// import { useState, useEffect } from 'react';
import { APP_ROUTES } from '../../appConfig';

function Cabecalho(): JSX.Element {

  return (
    <header className={estilo.cabecalho}>
      <h3>Meu Roteiro</h3>
      <div className={estilo.botoes}>
        <button className={estilo.butMaps}>Abrir MAPS</button>
        <button className={estilo.butRoteiros}>Roteiros</button>
        <a href={APP_ROUTES.ROUTE_PERFIL} className={estilo.butPerfil}>Perfil</a>
      </div>
    </header>
  );
};

export default Cabecalho;
