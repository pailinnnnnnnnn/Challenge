import React, { Component } from 'react';
import Header from './header'
import styled from 'styled-components'
import './app.css'
import { LabelHeader } from './components/component'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      x: 10,
      y:10
    }
    this.onClick = this.onClick.bind(this)
  }

  y = 10

  onClick() {
    this.setState({y:20})
  }

  

  render() {
    return (
      <div>
        <Header></Header>
        <button onClick={this.onClick}>oommi</button>
        <div  className='labelHeader'></div>
      </div>
    );
  }
}

export default App;
