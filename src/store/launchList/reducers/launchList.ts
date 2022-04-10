import {ILaunchListState, LaunchListActionTypes} from '../models';
import {FILTERS_BY_OLDEST, ADD_UPCOMINGS, ADD_COMPLETED} from '../types';

const initialState: ILaunchListState = {
  completed: null,
  upcomings: null,
  filteredData: null,
};

export default (
  state: ILaunchListState = initialState,
  action: LaunchListActionTypes,
) => {
  switch (action.type) {
    case ADD_UPCOMINGS:
      return {
        upcomings: action.payload,
      };
    case ADD_COMPLETED:
      return {
        completed: action.payload
      }
    default:
      return state;
  }
};
