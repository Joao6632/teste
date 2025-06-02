import React from 'react';
import Slider from 'react-slick';
import { FaGithub } from 'react-icons/fa';
import './ProjetosCarrossel.css';
import nutriImage from '../imagens/nutri.jpeg';

const ProjetosCarrossel = () => {
  const projetos = [
    // Seus projetos aqui
    {
      titulo: "Em desenv",
      descricao: "Em desenv",
      tecnologias: ["JavaScripd", "", ""],
      imagem: "/imagens/akishiro.jpg",
      githubUrl: "#"
    },

     {
      titulo: "Site Nutrição",
      descricao: "Aplicação desktop cujo a motivação é para facilitar o nutricionista realizar o calculo nutricional do paciente dentro do seu ambiente de trabalho.",
      tecnologias: ["JavaScript", "HTML", "CSS"],
      imagem: nutriImage,
      githubUrl: "https://github.com/Joao6632/Site-nutri"
    },
    // Adicione mais projetos...
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Mostra 1 por vez
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000
  };

  return (
    <div className="carrossel-simples">
      <Slider {...settings}>
        {projetos.map((projeto, index) => (
          <div key={index} className="projeto-item">
            <div className="projeto-imagem">
              <img src={projeto.imagem} alt={projeto.titulo} />
            </div>
            <div className="projeto-info">
              <h3>{projeto.titulo}</h3>
              <p>{projeto.descricao}</p>
              <div className="tecnologias">
                {projeto.tecnologias.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
              <a href={projeto.githubUrl} className="botao-github">
                <FaGithub /> Ver código
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjetosCarrossel;