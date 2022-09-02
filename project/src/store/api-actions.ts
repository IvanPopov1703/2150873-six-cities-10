import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatchType, StateType} from '../types/state';
import {AxiosInstance} from 'axios';
import {redirectToRoute} from './action';
import {FavoriteDataType, OffersType, OfferType} from '../types/offers';
import {APIRoute, AppRoute} from '../const';
import {dropToken, saveToken} from '../services/token';
import {AuthDataType} from '../types/auth-data';
import {UserType} from '../types/user';
import {ReviewDataType, ReviewsType} from '../types/reviews';

export const fetchOffersAction = createAsyncThunk<OffersType, undefined, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstance
}>(
  'data/fetchOffers',
  async (_arg, { extra: api}) => {
    const {data} = await api.get<OffersType>(APIRoute.Offers);
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<UserType, undefined, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    const { data } = await api.get<UserType>(APIRoute.Login);
    dispatch(fetchFavoritesAction());
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, { extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);

export const loginAction = createAsyncThunk<UserType, AuthDataType, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstance
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserType>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(redirectToRoute(AppRoute.Main));
    return data;
  },
);

export const fetchNeighbourhoodAction = createAsyncThunk<OffersType, number, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstance
}>(
  'data/fetchNeighbourhood',
  async (offerId, { extra: api}) => {
    const {data} = await api.get<OffersType>(`${APIRoute.Offers}/${offerId}${APIRoute.Nearby}`);
    return data;
  }
);

export const fetchReviewsAction = createAsyncThunk<ReviewsType, number, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstance
}>(
  'data/fetchReviews',
  async (offerId, { extra: api}) => {
    const {data} = await api.get<ReviewsType>(`${APIRoute.Reviews}/${offerId}`);
    return data;
  }
);

export const fetchActiveOfferAction = createAsyncThunk<OfferType, number, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstance
}>(
  'data/fetchActiveOffer',
  async (offerId, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<OfferType>(`${APIRoute.Offers}/${offerId}`);
      return data;
    } catch {
      dispatch(redirectToRoute(AppRoute.NotFound));
      throw new Error();
    }
  },
);

export const postReviewAction = createAsyncThunk<ReviewsType, ReviewDataType, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstance
}>(
  'data/postReview',
  async ({id, rating, comment}, { extra: api}) => {
    const {data} = await api.post<ReviewsType>(`${APIRoute.Reviews}/${id}`, {comment, rating});
    return data;
  },
);

export const fetchFavoritesAction = createAsyncThunk<OffersType, undefined, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstance
}>(
  'data/fetchFavorites',
  async (_arg, { extra: api}) => {
    const {data} = await api.get<OffersType>(APIRoute.Favorites);
    return data;
  }
);

export const changeFavoriteStatusAction = createAsyncThunk<OfferType, FavoriteDataType, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstance
}>(
  'data/changeFavoriteStatus',
  async ({id, status}, { extra: api}) => {
    const {data} = await api.post<OfferType>(`${APIRoute.Favorites}/${id}/${status}`);
    return data;
  },
);
