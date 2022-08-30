import {createAction} from '@reduxjs/toolkit';
import {OffersType} from '../types/offers';
import {AuthorizationStatus} from '../const';
import {UserType} from '../types/user';

export const changeActiveCity = createAction<string>('changeActiveCity');

export const changeActiveSortType = createAction('changeActiveSortType', (option) => ({
  payload: option
}));

export const loadOffers = createAction<OffersType>('loadOffers');

export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');

export const setOfferLoadingStatus = createAction<boolean>('setOfferLoadingStatus');

export const setUser = createAction<UserType | null>('setUser');
