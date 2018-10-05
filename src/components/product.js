import React, { Component } from 'react';
import {ImageGrid,ProductTable} from './component';
import {TextBody1,TextBody2} from './component';

class Product extends Component {
  
  render() {
    return (
        <ProductTable>
            <tr>
                <td>
                    <ImageGrid>image</ImageGrid>
                </td>     
            </tr>
            <tr>
                <td>
                    <TextBody1>Product Name</TextBody1>
                </td>
            </tr>
            <tr>
                <td><TextBody2>Price</TextBody2></td>
            </tr>
        </ProductTable>
    );
  }
}

export default Product;
