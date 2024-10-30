import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Navbar = ({setSearchQuery}) => {
  const navigate = useNavigate(); 
  const cartItems = useSelector((state) => state.cart.cartItems || []); 

  const [searchValue,setSearchValue]=useState('')

  const handleCartClick = () => {
    navigate('/cart'); 
  };

  const handleSearch = (e)=>{
    const value  = e.target.value
    setSearchValue(value);
    setSearchQuery(value);
  }

  return (
    <nav className='navbar'>
      <div className='logo'>
        <Link to='/'>
        <img src='/nikelogo.jpg' alt='nikelogo' />
        </Link>
       
      </div>
      <ul className='nav-links'>
        {/* <li><Link to='/'>Home</Link></li>
        <li><Link to='/product'>Products</Link></li> */}
       </ul>
       <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchValue}
          onChange={handleSearch}
        />
        <button type="button">🔍</button>
      </div>

      <div className='navbar-cart'>
        <motion.div
          className="cart-icon"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleCartClick} // Changed to navigate to the cart page
        >
          🛒<span>{cartItems.length}</span>
        </motion.div>
      </div>
    </nav>
  );
}

export default Navbar;
