import React from 'react';
import './Projeto.css';
import ProjetosCarrossel from './ProjetosCarrossel';


const Projetos = () => {
  return (
    <section id="projetos" className="projetos-section">
      <div className="projetos-header">
        <div className="header-content">
          <h2 className="titulo-destaque">
            <span className="destaque-bar"></span>
            Meus Projetos
          </h2>
          <p className="projetos-subtitulo">
            Cada projeto representa um passo importante na minha jornada de aprendizado
          </p>
          <div className="divider"></div>
        </div>
      </div>
      
      <div className="carrossel-wrapper">
        <ProjetosCarrossel />
      </div>
    </section>
  );
};

export default Projetos;