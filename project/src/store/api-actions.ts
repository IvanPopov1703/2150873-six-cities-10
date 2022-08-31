import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatchType, StateType} from '../types/state';
import {AxiosInstance} from 'axios';
import {
  loadActiveOffer,
  loadNeighbourhood,
  loadOffers,
  loadReviews,
  redirectToRoute,
  requireAuthorization,
  setDataLoadingStatus,
  setOfferLoadingStatus,
  setUser
} from './action';
import {OffersType, OfferType} from '../types/offers';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const';
import {dropToken, saveToken} from '../services/token';
import {AuthDataType} from '../types/auth-data';
import {UserType} from '../types/user';
import {ReviewDataType, ReviewsType} from '../types/reviews';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstance
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<OffersType>(APIRoute.Offers);
    dispatch(setDataLoadingStatus(true));
    dispatch(loadOffers(data));
    dispatch(setDataLoadingStatus(false));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get(APIRoute.Login);
      dispatch(setUser(data));
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(setUser(null));
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);

export const loginAction = createAsyncThunk<void, AuthDataType, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstance
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserType>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(setUser(data));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const fetchNeighbourhoodAction = createAsyncThunk<void, number, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstance
}>(
  'data/fetchNeighbourhood',
  async (offerID, {dispatch, extra: api}) => {
    const {data} = await api.get<OffersType>(`${APIRoute.Offers}/${offerID}${APIRoute.Nearby}`);
    dispatch(loadNeighbourhood(data));
  }
);

export const fetchReviewsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstance
}>(
  'data/fetchReviews',
  async (offerID, {dispatch, extra: api}) => {
    const {data} = await api.get<ReviewsType>(`${APIRoute.Reviews}/${offerID}`);
    dispatch(loadReviews(data));
  }
);

export const fetchActiveOfferAction = createAsyncThunk<void, number, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstance
}>(
  'data/fetchActiveOffer',
  async (offerID, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<OfferType>(`${APIRoute.Offers}/${offerID}`);
      dispatch(setOfferLoadingStatus(true));
      dispatch(loadActiveOffer(data));
      dispatch(setOfferLoadingStatus(false));
    } catch {
      dispatch(redirectToRoute(AppRoute.NotFound));
      throw new Error();
    }
  },
);

export const postReviewAction = createAsyncThunk<void, ReviewDataType, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstance
}>(
  'data/postReview',
  async ({id, rating, comment}, {dispatch, extra: api}) => {
    const {data} = await api.post<ReviewsType>(`${APIRoute.Reviews}/${id}`, {comment, rating});
    dispatch(loadReviews(data));
  },
);
