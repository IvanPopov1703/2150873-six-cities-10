import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {offers} from './moks/offers';
import {reviews} from './moks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const FoundNumOfAccommodationOptions = {
  NUMBER_OF_OFFERS_FOUND: 4,
};

root.render(
  <React.StrictMode>
    <App
      offers={offers}
      reviews={reviews}
      numberOfOffersFound={FoundNumOfAccommodationOptions.NUMBER_OF_OFFERS_FOUND}
    />
  </React.StrictMode>,
);
