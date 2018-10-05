import React, { Component } from 'react';
import {HeaderTable} from './layout';
import {TextH1,TextH2} from '../components/component';
class Header extends Component {


  render() {
    return (
      <HeaderTable>
        <TextH1>FREE SHIPPING</TextH1>
        <br></br>
        <TextH2>Only 2 - 5 Oct 2018</TextH2>
      </HeaderTable>  
    );
  }
}

export default Header;
