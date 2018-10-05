import React, { Component } from 'react'
import {Content} from './components/component'
import MenuBar from './components/Menu/MenuBar'
import Header from './layouts/Header'
import Middle from './layouts/Middle'
import Grid from './components/Grid'
import { Menu, Button } from 'semantic-ui-react'
import Routes from './routes'


class App extends Component {
  constructor (props) {
    super(props)

  }

  render() {
    return (
      <Routes/>
    );
  }
}

export default App;
