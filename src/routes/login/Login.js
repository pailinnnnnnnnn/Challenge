import React from 'react'
import { withRouter } from 'react-router'
import { Form, Button } from 'semantic-ui-react'
import { NewForm, BodyLogin } from '../style'

class Login extends React.Component {
  render () {
    console.log(this.props)
    return (
      <BodyLogin>
        <NewForm>
          <Form.Field>
            <input placeholder='Username' />
          </Form.Field>
          <Form.Field>
            <input placeholder='Password' />
          </Form.Field>
          <Button type='login'>Login</Button>
        </NewForm>
      </BodyLogin>
    )
  }
}

export default withRouter(Login)
