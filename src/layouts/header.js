import React, { Component } from 'react';
import {HeaderStyle, TextH2} from '../components/component';
import {TextH1} from '../components/component';
class Header extends Component {


  render() {
    return (
      <HeaderStyle>
        <TextH1>FREE SHIPPING</TextH1>
        <br></br>
        <TextH2>Only 2 - 5 Oct 2018</TextH2>
      </HeaderStyle>  
    );
  }
}

export default Header;
