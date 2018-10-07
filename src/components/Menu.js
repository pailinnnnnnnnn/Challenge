import React from 'react'
import { Segment, Menu } from 'semantic-ui-react'
import { withRouter } from 'react-router'

class MenuBar extends React.Component {

  handleHomeClick = () => this.props.history.push('/')
  handleCreateClick = () => this.props.history.push('/create')

  render(){
    return(
      <Segment inverted>
          <Menu inverted pointing secondary>
            <Menu.Item name='home' onClick={this.handleHomeClick}/>      
            <Menu.Item name='create' onClick={this.handleCreateClick}/>     
          </Menu>
      </Segment>
    )
  }
}

export default withRouter(MenuBar)
