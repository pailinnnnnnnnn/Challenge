import React from 'react'
import { Grid } from 'semantic-ui-react'
import { ProductCards } from './component'
import { BodyContent, NewColumn } from '../style'
import MenuBar from 'src/components/Menu'

class Home extends React.Component {

  render () {

    return (
      <BodyContent>
        <MenuBar/>

        <Grid>
          <Grid.Row relaxed columns={4}>
            <NewColumn>
              <ProductCards/>
            </NewColumn>
            <NewColumn>
              <ProductCards/>
            </NewColumn>
            <NewColumn>
              <ProductCards/>
            </NewColumn>
            <NewColumn>
              <ProductCards/>
            </NewColumn>
            <NewColumn>
              <ProductCards/>
            </NewColumn>
            <NewColumn>
              <ProductCards/>
            </NewColumn>
          </Grid.Row>
        </Grid>  
      </BodyContent>
    )
  }
}

export default Home
