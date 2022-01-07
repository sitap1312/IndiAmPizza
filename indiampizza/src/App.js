import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import { productData } from './components/Products/data';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your Favorite" data={productData} />
    </Router>
  );
}

export default App;
