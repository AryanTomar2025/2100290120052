import React, { useEffect, useState } from 'react';

const ProductListingPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const apiUrl = 'http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000';
    const validationToken ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE3MjI0NjY5LCJpYXQiOjE3MTcyMjQzNjksImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjAyNmRlZjhkLTc1YmQtNGRmOS1hNjI3LTExZDRkMWY1ZWRjMSIsInN1YiI6ImFyeWFudG9tYXJjc0BnbWFpbC5jb20ifSwiY29tcGFueU5hbWUiOiJhZmZvcmQiLCJjbGllbnRJRCI6IjAyNmRlZjhkLTc1YmQtNGRmOS1hNjI3LTExZDRkMWY1ZWRjMSIsImNsaWVudFNlY3JldCI6IkZweHRobnVlbGNlTWRydXUiLCJvd25lck5hbWUiOiJhcnlhbiIsIm93bmVyRW1haWwiOiJhcnlhbnRvbWFyY3NAZ21haWwuY29tIiwicm9sbE5vIjoiMjEwMDI5MDEyMDA1MiJ9.A1AvoCZgItcltRqIHLZumURL7_6qOSQVCnMI3ruevbs';

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${validationToken}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setProducts(data.products); 
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Top N Products</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <div>Product Name: {product.productName}</div>
            <div>Price: {product.price}</div>
            <div>Rating: {product.rating}</div>
            <div>Discount: {product.discount}</div>
            <div>Availability: {product.availability}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductListingPage;