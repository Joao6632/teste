import React from 'react';
import './Sobre.css';
import SetaScroll from '../Componentes/SetaScroll/SetaScroll';

const Sobre = () => {
  return (
    <section id="sobre" className="sobre-section">
      <div className="sobre-grid">
        {/* Coluna esquerda - Dados pessoais */}
        
         <SetaScroll targetId="projetos" delay={2000} />
        <div className="sobre-coluna-dados">
          <h2 className="sobre-titulo-destaque">
            Quem sou<span className="highlight"> eu?</span>
          </h2>
          
          <div className="avatar-container">
            <div className="avatar-borda"></div>
            <div className="avatar-foto"></div>
          </div>

          <div className="dados-pessoais">
            <div className="dado-item">
              <div className="dado-icone">⌚</div>
              <div>
                <div className="dado-rotulo">IDADE</div>
                <div className="dado-valor">17 anos</div>
              </div>
            </div>
            
            <div className="dado-item">
              <div className="dado-icone">📍</div>
              <div>
                <div className="dado-rotulo">LOCAL</div>
                <div className="dado-valor">Brasília, DF</div>
              </div>
            </div>
            
            <div className="dado-item">
              <div className="dado-icone">💻</div>
              <div>
                <div className="dado-rotulo">EXPERIÊNCIA</div>
                <div className="dado-valor">1 ano na programação</div>
              </div>
            </div>
          </div>
        </div>

        {/* Coluna direita - História */}
        <div className="sobre-coluna-historia">
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marcador"></div>
              <div className="timeline-conteudo">
                <h3 className="timeline-titulo">Descoberta da Programação</h3>
                <p>Conheci a programação cedo, mas comecei a praticar há pouco tempo. Mesmo assim, venho me adaptando rápido e me identificando muito com a área.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marcador"></div>
              <div className="timeline-conteudo">
                <h3 className="timeline-titulo">Qual o meu diferencial?</h3>
                <p>Atuei em um projeto de Pixelmon no Minecraft, onde desenvolvi habilidades de atendimento remoto e resolução de problemas. Aprendo com rapidez, tenho boa comunicação online e gosto de colaborar, sempre ajudando a equipe com o que sei.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marcador"></div>
              <div className="timeline-conteudo">
                <h3 className="timeline-titulo">O que eu busco?</h3>
                <p>Busco evoluir como desenvolvedor e como pessoa, sempre aprendendo mais sobre programação para me tornar cada vez mais preparado para os desafios do mercado.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;