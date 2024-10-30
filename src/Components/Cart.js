import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, decreaseQuantity, addToCart, clearCart } from '../reducers/cartSlice';
import { FaTrash, FaPlus, FaMinus,FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../Styles/Cart.css';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleProduct = ()=>{
      navigate('/product')
  }
  const handleCloseCart = ()=>{
    navigate(-1);
  }

  return (
    <motion.div
      className="cart-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="cart"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={handleCloseCart}>
          <FaTimes /> 
        </button>
        
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
          
        ) : (
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} /> 
                <div className="item-details">
                  <h4>{item.name}</h4> 
                  <p>${item.price}</p>
                  <div className="quantity-controls">
                    <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                      <FaMinus />
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch(addToCart(item))}>
                      <FaPlus />
                    </button>
                  </div>
                </div>
                <button className="remove-btn" onClick={() => dispatch(removeFromCart(item.id))}>
                  <FaTrash />
                </button>
              </div>
            ))}
            <div className="cart-summary">
              <h3>Total: ${totalAmount.toFixed(4)}</h3>
              <button className="checkout-btn" onClick={() => alert('Proceed to Checkout')}>
                Checkout
              </button>
              <button className="clear-btn" onClick={() => dispatch(clearCart())}>
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Cart;
