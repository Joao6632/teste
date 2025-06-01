// App.js
import React from 'react';
import Navbar from './Componentes/Navbar';
import Hero from './Componentes/Hero';
import './App.css';


function App() {
  return (
    <>
      <Navbar />
      <Hero /> {/* Hero agora é o primeiro elemento visual */}
      
      <div className="App-content" style={{ paddingTop: '60px' }}>
        {/* Removi o id="inicio" duplicado */}
        <section id="sobre">
          <h2>Sobre</h2>
          <p>Um pouco sobre mim...</p>
        </section>

        <section id="projetos">
          <h2>Projetos</h2>
          <p>Meus projetos incríveis.</p>
        </section>

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