import React, { Component } from 'react';
import {ImageGrid} from './component';

class Product extends Component {
  
  render() {
    return (
        <table width="100%" height="100%">
            <tr>
                <ImageGrid>image</ImageGrid>
            </tr>
            <tr>
                <td>Product Name</td>
            </tr>
            <tr>
                <td>Price</td>
            </tr>
        </table>
    );
  }
}

export default Product;
