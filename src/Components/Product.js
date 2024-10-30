import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../reducers/cartSlice'; // Adjust the import according to your file structure
import { Row, Col, Card, Button } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

const Product = ({searchQuery}) => {
  const [products, setProducts] = useState([]);

  const [filteredProducts,setFilteredProducts]= useState([])
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('/Products.json')
      .then((response) => response.json())
      .then((data) => {
        if (data && data.products) {
          setProducts(data.products); // Ensure products data is available
          setFilteredProducts(data.products);
        } else {
          console.error('No products found');
        }
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  useEffect(() => {
    if (!searchQuery) {
      setFilteredProducts(products); // Show all products if search is empty
    } else {
      const lowerCaseQuery = searchQuery.toLowerCase();
      setFilteredProducts(
        products.filter((product) =>
          product?.name?.toLowerCase().includes(lowerCaseQuery)
        )
      );
    }
  }, [searchQuery, products]);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item)); 
  };

  return (
    <div className='container mt-4'>
      <h1 className="text-center mb-4"> Products 👟</h1>
      <Row>
        {filteredProducts.map((product) => (
          <Col key={product.id} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.image} alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Card.Text>{product.description}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleAddToCart(product)}
                >
                  <FaShoppingCart className="me-2" /> Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Product;
