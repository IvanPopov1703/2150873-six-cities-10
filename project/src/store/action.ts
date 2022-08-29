import {createAction} from '@reduxjs/toolkit';

export const changeActiveCity = createAction('changeActiveCity', (city) => ({
  payload: city
}));

export const changeActiveSortType = createAction('changeActiveSortType', (option) => ({
  payload: option
}));
