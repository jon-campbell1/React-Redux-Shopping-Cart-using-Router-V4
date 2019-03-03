import React from 'react';
import ProductListItem from './product-list-item';
import {connect} from 'react-redux';
import { cartItemsWithQuantities } from '../cart';


function ProductListing(props) {
  return <div className="product-listing">
  {
    props.products.map(product =>  <ProductListItem product={product}
      cartItem={props.cart.filter(cartItem => cartItem.id === product.id)[0]}
      addToCart={props.addToCart}
      removeFromCart={props.removeFromCart}/>)
  }
  </div>
}


function mapStateToProps(state) {
  return {
    cart: state.cart
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (item) => {
      dispatch({type: 'ADD', payload: item});
    },
    removeFromCart: (item) => {
      dispatch({type: 'REMOVE', payload: item});
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing);
