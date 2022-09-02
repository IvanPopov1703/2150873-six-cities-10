import {CITIES, NameSpace, SortOption} from '../../const';
import {createSlice} from '@reduxjs/toolkit';
import {AppProcessType} from '../../types/state';

const initialState: AppProcessType = {
  activeCity: CITIES[0],
  activeSortOption: SortOption.Popular,
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeActiveCity: (state, action) => {
      state.activeCity = action.payload;
    },
    changeActiveSortType: (state, action) => {
      state.activeSortOption = action.payload;
    }
  },
});

export const {
  changeActiveCity,
  changeActiveSortType,
} = appProcess.actions;
