import {createReducer} from '@reduxjs/toolkit';
import {changeActiveCity} from './action';
import {CITIES} from '../const';
import {offers} from '../moks/offers';
import {reviews} from '../moks/reviews';
import {user} from '../moks/user';

const initialState = {
  allOffers: offers,
  offers: offers.filter((item) => item.city.name === CITIES[0]),
  reviews: reviews,
  user: user,
  activeCity: CITIES[0],
  numberOfOffersFound: offers.filter((item) => item.city.name === CITIES[0]).length
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeActiveCity, (state, action) => {
      state.activeCity = action.payload;
      state.offers = initialState.allOffers.filter((item) => item.city.name === action.payload);
      state.numberOfOffersFound = state.offers.length;
    });
});
