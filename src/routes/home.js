import React from 'react'
import { withRouter } from 'react-router'

class Home extends React.Component {
  render () {
    console.log(this.props)
    return (
      <div>
        <button onClick={() => this.props.history.push('/sun')}>test</button>
      </div>
    )
  }
}

export default withRouter(Home)
