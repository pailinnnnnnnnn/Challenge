import React, { Component } from 'react'
import Product from './Product'

class Grid extends Component {

  render() {
    return (
      <table width="100%">
        <tr>
          <td><Product/></td>
          <td><Product/></td>
          <td><Product/></td>
          <td><Product/></td>
        </tr>
      </table>
    );
  }
}

export default Grid;
