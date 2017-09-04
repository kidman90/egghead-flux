import React from 'react';
import CartButton from './app-cart-button';
import AppActions from '../actions/app-actions';

export default (props) => {
  return (
    <tr>
      <td>
        <CartButton
          txt="x"
          handler={() => AppActions.removeItem(props.item)}
        />
      </td>
      <td>{props.item.title}</td>
      <td>{props.item.qty}</td>
      <td>
        <div className="btn-group">
          <CartButton
            txt="-"
            handler={() => AppActions.decreaseItem(props.item)}
          />
          <CartButton
            txt="+"
            handler={() => AppActions.increaseItem(props.item)}
          />
        </div>
      </td>
      <td>{props.subtotal}</td>
    </tr>
  );
};