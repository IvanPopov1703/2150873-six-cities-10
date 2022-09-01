import {StateType} from '../../types/state';
import {UserType} from '../../types/user';
import {AuthorizationStatus, NameSpace} from '../../const';

export const getUser = (state: StateType): UserType | null => state[NameSpace.User].user;
export const getAuthorizationStatus = (state: StateType): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
