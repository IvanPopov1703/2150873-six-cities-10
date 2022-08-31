import {createReducer} from '@reduxjs/toolkit';
import {
  changeActiveCity,
  changeActiveSortType, loadActiveOffer, loadFavorites, loadNeighbourhood,
  loadOffers, loadReviews,
  requireAuthorization,
  setDataLoadingStatus, setOfferLoadingStatus,
  setUser
} from './action';
import {AuthorizationStatus, CITIES, SortOption} from '../const';
import {OffersType, OfferType} from '../types/offers';
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
  neighbourhood: OffersType,
  activeOffer: OfferType | null,
  isDataLoading: boolean,
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
  neighbourhood: [],
  activeOffer: null,
  isDataLoading: false,
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
    .addCase(setDataLoadingStatus, (state, action) => {
      state.isDataLoading = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(loadNeighbourhood, (state, action) => {
      state.neighbourhood = action.payload;
    })
    .addCase(loadFavorites, (state, action) => {
      state.favorites = action.payload;
    })
    .addCase(setOfferLoadingStatus, (state, action) => {
      state.isOfferLoading = action.payload;
    })
    .addCase(loadActiveOffer, (state, action) => {
      state.activeOffer = action.payload;
    });
});
