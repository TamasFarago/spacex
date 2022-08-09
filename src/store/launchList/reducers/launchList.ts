import {ILaunchListState, LaunchListActionTypes} from '../models';
import {ADD_UPCOMINGS, ADD_COMPLETED} from '../types';

const initialState: ILaunchListState = {
  completed: [],
  upcomings: [],
};

export default (
  state: ILaunchListState = initialState,
  action: LaunchListActionTypes,
) => {
  switch (action.type) {
    case ADD_UPCOMINGS:
      return {
        ...state,
        upcomings: action.payload,
        filteredUpcomings: action.payload,
      };
    case ADD_COMPLETED:
      return {
        ...state,
        completed: action.payload,
        filteredCompleted: action.payload,
      };
    default:
      return state;
  }
};
