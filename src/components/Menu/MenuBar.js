import React, { Component } from 'react';
import {MenuTable} from './menu'
class MenuBar extends Component {

  render() {

    return (
      <MenuTable>
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
            Contact
          </td>
        </tr>
      </MenuTable>  
    );
  }
}

export default MenuBar;
