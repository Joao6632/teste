// App.js
import React from 'react';
import Navbar from './Componentes/Navbar';
import Hero from './Componentes/Hero';
import Sobre from './Sobre/Sobre';
import Projetos from './Projeto/Projeto';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <>
      <Navbar />
      <Hero /> {/* Hero agora é o primeiro elemento visual */}
      
      <div className="App-content" style={{ paddingTop: '60px' }}>
        {/* Removi o id="inicio" duplicado */}
        <Sobre />

        <Projetos />

        <section id="habilidades">
          <h2>Habilidades</h2>
          <p>Minhas skills.</p>
        </section>

        <section id="contato">
          <h2>Contato</h2>
          <p>Vamos conversar!</p>
        </section>
      </div>
    </>
  );
}

export default App;