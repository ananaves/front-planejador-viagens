
import estilo from './home.module.css'
import { type JSX } from 'react';


function Home(): JSX.Element {

    return (
        <>

            <div className={estilo.saudacao}>
                <span className={estilo.nomeUsuario}>Olá,{nomeUsuario}!! Bem vindo ao Meu Roteiro.</span>
            </div>

            <h1 className={estilo.fraseInicio}>Aqui você pode criar roteiros de viagens personalizadas com destinos, datas e orçamento.</h1>

        </>
    );
};

export default Home;