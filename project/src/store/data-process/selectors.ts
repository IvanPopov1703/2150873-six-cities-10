import {NameSpace} from '../../const';
import {StateType} from '../../types/state';
import {OffersType, OfferType} from '../../types/offers';
import {ReviewsType} from '../../types/reviews';

export const getOffers = (state: StateType): OffersType => state[NameSpace.Data].offers;
export const getActiveOffer = (state: StateType): OfferType | null => state[NameSpace.Data].activeOffer;
export const getReviews = (state: StateType): ReviewsType => state[NameSpace.Data].reviews;
export const getFavorites = (state: StateType): OffersType => state[NameSpace.Data].favorites;
export const getNeighbourhood = (state: StateType): OffersType => state[NameSpace.Data].neighbourhood;
export const getIsFavoriteLoading = (state: StateType): boolean => state[NameSpace.Data].isFavoriteLoading;
export const getIsDataLoading = (state: StateType): boolean => state[NameSpace.Data].isDataLoading;
export const getIsOfferLoading = (state: StateType): boolean => state[NameSpace.Data].isOfferLoading;
