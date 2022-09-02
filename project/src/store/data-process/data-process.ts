import {DataProcessType} from '../../types/state';
import {NameSpace} from '../../const';
import {createSlice} from '@reduxjs/toolkit';
import {
  changeFavoriteStatusAction,
  fetchActiveOfferAction,
  fetchFavoritesAction,
  fetchNeighbourhoodAction,
  fetchOffersAction,
  fetchReviewsAction, logoutAction, postReviewAction
} from '../api-actions';

const initialState: DataProcessType = {
  offers: [],
  reviews: [],
  favorites: [],
  neighbourhood: [],
  activeOffer: null,
  isDataLoading: false,
  isFavoriteLoading: false,
  isOfferLoading: false,
};

export const dataProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isDataLoading = false;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.isFavoriteLoading = true;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.isFavoriteLoading = false;
      })
      .addCase(fetchNeighbourhoodAction.fulfilled, (state, action) => {
        state.neighbourhood = action.payload;
      })
      .addCase(fetchActiveOfferAction.pending, (state) => {
        state.isOfferLoading = true;
      })
      .addCase(fetchActiveOfferAction.fulfilled, (state, action) => {
        state.activeOffer = action.payload;
        state.isOfferLoading = false;
      })
      .addCase(postReviewAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(changeFavoriteStatusAction.fulfilled, (state, action) => {
        const updatedOffer = action.payload;
        const index = state.offers.findIndex((offer) => offer.id === updatedOffer.id);
        state.offers[index].isFavorite = !state.offers[index].isFavorite;
        state.neighbourhood.forEach((offer) => {
          if (offer.id === updatedOffer.id) {
            offer.isFavorite = !offer.isFavorite;
          }
        });
        if (state.activeOffer && state.activeOffer.id === updatedOffer.id) {
          state.activeOffer.isFavorite = !state.activeOffer.isFavorite;
        }
        if (updatedOffer.isFavorite) {
          state.favorites = [...state.favorites, updatedOffer];
        } else {
          state.favorites = state.favorites.filter((item) => item.id !== updatedOffer.id);
        }
      })
      .addCase(logoutAction.fulfilled, (state) => {
        if (state.activeOffer && state.activeOffer.isFavorite) {
          state.activeOffer.isFavorite = false;
        }
        if (state.offers) {
          state.offers.forEach((offer) => {
            offer.isFavorite = false;
          });
        }
        if (state.neighbourhood) {
          state.neighbourhood.forEach((offer) => {
            offer.isFavorite = false;
          });
        }
        state.favorites = [];
      });
  }
});
