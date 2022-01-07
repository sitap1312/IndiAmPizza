import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Pizza of the Day!</h1>
      <h1>Stuffed Crust Veggie Pizza</h1>
      <p>Marinara Sauce, stuffed with extra Cheese, topped with 10 veggies, Cheese and more Cheese. </p>
      <br />
      <FeatureButton>Order Now!</FeatureButton>
    </FeatureContainer>
  )
};

export default Feature;
