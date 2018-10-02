import React, { Component } from 'react';
import {ImageGrid} from './component';
import {ProductStyle} from './component';
import {TextBody1} from './component';
import {TextBody2} from './component';
class Product extends Component {
  
  render() {
    return (
        <ProductStyle>
            <tr>
                <ImageGrid>image</ImageGrid>
            </tr>
            <tr>
                <td>
                    <TextBody1>Product Name</TextBody1>
                </td>
            </tr>
            <tr>
                <td><TextBody2>Price</TextBody2></td>
            </tr>
        </ProductStyle>
    );
  }
}

export default Product;
