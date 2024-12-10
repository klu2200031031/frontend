import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './ProductsPage.css';
import image1 from './assets/images/image1.jpg';
import image2 from './assets/images/image2.jpg';
import image3 from './assets/images/image3.png';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Fetch products (this could be from an API or local data)
  useEffect(() => {
    const fetchedProducts = [
      { id: 1, name: 'Traditional Saree', description: 'A beautiful saree', price: 2500, image: image1 },
      { id: 2, name: 'Elegant Shawl', description: 'A stylish shawl', price: 1800, image: image2 },
      { id: 3, name: 'Handloom Dress Material', description: 'Quality handloom fabric', price: 3200, image: image3 }
    ];
    setProducts(fetchedProducts);
  }, []);

  // Handle adding product to cart
  const handleAddToCart = (product) => {
    console.log('Added to cart:', product);
    // Store product in local storage or state for cart
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.push(product);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    navigate('/buyer-cart'); // Redirect to the Cart page
  };

  // Handle adding product to wishlist
  const handleAddToWishlist = (product) => {
    console.log('Added to wishlist:', product);
    // Store product in local storage or state for wishlist
    const wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlistItems.push(product);
    localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
    navigate('/wishlist'); // Redirect to the Wishlist page
  };

  return (
    <div className="products-page">
      <h2>Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img 
              src={product.image} 
              alt={product.name} 
              className="product-image" 
            />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            <button onClick={() => handleAddToWishlist(product)}>Add to Wishlist</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
