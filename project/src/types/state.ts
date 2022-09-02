import {store} from '../store';
import {AuthorizationStatus, SortOption} from '../const';
import {UserType} from './user';
import {OffersType, OfferType} from './offers';
import {ReviewsType} from './reviews';

export type UserProcessType = {
  authorizationStatus: AuthorizationStatus,
  user: UserType | null,
};

export type AppProcessType = {
  activeCity: string,
  activeSortOption: SortOption,
};

export type DataProcessType = {
  offers: OffersType,
  reviews: ReviewsType,
  favorites: OffersType,
  neighbourhood: OffersType,
  activeOffer: OfferType | null,
  isDataLoading: boolean,
  isFavoriteLoading: boolean,
  isOfferLoading: boolean,
};

export type StateType = ReturnType<typeof store.getState>;

export type AppDispatchType = typeof store.dispatch;
