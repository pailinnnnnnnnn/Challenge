import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import { withRouter } from 'react-router'

class ProductCard extends React.Component {
  handleItemClick = () => this.props.history.push('/product')

  render(){
    return(
      <Card fluid>
        <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' onClick={this.handleItemClick}/>
        <Card.Content>
          <Card.Header>Summer dress</Card.Header>
          <Card.Meta>1,900THB</Card.Meta>
          <Card.Description>Summer collection</Card.Description>
        </Card.Content>
      </Card>   
    )
  }
}

const ProductCards = withRouter(ProductCard)
export{
  ProductCards
}

