import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {AppDispatchType, StateType} from '../types/state';

export const useAppDispatch = () => useDispatch<AppDispatchType>();

export const useAppSelector: TypedUseSelectorHook<StateType> = useSelector;
