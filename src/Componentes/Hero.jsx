import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import perfilImg from '../imagens/perfil.jpeg';
import './Hero.css';

function Hero() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <img
          src={perfilImg}
          alt="João Victor - Desenvolvedor Web"
          className="hero-avatar"
        />

        <h1>
          Bem vindo! Eu me chamo <span className="highlight">João Victor</span>
        </h1>

        <h2>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('Web Developer & Analista de Sistemas Jr.')
                .pauseFor(2500)
                .start();
            }}
            options={{
              cursor: '|',
              delay: 50,
            }}
          />
        </h2>

        {/* Conteúdo aparece com fade-in suave */}
        <p className={`fade-in ${showContent ? 'show' : ''}`}>
          Caí na programação há 1 ano e nunca mais saí — acho que foi amor à primeira linha de código.
          Tô na missão de virar um web dev de verdade, e sim... eu gosto de Java e JavaScript.
          Julgue à vontade 😄
        </p>

        <div className={`hero-buttons fade-in ${showContent ? 'show' : ''}`}>
          <a
           href="https://discord.gg/PazTTeM2VH"
           className="btn btn-primary"
           target="_blank"
           rel="noreferrer"
                          >
             📨 Discord
            </a>
          <a href="#contato" className="btn btn-outline">💬 Contato</a>
          <a
            href="https://github.com/Joao6632"
            className="btn btn-dark"
            target="_blank"
            rel="noreferrer"
          >
            🐱 GitHub
          </a>
        </div>

        {/* Seta de scroll - aparece apenas quando showContent é true */}
        {showContent && (
          <div className="scroll-indicator">
            <div 
              className="scroll-down-arrow" 
              onClick={handleScrollDown}
              aria-label="Rolar para baixo"
            ></div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Hero;