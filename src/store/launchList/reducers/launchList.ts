import {ILaunchListState, LaunchListActionTypes} from '../models';
import {
  FILTERS_BY_OLDEST,
  ADD_UPCOMINGS,
  ADD_COMPLETED,
  FILTERS_BY_LATEST,
  FILTERS_BY_SUCCESS,
  FILTERS_BY_FAILED,
  REMOVE_FILTERS,
} from '../types';

const initialState: ILaunchListState = {
  completed: [],
  upcomings: [],
  filteredCompleted: [],
  filteredUpcomings: [],
  byDate: false,
  byStatus: false,
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
        filteredUpcomings: action.payload
      };
    case ADD_COMPLETED:
      return {
        ...state,
        completed: action.payload,
        filteredCompleted: action.payload,
      };
    case FILTERS_BY_LATEST:
      return {
        ...state,
        filteredCompleted: [...state.filteredCompleted!].sort(
          (a, b) => b.launch_date_unix - a.launch_date_unix,
        ),
        filteredUpcomings: [...state.filteredUpcomings!].sort(
          (a, b) => b.launch_date_unix - a.launch_date_unix,
        ),
        byDate: true,
      };
    case FILTERS_BY_OLDEST:
      return {
        ...state,
        filteredCompleted: [...state.filteredCompleted!].sort(
          (a, b) => a.launch_date_unix - b.launch_date_unix,
        ),
        filteredUpcomings: [...state.filteredUpcomings!].sort(
          (a, b) => a.launch_date_unix - b.launch_date_unix,
        ),
        byDate: true,
      };
    case FILTERS_BY_SUCCESS:
      return {
        ...state,
        filteredCompleted: [...state.completed!].filter(
          s => s.launch_success !== false,
        ),
        byStatus: true,
      };
    case FILTERS_BY_FAILED:
      return {
        ...state,
        filteredCompleted: [...state.completed!].filter(
          s => s.launch_success !== true || null,
        ),
      };
    case REMOVE_FILTERS:
      return {
        ...state,
        filteredCompleted: state.completed,
        filteredUpcomings: state.upcomings,
        byDate: false,
        byStatus: false
      }

    default:
      return state;
  }
};
