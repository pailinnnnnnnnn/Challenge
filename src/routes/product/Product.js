import React from 'react'
import { withRouter } from 'react-router'
import { Menu, Segment, Image, Table } from 'semantic-ui-react'
import { BodyContent, ImageProduct, DetailProduct } from '../style' 

class Product extends React.Component {

  handleHomeClick = () => this.props.history.push('/')
  handleCreateClick = () => this.props.history.push('/create')

  render () {

    return (
      <BodyContent>
        <Segment inverted>
          <Menu inverted pointing secondary>
            <Menu.Item name='home' onClick={this.handleHomeClick}/>    
            <Menu.Item name='create' onClick={this.handleCreateClick}/>          
          </Menu>
        </Segment>

        <table width="100%">
          <tr>
            <ImageProduct>
              <Image
                src='https://react.semantic-ui.com/images/wireframe/image-text.png'
                as='a'
                size='medium'
                href='http://google.com'
                target='_blank'
              />
            </ImageProduct>
            <DetailProduct>
              <Table basic='very' celled collapsing>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>
                      Size
                    </Table.Cell>
                    <Table.Cell>
                      Size
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      Size
                    </Table.Cell>
                    <Table.Cell>
                      Size
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </DetailProduct>
          </tr>
        </table>
      </BodyContent>
    )
  }
}

export default withRouter(Product)
