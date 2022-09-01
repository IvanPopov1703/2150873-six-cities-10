import {NameSpace} from '../const';
import {combineReducers} from '@reduxjs/toolkit';
import {appProcess} from './app-process/app-process';
import {userProcess} from './user-process/user-process';
import {dataProcess} from './data-process/data-process';

export const rootReducer = combineReducers({
  [NameSpace.Data]: dataProcess.reducer,
  [NameSpace.App]: appProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});
