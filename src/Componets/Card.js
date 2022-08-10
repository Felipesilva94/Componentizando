import React, { Component } from "react";
import styled from "styled-components";
import javaScript from "../assets/javaScript.jpg"
import sass from "../assets/sass.jpg"
import react from "../assets/RN.jpg"



export const Conteiner = styled.section`
width: 100%;

display: flex;
justify-content: space-between;
padding: 5px;
margin-bottom: 10px;



`
export const Caixa = styled.div`
width: 30%;
border: 1px solid black;
align-items: center;
text-align: center;

h3{
  padding-bottom: 10px;
}

img {
  width: 60%;
  padding: 20px;
}

p {
  max-width: 100%;
  
}
`


export default class Cards extends Component {
	state = {
		devoloper: [
			{
				img: javaScript,
				tecnologia: "JavaScript",
				Sobre: "JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web — toda vez que uma página da web faz mais do que simplesmente mostrar a você informação estática — mostrando conteúdo que se atualiza em um intervalo de tempo, mapas interativos ou gráficos 2D/3D animados, etc. — você pode apostar que o JavaScript provavelmente está envolvido.",
			},
			{img: react,
				tecnologia: "React",
				Sobre: "React JS é uma biblioteca JavaScript para a criação de interfaces de usuário — ou UI (user interface).Criado em 2011 pelo time do Facebook, o React surgiu com o objetivo de otimizar a atualização e a sincronização de atividades simultâneas no feed de notícias da rede social, entre eles chat, status, listagem de contatos e outros.",
				
			},
			{
				img:sass,
				tecnologia: "Sass",
				Sobre: "O SASS é uma linguagem de extensão do CSS, a sigla significa “Syntactically Awesome Style Sheets” traduzindo ao pé da letra, folhas de estilo com uma sintaxe incrível. A sua ideia é adicionar recursos especiais como variáveis, mixins, funções e operações e outras opções variadas que iremos comentar.",
			}
    ]
  }

  
  render() {
		return (
			<>
				
					<Conteiner>
          {this.state.devoloper.map(({ img, tecnologia, Sobre }, index) => (
            <Caixa  key={index}>
						  <h3>{tecnologia}</h3>
							<p>{Sobre}</p>
                <figure>
							    <img src={img} alt="tecnologia" />
               </figure>
            </Caixa>
					
				))}
        </Conteiner>
			</>
		);
	}

}