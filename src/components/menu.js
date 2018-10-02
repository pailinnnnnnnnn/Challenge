import React, { Component } from 'react';
import {MenuStyle} from './component';
class Menu extends Component {

  render() {
    return (
      <div>   
        <MenuStyle>
            <tr>
                <td>
                    Shop All
                </td>
                <td>
                    Woman
                </td>
                <td>
                    Men
                </td>
                <td>
                    About
                </td>
                <td>
                    Contact
                </td>
            </tr>
        </MenuStyle>
      </div>
    );
  }
}

export default Menu;
