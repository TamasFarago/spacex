import { ADD_UPCOMINGS } from "../types"
import { ILaunchData } from "../models"

export const addUpcomings = (launchList: ILaunchData) => ({
    type: ADD_UPCOMINGS,
    payload: launchList
})