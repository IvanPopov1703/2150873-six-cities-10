import {StateType} from '../../types/state';
import {NameSpace} from '../../const';

export const getActiveCity = (state: StateType): string => state[NameSpace.App].activeCity;
export const getActiveSortType = (state: StateType): string => state[NameSpace.App].activeSortOption;
