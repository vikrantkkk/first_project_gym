import React from 'react';
import './pricing.css'
import { Link } from 'react-router-dom';
const PricingSection = () => {
  const pricingData = [
    {
      type: 'Basic',
      price: 29.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      type: 'Pro',
      price: 49.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      type: 'Premium',
      price: 99.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  return (
    <div className="container_pricing">
      {pricingData.map((pricing) => (
        <div className="pricing_box" key={pricing.type}>
          <div className="inner1_pricing">
            <h3>{pricing.type}</h3>
            <div className="price">${pricing.price}/mo</div>
            <p>{pricing.description}</p>
            <button className="button_pricing"><Link to='/login'>Select Plan</Link></button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingSection;