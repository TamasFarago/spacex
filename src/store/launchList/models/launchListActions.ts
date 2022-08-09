import {ADD_UPCOMINGS, ADD_COMPLETED} from '../types';
import {ILaunchData} from '.';

export interface IAddUpcomings {
  type: typeof ADD_UPCOMINGS;
  payload: ILaunchData;
}

export interface IAddCompleted {
  type: typeof ADD_COMPLETED;
  payload: ILaunchData;
}

export type LaunchListActionTypes = IAddUpcomings | IAddCompleted;
