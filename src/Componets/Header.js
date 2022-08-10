import React, { Component } from "react";
import styled from "styled-components";

export const Master = styled.div`
  background-color: blueviolet;
  margin-bottom: 30px;
  width: 100%;
  
  
  h1{
    text-align: center;
    padding: 10px;
    color: white
  }

  ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center
    width: 100%;
    padding: 10px
  
    
    }

  li{
    font-size: 1rem;
    color: white;
    font-weight: 400;
    text-transform: uppercase
  }
  
`;

export default class Header extends Component {
  render() {
    return (
      
      <Master>
        <h1>Front end Devpoloper </h1>
          <ul>
            <li>Nome: {this.props.nome}</li>
            <li>Idade: {this.props.idade}</li>
            <li>Profissão: {this.props.profissao}</li>
          </ul>
      </Master>
    );
  }
}
