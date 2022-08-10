import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import Header from "./Componets/Header";
import Main from "./Componets/Main";
import Footer from "./Componets/Footer";
import Cards from "./Componets/Card";

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;

  }`

export default class App extends Component{
  render(){
    return(
      <>
        <GlobalStyle />
        <Header nome="  Felipe Silva" idade="28 anos" profissao="Jardineiro"/>
        <Main/>
        
        <Footer />
      </>
    )
  }
}