import React, { Component } from 'react'
import {Content} from './components/component'
import Menu from './components/menu'
import Header from './layouts/header'
import Middle from './layouts/middle'
import Grid from './components/grid'


class App extends Component {
  constructor (props) {
    super(props)

  }

  render() {
    return (
      <Content> 
        <tr>
          <td>
            <Menu/>
            <Header/>
            <Middle/>
            <Grid/>
          </td>
        </tr>   
      </Content>   
    );
  }
}

export default App;
