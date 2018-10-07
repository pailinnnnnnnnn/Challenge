import React from 'react'
import { withRouter } from 'react-router'
import { Menu, Segment } from 'semantic-ui-react'
import { BodyContent } from '../style' 


class Create extends React.Component {

  handleHomeClick = () => this.props.history.push('/')
  handleCreateClick = () => this.props.history.push('/create')

  render () {
    console.log(this.props)

    return (
      <BodyContent>
        <Segment inverted>
          <Menu inverted pointing secondary>
            <Menu.Item name='home' onClick={this.handleHomeClick}/>    
            <Menu.Item name='create' onClick={this.handleCreateClick}/>          
          </Menu>
        </Segment>

      </BodyContent>
    )
  }
}

export default withRouter(Create)
