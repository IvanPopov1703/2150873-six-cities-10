import {createReducer} from '@reduxjs/toolkit';
import {
  changeActiveCity,
  changeActiveSortType,
  loadOffers,
  requireAuthorization,
  setOfferLoadingStatus,
  setUser
} from './action';
import {AuthorizationStatus, CITIES, SortOption} from '../const';
import {OffersType} from '../types/offers';
import {ReviewsType} from '../types/reviews';
import {UserType} from '../types/user';

type InitialStateType = {
  offers: OffersType,
  reviews: ReviewsType,
  favorites: OffersType,
  activeCity: string,
  user: UserType | null,
  isOfferLoading: boolean,
  activeSortOption: SortOption,
  authorizationStatus: AuthorizationStatus,
}

const initialState : InitialStateType = {
  offers: [],
  reviews: [],
  favorites: [],
  activeCity: CITIES[0],
  user: null,
  isOfferLoading: false,
  activeSortOption: SortOption.Popular,
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeActiveCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(changeActiveSortType, (state, action) => {
      state.activeSortOption = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setOfferLoadingStatus, (state, action) => {
      state.isOfferLoading = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    });
});
