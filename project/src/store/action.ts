import {createAction} from '@reduxjs/toolkit';
import {OffersType, OfferType} from '../types/offers';
import {AppRoute, AuthorizationStatus} from '../const';
import {UserType} from '../types/user';
import {ReviewsType} from '../types/reviews';

export const changeActiveCity = createAction<string>('changeActiveCity');

export const changeActiveSortType = createAction('changeActiveSortType', (option) => ({
  payload: option
}));

export const loadOffers = createAction<OffersType>('loadOffers');

export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');

export const setDataLoadingStatus = createAction<boolean>('setDataLoadingStatus');

export const setUser = createAction<UserType | null>('setUser');

export const loadReviews = createAction<ReviewsType>('loadReviews');

export const loadNeighbourhood = createAction<OffersType>('loadNeighbourhood');

export const loadFavorites = createAction<OffersType>('loadFavorites');

export const loadActiveOffer = createAction<OfferType>('loadActiveOffer');

export const setOfferLoadingStatus = createAction<boolean>('setOfferLoadingStatus');

export const setFavoriteLoadingStatus = createAction<boolean>('setFavoriteLoadingStatus');

export const redirectToRoute = createAction<AppRoute>('redirectToRoute');

export const changeFavoriteStatus = createAction<OfferType>('changeFavoriteStatus');
