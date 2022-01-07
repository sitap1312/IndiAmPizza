import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import { productData, productData2 } from './components/Products/data';
import Feature from './components/Feature/Feature';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your Favorite" data={productData} />
      <Feature />
      <Products heading="Sweet Treat for You" data={productData2} />
      <Footer />
    </Router>
  );
}

export default App;
