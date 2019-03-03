import React from 'react';
import { connect } from 'react-redux';

function sort(items) {
  return items.sort((a, b) => a.id - b.id);
}

function Cart(props){

  return <table>
  <thead>
    <tr>
      <th>Item</th>
      <th>Quantity</th>
    </tr>
  </thead>
  <tbody>
  {
    sort(props.cart).map(item =>
      <tr>
        <td>{item.name}</td>
        <td>{item.quantity}</td>
        <td>
          <button onClick={(e) => props.addToCart(item)}>+</button>
          <button onClick={(e) => props.removeFromCart(item)}>-</button>
        </td>
        <td>
          <button onClick={(e) => props.removeAllFromCart(item)}>Remove all from cart</button>
        </td>
      </tr>
    )
  }
      <tr>
        <td><hr/><b>Total:</b></td>
        <td><hr/><b>${props.total()}</b></td>
      </tr>
      <tr>
        <td>
          <input type="text" placeholder="Enter Discount Code" id="discountCode"/><br/>
        </td>
        <td>
          <button onClick={() => props.applyDiscount()}>Apply</button>
        </td>
      </tr>
      <tr>
        <td className="discount">
        {
          props.discount == .5 ?  "Discount Applied!" : ""
        }
        </td>
      </tr>
    </tbody>
  </table>
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
    discount: state.discount,
    total: () => {
      let total = 0;
      state.cart.forEach(item => {
        total += (item.quantity * item.price);
      })
      return (state.discount * total).toFixed(2);
    }
  }
}

function mapDispatchToProps(dispatch){
  return {
    addToCart: (item) => {
      dispatch({type: "ADD", payload: item})
    },
    removeFromCart: (item) => {
      dispatch({type: "REMOVE", payload: item})
    },
    removeAllFromCart: (item) => {
      dispatch({type: "REMOVE_ALL", payload: item})
    },
    applyDiscount: () => {
      dispatch({type: "APPLY_DISCOUNT", payload: document.getElementById('discountCode').value});
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);
