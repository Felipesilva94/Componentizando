import React, { Component } from "react";
import styled from "styled-components";

export const Master_footer = styled.footer`
  background-color: blueviolet;
  margin-bottom: 30px;
  
  
  h3{
    text-align: center;
    padding: 10px;
    color: white
  }

`;

export default class Header extends Component {
 
  render(){
    return(
      <Master_footer>
        <h3>© 2022 Felipe Silva. All Rights Reserved</h3>
      </Master_footer>
  )
}
}