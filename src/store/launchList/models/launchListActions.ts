import {
  FILTERS_BY_OLDEST,
  FILTERS_BY_LATEST,
  FILTERS_BY_SUCCESS,
  FILTERS_BY_FAILED,
  ADD_UPCOMINGS,
  ADD_COMPLETED,
  REMOVE_FILTERS
} from '../types';
import { ILaunchData } from '.';

export interface IFiltersByOldest {
  type: typeof FILTERS_BY_OLDEST;
}

export interface IFiltersByLatest {
  type: typeof FILTERS_BY_LATEST;
}

export interface IFiltersBySuccess {
  type: typeof FILTERS_BY_SUCCESS;
}

export interface IFiltersByFailed {
  type: typeof FILTERS_BY_FAILED;
}

export interface IAddUpcomings {
  type: typeof ADD_UPCOMINGS;
  payload: ILaunchData
}

export interface IAddCompleted {
  type: typeof ADD_COMPLETED;
  payload: ILaunchData
}

export interface IRemoveFilters {
  type: typeof REMOVE_FILTERS
}

export type LaunchListActionTypes =
  | IFiltersByFailed
  | IFiltersByLatest
  | IFiltersBySuccess
  | IFiltersByOldest
  | IAddUpcomings
  | IAddCompleted
  | IRemoveFilters
