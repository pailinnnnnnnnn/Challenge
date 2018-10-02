import React, { Component } from 'react'
import Product from './product'

class Grid extends Component {

  render() {
    return (
      <table width="100%">
        <tr>
          <td><Product/></td>
        </tr>
      </table>
    );
  }
}

export default Grid;
